import '../styles/HomePage.css';
import Header from "../components/Header.js";
import ProfilePicture from '../../assets/ProfilePicture.png';

function HomePage() {
  return (
    <div className="Page">
      <Header/>
      <main className="main-container">
        <div className="about-me-section">
          <h2 style={{ marginBottom: '10px', padding: '0' }}>About Me</h2>
          <p style={{ margin: '0', padding: '0' }}>
          Hola Amigos! I'm a Computer Science Specialist student at the University of Toronto. I have a passion for full stack application
          and enjoy creating solutions to optimize problems aswell as fun games for people to enjoy. I'm Egyptian and for fun I enjoy playing 
          soccer, chess, and cooking. Here you can check out some my education, skills, experience, and projects.
          </p>
          <br/>
          <h2 style={{ marginBottom: '10px', padding: '0' }}>Contact</h2>
          <p style={{ margin: '0', padding: '0' }}>
          Email: kareem.salem2003@gmail.com
          <br/>
          Phone: 289-208-6153
          <br/>
          </p>
        </div>
        <div className="profile-picture-section">
          <img src={ProfilePicture}/>
        </div>
      </main>
    </div>
  );
}


export default HomePage;
