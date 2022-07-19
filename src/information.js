import linkedinIcon from "./assets/icons/linkedin.png";
import githubIcon from "./assets/icons/github.png";
import emailIcon from "./assets/icons/email.png";
import discussThumbnail from "./assets/images/discuss.png";
import travelaThumbnail from "./assets/images/travela.png";
import codeThumbnail from "./assets/images/codeImage.jpg";

export const intro = {
  title: "Junior Software Engineer",
  name: "Nico Lunardi",
};

export const skills = {
  mainCardTitle: "Masters in IT with a medical science background",
  mainCardText:
    "I turn your designs into pixel-perfect Webflow sites with great attention to detail and elegant animations. Say goodbye to the stressful back and forth with developers who have no feel for design. Additionally, I offer consulting services during your design phase with my experience in UI/UX and animation.",
  cards: [
    { title: "Languages", text: "JS, Node, Python and C." },
    { title: "Styling", text: "CSS, Sass, and Tailwind." },
    { title: "Databases", text: "MongoDb and PostgreSQL" },
    { title: "Frameworks", text: "React, Express.js and FastApi." },
  ],
  buttonURL: "https://github.com/nicolunardi",
  buttonText: "Check out my Github!",
};

export const projects = [
  {
    subtitle: "Slack clone",
    title: "Discuss",
    img: discussThumbnail,
    backgroundColor: "#efe5fe",
    summary: [
      "Slack like app built with a vanilla javascript frontend, bootstrap for styling, and backend of node.js and express.js.",
      "It has most of the functionality of slack, including but not limited to signing up and login, joining and creating private or public channels, inviting members to channels, pinning, reacting to, editing, and deleting messages, as well as sending image messages",
      "The motivation behind building the project was to understand how javascript really works before moving on to learning a framework.",
    ],
    techs: ["Javascript", "Node.js", "Bootstrap"],
    githubLink: "https://github.com/nicolunardi/Discuss-client",
    projectLink: "https://discussapp.netlify.app/",
  },
  {
    subtitle: "AirBnB like app",
    title: "Travela",
    img: travelaThumbnail,
    backgroundColor: "#fbcdcd",
    summary: [
      "AirBnB like app built with React and Material UI for the frontend, and a backend of FastApi, a python framework.",
      "The app allows users to create and manage listings as well as the bookings for each listing. Users can also search for available listings and filter or sort them.",
      "I was motivated to build this project in order to solidify my understanding of React, as well as to try a different backend framework to Express.js. I chose FastApi as I required a fast, lightweight solution, as well as for a way to build on my python experience.",
    ],
    techs: ["React", "Mui v5", "Python", "FastApi"],
    githubLink: "https://github.com/nicolunardi/travela-client",
    projectLink: "https://travela-app.netlify.app/",
  },
  {
    subtitle: "Graph algorithms",
    title: "Graph Visualizer",
    img: codeThumbnail,
    backgroundColor: "#cde9fb",
    summary: [
      "Graph Visualizer is a library written entirely in C that allows for the creating of graphs using adjacency lists. Once the graphs are created, you can add/remove/edit vertices (weighted or not) as well as edges. The adjacency list representation of the graph can then be printed out to a specified file.",
      "The library also has functions to perform a simple Pagerank algorithm on the graph as well as calculate and display the shortest path using Dijkstra's algorithm",
    ],
    techs: ["C"],
    githubLink: "https://github.com/nicolunardi/graph-visualizer",
  },
];

export const contact = {
  title: "Let's work together.",
  links: [
    {
      url: "mailto:nlunardi7@gmail.com",
      icon: emailIcon,
      name: "Email",
      text: "nlunardi7@gmail.com",
      subtext: "Send me an email",
    },
    {
      url: "https://www.linkedin.com/in/nicolaslunardi/",
      icon: linkedinIcon,
      name: "LinkedIn",
      text: "Let's make a connection!",
      subtext: "Connect now",
    },
    {
      url: "https://github.com/nicolunardi",
      icon: githubIcon,
      name: "Github",
      text: "Check out my code",
      subtext: "Open Github",
    },
  ],
};
