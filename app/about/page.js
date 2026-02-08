import { getYearsOfExperience } from '../../lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessQueen, faMusic, faVideo } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'About | Vivek Gawande',
};

export default function AboutPage() {
  const years = getYearsOfExperience();

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '32px' }}>About Me</h1>

        <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
          Hey there! I&apos;m <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Vivek</span>, a Senior Software Engineer with{' '}
          {years}+ years of experience building web and enterprise applications.
          I have a passion for writing clean and efficient code.
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text-muted)', marginTop: '20px' }}>
          I have a bachelor&apos;s degree in Computer Science Engineering from Mumbai University.
          Currently, I work at Wipro as a Senior Software Engineer for Optum (United Health Group),
          where I work on the Appeals Tracking System — automating manual processes and building
          integrations for fetching member and claims data.
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text-muted)', marginTop: '20px' }}>
          Previously, at Tata Consultancy Services, I had the exciting opportunity to collaborate
          with a group of brilliant Canadian developers, which allowed me to hone my skills in C# .NET
          microservices and Oracle.
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text-muted)', marginTop: '20px' }}>
          I like learning new things every day to improve my development process.
          One of the traits I&apos;m known for is my unwavering attention to detail — I believe it&apos;s the small,
          intricate elements that elevate a good project to greatness.
        </p>

        <div style={{ display: 'flex', gap: '60px', marginTop: '48px', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '16px' }}>Technical Skills</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'C# / .NET Framework / .NET Core',
                'SQL Server, Oracle PL/SQL',
                'Vue 2, React',
                'JavaScript, TypeScript',
                'Jenkins, Git',
              ].map((skill) => (
                <li key={skill} style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--text-muted)' }}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '16px' }}>Interests</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--text-muted)' }}>
                Chess <FontAwesomeIcon icon={faChessQueen} style={{ color: 'var(--primary)', marginLeft: '6px' }} />
              </li>
              <li style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--text-muted)' }}>
                Movies <FontAwesomeIcon icon={faVideo} style={{ color: '#0087A9', marginLeft: '6px' }} />
              </li>
              <li style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--text-muted)' }}>
                Music <FontAwesomeIcon icon={faMusic} style={{ color: '#EA638C', marginLeft: '6px' }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
