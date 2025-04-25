import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <p className="mb-0 text-muted">
              © {new Date().getFullYear()} Leomar Escobin. All rights reserved.
            </p>
          </div>
          <div className="col-auto">
            <div className="d-flex gap-3">
              <a href="https://github.com/KuroKage-001" className="text-muted text-decoration-none">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/leomar-escobin-738563188/" className="text-muted text-decoration-none">
                LinkedIn
              </a>
              <a href="leomaresc853@gmail.com" className="text-muted text-decoration-none">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 