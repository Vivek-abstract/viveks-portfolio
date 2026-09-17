import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Let’s talk engineering.</h2>
            <a className={styles.email} href="mailto:vivekbgawande@gmail.com">
              vivekbgawande@gmail.com <span aria-hidden="true">↗</span>
            </a>
          </div>
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
          <span>Senior Software Engineer</span>
        </div>
      </div>
    </footer>
  );
}
