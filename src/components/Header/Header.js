import styles from "./Header.module.scss";
import { HeaderLink } from "./components";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <h1 className={styles.nameLarge}>Nico Lunardi</h1>
        <h1 className={styles.nameSmall}>NL</h1>
        <nav>
          <HeaderLink section="home" text="Home"></HeaderLink>
          <HeaderLink section="about" text="About"></HeaderLink>
          <HeaderLink section="careerHistory" text="Career"></HeaderLink>
          <HeaderLink section="projects" text="Projects"></HeaderLink>
        </nav>
        <div className={styles.contact}>
          <div>
            <HeaderLink section="contact" text="Contact"></HeaderLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
