import '../styles/HomePage.css';
import GithubIcon from '../../assets/GithubIcon.png';
import LinkedInIcon from '../../assets/LinkedInIcon.png';

import React from 'react';

const Header = () => {
  return (
    <header className="Page-header">
      <div className="header-box">
        <h1 className="title">Kareem Salem</h1>
        <nav className="menu">
          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="edupage">Education</a></li>
            <li><a href="skipage">Skills</a></li>
            <li><a href="exppage">Experience</a></li>
            <li style={{ marginRight: '200px' }}><a href="projectspage">Projects</a></li>
            <li>
              <a href="https://github.com/KareemSalem7" target="_blank" rel="noopener noreferrer">
                <img src={GithubIcon} style={{ width: '50px', height: '50px' }} alt="GitHub" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kareem-salem-20465a229/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} style={{ width: '50px', height: '50px' }} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
