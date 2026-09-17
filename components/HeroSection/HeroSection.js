"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import { getYearsOfExperience } from "../../lib/utils";

export default function HeroSection() {
  const hero = useRef(null);
  useEffect(() => {
    const element = hero.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
      element.style.setProperty("--spot-x", "70%");
      element.style.setProperty("--spot-y", "40%");
    };
    const move = (event) => {
      if (
        reduce.matches ||
        !fine.matches ||
        document.documentElement.dataset.motion === "paused"
      )
        return;
      const box = element.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width;
      const y = (event.clientY - box.top) / box.height;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.setProperty("--tilt-x", `${(0.5 - y) * 7}deg`);
        element.style.setProperty("--tilt-y", `${(x - 0.5) * 9}deg`);
        element.style.setProperty("--spot-x", `${x * 100}%`);
        element.style.setProperty("--spot-y", `${y * 100}%`);
      });
    };
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", reset);
    window.addEventListener("portfolio-motion-change", reset);
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
      window.removeEventListener("portfolio-motion-change", reset);
    };
  }, []);
  return (
    <section ref={hero} className={styles.hero} aria-labelledby="intro-title">
      <div className={styles.grid} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.overline}>
          <p className="eyebrow">
            Vivek Gawande <span>/</span> Senior Software Engineer
          </p>
          <span className={styles.index}>PORTFOLIO — 01</span>
        </div>
        <div className={styles.layout}>
          <div className={styles.text}>
            <h1 id="intro-title" className={styles.headline}>
              <span>I build</span>
              <span className={styles.outline}>complex</span>
              <span className={styles.lastLine}>
                systems<span className={styles.dot}>.</span>
              </span>
            </h1>
            <div className={styles.intro}>
              <span className={styles.bracket} aria-hidden="true">
                ↳
              </span>
              <p>
                And make them work for people.
                <br />
                <span>
                  Full-stack .NET engineering across healthcare and finance.
                </span>
              </p>
            </div>
            <div className={styles.actions}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                View resume <span aria-hidden="true">↗</span>
              </a>
              <a href="#experience" className={styles.secondary}>
                Explore the work <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <aside className={styles.profile} aria-label="About Vivek">
            <div className={styles.profileCard}>
              <div className={styles.cardHeader}>
                <span>THE ENGINEER</span>
                <span aria-hidden="true">[ VG ]</span>
              </div>
              <div className={styles.photoFrame}>
                <Image
                  src="/vivek_profile_photo.jpg"
                  alt="Vivek Gawande"
                  width={480}
                  height={540}
                  className={styles.photo}
                  priority
                />
                <span className={styles.photoLabel}>
                  VIVEK
                  <br />
                  GAWANDE
                </span>
              </div>
              <div className={styles.cardFooter}>
                <div>
                  <strong>Wipro</strong>
                  <span>Optum / UnitedHealth Group</span>
                </div>
                <span className={styles.star} aria-hidden="true">
                  ✳
                </span>
              </div>
            </div>
            <div className={styles.experienceBadge}>
              <strong>{String(getYearsOfExperience()).padStart(2, "0")}</strong>
              <span>
                YEARS OF
                <br />
                BUILDING
              </span>
            </div>
            <div
              className={styles.system}
              aria-label="Full-stack: interface, API, data"
            >
              <span>INTERFACE</span>
              <i aria-hidden="true" />
              <span>API</span>
              <i aria-hidden="true" />
              <span>DATA</span>
            </div>
          </aside>
        </div>
        <div className={styles.bottom}>
          <span className="eyebrow">From the interface to the database.</span>
          <a href="#experience">
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div className={styles.toolkit}>
        <div className={`container ${styles.toolkitInner}`}>
          <span className={styles.toolkitLabel}>BUILT WITH</span>
          <p>
            C# <span aria-hidden="true">✳</span> .NET{" "}
            <span aria-hidden="true">✳</span> SQL Server{" "}
            <span aria-hidden="true">✳</span> EF Core{" "}
            <span aria-hidden="true">✳</span> Vue{" "}
            <span aria-hidden="true">✳</span> Angular
          </p>
        </div>
      </div>
    </section>
  );
}
