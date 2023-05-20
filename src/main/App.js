import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "../presentation/pages/Home";
import Edu from "../presentation/pages/Edu";
import Ski from "../presentation/pages/Ski";
import Exp from "../presentation/pages/Exp";
import Proj from "../presentation/pages/Proj";

import React from 'react';

function App() {
  return (
    <Router>
      <div>
        {/*Wrap Route components in a Routes component */}
        <Routes>
          {/*homepage is set as the default Route*/}
          <Route path="" element={<Home />} />
          <Route path="/edupage" element={<Edu />} />
          <Route path="/skipage" element={<Ski />} />
          <Route path="/exppage" element={<Exp />} />
          <Route path="/projectspage" element={<Proj />} />
        </Routes>
      </div>
    </Router>
  );
};
 
export default App;
