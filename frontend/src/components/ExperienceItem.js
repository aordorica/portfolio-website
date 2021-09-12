import React from 'react';
import Card from '@material-ui/core/Card';
import { Row } from 'react-bootstrap';

export default function ExperienceItem({
    title,
    description,
    company,
    pseudo,
    accomplishments,
    responsibilities,
}) {
    return (
        <div>
            <Row className='text-start p-4'>
                <h3>{title} @ {company}</h3>
                <p>{description}</p>
            </Row>
        </div>
    );
}
