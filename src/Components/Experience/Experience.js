import React from "react";
import "./Experience.css";

const experiences = [
  {
    title: "Software Development Intern",
    company: "Multicloud, Marlborough, MA, USA",
    duration: "June 2025 - Present",
    description: [
      "Contributed to AI security initiatives by supporting the integration of enterprise AI services such as AI Gateway, Batch Redaction, and Exposure Lens.",
      "Worked on backend workflows, API integrations, and cloud-based deployments to improve reliability, scalability, and secure service operations on AWS.",
      "Collaborated with cross-functional AI, cloud, and product teams in an Agile environment; currently contributing to a technical white paper on Robotics Security.",
    ],
  },
  {
    title: "Research Intern",
    company: "Jamia Millia Islamia",
    duration: "June 2025 - Present",
    description: [
      "Designed an NLP pipeline to filter and classify traffic-related tweets from Twitter/X using VGI (Volunteered Geographic Information).",
      "Built geospatial visualizations with QGIS and Dockerized Nominatim for local geocoding of Delhi NCR congestion hotspots.",
      "Work published at IEEE DELCON 2025 (International Conference on Smart Technologies in Engineering).",
    ]
  },
  // {
  //   title: "MLOps Intern",
  //   company: "EndorseSphere Ventures Private Limited",
  //   duration: "Nov 2024 - Jan 2025",
  //   description: [
  //     "Implemented machine learning workflows using Azure.",
  //     "Worked on data annotations and Named Entity Recognition (NER) for better data preprocessing."
  //   ],
  // },
  {
    title: "Summer Research Intern",
    company: "Malaviya National Institute of Technology (MNIT), Jaipur",
    duration: "June 2024 - July 2024",
    description: [
      "Conducted research on brain tumor detection using CNNs with TensorFlow and Keras.",
      "Applied advanced data preprocessing techniques like normalization, augmentation, and contrast adjustment.",
      "Achieved 93.6% accuracy with MobileNet and 99.1% ROC score."
    ],
  },
];

const volunteering = [
  {
    title: "Volunteer Coordinator",
    organization: "Google Developer Group (GDG) JMI",
    duration: "2024 - Present",
    description: ["Managed volunteers for tech events and workshops at Jamia Millia Islamia."],
  },
  {
    title: "Public Relations Team Member",
    organization: "IEEE JMI",
    duration: "2023 - Present",
    description: ["Handled PR activities and coordinated community events for IEEE JMI."],
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>

      <div className="experience-section">
        <h2>Internships</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p className="experience-duration">{exp.duration}</p>
            <ul>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="experience-section">
        <h2>Volunteering Activities</h2>
        {volunteering.map((vol, index) => (
          <div key={index} className="experience-card">
            <h3>{vol.title}</h3>
            <h4>{vol.organization}</h4>
            <p className="experience-duration">{vol.duration}</p>
            <ul>
              {vol.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
