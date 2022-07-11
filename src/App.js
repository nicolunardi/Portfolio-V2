import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { IntroDesktop, IntroMobile } from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import styles from "./App.module.scss";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.desktop}>
          <IntroDesktop />
        </div>
        <div className={styles.mobile}>
          <IntroMobile />
        </div>
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
