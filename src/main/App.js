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
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(function (e) { return e.isIntersecting; })
          .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
        if (visible.length > 0 && visible[0].target && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.3, 0.6],
        rootMargin: '-20% 0px -40% 0px',
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id, evt) => {
    if (evt) evt.preventDefault();
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
