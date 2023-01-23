import styles from "./Header.module.scss";
import HeaderLink from "./HeaderLink";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <h1 className={styles.nameLarge}>Nico Lunardi</h1>
        <h1 className={styles.nameSmall}>NL</h1>
        <nav>
          <HeaderLink section="home" text="Home"></HeaderLink>
          <HeaderLink section="about" text="About"></HeaderLink>
          <HeaderLink section="projects" text="Projects"></HeaderLink>
        </nav>
        <div className={styles.contact}>
          <HeaderLink section="contact" text="Contact"></HeaderLink>
        </div>
      </header>
    </div>
  );
};

export default Header;
