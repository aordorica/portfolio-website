import React from 'react';
import Row from 'react-bootstrap/Row';

export default function ExperienceItem({
    title,
    description,
    company,
    pseudo,
    accomplishments,
    responsibilities,
    dates,
    value,
    index,
}) {
    return (
        <div className='exp-contain'>
            <Row className='text-start expItem pt-4 pt-md-0'>
                <h3 className='headline px-4 mx-3'>
                    <span className='title'>{title}</span>
                    <span className='company'> @ {company}</span>
                </h3>
                <p className='dates mx-4'>{dates}</p>
                <ul>
                    {responsibilities.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </Row>
        </div>
    );
}
