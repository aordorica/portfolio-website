import React from "react";
import { Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";

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
        <Row className='expItem pt-4 pt-md-0'>
            <Col>
                <Row>
                    <h3 className='headline px-3 mx-3'>
                        <span className='work-title'>{title}</span>
                        <span className='company'> @ {company}</span>
                    </h3>
                    <p className='dates mx-3 px-3'>{dates}</p>
                </Row>
                <Row className='px-4'>
                    <ul>
                        {responsibilities.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </Row>
            </Col>
        </Row>
    );
}
