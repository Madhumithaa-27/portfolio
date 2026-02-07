function App() {
  return (
    <div style={{fontFamily:"Arial,sans-serif"}}>
      {/* Navbar */}
      <nav style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"20px 40px",
        background:"#5a2158",
        borderBottom:"1px solid #222",
        position:"sticky",
        top:0,
        color:"white"
      }}>
        <h2 style={{color:"#6c0e3d"}}>Madhumithaa</h2>
        <div style={{display:"flex",gap:"30px"}}>
          <a href="#about" style={{color:"white",
            textDecoration:"none"
          }}>About </a>
          <a href="#skills" style={{color:"white"
            , textDecoration:"none"
          }}>Skills </a>
          <a href="#projects" style={{color:"white",
            textDecorationColor:"none"
          }}>Projects </a>
          <a href="#contact" style={{color:"white",textDecoration:"none"}}>Contact</a>
        </div>
      </nav>

     {/* HERO SECTION */}
      <section style={{ textAlign: "center", marginTop: "80px" }}>
        <h1 style={{ fontSize: "42px" }}>Madhumithaa D K</h1>
        <h3> spiring Software Developer |Cloud & DevOps| Agentic AI</h3>
        <p>Aspiring Software Engineering Intern – 2026</p>

        <div style={{ marginTop: "25px" }}>
          <a href="https://github.com/Madhumithaa-27" target="_blank">
            <button style={{ margin: "10px", padding: "10px 20px" }}>GitHub</button>
          </a>

          <a href="https://www.linkedin.com/in/madhumithaadk/" target="_blank">
            <button style={{ margin: "10px", padding: "10px 20px" }}>LinkedIn</button>
          </a>

          <a href="/resume.pdf" target="_blank">
            <button style={{ margin: "10px", padding: "10px 20px" }}>Download Resume</button>
          </a>
        </div>
      </section>


      {/* ABOUT */}
      <section id="about" style={{ marginTop: "80px", padding: "40px", textAlign: "center" }}>
        <h2>About Me</h2>
        <p style={{ maxWidth: "800px", margin: "auto" }}>
          I am an Electronics and Communication Engineering student with strong interest in 
          Software Development, Cloud Computing and Artificial Intelligence. I build real-world 
          projects using React, AWS and Artificial Intelligence
        </p>
      </section>


      {/* SKILLS */}
      <section id="skills" style={{ marginTop: "60px", padding: "40px", background: "#f1f5f9" }}>
        <h2 style={{ textAlign: "center" }}>Technical Skills</h2>

        <div style={{ maxWidth: "800px", margin: "auto", marginTop: "20px" }}>
          <p style={{color:"#ffb3d9"}}><b>Programming:</b> Java, C, Python</p>
          <p style={{color:"#ffb3d9"}}><b>Frontend:</b> HTML, CSS, JavaScript, React, Bootstrap</p>
          <p style={{color:"#ffb3d9"}}><b>Cloud & DevOps:</b> AWS, Docker, Git, Jenkins, Linux</p>
          <p style={{color:"#ffb3d9"}}><b>AI/ML:</b> Machine Learning, Deep Learning, CNN, LSTM</p>
          <p style={{color:"#ffb3d9"}}><b>Database:</b> SQL</p>
        </div>
      </section>


      {/* PROJECTS */}
<section id="projects" style={{ marginTop:"80px", padding:"60px" }}>
  <h2 style={{textAlign:"center"}}>Projects</h2>

  <div style={{
    display:"flex",
    justifyContent:"center",
    gap:"30px",
    flexWrap:"wrap",
    marginTop:"40px"
  }}>

    {/* Project Card 1 */}
    <div style={card}>
      <h3>Cat Emotion AI</h3>
      <p>Deep learning model using CNN + LSTM to detect cat emotions.</p>
      <a href="https://github.com/Madhumithaa-27" target="_blank">GitHub</a>
    </div>

    {/* Project Card 2 */}
    <div style={card}>
      <h3>Cyberbullying Detection</h3>
      <p>BERT + Gemini AI platform deployed on AWS EC2.</p>
      <a href="https://github.com/Madhumithaa-27" target="_blank">GitHub</a>
    </div>

    {/* Project Card 3 */}
    <div style={card}>
      <h3>AutoSys Care</h3>
      <p>Linux automation toolkit using bash & cron jobs.</p>
      <a href="https://github.com/Madhumithaa-27" target="_blank">GitHub</a>
    </div>

  </div>
</section>



      {/* CODING PROFILES */}
      <section style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Coding Profiles</h2>
        <p><a href="https://github.com/Madhumithaa-27" target="_blank">GitHub</a></p>
        <p><a href="https://leetcode.com/u/OWCYnAFjtY/" target="_blank">LeetCode</a></p>
        <p><a href="https://www.geeksforgeeks.org/" target="_blank">GeeksforGeeks</a></p>
      </section>


      {/* CONTACT */}
      <section id="contact" style={{
        textAlign: "center",
        marginTop: "60px",
        background: "#000000",
        color: "white",
        padding: "40px"
      }}>
        <h2>Contact</h2>
        <p>Email: madhumithaadk@gmail.com</p>
        <p>Phone: 9840190589</p>
        <p>Location: Chennai, India</p>
      </section>

    </div>
  );
}
const card = {
  background:"#111",
  padding:"25px",
  width:"280px",
  borderRadius:"10px",
  boxShadow:"0 0 15px rgba(255,77,166,0.3)"
}

export default App;