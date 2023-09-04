import "../styles/Proj.css";
import Header from "../components/Header.js";

import React from 'react';

function Proj() {
  return (
    <div className="Page">
      <Header activePage={5}/>
      <div className="project">
        <h2>
          <a href="https://github.com/KareemSalem7/voice-flow" className="link-style">Promptly Chatbot Analyser</a>
        </h2>
        <div className="project-item">
          <p className="left">Natural Language Understanding Application</p>
          <p className="right">September - December 2022</p>
        </div>
        <p>
          <ul>
            <li>
              Collaborated with 4 TLI classmates, to create an end-to-end Natural Language Understanding application enabling companies to access their customer base’s top intents and add curated responses in their chatbot conversations
            </li>
            <li>
              Innovated algorithms applying tree data structure, leveraged Spring Boot data flow, with extensive JUnit testing 
            </li>
            <li>
              Took lead in front end role designing visually appealing and intuitive pages with React and Bootstrap
            </li>
            <li>
              Produced final product leading to a 15-25% efficiency increase in Voiceflow chatbot sale conversions 
            </li>
          </ul>
        </p>

        <h2>
          <a href="https://github.com/KareemSalem7/Quick-Stocks" className="link-style">Quick Stocks</a>
        </h2>
        <div className="project-item">
          <p className="left">Financial Chrome Extension</p>
          <p className="right">June - August 2022</p>
        </div>
        <p>
          <ul>
            <li>
              Developed a financial chrome extension that given a company dedicated website (web article, online store, etc), provides investment guidance through Quantitative calculations and links to Quantitative Data (9 downloads)  
            </li>
            <li>
              Leveraged Alpha Vantage API to access public records for calculation of balance sheet/income statement fiscal ratios
            </li>
            <li>
              Empowers users to make informed investments, removing 1-3 hours in calculations and analysis of financial records 
            </li>
          </ul>
        </p>

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
              Created a PyWebIO application that outputs a record of liked TikTok videos given a related account or keyword
            </li>
            <li>
              Utilized TikTok API to process through liked Tiktok videos, saving 5-30 minutes wasted in tedious scrolling 
            </li>
          </ul>
        </p>
        <h2>
          <a href="https://www.youtube.com/playlist?list=PLBHp7S97SWLlt4wMLGF1zQiErHrfdU5q3" className="link-style">Salem Applications</a>
        </h2>
        <div className="project-item">
          <p className="left"> Google Play Applications</p>
          <p className="right"> May - August 2020/2021</p>
        </div>
        <p>
          <ul>
            <li>
              Utilized OOP in Java and Android Studio to develop back end mobile application functionality
            </li>
            <li>
              Designed a user-friendly front end using Kotlin with dynamic screen size adjustability for different devices
            </li>
            <li>
              Published mobile games available on Google Play: Space Birds (40 downloads), Geography Now (42 downloads)
            </li>
          </ul>
        </p>

      </div>
    </div>
  );
}

export default Proj;
