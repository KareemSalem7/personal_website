import '../styles/Ski.css';
import Header from "../components/Header.js";

import React from 'react';

function Ski() {
  return (
    <div className="Page">
      <Header activePage={3}/>
      <main className="ski-container">
        <p style={{ marginTop: '50px', marginBottom: '0px', padding: '0' , fontSize: "20px"}}>
        As a 4th year University of Toronto student I've developed strong skills in Clean Architecture, 
        Front-end design and Full stack application development
        </p>
        <main className="inner-ski-container">
          <div className="prog-section">
          <h2 style={{ marginBottom: '10px', padding: '0'}}>Programming Languages</h2>
          <ul style={{ margin: '0', padding: '0', listStyleType: 'disc' }}>
            <li>HTML/CSS</li>
            <li>C</li>
            <li>Go (Golang)</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Kotlin</li>
            <li>Python</li>
            <li>SQL</li>
            <li>TypeScript</li>
          </ul>
          </div>
          <div className="tech-section">
          <h2 style={{ marginBottom: '10px', padding: '0'}}>Tools & Technologies</h2>
          <ul style={{ margin: '0', padding: '0', listStyleType: 'disc' }}>
            <li>Web Development: React, Next.js, Svelte, Bootstrap, Tailwind CSS, Framer Motion, Figma</li>
            <li>Mobile Development: Android Studio, Kotlin</li>
            <li>Backend Development: Django, Flask, Spring Boot, REST API, MQTT</li>
            <li>Cloud & DevOps: AWS, DevSecOps, CI/CD</li>
            <li>Testing: JUnit, Jest</li>
            <li>Tools & Other: Git, MongoDB, Postman, PyWebIO, RStudio, Unity, Unix Shell Scripting</li>
          </ul>
          </div>
        </main>
      </main>
    </div>
  );
}

export default Ski;
