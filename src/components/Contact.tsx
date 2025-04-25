import React from 'react';

const Contact = () => {
  const contactInfo = {
    email: "leomaresc853@gmail.com ",
    github: "https://github.com/KuroKage-001",
    linkedin: "https://www.linkedin.com/in/leomar-escobin-738563188/",
    location: "Calamba City, Laguna, Philippines"
  };

  return (
    <div className="contact-section">
      <h2 className="display-5 mb-4">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="text-center mb-4">
                <h3>Let's Connect!</h3>
                <p className="lead">
                  Feel free to reach out for collaborations or just a friendly chat
                </p>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-envelope-fill fs-4 me-3"></i>
                    <div>
                      <h4 className="mb-0">Email</h4>
                      <a href={`mailto:${contactInfo.email}`} className="text-decoration-none">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-geo-alt-fill fs-4 me-3"></i>
                    <div>
                      <h4 className="mb-0">Location</h4>
                      <p className="mb-0">{contactInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="text-center">
                <h4 className="mb-3">Social Links</h4>
                <div className="d-flex justify-content-center gap-3">
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark"
                  >
                    <i className="bi bi-github me-2"></i>
                    GitHub
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    <i className="bi bi-linkedin me-2"></i>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 