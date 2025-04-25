import React from 'react';

const Education = () => {
  const education = [
    {
      school: "University of Cabuyao",
      degree: "Bachelor of Science in Information Technology",
      year: "2021 - 2025",
      description: "Focused on software development, web technologies, and computer technology fundamentals.",
      courses: [
        "Data Structures and Algorithms",
        "Web Development",
        "Database Management",
      ]
    },
    {
      school: "Kapayapaan Integrated School",
      degree: "High School Diploma",
      year: "2015 - 2019",
      description: "Graduated with honors, participated in various programming competitions.",
      courses: [
        "Computer Programming",
        "Mathematics",
        "Physics",
        "English"
      ]
    }
  ];

  return (
    <div className="education-section">
      <h2 className="display-5 mb-4">Education</h2>
      <div className="timeline">
        {education.map((edu, index) => (
          <div key={index} className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">{edu.school}</h3>
              <h4 className="card-subtitle mb-2 text-muted">{edu.degree}</h4>
              <p className="card-text">
                <small className="text-muted">{edu.year}</small>
              </p>
              <p className="card-text">{edu.description}</p>
              <h5>Key Courses:</h5>
              <ul className="list-group list-group-flush">
                {edu.courses.map((course, idx) => (
                  <li key={idx} className="list-group-item">{course}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education; 