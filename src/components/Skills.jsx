
function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "C++", "Java", "Python", "PHP"],
    },
    {
      title: "Frontend Technologies",
      skills: ["HTML", "CSS", "React"],
    },
    {
      title: "Frameworks & Backend",
      skills: ["Laravel"],
    },
    {
      title: "Database Management",
      skills: ["MySQL", "Firebase"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Android Studio", "Figma"],
    },
  ];

  return (
    <section className="skills section-padding" id="skills">
      <div className="section-heading">
        <p className="section-label">MY TECHNICAL TOOLKIT</p>
        <h2>Skills & Technologies</h2>
        <p className="section-description">
          Technologies and tools I've used throughout my
          academic projects, internship, and personal learning.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;