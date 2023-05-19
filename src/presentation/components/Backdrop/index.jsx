import '../../styles/Modal.css';
import { motion } from 'framer-motion/dist/framer-motion'
import React from 'react';

const Backdrop = ({ children, onClick }) => {
    return (
        <motion.div
            className="backdrop"
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
        >
            {children}
        </motion.div>
    );
};

export default Backdrop