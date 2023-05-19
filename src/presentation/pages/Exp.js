import '../styles/Exp.css';
import Header from "../components/Header.js";

import React from 'react';

function Exp() {  // Declaration of the Ski component
  return (
    <div className="Page">
      <Header activePage={4}/>  
      <main className="exp-container">
        <h2 style={{ marginBottom: '10px'}}>AssetFlo</h2>
        <p style={{ margin: '0px'}}>Come back end of August!</p>
      </main>
    </div>
  );
}

export default Exp;
