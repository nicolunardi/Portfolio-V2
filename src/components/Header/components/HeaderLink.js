import styles from "./HeaderLink.module.scss";
import { Link } from "react-scroll/modules";

const HeaderLink = ({ section, text }) => {
  return (
    <div className={styles.link}>
      <Link to={section} smooth duration={500} offset={-80}>
        {text}
      </Link>
    </div>
  );
};

export default HeaderLink;
