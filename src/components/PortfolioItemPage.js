import React from "react";

const Project = (props) => (
    <div>
        <h1>A Project of Mine</h1>
        <p>This is my project item page for project: {props.match.params.id}</p>
    </div>
);

export default Project;