import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import styles from "./App.module.scss";
import CareerHistory from "./components/Career";

function App() {
  return (
    <div>
      <div className={styles.container}>
        <Header />
        <Intro />
        <Skills />
        <CareerHistory />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
