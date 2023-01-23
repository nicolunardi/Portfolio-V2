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
  mainCardTitle: "Postgraduate in CS with a medical science background",
  mainCardText: [
    "As a highly motivated medical scientist with a desire to transition into the field of software engineering, I am excited to bring my passion for problem-solving, analytical thinking and training people to a new industry. With a postgraduate degree in IT, I have the technical knowledge and understanding to excel in software development. My background in medical science has honed my ability to think critically and approach problems from multiple angles, making me well-suited to tackle the challenges of software engineering.",
    "I have a natural talent for teaching and have experience training new staff, helping them to develop the skills and confidence they need to become fully contributing team members. I am eager to continue learning and growing in this field, and I am confident that my unique perspective, skills and ability to train people will make me a valuable asset to any team.",
  ],
  cards: [
    { title: "Languages", text: "JS, Node, Python and C." },
    { title: "Styling", text: "CSS, Sass, Bootstrap." },
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
      "Discuss is a real-time messaging application that is similar to Slack, built with a combination of vanilla JavaScript for the frontend, Bootstrap for styling, and a Node.js and Express.js backend. It offers a wide range of features including user authentication, the ability to create and join both private and public channels, inviting team members to channels, pinning, editing, and deleting messages, as well as sending image messages.",
      "The project was created with the motivation of gaining a deeper understanding of JavaScript, before moving on to learning a framework. It serves as a great example of the power and versatility of JavaScript, highlighting my proficiency in building complex and dynamic web applications from scratch.",
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
      "AirBrB is a creative spin on the popular vacation rental platform, AirBnB. Built with React and Material UI for the frontend, and FastAPI, a Python framework, for the backend, it's a powerful and visually stunning application.",
      "The application allows for the creation and management of listings, as well as the ability to handle bookings for each listing. Users are also able to search for available listings and filter or sort them based on their preferences.",
      "The motivation behind this project was to solidify my understanding of React, and to gain experience using a different backend framework in comparison to Express.js. The choice of FastAPI was made due to its fast performance and lightweight structure, as well as to build on my experience with Python. This project demonstrates my technical proficiency in multiple web technologies and my ability to create efficient and user-friendly applications.",
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
      "Graph Visualizer is a C library that showcases the my understanding of graph algorithms and data structures. The library provides a comprehensive set of functionalities for creating and manipulating graphs using adjacency lists. It allows for the addition, removal, and editing of vertices (weighted or not) and edges, as well as the ability to export the adjacency list representation of the graph to a specified file.",
      "Additionally, it has built-in functions to perform a simple Pagerank algorithm and to calculate and display the shortest path using Dijkstra's algorithm. These advanced functionalities demonstrate my proficiency in understanding and implementing various graph algorithms. Overall, this library is an efficient and powerful tool for graph data manipulation and visualization, and it demonstrates my solid understanding in the field of graph algorithms and data structures.",
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
