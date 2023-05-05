import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <div className="header-box">
          <h1 className="title"> Kareem Salem </h1>
          <nav className="menu">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#education-skills">Education/Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        {/*Main content goes here */}
      </main>
    </div>
  );
}

export default HomePage;
