export default function Template1({ data = {} }) {
  // Helper function to get full name
  const getFullName = () => {
    return data.personalInfo?.name || "John Doe";
  };
  
  const hasSkills = data.skills?.some(skill => skill && skill.trim());
  const hasLanguages = data.languages?.some(lang => lang && lang.trim());
  const hasExperience = data.experience?.length > 0;
  const hasProjects = data.projects?.length > 0;
  const hasCertifications = data.certifications?.length > 0;
  const hasEducation = data.education?.length > 0;
  
  return (
    <div className="template-modern">
      <header className="resume-header">
        <h1 className="name">{getFullName()}</h1>
        <p className="title">{data.personalInfo?.title || "Software Engineer"}</p>
        <div className="contact-info">
          {data.personalInfo?.email && (
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo?.phone && (
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo?.location && (
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>{data.personalInfo.location}</span>
            </div>
          )}
        </div>
      </header>

      {data.personalInfo?.summary && (
        <section className="section">
          <h2 className="section-title">Professional Summary</h2>
          <p className="summary-text">{data.personalInfo.summary}</p>
        </section>
      )}

      <div className="grid-layout">
        <div className="left-column">
          {hasExperience && (
            <section className="section">
              <h2 className="section-title">Work Experience</h2>
              {data.experience.map((exp, i) => (
                <div key={i} className="experience-item">
                  <div className="exp-header">
                    <div>
                      <div className="exp-role">{exp.role || "Software Engineer"}</div>
                      <div className="exp-company">{exp.company || "Company Name"}</div>
                    </div>
                    {(exp.startDate || exp.endDate) && (
                      <div className="exp-dates">
                        {exp.startDate && `${exp.startDate} - ${exp.endDate || "Present"}`}
                      </div>
                    )}
                  </div>
                  {exp.location && <div className="exp-location">{exp.location}</div>}
                  {exp.description && <p className="exp-description">{exp.description}</p>}
                </div>
              ))}
            </section>
          )}

          {hasProjects && (
            <section className="section">
              <h2 className="section-title">Projects</h2>
              {data.projects.map((project, i) => (
                <div key={i} className="project-item">
                  <div className="project-title">
                    <span>{project.title || "Project Title"}</span>
                  </div>
                  {project.description && <p className="project-description">{project.description}</p>}
                  {project.technologies && <div className="project-tech">Technologies: {project.technologies}</div>}
                </div>
              ))}
            </section>
          )}
        </div>

        <div className="right-column">
          {hasEducation && (
            <section className="section">
              <h2 className="section-title">Education</h2>
              {data.education.map((edu, i) => (
                <div key={i} className="education-item">
                  <div className="edu-degree">{edu.degree || "Bachelor's Degree"}</div>
                  <div className="edu-school">{edu.school || "University Name"}</div>
                  <div className="edu-details">
                    {edu.startDate && `${edu.startDate} - ${edu.endDate || "Present"}`}
                    {edu.gpa && ` • GPA: ${edu.gpa}`}
                  </div>
                  {edu.location && <div className="edu-location">{edu.location}</div>}
                </div>
              ))}
            </section>
          )}

          {hasSkills && (
            <section className="section">
              <h2 className="section-title">Skills</h2>
              <div className="skills-container">
                {data.skills
                  .filter(skill => skill && skill.trim())
                  .flatMap((skill, i) => 
                    skill.split(',').map((s, idx) => (
                      <div key={`${i}-${idx}`} className="skill-tag">
                        {s.trim()}
                      </div>
                    ))
                  )}
              </div>
            </section>
          )}

          {hasCertifications && (
            <section className="section">
              <h2 className="section-title">Certifications</h2>
              {data.certifications.map((cert, i) => (
                <div key={i} className="cert-item">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-issuer">{cert.issuer} • {cert.date}</div>
                </div>
              ))}
            </section>
          )}

          {hasLanguages && (
            <section className="section">
              <h2 className="section-title">Languages</h2>
              <div className="languages-container">
                {data.languages
                  .filter(lang => lang && lang.trim())
                  .map((lang, i) => (
                    <div key={i} className="language-tag">
                      {lang}
                    </div>
                  ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}