import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Intro.module.scss";
import headshot from "../../assets/headshot.png";
import wireframe from "../../assets/Mac_wireframe.jpeg";

const Intro = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [scale, setScale] = useState(0);
  const [stopAnimation, setStopAnimation] = useState(false);
  const mainRef = useRef(null);
  const endRef = useRef(null);
  const wireframeRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      wireframeRef.current,
      { width: "300vw", top: "-50%" },
      {
        width: "60vw",
        top: "80",
        scrollTrigger: {
          pin: true,
          trigger: mainRef.current,
          start: "top top",
          end: `bottom top`,
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { width: "30vw", top: "10%" },
      {
        width: "10vw",
        top: "200",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className={styles.intro}>
      <div ref={mainRef} className={styles.main}>
        <img
          ref={wireframeRef}
          className={styles.backgroundImg}
          src={wireframe}
          alt="background"
        />
        <div ref={heroRef} className={styles.title}>
          <img src={headshot} alt="headshot" className={styles.profileImg} />
          <span>Junior software engineer</span>
          <h1>Nico Lunardi</h1>
        </div>
      </div>
      <h2 ref={endRef} className={styles.subtitle}>
        Full stack developer <br />
        with science background.
      </h2>
    </section>
  );
};

export default Intro;
