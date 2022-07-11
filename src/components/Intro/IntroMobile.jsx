import React from "react";
import headshot from "../../assets/headshot.png";
import styles from "./IntroMobile.module.scss";

const IntroMobile = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.hero}>
        <img src={headshot} alt="headshot" className={styles.image} />
        <div>
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

export default IntroMobile;
