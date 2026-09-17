"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MotionControls from "../MotionControls/MotionControls";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./NavBar.module.css";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={`container ${styles.inner}`}>
        <Link
          className={styles.brand}
          href="/"
          onClick={() => setIsOpen(false)}
          aria-label="Vivek Gawande, home"
        >
          vg<span>.</span>
        </Link>
        <div className={styles.controls}>
          <MotionControls />
          <ThemeToggle />
          <button
            className={styles.menuButton}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="main-links"
            aria-expanded={isOpen}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
        <div
          id="main-links"
          className={`${styles.links} ${isOpen ? styles.open : ""}`}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/blog", label: "Writing" },
            { href: "/about", label: "About" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${(href === "/" ? pathname === "/" : pathname.startsWith(href)) ? styles.active : ""}`}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a className={styles.contact} href="mailto:vivekbgawande@gmail.com">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
