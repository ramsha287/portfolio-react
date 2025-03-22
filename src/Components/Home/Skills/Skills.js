import React from 'react';
import './Skills.css';
import tailwindIcon from '../../../Assets/icons/tailwind-css.svg';
import mongodbIcon from '../../../Assets/icons/mongodb.svg';

const skillsData = [
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "C++", icon: "fa-solid fa-code" },
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "Tailwind CSS", image: tailwindIcon },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "React", icon: "fa-brands fa-react" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    { name: "Node.js", icon: "fa-brands fa-node" },
    { name: "NPM", icon: "fa-brands fa-npm" },
    { name: "Git", icon: "fa-brands fa-git" },
    { name: "Express.js", icon: "fa-solid fa-server" },
    { name: "MongoDB", image: mongodbIcon },
    { name: "MySQL", icon: "fa-solid fa-database" },
    { name: "Pandas", icon: "fa-solid fa-chart-bar" },
    { name: "NumPy", icon: "fa-solid fa-cube" },
    { name: "Scikit-learn", icon: "fa-solid fa-brain" },
    { name: "TensorFlow", icon: "fa-solid fa-project-diagram" },
    { name: "Keras", icon: "fa-solid fa-network-wired" },
    { name: "PyTorch", icon: "fa-solid fa-microchip" }
];

const Skills = () => {
    return (
        <section id='skills'>
            <div className='skills-container'>
            <h1 className='skills-title'>Skills</h1>
            <div className='skills-grid'>
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-bubble">
                        {skill.icon ? <i className={skill.icon}></i> : <img src={skill.image} alt={skill.name} />}
                        <span className="tooltip">{skill.name}</span>
                    </div>
                ))}

            </div>
        </div>
        </section>
        
    );
};

export default Skills;
