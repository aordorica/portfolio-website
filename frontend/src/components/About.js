import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AboutIcon from '@material-ui/icons/PersonOutlined';
import data from '../Data/personInfo.json'
export default () => {
    const listEntries = Object.entries(data)
    // console.log(listEntries);
    return (
        <div>
            <Row style={{ border: "1px solid green" }}>
                <Col>
                    <AboutIcon color='secondary' fontSize='large' />
                </Col>
                <Col>
                    <h2>About Me</h2>
                </Col>
                {listEntries.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </Row>
        </div>
    );
}
