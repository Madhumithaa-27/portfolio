import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <h2>Technical Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Programming</h3>
          <p>Java (Intermediate), C (Basic), Python (Basic)</p>
          <p>Data Structures & Algorithms using Java</p>
        </div>

        <div className="skill-card">
          <h3>Frontend Development</h3>
          <p>HTML, CSS, JavaScript</p>
          <p>React.js, Bootstrap</p>
        </div>

        <div className="skill-card">
          <h3>Cloud & DevOps</h3>
          <p>AWS, CI/CD</p>
          <p>Docker, Jenkins</p>
          <p>Git, Linux, Bash</p>
        </div>

        <div className="skill-card">
          <h3>AI / Machine Learning</h3>
          <p>Machine Learning, Deep Learning</p>
          <p>Computer Vision, CNN</p>
          <p>LSTM / RNN, Audio Processing</p>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <p>SQL</p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
