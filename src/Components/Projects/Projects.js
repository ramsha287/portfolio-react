import React from "react";
import "./Projects.css";


const projectsData = [
  {
    title: "My Muse",
    description:
      "A full-stack blog application for seamless content creation, management, and sharing.",
    link: "https://github.com/ramsha287/Fullstack-Blog-Project",
  },
  {
    title: "AI Chatbox",
    description:
      "An interactive chatbot powered by AI to assist users with real-time responses and automation.",
    link: "https://github.com/ramsha287/ai-chat-box",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "An AI-driven attendance system using facial recognition for automated entry logging.",
    link: "https://github.com/ramsha287/fras",
  },
  { title: "Youtube Comment Analyzer", description: "Developed a Streamlit app to analyze YouTube comments. Used NLTK, TextBlob, and Scikit-learn for sentiment analysis, topic modeling, and classification. Integrated Plotly for interactive visualizations.", link: "https://github.com/ramsha287/youtubecommentanalyzer" },

  {
    title: "Currency Converter",
    description:
      "A web-based tool for real-time currency exchange rate conversion with an intuitive interface.",
    link: "https://github.com/ramsha287/currency-converter",
  },
  {
    title: "Weather Web App",
    description:
      "A real-time weather forecasting web application using API integration for live updates.",
    link: "https://github.com/ramsha287/weather-app",
  },
  {
    title: "Image Resizer",
    description:
      "A tool to efficiently resize and optimize images while maintaining quality.",
    link: "https://github.com/ramsha287/image-resizer",
  },
  {
    title: "Portfolio",
    description:
      "A dynamic and responsive portfolio website built using React.js to showcase my skills and projects.",
    link: "https://github.com/ramsha287/portfolio-react",
  },
];

const Projects = () => {
  return (
    
    <div id="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-glass">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Projects;
