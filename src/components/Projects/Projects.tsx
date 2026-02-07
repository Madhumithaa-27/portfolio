import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 style={{background: "linear-gradient(45deg,#ff4fd8,#ffd700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Projects</h2>

      <div className="project-card">
        <h3 style={{color: "#f60083"}}>AI-Based Cat Emotion Recognition System</h3>
        <p>
          1.Developed an end-to-end Deep Learning pipeline combining Computer Vision (CNN)
          and Audio Processing (LSTM/RNN) to detect cat emotions and improve pet welfare technology.
        </p>
        <p>
          2.Built a deployable Streamlit interface for multimedia emotion analysis, helping pet
          owners understand and respond to their pets more effectively.
        </p>
        <p>
          Demonstrated full Machine Learning deployment from model training to application,
          achieving up to 60% accuracy on custom datasets.
        </p>
      </div>

      <div className="project-card">
        <h3 style={{color: "#f60083"}}>AI Powered Cyberbullying Detection & Prevention Platform</h3>
        <p>
          1.Developed an AI-driven platform using a fine-tuned BERT model to detect abusive
          and harmful content with 80% accuracy.
        </p>
        <p>
          2.Integrated Gemini AI API to generate polite alternative responses, preventing
          cyberbullying in real time and promoting safe digital communication.
        </p>
        <p>
          3.Deployed on AWS EC2 with secure access controls and integrated Reddit API for
          live content monitoring and analysis.
        </p>
      </div>

      <div className="project-card">
        <h3 style={{color: "#f60083"}}>Career Readiness & Skill Gap Analyzer Platform</h3>

        <p>
          1.Built an intelligent platform that analyzes a student’s skills against job
          requirements and identifies skill gaps for specific roles.
        </p>

        <p>
          2.Generates a personalized roadmap including courses, projects, and interview
          preparation strategy to help students become job-ready.
        </p>

        <p>
          3.Includes interview preparation guidance, resume improvement suggestions,
          and roadmap tracking to help users confidently crack technical interviews.
        </p>
      </div>

    </section>
  );
};

export default Projects;
