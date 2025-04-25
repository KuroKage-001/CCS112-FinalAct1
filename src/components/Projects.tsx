import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, and shopping cart functionality.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filter",
        "Shopping cart and checkout process",
        "Admin dashboard for product management"
      ],
      github: "https://github.com/"
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with real-time updates and collaborative features.",
      technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
      features: [
        "Real-time task updates",
        "Team collaboration features",
        "Drag and drop interface",
        "Task categorization and filtering"
      ],
      github: "https://github.com/"
    },
  ];

  return (
    <div className="projects-section">
      <h2 className="display-5 mb-4">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                
                <h5 className="mt-3">Technologies Used:</h5>
                <div className="mb-3">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="badge bg-primary me-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>

                <h5>Key Features:</h5>
                <ul className="list-group list-group-flush mb-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="list-group-item">{feature}</li>
                  ))}
                </ul>

                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline-primary"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 