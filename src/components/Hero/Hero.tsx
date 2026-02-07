import "./hero.css";
import girl from "../../assets/girl.png";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">
        <h1>Hi, I'm Madhumithaa</h1>
        <h3>Aspiring Software Engineer | Cloud & AI</h3>
        <p>
          Passionate about building AI-powered applications, cloud solutions,
          and modern web experiences. Focused on placements and real-world projects.
        </p>

        <div className="hero-buttons">
          <a href="https://github.com/Madhumithaa-27" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/madhumithaadk" target="_blank">LinkedIn</a>
          <a href="#contact">Hire Me</a>
        </div>
      </div>

      <div className="hero-right">
        <img src={girl} alt="developer girl"/>
      </div>

    </section>
  );
};

export default Hero;
