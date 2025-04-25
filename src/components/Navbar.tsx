import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container py-2">
        <Link className="navbar-brand fw-bold" to="/">
          <span className="text-primary">LE</span>
        </Link>
        
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link
                className={`nav-link px-3 ${isActive('/') ? 'active' : ''}`}
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 ${isActive('/about') ? 'active' : ''}`}
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 ${isActive('/projects') ? 'active' : ''}`}
                to="/projects"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 ${isActive('/education') ? 'active' : ''}`}
                to="/education"
                onClick={() => setIsOpen(false)}
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 ${isActive('/contact') ? 'active' : ''}`}
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 