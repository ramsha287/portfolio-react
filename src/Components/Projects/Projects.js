import React from "react";
import "./Projects.css";

const projectsData1 = [
  {
    title: "CarWorth",
    description:
      "Developed a Streamlit-based car price prediction app.Included similar car recommendations, price comparison, and fairness algorithms for accurate and equitable predictions.",
    link: "https://github.com/ramsha287/carpricepredictionmodel",
  },
  { title: "Youtube Comment Analyzer", description: "Developed a Streamlit app to analyze YouTube comments.Used NLTK,TextBlob,Scikit-learn,topic modeling and classification.", link: "https://github.com/ramsha287/youtubecommentanalyzer" },
  { title: "LumiSkin" , description: "AI-powered skincare platform with CNN-based image analysis, real-time results, and personalized product recommendations."},

];
const projectsData2 = [
  {
    title: "StyleMuse",
    description:
      "Style Muse is a full-stack E-commerce site built with the MERN stack, featuring JWT auth and Stripe payments.",
    link: "https://github.com/ramsha287/StyleMuse",
  },

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

const projectsData3 = [
  {
    title: "NeuroBridge",
    description:
      "Designed for individuals with ADHD, Autism, and OCD Helping neurodivergent users manage daily tasks, routines, and emotional well-being through intelligent, adaptive tools.",
    link: "https://github.com/filza2112/neurobridge",
  },
  

];

const Projects = () => {
  return (
    
    <div id="projects">
      <h1 className="projects-title">AI/ML Projects</h1>
      <div className="projects-container">
        {projectsData1.map((project, index) => (
          <div key={index} className="project-glass">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
      <h1 className="projects-title">Web Development Projects</h1>
      <div className="projects-container">
        {projectsData2.map((project, index) => (
          <div key={index} className="project-glass">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>

      <h1 className="projects-title">Collaborative Projects</h1>
      <div className="projects-container">
        {projectsData3.map((project, index) => (
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
