import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProfileCard from "./ProfileCard";

export default function Experience(props) {
    return (
        <Row className='pt-3'>
            <Col className='px-5'>
                {!props.showMore && <ProfileCard />}
                {props.children}
            </Col>
        </Row>
    );
}
