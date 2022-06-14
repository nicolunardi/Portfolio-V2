import ProjectClause from './components/ProjectClause';
import styles from './Projects.module.scss'

const projects = [
  {
    subtitle: 'Slack clone',
    title: 'Discuss',
    img: '',
    backgroundColor: '#efe5fe',
    summary: [
      'Slack like app built with a vanilla javacript frontend, bootstrap for styling, and backend of node.js and express.js.',
      'It has most of the functionality of slack, including but not limited to signing up and login, joining and creating private or public channels, inviting members to channels, pinning, reacting to, editing, and deleting messages, as well as sending image messages',
      'The motivation behind building the project was to understand how javascript really works before moving on to learning a framework.'
    ],
    techs: [
      'Javascript',
      'Node.js',
      'Bootstrap'
    ],
    githubLink: '',
    projectLink: 'd'
  },
  {
    subtitle: 'AirBnB like app',
    title: 'Travela',
    img: '',
    backgroundColor: '#fbcdcd',
    summary: [
      'AirBnB like app built with React and Material UI for the frontend, and a backend of FastApi, a python framework.',
      'The app allows users to create and manage listings as well as the bookings for each listing. Users can also search for available listings and filter or sort them.',
      'I was motivated to build this project in order to solidify my understanding of React, as well as to try a different backend framework to Express.js. I chose FastApi as I required a fast, lightweight solution, as well as for a way to build on my python experience.'
    ],
    techs: [
      'React',
      'Mui v5',
      'Python',
      'FastApi'
    ],
    githubLink: '',
    projectLink: 'd'
  },
  {
    title: 'Graph Visualizer',
    img: '',
    backgroundColor: '#cde9fb',
    summary: [
      'Graph Visualizer is a library written entirely in C that allows for the creating of graphs using adjacency lists. Once the graphs are created, you can add/remove/edit vertices (weighted or not) as well as edges. The adjacency list representation of the graph can then be printed out to a specified file.',
      'The library also has functions to perform a simple Pagerank algorithm on the graph as well as calculate and display the shortest path using Dijkstra\'s algorithm'
    ],
    techs: [
      'c'
    ],
    githubLink: '',
  }
]

const Projects = () => {

  return (
    <section className={styles.projects}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Projects</h1>
      </div>
      <ul>
        {
          projects.map((project, index) => (
            <li key={index}>
              <ProjectClause
                index={index+1}
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
          ))
        }
      </ul>
    </section>
  )
}

export default Projects;