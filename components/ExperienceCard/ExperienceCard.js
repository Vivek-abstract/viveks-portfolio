import styles from "./ExperienceCard.module.css";
export default function ExperienceCard({
  company,
  role,
  client,
  period,
  highlights,
  techStack,
  index,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <span className={styles.number}>/{String(index).padStart(2, "0")}</span>
        <p className={styles.period}>{period}</p>
      </div>
      <h3 className={styles.company}>{company}</h3>
      <p className={styles.client}>{client}</p>
      <h4 className={styles.role}>{role}</h4>
      <ul className={styles.highlights}>
        {highlights.slice(0, 2).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {highlights.length > 2 && (
        <details className={styles.more}>
          <summary>
            More about this role <span aria-hidden="true">+</span>
          </summary>
          <ul className={styles.highlights}>
            {highlights.slice(2).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      )}
      <div className={styles.stack}>
        {techStack.map((tech) => (
          <span key={tech} className={styles.pill}>
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
