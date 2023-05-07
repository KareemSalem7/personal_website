import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "../presentation/pages/HomePage";
import EduSki from "../presentation/pages/EduSki";
import Exp from "../presentation/pages/Exp";
import Proj from "../presentation/pages/Proj";

import React from 'react';

function App() {
  return (
    <Router>
      <div>
        {/*Wrap Route components in a Routes component */}
        <Routes>
          {/*Set the HomePage as the default Route*/}
          <Route path="/home" element={<Home />} />
          <Route path="/eduskipage" element={<EduSki />} />
          <Route path="/exppage" element={<Exp />} />
          <Route path="/projectspage" element={<Proj />} />
        </Routes>
      </div>
    </Router>
  );
};
 
export default App;
