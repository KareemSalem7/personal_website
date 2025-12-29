import '../styles/Home.css';
import Header from "../components/Header.js";
import ProfilePicture from '../../assets/ProfilePicture.png';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion';
import Modal from "../components/Modal/index";

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="Page">
      <Header activePage={1} />
      <main className="main-container">
        <div className="about-me-section two-col">
          {/* LEFT: text card */}
          <div className="card left-card">
            <h2 style={{ marginBottom: '10px', padding: '0' }}>About Me</h2>
            <p style={{ margin: '0', padding: '0' }}>
              Hola Amigos! I'm a 5th year Computer Science Specialist student at the University
              of Toronto, based in Burlington, Ontario, Canada. I have a passion for full stack application and enjoy creating solutions to optimize problems
              aswell as fun games for people to enjoy. I'm Egyptian <span role="img" aria-label="egypt">🇪🇬</span> and for
              fun I enjoy playing soccer, exercising, reading, and cooking. Here you can check out my education, skills,
              experience, and projects.
            </p>

            <br />

            <h2 style={{ marginBottom: '10px', padding: '0' }}>Contact</h2>
            <p style={{ margin: '0', padding: '0' }}>
              Email: kareem.salem2003@gmail.com
              <br />
              Phone: 289-208-6153
              <br />
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="save-button"
              onClick={() => (modalOpen ? close() : open())}
            >
              Write me a message!
            </motion.button>

            <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
              {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
            </AnimatePresence>
          </div>

          {/* RIGHT: image card */}
          <div className="card right-card">
            <img className="profile-pic" src={ProfilePicture} alt="Profile" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
