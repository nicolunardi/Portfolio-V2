import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <h1 className={styles.nameLarge}>Nico Lunardi</h1>
        <h1 className={styles.nameSmall}>NL</h1>
        <nav>
          <div>About</div>
          <div>Skills</div>
          <div>Projects</div>
        </nav>
        <div className={styles.contact}>Contact</div>
      </header>
    </div>
  );
};

export default Header;
