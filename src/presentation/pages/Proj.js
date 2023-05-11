import "../styles/Proj.css";
import Header from "../components/Header.js";


function Proj() {
  return (
    <div className="Page">
      <Header/>
      <div className="project">
        <h2>Promptly Chatbot Analyser</h2>
        <p>September - December 2022</p>
        <p>
          Software Design Course Final Project
          <ul>
            <li>
              Collaborated with 4 TLI classmates to create an end-to-end
              application enabling companies to access their customer base’s top
              intents and add curated responses in their chatbot conversations
            </li>
            <li>
              Developed algorithms applying tree data structure, leveraged Spring
              Boot data flow, with extensive JUnit testing
            </li>
            <li>
              Took lead in front-end role designing visually appealing and
              intuitive pages with React and Bootstrap
            </li>
            <li>
              Produced final product leading to a 15-25% efficiency increase in
              Voiceflow chatbot sale conversions
            </li>
          </ul>
        </p>


        <h2>Quick Stocks</h2>
        <p>June - August 2022</p>
        <p>
          Chrome Extension
          <ul>
            <li>
              Developed a Chrome extension that, given a company dedicated website
              (web article, online store, etc.), provides its financial
              information through links to Quantitative and Qualitative Data (9
              downloads)
            </li>
            <li>
              Designed front-end with HTML and CSS, and backend in JavaScript
              leveraging chrome.tabs API
            </li>
          </ul>
        </p>


        <h2>TikTok Video Searcher</h2>
        <p>May - June 2022</p>
        <p>
          API Web Application
          <ul>
            <li>
              Created a web application that outputs a record of liked TikTok
              videos given a related account or keyword
            </li>
            <li>
              Implemented PyWebIO framework to display front-end and TikTok API to
              search through liked Tiktok videos, saving on average 5-30 minutes
              wasted in tediously scrolling through liked videos
            </li>
          </ul>
        </p>


        <h2>Android Applications</h2>
        <p>May - August 2020/2021</p>
        <p>
          Google Play Applications: Salem Applications
          <ul>
            <li>
              Utilized OOP in Java and Android Studio to develop back-end mobile
              application functionality
            </li>
            <li>
              Designed a user-friendly front-end using Kotlin with integrated
              adjustability for different devices
            </li>
            <li>Published mobile games available on Google Play: Space Birds (40 downloads), Geography Now (42 downloads)</li>
          </ul>
        </p>
      </div>
    </div>


  );
}


export default Proj;





