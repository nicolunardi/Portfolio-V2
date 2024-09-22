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
  mainCardTitle: "Software Engineer with a medical science background",
  mainCardText: [
    "As a software engineer with a background in medical science, I bring a unique blend of analytical thinking and problem-solving skills to the tech industry. With over a year of professional experience at a major VFX company, I specialize in Python and JavaScript, creating tools for artists and maintaining robust pipelines. My postgraduate degree in IT provides me with a solid foundation in software development principles.",
    "My experience leading teams in a medical setting has honed my critical thinking and adaptability, enabling me to approach complex problems from multiple angles. I have a passion for teaching and have successfully trained new staff, helping them build the skills and confidence needed to thrive in a collaborative environment.",
    "I am eager to continue my growth in software engineering and am confident that my diverse skill set and perspective will make me a valuable asset to any team.",
  ],
  cards: [
    { title: "Languages", text: "JS, Node, Python and C." },
    { title: "Styling", text: "CSS, Sass and Bootstrap." },
    { title: "Databases", text: "MongoDb, PostgreSQL, SQLite." },
    { title: "Frameworks", text: "Django, React, QT" },
  ],
  buttonURL: "https://github.com/nicolunardi",
  buttonText: "Check out my Github!",
};

export const careerHistory = [
  {
    subtitle: "Junior Developer,  Jun 2023 - present",
    title: "Fin Design + Effects",
    summary: [
      "During my tenure at FIN, a leading VFX company, I played a key role in building and maintaining the pipeline and developing tools for artists. I created and updated internal APIs for our Django-based website and integrated external APIs to enhance workflow efficiency. Notably, I developed a forecasting tool using Python and QT that predicts render times based on historical data, enabling the company to meet deadlines more accurately and improve project budgeting and bidding.",
      "Additionally, I implemented integrations that streamline employee processes, such as allowing staff to request sick leave via Slack instead of using Xero, and providing weekly schedules through Slack messages sourced from Runn, the project management tool used by producers.",
    ],
    techs: ["Python", "Django", "Javascript", "QT"],
    website: "https://www.findesign.com.au/",
  },
  {
    subtitle: "Hospital Scientist,  Jun 2018 - Jun 2023",
    title: "NSW Health Pathology",
    summary: [
      "During my time as a hospital scientist at NSW Health Pathology, I led a team dedicated to maintaining high-quality and efficient laboratory operations. I was instrumental in training new recruits, helping them become fully contributing members of the team. Recognizing the need for improved communication, I implemented Slack as our primary communication tool, which enhanced information sharing and facilitated the organization of social events. This initiative not only boosted team morale and increased social interactions but also significantly reduced paper wastage.",
      "Furthermore, I developed and implemented workflows designed to streamline laboratory processes, further enhancing our operational efficiency. This experience reinforced my belief in the power of technology to transform team dynamics and improve productivity in high-pressure environments.",
    ],
    techs: ["N/A"],

    website: "https://pathology.health.nsw.gov.au/",
  },
];

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
