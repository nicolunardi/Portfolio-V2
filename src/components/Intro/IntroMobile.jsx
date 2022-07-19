import React from "react";
import headshot from "../../assets/images/headshot.png";
import styles from "./IntroMobile.module.scss";
import { intro } from "./../../information.js";

const IntroMobile = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.hero}>
        <img src={headshot} alt="headshot" className={styles.image} />
        <div>
          <span>{intro.title}</span>
          <h1>{intro.name}</h1>
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
