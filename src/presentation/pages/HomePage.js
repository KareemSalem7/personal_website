import '../styles/App.css';
import GithubIcon from '../../assets/GithubIcon.png';
import LinkedInIcon from '../../assets/LinkedInIcon.png';
import ProfilePicture from '../../assets/ProfilePicture.png';

function HomePage() {
  return (
    <div className="Page">
      <header className="Page-header">
        <div className="header-box">
          <h1 className="title"> Kareem Salem </h1>
          <nav className="menu">
            <ul>
              <li><a href="home">Home</a></li>
              <li><a href="eduskipage">Education/Skills</a></li>
              <li><a href="exppage">Experience</a></li>
              <li style={{marginRight: '200px'}}><a href="projectspage">Projects </a></li>
              <li>
                <a href="https://github.com/KareemSalem7" target="_blank">
                  <img src={GithubIcon} style={{ width: '50px', height: '50px' }}/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kareem-salem-20465a229/" target="_blank">
                  <img src={LinkedInIcon} style={{ width: '50px', height: '50px' }}/>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        {/*Main content goes here */}
        <img src={ProfilePicture}/>
      </main>
    </div>
  );
}

export default HomePage;
