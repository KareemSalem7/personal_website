import '../styles/Exp.css';
import Header from "../components/Header.js";
import AssetfloLogo from '../../assets/AssetfloLogo.png';

import React from 'react';

function Exp() {
  return (
    <div className="Page">
      <Header activePage={4} />
      <main className="exp-container">
        <div className="header-container">
          <h2 style={{ marginBottom: '10px' }}>Assetflo</h2>
          <div className="job-details">
            <span className="left">Full Stack Developer</span>
            <span style={{ marginBottom: '10px' }} className="right">May - August 2023</span>
          </div>
        </div>
        <ul>
          <li>Architected a Trip Simulator to replicate the trajectories of company tracking devices during trips, leveraging geopositional data to accurately record 50-200 events with minor location errors (&lt;1%) and delays (500 ms)</li>
          <li>Implemented a MongoDB-based CRUD data storage system to store simulated event collections as retestable test cases, facilitating efficient creation, editing, and sharing among team members for optimized iterative testing</li>
          <li>Engineered Simulator from conception to creation, reducing physical trips by 50% and saving 1-5 hours per trip</li>
          <li>Initiated Jest test-driven development covering 90% of attachment use cases, identifying geolocation errors and actively contributing to the resolution of 5G/IOX location calculation bottlenecks</li>
        </ul>
      </main>
    
    {/*eslint-disable-next-line jsx-a11y/alt-text*/}
    <img src={AssetfloLogo}/>
    </div>
  );
}

export default Exp;
