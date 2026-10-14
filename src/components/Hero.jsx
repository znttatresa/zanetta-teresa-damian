import profilePicture from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">HELLO, I'M</p>

        <h1>Zanetta Teresa Damian.</h1>

        <h2>IT Graduate & Aspiring Developer</h2>

        <p className="hero-description">
          I love learning new skills and growing with every project I work on, across web development and software development. Welcome to my portfolio!
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={profilePicture}
          alt="Zanetta Teresa Damian"
        />
      </div>
    </section>
  );
}

export default Hero;