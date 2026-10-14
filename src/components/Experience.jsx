
function Experience() {
  return (
    <section
      className="experience section-padding"
      id="experience"
    >
      <div className="section-heading">
        <p className="section-label">MY JOURNEY</p>
        <h2>Experience</h2>
        <p className="section-description">
          My industrial training experience and professional development.
        </p>
      </div>

      <div className="experience-list">
        <article className="experience-card">
          <div className="experience-marker">
            <span></span>
          </div>

          <div className="experience-content">
            <p className="experience-period">
              September 2025 – February 2026
            </p>

            <h3>IT Intern</h3>

            <h4>Antara Steel Mills Sdn Bhd</h4>

            <p className="experience-location">
              Labuan, Malaysia
            </p>

            <p className="experience-description">
              Completed a 20-week industrial training placement
              within the IT department, gaining practical exposure
              to workplace technology and IT operations.
            </p>

            <div className="experience-tags">
              <span>IT Operations</span>
              <span>Technical Support</span>
              <span>Workplace Collaboration</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;