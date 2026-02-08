import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container text-center">
        <div className={styles.links}>
          <a href="https://github.com/Vivek-abstract" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/vivekbgawande/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
            <span>LinkedIn</span>
          </a>
          <a href="https://bit.ly/ViveksResume" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FontAwesomeIcon icon={faFileLines} size="lg" />
            <span>Resume</span>
          </a>
        </div>
        <p className={styles.copyright}>&copy; {year} Vivek Gawande</p>
      </div>
    </footer>
  );
}
