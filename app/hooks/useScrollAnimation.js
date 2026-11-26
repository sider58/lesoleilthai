"use client"

import { useEffect, useRef } from "react";

// Hook qui va nous permettre d'observer les élements cachés et de leurs permettrent d'apparaître selon leurs styles
export default function useScrollAnimation({
  selector = ".scroll-fade-transition",
  threshold = 0.45,
  root = null,
  rootMargin = "0px",
} = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ref de l'élement parent de ceux qu'on souhaitent affiché (ou l'element lui-même)
    const container = containerRef.current;

    if (!container) return;

    const elements = container.matches(selector)
      ? [container, ...container.querySelectorAll(selector)]
      : container.querySelectorAll(selector);

    if (!elements.length) return;

    // Si l'instance n'est pas reconnu, on affiche tous les élements
    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    // Cette instance va nous permettre de savoir quand nos élements sont reconnus dans la fenêtre
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // On s'arrure de la bonne reconnaissance de l'element dans la fenêtre
          if (!entry.isIntersecting || entry.intersectionRatio < threshold) return;

          // Dès lors on ajoute aux élements la classe qui fera la transition
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold, root, rootMargin },
    );

    // Execution
    elements.forEach((element) => observer.observe(element));

    // Clean up
    return () => observer.disconnect();
  }, [selector, threshold, root, rootMargin]);

  return containerRef;
}
