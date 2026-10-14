import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const projects = {
  brightbite: {
    title: "BrightBite",
    category: "Mobile Application · Final Year Project",
    description:
      "BrightBite is an Android application designed to help cat owners monitor potential dental health conditions through image analysis.",
    overview:
      "The project combines mobile application development and computer vision to provide users with information about potential dental conditions in cats. It is intended as a monitoring aid, not a replacement for professional veterinary advice.",
    technologies: [
      "Java",
      "Android Studio",
      "Python",
      "Firebase",
      "MobileNetV2",
    ],
    features: [
      "Cat profiles and pet management",
      "Dental image selection and analysis",
      "Predicted condition and confidence score",
      "Saved analysis results and history",
    ],
    screenshots: [
      {
        src: "/images/bb_dashboard.jpg",
        alt: "BrightBite dashboard",
        caption: "Dashboard and Pet Profiles",
        description:
          "Users can access their cat profile that they already add into the application and the saved analysis results through history.",
      },
      {
        src: "/images/bb_analyzation.jpg",
        alt: "BrightBite dental image analysis",
        caption: "Dental Image Analysis",
        description:
          "After navigating to the cat profile, the user are required to choose any cat they wanted to do dental check and will be directed to the image analysis section. Users select or capture an image of their cat's teeth for analysis.",
      },
      {
        src: "/images/bb_analyzation2.jpg",
        images:["/images/bb_analyzation2.jpg","/images/bb_description.jpg"],
        alt: "BrightBite dental analysis result",
        caption: "Analysis Results",
        description:
          "The application presents the predicted dental condition, confidence score, and relevant guidance.",
      },
      {
        src: "/images/bb_history.jpg",
        alt: "BrightBite analysis history",
        caption: "Analysis History",
        description:
          "Users can revisit saved results and review previous analyses.",
      },
    ],
  },

  "course-registration": {
    title: "Smart Course Registration System",
    category: "Web Application · Academic Project",
    description:
      "A web-based system designed to support course selection and administrative workflows.",
    overview:
      "The system was developed to organize course registration and facilitate communication between students and staff.",
    technologies: ["Laravel", "PHP", "MySQL"],
    features: [
      "Student and staff roles",
      "Course selection",
      "Waiting list management",
      "Administrative approval workflows",
    ],
    screenshots: [
      {
        src: "/images/studentDashboard.jpg",
        alt: "Student dashboard of the course registration system",
        caption: "Student Dashboard",
        description:
          "Students see their degree progress and registered credit hours, and can start course registration or chat with academic staff.",
      },
      {
        src: "/images/sectionEnrollment.jpg",
        alt: "Course section selection page",
        caption: "Section Selection",
        description:
          "Students browse the sections of a course, check lecturers and available seats, and enroll or unenroll. The system prevents enrolling in more than one section of the same course.",
      },
      {
        src: "/images/waitlistManagement.jpg",
        alt: "Waitlist management page",
        caption: "Waitlist Management",
        description:
          "Students can join a waitlist for a full course, track their queue position and status, and leave the waitlist at any time.",
      },
      {
        src: "/images/academicDashboard.jpg",
        alt: "Academic staff course approvals dashboard",
        caption: "Academic Staff Approvals",
        description:
          "Academic staff review student registrations and approve or reject them from a single dashboard.",
      },
    ],
  },
};


function ScreenshotCard({ screenshot }) {
  const images = screenshot.images ?? [screenshot.src];
  const total = images.length;
  const hasMultiple = total > 1;

  const [index, setIndex] = useState(0);
  const showNext = () => setIndex((current) => (current + 1) % total);

  const image = (
    <img
      src={images[index]}
      alt={hasMultiple ? `${screenshot.alt} (${index + 1} of ${total})` : screenshot.alt}
      className="project-screenshot"
    />
  );

  return (
    <figure className="screenshot-card">
      {hasMultiple ? (
        <>
          <button
            type="button"
            className="screenshot-button"
            onClick={showNext}
            aria-label={`Show next image of ${screenshot.caption}`}
          >
            {image}
            <span className="screenshot-badge">
              Click for next · {index + 1}/{total}
            </span>
          </button>

          <div className="screenshot-dots">
            {images.map((src, i) => (
              <button
                type="button"
                key={src}
                className={`screenshot-dot${i === index ? " active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1} of ${total}`}
              />
            ))}
          </div>
        </>
      ) : (
        image
      )}

      <figcaption>
        <h3>{screenshot.caption}</h3>
        <p>{screenshot.description}</p>
      </figcaption>
    </figure>
  );
}

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects[projectId];

  if (!project) {
    return (
      <main className="project-details">
        <Navbar />
        <div className="project-details-content">
          <h1>Project Not Found</h1>
          <p>Sorry, we couldn't find that project.</p>
          <Link to="/#projects">Back to Projects</Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Navbar />

      <main className="project-details">
        <header className="project-details-hero">
          <p className="section-label">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </header>

        <div className="project-details-content">
          <section className="case-study-section">
            <h2>Project Overview</h2>
            <p>{project.overview}</p>
          </section>

          <section className="case-study-section">
            <h2>Key Features</h2>
            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          {project.screenshots.length > 0 && (
            <section className="case-study-section">
              <h2>Application Screenshots</h2>
              <div className="screenshot-gallery">
                {project.screenshots.map((screenshot) => (
                  <ScreenshotCard
                    screenshot={screenshot}
                    key={screenshot.caption}
                  />
                ))}
              </div>
            </section>
          )}

          <section className="case-study-section">
            <h2>Technologies Used</h2>
            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span className="tech-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <Link to="/#projects" className="back-to-projects">
            ← Back to Projects
          </Link>
        </div>
      </main>
    </>
  );
}

export default ProjectDetails;
