import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import profile from "../../assets/images/profile.jpg";

const ProfileCard = () => (
    <Col className='my-md-auto py-0 p-5' md={6}>
        <Row>
            <Image
                className='profile mx-auto px-0'
                rounded
                src={profile}
                fluid
            />
        </Row>
    </Col>
);

export default ProfileCard;
