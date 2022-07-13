import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <section className={styles.skills}>
        <h1 className={styles.title}>About me</h1>
        <div className={styles.gridContainer}>
          <article className={styles.mainCard}>
            <h2>Masters in Computer Science or Science background bla</h2>
            <p>
              I turn your designs into pixel-perfect Webflow sites with great
              attention to detail and elegant animations. Say goodbye to the
              stressful back and forth with developers who have no feel for
              design. Additionally, I offer consulting services during your
              design phase with my experience in UI/UX and animation.
            </p>
          </article>
          <article className={styles.card}>
            <div>
              <h2>Languages</h2>
              <p>JS, Node, Python and C.</p>
            </div>
          </article>
          <article className={styles.card}>
            <div>
              <h2>Styling</h2>
              <p>CSS, Sass, and Tailwind.</p>
            </div>
          </article>
          <article className={styles.card}>
            <div>
              <h2>Databases</h2>
              <p>MongoDb and PostgreSQL</p>
            </div>
          </article>
          <article className={styles.card}>
            <div>
              <h2>Frameworks</h2>
              <p>React, Express.js and FastApi.</p>
            </div>
          </article>
          <article className={styles.githubCard}>
            <h2>
              <a href="">Check out my Github!</a>
            </h2>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Skills;
