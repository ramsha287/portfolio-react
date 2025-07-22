import React from "react";
import "./Experience.css";

const experiences = [
  {
    title: "Software Development Intern",
    company: "Multicloud, Marlborough, MA, USA",
    duration: "June 2025 - Present",
    description: [
      "Contributing to the design and development of scalable software solutions.",
      "Tested and validated REST APIs using Swagger UI and Postman, ensuring consistent and reliable integration",
      "Assisting in deploying microservices on AWS; concurrently exploring Terraform, AMI, Ansible, and Linux for future automation.",
    ],
  },
  {
    title:"Research Intern",
    company: "Jamia Millia Islamia",
    duration: "June 2025 - Present",
    description: [
       "Conducting research on traffic congestion and urban mobility using geotagged Twitter data and NLP techniques.",
        "Abstract titled ”Mapping and Analyzing Traffic Congestion in New Delhi using Social Media Data” accepted at ISPRS-ISDE Conference 2025.",
        "Performing geocoding locally using Dockerized Nominatim setup for mapping tweet locations efficiently.",
        "Currently co-authoring a full research paper for submission and presentation at the conference.",
    ]
  },
  {
    title: "MLOps Intern",
    company: "EndorseSphere Ventures Private Limited",
    duration: "Nov 2024 - Jan 2025",
    description: [
      "Implemented machine learning workflows using Azure.",
      "Worked on data annotations and Named Entity Recognition (NER) for better data preprocessing."
    ],
  },
  {
    title: "Summer Research Intern",
    company: "Malaviya National Institute of Technology (MNIT), Jaipur",
    duration: "June 2024 - July 2024",
    description: [
      "Conducted research on brain tumor and breast cancer detection using CNNs with TensorFlow and Keras.",
      "Developed CNN models to analyze medical images, improving early detection rates and diagnosis accuracy.",
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
