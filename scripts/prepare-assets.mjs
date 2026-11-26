import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

// Sharp est déjà installé par Next.js. Les originaux restent hors du dossier public.
const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next/package.json"))("sharp");
const sourceRoot = path.resolve("assets/original-images");
const outputRoot = path.resolve("public/images");
const maxWidths = {
  "le-soleil-thai-logo-transparent": 160,
  "le-soleil-thai-logo-sans-cercle": 960,
  "frangipani-realiste": 560,
  "frangipanier-trois-feuilles": 420,
  "orchidees-realistes": 320,
  "orchidees-blanches-dorees": 420,
  "formules-gauche": 560,
  "formules-droite": 560,
  "frangipani-ornements": 800,
  "orchidees-ornements": 960,
  "lotus-rose-dore": 1040,
};

await mkdir(outputRoot, { recursive: true });
let count = 0;
let totalBytes = 0;

for (const name of (await readdir(sourceRoot)).sort()) {
  if (!/\.(png|jpe?g)$/i.test(name)) continue;
  const stem = name.replace(/\.(png|jpe?g)$/i, "");
  const input = path.join(sourceRoot, name);
  const isPhoto = stem.startsWith("massage-");
  const width = isPhoto ? 420 : (maxWidths[stem] ?? 1200);
  const result = await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: stem.includes("logo") ? 82 : 72, alphaQuality: 90, effort: 5 })
    .toFile(path.join(outputRoot, `${stem}.webp`));
  count += 1;
  totalBytes += result.size;
}

console.log(`Images : ${count} WebP dans public/images (${Math.round(totalBytes / 1000)} Ko au total).`);
