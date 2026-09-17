import { experiences } from "../../lib/experience-data";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import styles from "./Experience.module.css";
export default function Experience() {
  return (
    <section
      className="section-alt"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <div className={styles.heading}>
          <p className="eyebrow">01 / Experience</p>
          <h2 id="experience-heading">Engineering in practice.</h2>
          <p>From investment portfolios to healthcare workflows.</p>
        </div>
        <div>
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
