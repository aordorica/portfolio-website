import { motion } from "framer-motion";
import React from "react";
import projects from '../Data/projects.json'
import variants from "../config/transition";

const PortfolioItem = (props) => {
    const project = projects.find((entry) => {
        if(entry.name === props.match.params.id) {
            return entry
        }
    })
    return (
        <motion.div initial='initial' animate='enter' variants={variants}>
            <div>
                <h1>{project.name}</h1>
                <h3>{project.language}</h3>
                <p>{project.github}</p>
            </div>
        </motion.div>
    );
};

export default PortfolioItem;
