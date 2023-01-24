import styles from "./IntroDesktop.module.scss";
import headshot from "../../assets/images/headshot.png";

const IntroDesktop = () => {
  return (
    <section className={styles.intro} name="home">
      <div className={styles.main}>
        <div className={styles.title}>
          <img src={headshot} alt="headshot" className={styles.profileImg} />
          <span>Junior Software Engineer</span>
          <h1>Nico Lunardi</h1>
        </div>
      </div>
      <h2 className={styles.subtitle}>
        Full stack developer <br />
        with a medical science background.
      </h2>
    </section>
  );
};

export default IntroDesktop;
