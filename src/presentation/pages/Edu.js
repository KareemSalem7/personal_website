import '../styles/Edu.css';
import Header from "../components/Header.js";
import TeamPhoto from '../../assets/TeamPhoto.JPG';
import YouthfullyLogo from '../../assets/youthfullyLogo.png';

import React from 'react';

function Edu() {
  return (
    <div className="Page">
      <Header activePage={2}/>
      <main className="main-container">
        <div className="education-section">
          <h2 style={{ marginBottom: '10px', padding: '0'}}>Education</h2>
          <p style={{ margin: '0', padding: '0' }}>
            Currently pursuing a Computer Science Specialist program as part of a Bachelor Of Science degree 
            at the University Of Toronto, St. George Campus. Graduating Spring 2026. GPA: 3.75.
          </p>
          <br/>
          <h2 style={{ marginBottom: '10px', padding: '0' }}>Relevant Classes</h2>
          <ul style={{ margin: '0', padding: '0', listStyleType: 'disc' }}>
            <li><a href="https://artsci.calendar.utoronto.ca/course/csc207h1" className="link-style">CSC207: Software Design</a></li>
            <li><a href="https://artsci.calendar.utoronto.ca/course/csc209h1" className="link-style">CSC209: Software Tools & System Programming</a></li>
            <li><a href="https://artsci.calendar.utoronto.ca/course/csc236h1" className="link-style">CSC236: Introduction to Theory of Computation</a></li>
            <li><a href="https://artsci.calendar.utoronto.ca/course/csc258h1" className="link-style">CSC258: Computer Organization</a></li>
            <li><a href="https://artsci.calendar.utoronto.ca/course/csc263h1" className="link-style">CSC263: Data Structures & Analysis</a></li>
            <li><a href="https://artsci.calendar.utoronto.ca/course/csc300h1" className="link-style">CSC300: Computers and Society</a></li>
            <li><a href="https://artsci.calendar.utoronto.ca/course/csc301h1" className="link-style">CSC301: Introduction to Software Engineering</a></li>
            <li><a href="https://artsci.calendar.utoronto.ca/course/csc309h1" className="link-style">CSC309: Programming on the Web</a></li>
            <li><a href="https://artsci.calendar.utoronto.ca/course/csc318h1" className="link-style">CSC318: The Design of Interactive Computational Media</a></li>
            <li><a href="https://artsci.calendar.utoronto.ca/course/csc324h1" className="link-style">CSC324: Principles of Programming Languages</a></li>
            <li><a href="https://artsci.calendar.utoronto.ca/course/csc369h1" className="link-style">CSC369: Operating Systems</a></li>
            <li><a href="https://artsci.calendar.utoronto.ca/course/csc373h1" className="link-style">CSC373: Algorithm Design, Analysis & Complexity</a></li>
            <li><a href="https://artsci.calendar.utoronto.ca/course/csc384h1" className="link-style">CSC384: Introduction to Artificial Intelligence</a></li>
          </ul>
          <br/>
          
          <h2 style={{ marginBottom: '10px', padding: '0' }}>Strongest Competencies</h2>
          <ul style={{ margin: '0', padding: '0', listStyleType: 'none' }}>
            <li><span role="img" aria-label="right arrow">➡️</span> Full Stack Application Development</li>
            <li><span role="img" aria-label="right arrow">➡️</span> DevOps</li>
            <li><span role="img" aria-label="right arrow">➡️</span> Database Management</li>
            <li><span role="img" aria-label="right arrow">➡️</span> Clean Software Architecture</li>
            <li><span role="img" aria-label="right arrow">➡️</span> Front-end Design</li>
          </ul>
          <br/>

          <h2 style={{ marginBottom: '10px', padding: '0' }}>Interests</h2>
          <ul style={{ margin: '0', padding: '0' }}>
            <li style={{ listStyleType: 'none' }}><span role="img" aria-label="star">⭐</span> Financial Technology Solutions</li>
            <li style={{ listStyleType: 'none' }}><span role="img" aria-label="star">⭐</span> Natural Language Processing</li>
            <li style={{ listStyleType: 'none' }}><span role="img" aria-label="star">⭐</span> Web Development</li>
            <li style={{ listStyleType: 'none' }}><span role="img" aria-label="star">⭐</span> Android Mobile Games</li>
          </ul>
        </div>
        
        <div className="extra-section">
          <h2 style={{ marginBottom: '10px', padding: '0'}}>Technology Leadership Initiative</h2>
          <p style={{ margin: '0', padding: '0' }}>
            Selected as one of 30 students from a graduating class of 500 Computer Science applicants to participate in an industry-integrated learning program. 
            Developed an NLP solution for Voiceflow and engaged in workshops focused on enhancing technical and leadership skills. Coordinated by Paul Gries, 
            Michael McCarthy, and other tech leaders and educators at UOFT. <span role="img" aria-label="rocket">🚀</span>
          </p>
          <br/>

          <h2 style={{ marginBottom: '10px', padding: '0' }}>Youthfully: Student Coach</h2>
          <p style={{ margin: '0', padding: '0' }}>
            Guiding high school students to reach their full potential through 1:1 coaching and personalized post-secondary education training
          </p>
          <img src={YouthfullyLogo} style={{ maxWidth: '300px', padding: '20px', height: 'auto', marginBottom: '50px', margin: '0 auto', display: 'block' }} alt="Youthfully Logo" />

          <h2 style={{ marginBottom: '10px', padding: '0' }}>Activities</h2>
          <p style={{ margin: '0', padding: '0' }}>
            I play intermural soccer on the Computer Science Student's Union soccer team.
            Below is a photo of us after a big win!
          </p>
          {/*eslint-disable-next-line jsx-a11y/alt-text*/}
          <img src={TeamPhoto}/>
        </div>
      </main>
    </div>
  );
}

export default Edu;
