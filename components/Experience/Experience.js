import { experiences } from "../../lib/experience-data";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./Experience.module.css";
export default function Experience() {
  return (
    <section
      className={`section-alt ${styles.section}`}
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className={`container ${styles.layout}`}>
        <div className={styles.heading}>
          <p className="eyebrow">
            <span className={styles.cross} aria-hidden="true">
              ✳
            </span>{" "}
            01 / THE WORK
          </p>
          <h2 id="experience-heading">
            Real systems.
            <br />
            <span>Real stakes.</span>
          </h2>
          <p>
            Healthcare workflows. Investment portfolios. The engineering behind
            the everyday.
          </p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            The full story in my resume ↗
          </a>
        </div>
        <div className={styles.roles}>
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.company}>
              <ExperienceCard {...exp} index={i + 1} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
