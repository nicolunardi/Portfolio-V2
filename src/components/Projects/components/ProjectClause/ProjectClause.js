import styles from "./ProjectClause.module.scss";

const ProjectClause = (props) => {
  const {
    index,
    subtitle,
    title,
    img,
    backgroundColor,
    summary,
    techs,
    githubLink,
    projectLink,
  } = props;

  return (
    <article className={styles.projectClause}>
      <div className={styles.projectTitle}>
        <span>No. 0{index}</span>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
      </div>
      <div className={styles.projectInfo}>
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
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              Code
            </a>
            {projectLink && (
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                Project
              </a>
            )}
          </div>
        </div>
      </div>
      <div
        className={styles.projectImage}
        style={{ backgroundColor: backgroundColor }}
      >
        <img src={img} alt={title} />
      </div>
    </article>
  );
};

export default ProjectClause;
