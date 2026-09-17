"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./MotionControls.module.css";
export default function MotionControls() {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const progress = useRef(null);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      let stored = false;
      try {
        stored = localStorage.getItem("portfolio-motion") === "paused";
      } catch {}
      const stop = media.matches || stored;
      setReduced(media.matches);
      setPaused(stop);
      document.documentElement.dataset.motion = stop ? "paused" : "running";
      if (stop)
        document.getAnimations().forEach((animation) => {
          if (
            animation.effect instanceof KeyframeEffect &&
            animation.effect.target?.dataset.reveal
          )
            animation.cancel();
        });
      window.dispatchEvent(new Event("portfolio-motion-change"));
    };
    sync();
    media.addEventListener("change", sync);
    let frame = 0;
    const draw = () => {
      frame = 0;
      const h = document.documentElement.scrollHeight - innerHeight;
      if (progress.current)
        progress.current.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    draw();
    return () => {
      cancelAnimationFrame(frame);
      media.removeEventListener("change", sync);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
    };
  }, []);
  function toggle() {
    const stop = !paused;
    setPaused(stop);
    document.documentElement.dataset.motion = stop ? "paused" : "running";
    try {
      localStorage.setItem("portfolio-motion", stop ? "paused" : "running");
    } catch {}
    if (stop)
      document.getAnimations().forEach((animation) => {
        if (
          animation.effect instanceof KeyframeEffect &&
          animation.effect.target?.dataset.reveal
        )
          animation.cancel();
      });
    window.dispatchEvent(new Event("portfolio-motion-change"));
  }
  return (
    <>
      <div ref={progress} className={styles.progress} aria-hidden="true" />
      <button
        className={styles.toggle}
        onClick={toggle}
        disabled={reduced}
        aria-label={
          reduced
            ? "Animations disabled by system preference"
            : paused
              ? "Resume animations"
              : "Pause animations"
        }
        title={
          reduced
            ? "Reduced motion enabled"
            : paused
              ? "Resume animations"
              : "Pause animations"
        }
      >
        <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
      </button>
    </>
  );
}
