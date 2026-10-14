import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      id: "brightbite",
      title: "BrightBite",
      category: "Mobile Application · Final Year Project",
      description:
        "An Android application that uses computer vision to help cat owners monitor potential dental health conditions through images. It features image analysis, confidence scores, pet profiles, and analysis history.",
      technologies: ["Java", "Python", "Android Studio", "Firebase", "MobileNetV2"],
      status: "Completed Academic Project",
      github: "",
    },
    {
      id: "course-registration",
      title: "Smart Course Registration System",
      category: "Web Application · Academic Project",
      description:
        "A course registration system designed to support student course selection, waiting lists, administrative approval, and communication between students and staff.",
      technologies: ["Laravel", "PHP", "MySQL"],
      status: "Academic Project",
      github: "",
    },
  ];

  return (
    <section className="projects section-padding" id="projects">
      <div className="section-heading">
        <p className="section-label">WHAT I'VE BUILT</p>
        <h2>My Projects</h2>
        <p className="section-description">
          A selection of projects that demonstrate my technical
          skills and problem-solving experience.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-top">
              <span className="project-category">{project.category}</span>
              <span className="project-icon">{"</>"}</span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span className="tech-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-footer">
              <span>{project.status}</span>

              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  View on GitHub ↗
                </a>
              )}
            </div>

            <Link
              to={`/projects/${project.id}`}
              className="project-details-link"
            >
              Explore Project <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
