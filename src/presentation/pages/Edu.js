import '../styles/Edu.css';
import Header from "../components/Header.js";
import TeamPhoto from '../../assets/TeamPhoto.JPG';
import YouthfullyLogo from '../../assets/youthfullyLogo.png';
import CourseGraph from '../../assets/CourseographyGraph.png';
import TLIPhoto from '../../assets/TLIPhoto.png';

import React from 'react';

function Edu({ showHeader = true }) {
  return (
    <div className="Page">
      {showHeader && <Header activePage={2}/>}
      <div className="section-heading">Education</div>
      <main className="main-container">
        <div className="education-top">
          <h2 className="section-title" style={{ marginBottom: '6px' }}>Education</h2>
          <p style={{ margin: '0', padding: '0' }}>
            Graduated with a Bachelor of Science in Computer Science (Specialist) from the University of Toronto, St. George Campus, in Spring 2026 with a GPA of 3.75.
          </p>
        </div>

        <div className="section-card full-width">
          <h2 className="section-title">Relevant Courses Taken</h2>
          <img
            src={CourseGraph}
            alt="Course prerequisite tree"
            className="course-graph-img"
          />
          <ul className="course-list-small">
            <li>CSC110Y1: Foundations of Computer Science I</li>
            <li>CSC111H1: Foundations of Computer Science II</li>
            <li>CSC207H1: Software Design</li>
            <li>CSC236H1: Introduction to the Theory of Computation</li>
            <li>CSC258H1: Computer Organization</li>
            <li>CSC209H1: Software Tools and Systems Programming</li>
            <li>CSC263H1: Data Structures and Analysis</li>
            <li>CSC301H1: Introduction to Software Engineering</li>
            <li>CSC309H1: Programming on the Web</li>
            <li>CSC318H1: Interactive Computational Media</li>
            <li>CSC343H1: Introduction to Databases</li>
            <li>CSC300H1: Computers and Society</li>
            <li>CSC369H1: Operating Systems</li>
            <li>CSC373H1: Algorithm Design and Analysis</li>
            <li>CSC384H1: Introduction to Artificial Intelligence</li>
            <li>CSC364H1: Foundations of Computer Security</li>
            <li>CSC486H1: Knowledge Representation and Reasoning</li>
            <li>CSC443H1: Database Systems Technology</li>
            <li>CSC458H1: Computer Networks</li>
          </ul>
        </div>

        <div className="edu-grid">
          <div className="column">

            <div className="section-card">
              <h2 className="section-title" style={{ marginBottom: '10px' }}>Technology Leadership Initiative</h2>
              <p style={{ margin: '0', padding: '0' }}>
                Selected as one of 30 students from a graduating class of 500 Computer Science applicants to participate in an industry-integrated learning program. 
                Developed an NLP solution for Voiceflow and engaged in workshops focused on enhancing technical and leadership skills. Coordinated by Paul Gries, 
                Michael McCarthy, and other tech leaders and educators at UOFT. <span role="img" aria-label="rocket">🚀</span>
              </p>
              <img src={TLIPhoto} style={{ width: '100%', height: 'auto', marginTop: '12px', borderRadius: '10px' }} alt="Technology Leadership Initiative" />
            </div>

            <div className="section-card">
              <h2 className="section-title" style={{ marginBottom: '10px' }}>Youthfully: Student Coach</h2>
              <p style={{ margin: '0', padding: '0' }}>
              Guided high school students pursuing Computer Science through individualized mentorship and personalized post-secondary preparation, helping them reach their full academic and career potential.
              </p>
              <img src={YouthfullyLogo} style={{ maxWidth: '300px', padding: '20px', height: 'auto', margin: '0 auto', display: 'block' }} alt="Youthfully Logo" />
            </div>

          </div>

          <div className="column">
            <div className="pill-card">
              <h3 className="pill-title">Strongest Competencies</h3>
              <div className="pill-wrap">
                <span className="pill">Full Stack Application Development</span>
                <span className="pill">DevOps</span>
                <span className="pill">Database Management</span>
                <span className="pill">Clean Software Architecture</span>
                <span className="pill">Front-end Design</span>
              </div>
            </div>

            <div className="pill-card">
              <h3 className="pill-title">Interests</h3>
              <div className="pill-wrap">
                <span className="pill">Financial Technology Solutions</span>
                <span className="pill">Natural Language Processing</span>
                <span className="pill">Web Development</span>
                <span className="pill">Android Mobile Games</span>
              </div>
            </div>

            <div className="section-card">
              <h2 className="section-title" style={{ marginBottom: '10px' }}>Activities</h2>
              <p style={{ margin: '0', padding: '0' }}>
                I like to play soccer. Here is a photo of me on the Computer Science Student's Union soccer team after a big win!
              </p>
              {/*eslint-disable-next-line jsx-a11y/alt-text*/}
              <img src={TeamPhoto} style={{ width: '100%', height: 'auto', marginTop: '12px' }}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Edu;
