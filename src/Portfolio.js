// Portfolio.js
const info = {
  Name: "Swastik Mishra",
};

const NameLogo = {
  fontFamily: 'Dancing Script',
  fontWeight: '700',
  fontSize: '35px',
  color: 'rgb(35,52,86)',
  fontStyle: 'normal',
};

const projects = [
  {
      id: 1,
      title: "Facial Recognition Attendance System",
      description: "A system that uses facial recognition technology to mark attendance automatically.",
      technologies: ["Python", "OpenCV"],
  },
  {
      id: 2,
      title: "E-commerce Website",
      description: "An online shopping platform with integrated payment gateway and user-friendly UI.",
      technologies: ["React", "Node.js", "Braintree API"],
  },
  {
      id: 3,
      title: "Cultural-Heritage Web Application",
      description: "A platform to showcase cultural heritage sites with rich multimedia content.",
      technologies: ["JavaScript", "MongoDB", "Node.js", "Express.js", "React.js"],
  },
  {
      id: 4,
      title: "Portfolio Website",
      description: "A personal portfolio website developed using ReactJS, TailwindCSS, and JavaScript, showcasing projects and skills.",
      technologies: ["ReactJS", "TailwindCSS", "JavaScript"],
  },
  {
      id: 5,
      title: "API-based News Website",
      description: "A dynamic news website created using HTML, CSS, JavaScript, and Node.js that fetches and displays news from an API.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
  },
  {
      id: 6,
      title: "Static Music Player",
      description: "A music player built using HTML, CSS, and JavaScript that allows users to play downloaded songs only.",
      technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const skills = [
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 80 },
  { name: "JavaScript", percentage: 70 },
  { name: "React", percentage: 85 },
  { name: "Node.js", percentage: 75 },
  { name: "Python", percentage: 70 },
  { name: "C", percentage: 80 },
  { name: "Java", percentage: 60 },
  { name: "MongoDB", percentage: 70 },
  { name: "Git", percentage: 80 },
];

export {
  info, NameLogo, projects, skills,
};
