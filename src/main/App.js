import Home from "../presentation/pages/Home";
import Edu from "../presentation/pages/Edu";
import Ski from "../presentation/pages/Ski";
import Exp from "../presentation/pages/Exp";
import Proj from "../presentation/pages/Proj";
import Header from "../presentation/components/Header";

import React, { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const ids = ['home', 'education', 'skills', 'experience', 'projects'];

    const updateActive = () => {
      const scrollPos = window.scrollY + 140; // offset for sticky header
      let current = activeSection;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive);
    window.addEventListener('resize', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [activeSection]);

  const handleNavigate = (id, evt) => {
    if (evt) evt.preventDefault();
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <section id="home">
        <Home showHeader={false} />
      </section>
      <section id="education">
        <Edu showHeader={false} />
      </section>
      <section id="skills">
        <Ski showHeader={false} />
      </section>
      <section id="experience">
        <Exp showHeader={false} />
      </section>
      <section id="projects">
        <Proj showHeader={false} />
      </section>
    </div>
  );
};
 
export default App;
