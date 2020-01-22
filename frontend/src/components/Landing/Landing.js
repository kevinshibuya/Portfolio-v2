import React from 'react';
import { motion } from 'framer-motion';

import './Landing.css';

function Landing() {
    let variants = {
        hidden: {
            opacity: 0,
            y: -10
        },
        visible: (custom) => ({
            opacity: 1,
            y: 10,
            type: "spring",
            damping: 10,
            stiffness: 100,
            transition: {
                duration: 1,
                delay: custom * 0.5
            }
        })
    }

    return (
        <div className="container landing">
            <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={variants}
                className="container-title"
            >
                <a href="#" className="title">Kevin Shibuya</a>
                <p className="subtitle">Desenvolvedor Web Front-end focado em React.js</p>
            </motion.div>
            <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={variants}
                className="container-buttons"
            >
                <button className="main-button button hover">Contato</button>
                <button className="secondary-button button hover">Ver Mais</button>
            </motion.div>
        </div>
    )
}

export default Landing;