import '../styles/Exp.css';
import Header from "../components/Header.js";
import AssetfloLogo from '../../assets/AssetfloLogo.png';
import SeeRemLogo from '../../assets/seeRemLogo.png';
import FlippLogo from '../../assets/flippLogo.png';
import MastercardLogo from '../../assets/mastercardLogo.png';

import React from 'react';

function Exp() {
  return (
    <div className="Page">
      <Header activePage={4} />
      <main className="exp-container">
        <div className="exp-card">
          <div className="header-container">
            <h2 style={{ marginBottom: '10px' }}>Mastercard</h2>
            <div className="job-details">
              <span className="left">BizOps Engineer</span>
              <span style={{ marginBottom: '10px' }} className="right">May - August 2025</span>
            </div>
            <div className="job-skills">F5 BIG-IP, Splunk, Python, Jenkins, Bash, GitLab, Draw.io</div>
          </div>
          <ul>
            <li>Implemented DNS-based automation for F5 by re-configuring the internal resolution process with FQDN nodes and an internal resolver, eliminating NetOps tickets for manual IP updates and shortening development cycles by 1-2 days across production</li>
            <li>Led development of an error monitoring dashboard using Splunk SPL, regex parsing, and spreadsheet ingestion to unify fragmented alerts from Opsgenie, Uptrends, and Azure across 5 subteams; presented by VP to leadership for health assessment</li>
            <li>Automated Azure AD requests for 100+ members using AI clustering to create role-based access packages for different divisions</li>
          </ul>
          <img src={MastercardLogo} style={{ maxHeight: '200px', width: 'auto', marginBottom: '10px', margin: '0 auto', display: 'block' }} alt="Mastercard Logo" />
        </div>

        <div className="exp-card">
          <div className="header-container">
            <h2 style={{ marginBottom: '10px' }}>Flipp</h2>
            <div className="job-details">
              <span className="left">Software Engineer</span>
              <span style={{ marginBottom: '10px' }} className="right">May - December 2024</span>
            </div>
            <div className="job-skills">TypeScript, Go, Svelte, GitHub</div>
          </div>
          <ul>
            <li>Spearheaded the development of a publications platform using TypeScript/Go micro front ends to compose federated components, allowing retailers to leverage consumer data and transform flyers into dynamic online advertisements</li>
            <li>Proposed and built UI pagination, lowering publications loading time by 25% and unlocking 4 additional merchants</li>
            <li>Configured internal debugger tool, streamlining issue resolution and debugging efficiency by 50% for colleagues</li>
            <li>Introduced ESLint pre-commit code formatting, identifying errors and reducing code review cycle time by 1-2 days</li>
          </ul>
          <img src={FlippLogo} style={{ maxHeight: '200px', width: 'auto', marginBottom: '10px', margin: '0 auto', display: 'block' }} alt="Flipp Logo" />
        </div>

        <div className="exp-card">
          <div className="header-container">
            <h2 style={{ marginBottom: '10px' }}>SeeRem</h2>
            <div className="job-details">
              <span className="left">Software Developer</span>
              <span style={{ marginBottom: '10px' }} className="right">September - December 2023</span>
            </div>
            <div className="job-skills">MongoDB, Express, React.js, Node.js, Agile Methods</div>
          </div>
          <ul>
            <li>Led a team of 6 to build a JavaScript application with a MongoDB database (MERN stack) bridging the gap between workers, contractors, and owners to facilitate efficient communication and status updates on remote worksites</li>
            <li>Directed adoption of Agile and DevSecOps into SDLC by embedding automated security tests into CI/CD pipelines</li>
            <li>Engineered geolocational plotting system resulting in a 15-25% increase in worker retention in assigned job sites</li>
          </ul>
          <img src={SeeRemLogo} style={{ maxWidth: '600px', height: 'auto', marginBottom:'10px', margin: '0 auto', display: 'block' }} alt="SeeRem Logo" />
        </div>

        <div className="exp-card">
          <div className="header-container">
            <h2 style={{ marginBottom: '10px' }}>Assetflo</h2>
            <div className="job-details">
              <span className="left">Full Stack Developer</span>
              <span style={{ marginBottom: '10px' }} className="right">May - August 2023</span>
            </div>
            <div className="job-skills">Python, React.js, MongoDB, MQTT</div>
          </div>
          <ul>
            <li>Architected a Trip Simulator to replicate the trajectories of company tracking devices during trips, leveraging geopositional data to accurately record 50-200 events with minor location errors (&lt;1%) and delays (500 ms)</li>
            <li>Implemented a MongoDB-based CRUD data storage system to store simulated event collections as retestable test cases, facilitating efficient creation, editing, and sharing among team members for optimized iterative testing</li>
            <li>Engineered Simulator from conception to creation, reducing physical trips by 50% and saving 1-5 hours per trip</li>
            <li>Initiated Jest test-driven development covering 90% of attachment use cases, identifying geolocation errors and actively contributing to the resolution of 5G/IOX location calculation bottlenecks</li>
          </ul>
          <img src={AssetfloLogo} style={{ maxWidth: '600px', height: 'auto', marginBottom:'10px', margin: '0 auto', display: 'block' }} alt="Assetflo Logo" />
        </div>
      </main>
    </div>
  );
}

export default Exp;
