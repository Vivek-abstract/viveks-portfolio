'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './NavBar.module.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar sticky-top navbar-expand-lg ${styles.nav}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand me-auto ${styles.brand}`} href="/">
          Vivek Gawande
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <Link
                  className={`nav-link ${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-lg-2">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
