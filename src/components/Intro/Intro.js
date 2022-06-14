import { useEffect, useRef, useState } from "react";
import styles from "./Intro.module.scss";
import headshot from "../../assets/headshot.png";
import wireframe from "../../assets/wireframe.png";

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const Intro = () => {
  const [scale, setScale] = useState(0);
  const [stopAnimation, setStopAnimation] = useState(false);
  const mainRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // console.log(window.innerHeight * 2 - scale, scale);
    if (isInViewport(mainRef.current)) {
      setStopAnimation(true);
      return;
    }
    const scrollEvent = window.addEventListener("scroll", () => {
      setScale(window.scrollY);
      // console.log(
      //   mainRef?.current?.clientHeight,
      //   imageRef?.current?.clientHeight,
      //   window.scrollY
      // );
    });

    return () => scrollEvent;
  }, []);

  useEffect(() => {
    console.log("here", );
  }, [scale]);

  const firstHeight = imageRef?.current?.clientHeight;
  const lastHeight = window.innerHeight * 0.7;

  const movingHeight = firstHeight - lastHeight;
  const movingScroll = movingHeight / window.innerHeight;
  // console.log(((scale - 1) * movingScroll) / (scale * movingScroll));

  return (
    <section className={styles.intro}>
      <div
        className={styles.main}
        style={{ height: window.innerHeight * 2 + "px" }}
      >
        <div>
          <img
            ref={imageRef}
            className={styles.backgroundImg}
            src={wireframe}
            alt="background"
            style={{
              transform: `translateX(-50%) translateY(-50%) scale(${
                // (scale * movingScroll) / ((scale - 1) * movingScroll)
                scale * -0.001 + 1
              })`,
            }}
          />
          <div
            className={styles.title}
            style={{
              transform: `translateX(-50%) translateY(-50%) scale(${
                // (scale * movingScroll) / ((scale - 1) * movingScroll)
                scale * -0.001 + 1
              })`,
            }}
          >
            <img src={headshot} alt="" className={styles.profileImg} />
            <span>Junior software engineer</span>
            <h1>Nico Lunardi</h1>
          </div>
        </div>
      </div>
      <h2 ref={mainRef} className={styles.subtitle}>
        Full stack developer <br />
        with science background.
      </h2>
    </section>
  );
};

export default Intro;
