import '../styles/Home.css';
import GithubIcon from '../../assets/GithubIcon.png';
import LinkedInIcon from '../../assets/LinkedInIcon.png';

import React from 'react';

const Header = ({ activePage }) => {
  const getBoldTitle = (page) => {
    if (activePage === page) {
      return 'bold';
    } else {
      return 'regular';
    }
  };

  return (
    <header className="Page-header">
      <div className="header-box">
        <h1 className="title">Kareem Salem</h1>
        <div className="menu">
          <ul>
            <li><a className={getBoldTitle(1)} href="/">Home</a></li>
            <li><a className={getBoldTitle(2)} href="edupage">Education</a></li>
            <li><a className={getBoldTitle(3)} href="skipage">Skills</a></li>
            <li><a className={getBoldTitle(4)} href="exppage">Experience</a></li>
            <li><a className={getBoldTitle(5)} href="projectspage">Projects</a></li>
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
