import '../styles/Edu.css';
import Header from "../components/Header.js";
import TeamPhoto from '../../assets/TeamPhoto.JPG';

function EduSki() {
  return (
    <div className="Page">
      <Header/>
      <main className="main-container">
        <div className="education-section">
        <h2 style={{ marginBottom: '10px', padding: '0', textAlign: 'center'}}>Education</h2>
        <p style={{ margin: '0', padding: '0' }}>
        I am currently pursuing a Computer Science Specialist program as part of a Bachelor Of Science degree 
        at the University Of Toronto, St. George Campus. Graduating summer 2025. GPA: 3.75.
        </p>
        <br/>
        <h2 style={{ marginBottom: '10px', padding: '0' }}>Relevant Classes</h2>
        <ul style={{ margin: '0', padding: '0', listStyleType: 'disc' }}>
          <li><a href="https://artsci.calendar.utoronto.ca/course/csc207h1">CSC207: Software Design</a></li>
          <li><a href="https://artsci.calendar.utoronto.ca/course/csc209h1">CSC209: Software Tools & System Programming</a></li>
          <li><a href="https://artsci.calendar.utoronto.ca/course/csc236h1">CSC236: Introduction to Theory of Computation</a></li>
          <li><a href="https://artsci.calendar.utoronto.ca/course/csc258h1">CSC258: Computer Organization</a></li>
          <li><a href="https://artsci.calendar.utoronto.ca/course/csc263h1">CSC263: Data Structures & Analysis</a></li>
        </ul>
        <h2 style={{ marginBottom: '10px', padding: '0' }}>Interests</h2>
        <ul style={{ margin: '0', padding: '0', listStyleType: 'disc' }}>
          <li>Artificial Intelligence</li>
          <li>Natural Language Processing</li>
          <li>Data Science</li>
        </ul>
        </div>
        <div className="extra-section">
        <h2 style={{ marginBottom: '10px', padding: '0', textAlign: 'center'}}>Technology Leadership Initiative</h2>
          <p style={{ margin: '0', padding: '0' }}>
          Cohort of Computer Science students that I'm a part of where we engange in industry-integrated
          learning and workshops focused on building technical and leadership skills. Coordinated 
          by Paul Gries and Michael McCarthy among other educators at UOFT.
          </p>
          <br/>
          <h2 style={{ marginBottom: '10px', padding: '0' }}>Activities</h2>
          <p style={{ margin: '0', padding: '0' }}>
          I play intermural soccer as a team member on the Computer Science Student's Union soccer team.
          Below is a photo of us after a big win!
          </p>
          <img src={TeamPhoto} alt="Computer Science Student's Union soccer team after winning the championship"/>
        </div>
      </main>
    </div>
  );
}

export default EduSki;