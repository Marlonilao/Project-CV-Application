const LivePreview = ({ CVdata }) => {
  return (
    <div>
      <div>
        <h1>{CVdata.fullName}</h1>
        <p>{CVdata.email}</p>
        <p>{CVdata.phone}</p>
      </div>
      <div>
        <h2>ABOUT ME</h2>
        <p>{CVdata.aboutMe}</p>
      </div>
      <div>
        <h2>EXPERIENCE</h2>
        <ul>
          {CVdata.experience.map((exp) => (
            <li key={exp.id}>
              <div>
                <span>{exp.experienceDetails.year}</span>
                <p>{exp.experienceDetails.company}</p>
                <p>{exp.experienceDetails.jobTitle}</p>
                <ul>
                  {exp.experienceDetails.description.map((desc) => (
                    <li key={desc.id}>{desc.text}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>EDUCATION</h2>
        <>
          {CVdata.education.map((edu) => (
            <div key={edu.id}>
              <p>
                <span>{edu.details.year}</span>
                {edu.details.school}
              </p>
              <p>{edu.details.degree}</p>
            </div>
          ))}
        </>
      </div>
      <div>
        <h2>SKILLS</h2>
        <ul>
          {CVdata.skills.map((skill) => (
            <li key={skill.id}>{skill.text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LivePreview
