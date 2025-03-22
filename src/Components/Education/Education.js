import React from "react";
import "./Education.css";
import githubIcon from "../../Assets/icons/github-logo.png";
import leetcodeIcon from "../../Assets/icons/leetcode.png";
import gfgIcon from "../../Assets/icons/gfg.png";

const educationData = [
  {
    institution: "Jamia Millia Islamia",
    degree: "B.Tech in Electronics and Communication Engineering",
    year: "2022 - 2026",
    score: "SPI - 8.42",
  },
  {
    institution: "Allahabad Public School",
    degree: "Class 12th (CBSE)",
    year: "2021",
    score: "83.4%",
  },
  {
    institution: "Allahabad Public School",
    degree: "Class 10th (CBSE)",
    year: "2019",
    score: "92.6%",
  },
];

const achievements = [
  {
    title: "Google Cloud Skills Boost Gold League Member",
    link: "https://www.cloudskillsboost.google/public_profiles/61b36e3b-d3bd-43d9-adf4-d91f6c5dc2ab",
  },
  {
    title: "Machine Learning Specialization",
    link: "https://coursera.org/share/045e737e66cf53215b533d368e89fc89",
  },
  {
    title: "Supervised Machine Learning Specialization",
    link: "https://coursera.org/share/b41d4156c1d91e6ff37c3e9cb190110e",
  },
  {
    title: "Advanced Learning Algorithms",
    link: "https://coursera.org/share/7d7c1736267702d10e8641d40003961c",
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    link: "https://coursera.org/share/cf786a260cb6a6544b4a2f658f121d88",
  },
];

const codingProfiles = [
  { platform: "GitHub", link: "https://github.com/ramsha287" ,icon: githubIcon},
  { platform: "LeetCode", link: "https://leetcode.com/u/ramsha287/" ,icon: leetcodeIcon},
  { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/user/arshadral0qs/?ref=header_profile" ,icon: gfgIcon},
];

const Education = () => {
  return (
    <div className="education-container">
      <h1 className="education-title">Education</h1>

      {/* Education Section */}
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h2>{edu.institution}</h2>
            <h3>{edu.degree}</h3>
            <p>{edu.year}</p>
            <p>{edu.score}</p>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <h2 className="section-title">Achievements & Certifications</h2>
      <ul className="achievements-list">
        {achievements.map((achievement, index) => (
          <li key={index}>
            <a href={achievement.link} target="_blank" rel="noopener noreferrer">
              {achievement.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Coding Profiles Section */}
      <h2 className="section-title">Coding Profiles</h2>
      <ul className="coding-profiles-list">
        {codingProfiles.map((profile, index) => (
          <li key={index}>
            <a href={profile.link} target="_blank" rel="noopener noreferrer">
            <img src={profile.icon} alt={profile.platform} className="coding-icon" /> 
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
