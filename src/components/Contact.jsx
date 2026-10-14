import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <p className="contact-subtitle">GET IN TOUCH</p>

        <h2>Let's Connect</h2>

        <p className="contact-intro">
          I'm currently looking for opportunities where I can grow my skills,
          contribute to meaningful projects, and build my career in IT and
          software development.
        </p>

        <p className="contact-message">
          Have a question or want to know more about my work?
          Feel free to reach out!
        </p>

        <div className="contact-buttons">

          <a
            href="mailto:znettatresa@gmail.com"
            className="contact-button"
            aria-label="Email me"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>

          <a
            href="https://linkedin.com/in/zanetta-teresa"
            className="contact-button"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/znttatresa"
            className="contact-button"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;

