import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import bg from '../../assets/images/bay-bridge.jpg';

export default (props) => (
    <Container>
        {props.children}
    </Container>
);