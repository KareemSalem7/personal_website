import '../styles/Home.css';
import GithubIcon from '../../assets/GithubIcon.png';
import LinkedInIcon from '../../assets/LinkedInIcon.png';

import React from 'react';

const Header = ({ activeSection = 'home', onNavigate }) => {
  const isActive = (id) => (activeSection === id ? 'bold' : 'regular');

  const handleClick = (id) => (e) => {
    if (onNavigate) {
      onNavigate(id, e);
    }
  };

  return (
    <header className="Page-header">
      <div className="header-box">
        <h1 className="title">Kareem Salem</h1>
        <div className="menu">
          <ul>
            <li><a className={isActive('home')} href="#home" onClick={handleClick('home')}>Home</a></li>
            <li><a className={isActive('education')} href="#education" onClick={handleClick('education')}>Education</a></li>
            <li><a className={isActive('skills')} href="#skills" onClick={handleClick('skills')}>Skills</a></li>
            <li><a className={isActive('experience')} href="#experience" onClick={handleClick('experience')}>Experience</a></li>
            <li><a className={isActive('projects')} href="#projects" onClick={handleClick('projects')}>Projects</a></li>
          </ul>
        </div>
        <div className="icons">
          <a href="https://github.com/KareemSalem7" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/kareem-salem-20465a229/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
