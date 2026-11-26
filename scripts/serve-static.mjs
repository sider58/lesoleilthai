import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

// Aperçu local de l'export réellement déployé (pnpm build au préalable).
const root = path.resolve("out");
const port = Number(process.env.PORT ?? 3000);
const types = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".json": "application/json",
  ".webp": "image/webp", ".png": "image/png", ".svg": "image/svg+xml",
  ".ico": "image/x-icon", ".woff2": "font/woff2", ".txt": "text/plain; charset=utf-8",
};

await stat(path.join(root, "index.html")).catch(() => {
  throw new Error("Export absent. Exécuter pnpm build avant pnpm start.");
});

createServer(async (request, response) => {
  try {
    if (!["GET", "HEAD"].includes(request.method)) {
      response.writeHead(405, { Allow: "GET, HEAD" }).end();
      return;
    }
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    let filename = path.resolve(root, `.${pathname}`);
    if (filename !== root && !filename.startsWith(`${root}${path.sep}`)) {
      response.writeHead(403).end();
      return;
    }
    let status = 200;
    try {
      if ((await stat(filename)).isDirectory()) filename = path.join(filename, "index.html");
      await stat(filename);
    } catch {
      filename = path.join(root, "404.html");
      status = 404;
    }
    const content = await readFile(filename);
    const immutable = status === 200 && (/^\/fonts\/.+\.[a-f0-9]{12}\.woff2$/.test(pathname)
      || pathname.startsWith("/_next/static/"));
    response.writeHead(status, {
      "Content-Type": types[path.extname(filename)] ?? "application/octet-stream",
      "Content-Length": content.length,
      "Cache-Control": immutable ? "public, max-age=31536000, immutable" : "public, max-age=0, must-revalidate",
    });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch {
    response.writeHead(400).end("Bad request");
  }
}).listen(port, "127.0.0.1", () => console.log(`Local: http://localhost:${port}`));
