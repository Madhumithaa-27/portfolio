import "./navbar.css";


const Navbar = () => {
return (
<nav className="navbar">
<h1 className="logo">Madhumithaa's <span className="portfolio">Portfolio</span></h1>


<ul className="nav-links">
<li><a href="#about">About</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#projects">Projects</a></li>

</ul>
</nav>
);
};


export default Navbar;