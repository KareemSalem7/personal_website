import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EduSki from "../presentation/pages/EduSki";
import HomePage from "../presentation/pages/HomePage";
import React from 'react';

function App() {
  return (
    <Router>
      <div>
        {/*Wrap Route components in a Routes component */}
        <Routes>
          {/*Set the HomePage as the default Route*/}
          <Route path="/eduskipage" element={<EduSki />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};
 
export default App;
