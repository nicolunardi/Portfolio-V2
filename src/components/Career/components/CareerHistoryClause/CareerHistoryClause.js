import styles from "./CareerHistoryClause.module.scss";

const CareerHistoryClause = (props) => {
  const { index, subtitle, title, summary, techs, website } = props;

  return (
    <article className={styles.careerHistoryClause}>
      <div className={styles.careerTitle}>
        <span>No. 0{index}</span>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
      </div>
      <div className={styles.careerInfo}>
        <div className={styles.summary}>
          {summary.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.tech}>
            <h3>Tech</h3>
            {techs.map((tech, i) => (
              <p key={i}>{tech}</p>
            ))}
          </div>
          <div className={styles.link}>
            <h3>Link</h3>
            {website && (
              <a href={website} target="_blank" rel="noopener noreferrer">
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CareerHistoryClause;
