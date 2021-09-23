import React from "react";
import projects from '../Data/projects.json'

const PortfolioItem = (props) => {
    const project = projects.find((entry) => {
        if(entry.name === props.match.params.id) {
            return entry
        }
    })
    return (
        <div>
            <h1>{project.name}</h1>
            <h3>{project.language}</h3>
            <p>{project.github}</p>
        </div>
    );
};

export default PortfolioItem;
