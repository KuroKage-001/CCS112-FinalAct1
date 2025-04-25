import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="row align-items-center min-vh-75 py-5">
        <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
          <div className="position-relative">
            <div className="card p-4 rounded-4 shadow-lg border-0">
              <img
                src="https://avatars.githubusercontent.com/u/159998765?v=4"
                alt="Profile"
                className="rounded-circle mx-auto mb-4"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <div className="text-center">
                <h2 className="h3 mb-3">Leomar Escobin</h2>
                <p className="text-muted mb-4">Full Stack Developer</p>
                <div className="d-flex justify-content-center gap-3">
                  <a href="https://github.com/KuroKage-001" className="btn btn-outline-primary rounded-pill px-4">
                    GitHub
                  </a>
                  <Link to="/contact" className="btn btn-primary rounded-pill px-4">
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-lg-1">
          <h1 className="display-4 mb-4">
            Crafting Digital Experiences
          </h1>
          <p className="lead mb-4 text-muted">
            I'm a passionate web developer specializing in creating modern, responsive, and user-friendly applications
            that solve real-world problems.
          </p>
          <div className="d-flex flex-wrap gap-3 mb-5">
            <div className="py-2 px-4 bg-light rounded-pill text-primary fw-medium">React</div>
            <div className="py-2 px-4 bg-light rounded-pill text-primary fw-medium">Node.js</div>
            <div className="py-2 px-4 bg-light rounded-pill text-primary fw-medium">TypeScript</div>
            <div className="py-2 px-4 bg-light rounded-pill text-primary fw-medium">Full Stack</div>
          </div>
          <div className="d-flex gap-4">
            <Link to="/projects" className="btn btn-primary rounded-pill px-4 py-3">
              View My Work
            </Link>
            <Link to="/about" className="btn btn-outline-primary rounded-pill px-4 py-3">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 