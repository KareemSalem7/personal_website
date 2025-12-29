import "../styles/Proj.css";
import Header from "../components/Header.js";
import React from 'react';
import petImage from '../../assets/petImage.png';
import promptlyImage from '../../assets/promptlyImage.png';
import fantasyFootballImg from '../../assets/fantasyFootballFC.png';

function Proj({ showHeader = true }) {
  return (
    <div className="Page">
      {showHeader && <Header activePage={5}/>}
      <div className="section-heading">Projects</div>
      <div className="project">
        <div className="project-card">
          <h2>Fantasy Football FC</h2>
          <div className="project-item">
            <p className="left">C++, Python, PostgreSQL, Docker, Next.js, Tailwind CSS</p>
            <p className="right">Feb. 2025 - Present</p>
          </div>
          <p>
            <ul>
              <li>Created a full-stack Premier League fantasy sports app with Google OAuth, team drafting, player trades, and a global leaderboard.</li>
              <li>Integrated AI-driven features including team performance and bot trade evaluations, raising weekly roster activity by 30–50%.</li>
              <li>Built scheduled GitHub Actions workflow to update 700+ players’ data for up-to-date standings and player performance records.</li>
            </ul>
          </p>
          <div className="web-app-preview" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h5 style={{ marginRight: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', marginBottom:"60px" }}>
              <a href="https://fantasyfootballfc.netlify.app/" target="_blank" rel="noopener noreferrer" className="link-style">
                Check it out here <span role="img" aria-label="right arrow">➡️</span>
              </a>
            </h5>
            <a href="https://fantasyfootballfc.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img 
                src={fantasyFootballImg}
                alt="Fantasy Football FC Preview" 
                className="web-app-image"
                style={{ maxHeight: '200px', width: 'auto', marginBottom: '20px', cursor: 'pointer' }}
              />
            </a>
          </div>
        </div>

        <div className="project-card">
          <h2>
            <a href="https://csc309-petpal-client.vercel.app/" className="link-style">Pet Adoption Web Application</a>
          </h2>
          <div className="project-item">
            <p className="left">Web Design Course Cumulative Project - CSC309h1</p>
            <p className="right">Sep 2023 - Dec 2023</p>
          </div>
          <p>
            <ul>
              <li>
                Developed the backend of the application using Django and the Django REST framework to create a robust API that handles user authentication, pet listings, and adoption requests.
              </li>
              <li>
                Built the frontend using React and Bootstrap, integrating user-friendly features such as dynamic pet search, shelter registration, and application forms for pet adoption.
              </li>
              <li>
                Users can sign in as either a pet shelter to post pets available for adoption, or as a pet seeker to browse the selection of available pets and apply for adoption.
              </li>
            </ul>
          </p>

          <div className="web-app-preview" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h5 style={{ marginRight: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', marginBottom:"100px" }}>
              <a href="https://csc309-petpal-client.vercel.app/" target="_blank" rel="noopener noreferrer" className="link-style">
                Check it out here <span role="img" aria-label="right arrow">➡️</span>
              </a>
            </h5>
            <a href="https://csc309-petpal-client.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img 
                src={petImage}
                alt="Pet Adoption Web Application Preview" 
                className="web-app-image"
                style={{ maxHeight: '200px', width: 'auto', marginBottom: '20px', cursor: 'pointer' }}
              />
            </a>
          </div>
        </div>

        <div className="project-card">
          <h2>
            <a href="https://github.com/KareemSalem7/voice-flow" className="link-style">Promptly Chatbot Analyser</a>
          </h2>
          <div className="project-item">
            <p className="left">Natural Language Understanding Application</p>
            <p className="right">September - December 2022</p>
          </div>
          <p style={{ margin: '0 0 8px 0', fontStyle: 'italic' }}>
            AI Chatbot Analyser | TLI Competition Finalist | JavaScript, AWS, Jest, Babel, Framer Motion, NLP
          </p>
          <p>
            <ul>
              <li>
                Collaborated with 4 TLI classmates to create an end-to-end Natural Language Understanding application that enables companies to analyze customer intent and provide curated responses in chatbot conversations.
              </li>
              <li>
                Innovated algorithms utilizing tree data structures, leveraged Spring Boot's data flow capabilities, and implemented extensive JUnit tests to ensure robust functionality and accuracy.
              </li>
              <li>
                Took the lead in frontend development, designing visually appealing and intuitive pages using React and Bootstrap, enhancing user experience and application usability.
              </li>
              <li>
                Produced a final product that led to a 15-25% efficiency increase in Voiceflow chatbot sale conversions.
              </li>
            </ul>
          </p>

          <div className="web-app-preview" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h5 style={{ marginRight: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', marginBottom:"100px" }}>
              <a href="https://nluchatbotpromptanalyzer.netlify.app/" target="_blank" rel="noopener noreferrer" className="link-style">
                Check it out here <span role="img" aria-label="right arrow">➡️</span>
              </a>
            </h5>
            <a href="https://nluchatbotpromptanalyzer.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img 
                src={promptlyImage}
                alt="Promptly Chatbot Analyser Preview" 
                className="web-app-image"
                style={{ maxHeight: '200px', width: 'auto', marginBottom: '20px', cursor: 'pointer' }}
              />
            </a>
          </div>
        </div>

        <div className="project-card">
          <h2>
            <a href="https://github.com/KareemSalem7/Quick-Stocks" className="link-style">Quick Stocks</a>
          </h2>
          <div className="project-item">
            <p className="left">Financial Chrome Extension</p>
            <p className="right">June - August 2022</p>
          </div>
          <p style={{ margin: '0 0 8px 0', fontStyle: 'italic' }}>
            Quick Stocks | Chrome DevTools, JavaScript, HTML/CSS, FinTech
          </p>
          <p>
            <ul>
              <li>
                Developed a financial Chrome extension that, given a company's dedicated website (e.g., web article, online store), provides investment guidance through quantitative calculations and links to public financial data.
              </li>
              <li>
                Leveraged the Alpha Vantage API to access public financial records and calculate balance sheet/income statement ratios, simplifying investment decisions.
              </li>
              <li>
                Empowered users to make informed investment decisions, removing 1-3 hours of manual calculations and financial record analysis.
              </li>
            </ul>
          </p>
        </div>

        <div className="project-card">
          <h2>
            <a href="https://github.com/KareemSalem7/Tiktok-Searcher-Web-Application" className="link-style">TikTok Video Searcher</a>
          </h2>
          <div className="project-item">
            <p className="left">Social Media Tool</p>
            <p className="right">May - June 2022</p>
          </div>
          <p>
            <ul>
              <li>
                Created a PyWebIO application that outputs a record of liked TikTok videos given a related account or keyword.
              </li>
              <li>
                Utilized the TikTok API to process liked TikTok videos, saving users 5-30 minutes by automating the tedious task of scrolling through content.
              </li>
            </ul>
          </p>
        </div>

        <div className="project-card">
          <h2>
            <a href="https://www.youtube.com/playlist?list=PLBHp7S97SWLlt4wMLGF1zQiErHrfdU5q3" className="link-style">Salem Applications</a>
          </h2>
          <div className="project-item">
            <p className="left">Google Play Applications</p>
            <p className="right">May 2020 - August 2021</p>
          </div>
          <p>
            <ul>
              <li>
                Utilized OOP principles in Java and Android Studio to develop the backend functionality of mobile applications.
              </li>
              <li>
                Designed a user-friendly frontend using Kotlin, ensuring dynamic screen size adjustability for different devices.
              </li>
              <li>
                Published mobile games available on Google Play: Space Birds (40 downloads), Geography Now (42 downloads).
              </li>
            </ul>
          </p>

          <div className="video-container" style={{ display: 'flex', justifyContent: 'space-around'}}>
            <div style={{ textAlign: 'center', marginRight: '20px' }}>
              <h3>Geography Now</h3>
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/CQOLXmTFHTI?si=eERB8RQJTxmVKOox" 
                title="Geography Now"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div style={{ textAlign: 'center', marginLeft: '20px' }}>
              <h3>Space Birds</h3>
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/sWjZRhNEfiM?si=jTzVJYu--ChncJwE" 
                title="Space Birds"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proj;
