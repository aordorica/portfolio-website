import React from 'react';

const PortfolioItem = ({
    name,
    language,
    category,
    dateCreated,
    description,
}) => (
    <div>
        <h1>{name}</h1>
        <span>{language}</span>
        {/* <p>This page is for the item with the id of {props.match.params.id}</p> */}
    </div>
);

export default PortfolioItem;
