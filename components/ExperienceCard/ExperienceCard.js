import styles from './ExperienceCard.module.css';

export default function ExperienceCard({ company, role, client, period, highlights, techStack }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.role}>{role}</h3>
        <span className={styles.period}>{period}</span>
      </div>
      <p className={styles.company}>
        {company}
        {client && <span className={styles.client}> &middot; Client: {client}</span>}
      </p>
      <ul className={styles.highlights}>
        {highlights.map((item, i) => (
          <li key={i} className={styles.highlight}>{item}</li>
        ))}
      </ul>
      <div className={styles.stack}>
        {techStack.map((tech) => (
          <span key={tech} className={styles.pill}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
