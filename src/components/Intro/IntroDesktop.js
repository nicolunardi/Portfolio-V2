import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./IntroDesktop.module.scss";
import headshot from "../../assets/images/headshot.png";
import wireframe from "../../assets/images/black.png";

const IntroDesktop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mainRef = useRef(null);
  const endRef = useRef(null);
  const wireframeRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      wireframeRef.current,
      { width: "300vw", top: "-50%", opacity: 0 },
      {
        width: "60vw",
        top: "80",
        opacity: 1,
        scrollTrigger: {
          pin: true,
          trigger: mainRef.current,
          start: "0 " + mainRef.current.offsetTop,
          end: `bottom top`,
          scrub: true,
          snap: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    console.log();
    gsap.fromTo(
      heroRef.current,
      { scale: 1, top: "10%", color: "black" },
      {
        scale: 0.5,
        top: "80",
        color: "white",
        scrollTrigger: {
          pin: true,
          trigger: mainRef.current,
          start: "0 " + mainRef.current.offsetTop,
          end: "bottom top",
          scrub: true,
          snap: true,
        },
      }
    );
  }, []);

  return (
    <section className={styles.intro} name="home">
      <div ref={mainRef} className={styles.main}>
        <img
          ref={wireframeRef}
          className={styles.backgroundImg}
          src={wireframe}
          alt="background"
        />
        <div ref={heroRef} className={styles.title}>
          <img src={headshot} alt="headshot" className={styles.profileImg} />
          <span>Junior Software Engineer</span>
          <h1>Nico Lunardi</h1>
        </div>
      </div>
      <h2 ref={endRef} className={styles.subtitle}>
        Full stack developer <br />
        with a medical science background.
      </h2>
    </section>
  );
};

export default IntroDesktop;
