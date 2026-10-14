import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        Z<span>.Teresa</span>
      </Link>

      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/#about">About</Link>
        <Link to="/#projects">Projects</Link>
        <Link to="/#skills">Skills</Link>
        <Link to="/#experience">Experience</Link>
        <Link to="/#contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
