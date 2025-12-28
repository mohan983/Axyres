export default function Template3({ data = {} }) {
  const getFullName = () => {
    return data.personalInfo?.name || "Full Name";
  };
  
  const hasSkills = data.skills?.some(skill => skill && skill.trim());
  const hasLanguages = data.languages?.some(lang => lang && lang.trim());
  const hasExperience = data.experience?.length > 0;
  const hasProjects = data.projects?.length > 0;
  const hasEducation = data.education?.length > 0;
  
  return (
    <div className="template-minimal">
      <header className="resume-header">
        <h1 className="name">{getFullName()}</h1>
        <p className="title">{data.personalInfo?.title || "Professional Title"}</p>
        
        <div className="contact-info">
          {data.personalInfo?.email && (
            <div className="contact-item">
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo?.phone && (
            <div className="contact-item">
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo?.location && (
            <div className="contact-item">
              <span>{data.personalInfo.location}</span>
            </div>
          )}
        </div>
      </header>

      {data.personalInfo?.summary && (
        <section className="section">
          <h2 className="section-title">Summary</h2>
          <p className="summary-text">{data.personalInfo.summary}</p>
        </section>
      )}

      {hasExperience && (
        <section className="section">
          <h2 className="section-title">Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="experience-item">
              <div className="exp-role">{exp.role || "Position"}</div>
              <div className="exp-company">{exp.company || "Company"}</div>
              <div className="exp-details">
                {exp.location && <span>{exp.location}</span>}
                {exp.startDate && (
                  <span>
                    {exp.startDate} - {exp.endDate || "Present"}
                  </span>
                )}
              </div>
              {exp.description && <p className="exp-description">{exp.description}</p>}
            </div>
          ))}
        </section>
      )}

      <div className="two-column-section">
        {hasEducation && (
          <div className="left-col">
            <section className="section">
              <h2 className="section-title">Education</h2>
              {data.education.map((edu, i) => (
                <div key={i} className="education-item">
                  <div className="edu-degree">{edu.degree || "Degree"}</div>
                  <div className="edu-school">{edu.school || "Institution"}</div>
                  <div className="edu-details">
                    {edu.location && <span>{edu.location}</span>}
                    {edu.year && <span> • {edu.year}</span>}
                  </div>
                </div>
              ))}
            </section>
          </div>
        )}

        {hasSkills && (
          <div className="right-col">
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
          </div>
        )}
      </div>

      {hasProjects && (
        <section className="section">
          <h2 className="section-title">Projects</h2>
          {data.projects.map((project, i) => (
            <div key={i} className="project-item">
              <div className="project-title">{project.title || "Project Title"}</div>
              {project.description && <p className="project-description">{project.description}</p>}
              {project.technologies && <div className="project-tech">{project.technologies}</div>}
            </div>
          ))}
        </section>
      )}

      {hasLanguages && (
        <section className="section">
          <h2 className="section-title">Languages</h2>
          <div className="languages">
            {data.languages
              .filter(lang => lang && lang.trim())
              .map((lang, i) => (
                <div key={i} className="language-item">
                  <span className="language-name">{lang}</span>
                </div>
              ))}
          </div>
        </section>
      )}
    </div>
  );
}