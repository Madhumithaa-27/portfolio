import "./projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">

      <h2 style={{
        background:"linear-gradient(45deg,#ff4fd8,#ffd700)",
        WebkitBackgroundClip:"text",
        WebkitTextFillColor:"transparent"
      }}>
        Projects
      </h2>

      <div className="project-wrapper">

        <div className="project-card">
          <h3>AI-Based Cat Emotion Recognition System</h3>
          <p>Developed end-to-end deep learning pipeline combining CNN + LSTM/RNN to detect cat emotions.</p>
          <p>Built Streamlit interface for multimedia emotion analysis for pet welfare.</p>
          <p>Achieved ~60% accuracy on custom datasets and demonstrated full ML deployment.</p>
          
            <a href="https://github.com/Madhumithaa-27/cat-emotion-detector" target="_blank" className="git-btn">
              View on GitHub
            </a>
        </div>

        <div className="project-card">
          <h3>AI Powered Cyberbullying Detection Platform</h3>
          <p>Built BERT-based detection system with 80% accuracy.</p>
          <p>Integrated Gemini AI for safe response suggestions.</p>
          <p>Deployed on AWS EC2 with Reddit API live monitoring.</p>
          <a href="https://github.com/Madhumithaa-27/AI-powered-Cyber-Bullying-Detection-and-Prevention-Platform-" target="_blank" className="git-btn">
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Career Readiness & Skill Gap Analyzer</h3>
          <p>Analyzes student skills vs job roles and finds skill gaps.</p>
          <p>Generates roadmap with courses, projects & interview prep.</p>
          <p>Helps students crack technical interviews confidently.</p>
          <a href="https://github.com/Madhumithaa-27/career_readiness" target="_blank" className="git-btn">
            View on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
