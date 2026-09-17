"use client";
import { useEffect, useRef } from "react";
export default function ScrollReveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  stagger = 0,
  staggerIndex = 0,
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    let animation;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);
        if (
          matchMedia("(prefers-reduced-motion: reduce)").matches ||
          document.documentElement.dataset.motion === "paused"
        )
          return;
        animation = el.animate(
          [
            { opacity: 0.25, transform: "translateY(24px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 650,
            delay: Math.min(delay + stagger * staggerIndex, 240),
            easing: "cubic-bezier(.16,1,.3,1)",
            fill: "backwards",
          },
        );
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      animation?.cancel();
    };
  }, [delay, stagger, staggerIndex]);
  return (
    <Tag ref={ref} data-reveal="true" className={className}>
      {children}
    </Tag>
  );
}
