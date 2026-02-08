import { experiences } from '../../lib/experience-data';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className="section-alt" id="experience">
      <div className="container">
        <h2 className={styles.heading}>Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot} />
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
