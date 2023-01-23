import ProjectClause from "./components/ProjectClause";
import styles from "./Projects.module.scss";
import { projects } from "../../information";

const Projects = () => {
  return (
    <section className={styles.projects} name="projects">
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Projects</h1>
      </div>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectClause
              index={index + 1}
              subtitle={project.subtitle ?? null}
              title={project.title}
              img={project.img}
              backgroundColor={project.backgroundColor}
              summary={project.summary}
              techs={project.techs}
              githubLink={project.githubLink}
              projectLink={project.projectLink ?? null}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
