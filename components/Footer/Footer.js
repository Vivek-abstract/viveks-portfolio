import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.overline}>
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <span aria-hidden="true">✳</span>
        </div>
        <a className={styles.headline} href="mailto:vivekbgawande@gmail.com">
          Let’s talk<span aria-hidden="true">↗</span>
        </a>
        <div className={styles.contact}>
          <a href="mailto:vivekbgawande@gmail.com">vivekbgawande@gmail.com</a>
          <div className={styles.links}>
            <a
              href="https://github.com/Vivek-abstract"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/vivekbgawande/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume ↗
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Vivek Gawande</span>
          <span>THOUGHTFULLY ENGINEERED.</span>
        </div>
      </div>
    </footer>
  );
}
