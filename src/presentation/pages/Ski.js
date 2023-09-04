import '../styles/Ski.css';
import Header from "../components/Header.js";

import React from 'react';

function Ski() {
  return (
    <div className="Page">
      <Header activePage={3}/>
      <p style={{ marginTop: '50px', marginBottom: '0px', padding: '0' , fontSize: "20px"}}>
      As a 3rd year University of Toronto student I've developed strong skills in Clean Architecture, 
      Front-end design and Full stack application development
      </p>
      <main className="ski-container">
        <div className="prog-section">
        <h2 style={{ marginBottom: '10px', padding: '0'}}>Programming Languages</h2>
        <ul style={{ margin: '0', padding: '0', listStyleType: 'disc' }}>
          <li>HTML/CSS</li>
          <li>Python</li>
          <li>Java</li>
          <li>C</li>
          <li>JavaScript</li>
          <li>SQL</li>
        </ul>
        </div>
        <div className="tech-section">
        <h2 style={{ marginBottom: '10px', padding: '0'}}>Tools & Technologies</h2>
        <ul style={{ margin: '0', padding: '0', listStyleType: 'disc' }}>
          <li>Web Development: React, Boostrap, Framer Motion, Figma</li>
          <li>Mobile Development: Android Studio, Kotlin</li>
          <li>Testing: JUnit, Jest</li>
          <li>Other: Git, MongoDB, MQTT, PyWebIO, RStudio, Spring Boot, Unity, Unix Shell Scripting</li>
        </ul>
        </div>
      </main>
    </div>
  );
}

export default Ski;
