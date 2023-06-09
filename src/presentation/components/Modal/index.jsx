import '../../styles/Modal.css';
import { motion } from 'framer-motion/dist/framer-motion'
import Backdrop from "../Backdrop";
import React from 'react';
import Contact from "../contact";

const dropIn = {
    hidden: {
        y: "-100vh",
        opaciy: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const Modal = ({ handleClose, text}) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal blue-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
            <Contact handleClose={handleClose}/>
            </motion.div>
        </Backdrop>
    );
};

export default Modal;