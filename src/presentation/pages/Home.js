import '../styles/Home.css';
import Header from "../components/Header.js";
import ProfilePicture from '../../assets/ProfilePicture.png';

import React from 'react';
import { motion, AnimatePresence} from 'framer-motion/dist/framer-motion'
import { useState } from 'react';
import Modal from "../components/Modal/index";

function HomePage() {
  // define useState hook to know if contact modal is open or closed
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="Page">
      <Header activePage={1}/>
      <main className="main-container">
        <div className="about-me-section">
          <h2 style={{ marginBottom: '10px', padding: '0' }}>About Me</h2>
          <p style={{ margin: '0', padding: '0' }}>
          Hola Amigos! I'm a Computer Science Specialist student at the University of Toronto. I have a passion for full stack application
          and enjoy creating solutions to optimize problems aswell as fun games for people to enjoy. I'm Egyptian and for fun I enjoy playing 
          soccer, chess, and cooking. Here you can check out some my education, skills, experience, and projects.
          </p>
          <br/>
          <h2 style={{ marginBottom: '10px', padding: '0' }}>Contact</h2>
          <p style={{ margin: '0', padding: '0' }}>
          Email: kareem.salem2003@gmail.com
          <br/>
          Phone: 289-208-6153
          <br/>
          </p>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="save-button"
            onClick={() => (modalOpen ? close() : open())}
          >
            Write me a message!
          </motion.button>

          <AnimatePresence
            // disable initial animations on clidren
            initial={false}

            // before entering next component, finish
            // rendering the previous one
            exitBeforeEnter={true}

            onExitComplete={() => null}
          >
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
          </AnimatePresence>
        </div>
        <div className="profile-picture-section">
          {/*eslint-disable-next-line jsx-a11y/alt-text*/}
          <img src={ProfilePicture}/> 
        </div>
      </main>
    </div>
  );
}


export default HomePage;
