import styles from "./ExperienceCard.module.css";
export default function ExperienceCard({
  company,
  role,
  client,
  period,
  highlights,
  techStack,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.employer}>
        <p className={styles.period}>{period}</p>
        <h3>{company}</h3>
        <p className={styles.client}>{client}</p>
      </div>
      <div className={styles.details}>
        <h4 className={styles.role}>{role}</h4>
        <ul className={styles.highlights}>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className={styles.stack}>
          {techStack.map((tech) => (
            <span key={tech} className={styles.pill}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
