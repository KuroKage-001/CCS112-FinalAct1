import React from 'react';

const About = () => {
  return (
    <div className="about-section">
      <h2 className="display-5 mb-4">About Me</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Background</h3>
              <p className="card-text">
                I'm a dedicated web developer with a passion for creating innovative digital solutions.
                My journey in technology began with a curiosity about how websites work, which led me
                to pursue a career in web development.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Skills</h3>
              <ul className="list-unstyled">
                <li>✓ Frontend: React, HTML5, CSS3, JavaScript</li>
                <li>✓ Backend: Node.js, Express</li>
                <li>✓ Database: MongoDB, MySQL</li>
                <li>✓ Tools: Git, VS Code, npm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Hobbies & Interests</h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li>📚 Reading tech blogs and books</li>
                    <li>🎮 Gaming</li>
                    <li>🏃‍♂️ Fitness and outdoor activities</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li>🎵 Music</li>
                    <li>✈️ Traveling</li>
                    <li>👨‍💻 Contributing to open source</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 