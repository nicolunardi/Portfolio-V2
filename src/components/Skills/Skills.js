import styles from "./Skills.module.scss";
import { skills } from "../../information";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <section className={styles.skills}>
        <h1 className={styles.title}>About me</h1>
        <div className={styles.gridContainer}>
          <article className={styles.mainCard}>
            <h2>{skills.mainCardTitle}</h2>
            {skills.mainCardText.map((text, idx) => (
              <div key={idx}>
                <p>{text}</p>
                <br />
              </div>
            ))}
          </article>
          {skills.cards.map((card, idx) => (
            <article key={idx} className={styles.card}>
              <div>
                <h2>{card.title}</h2>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
          <article className={styles.githubCard}>
            <h2>
              <a
                href={skills.buttonURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {skills.buttonText}
              </a>
            </h2>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Skills;
