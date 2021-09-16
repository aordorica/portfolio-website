import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "@mui/material/Card";
import AboutIcon from "@mui/icons-material/PersonOutlined";
import data from "../Data/personInfo.json";
import ProfileCard from "./ProfileCard";
import profile from "../../assets/images/profile.jpg";
import { CardMedia } from "@mui/material";
import ReadMoreReact from 'read-more-react';

export default ({screenSize}) => {
    return (
        <Row
            className='about align-content-center justify-content-center'
            style={{ zIndex: 101, height: '100%' }}
        >
            <Col xl={6} className='justify-content-center'>
                    <Row
                        className='justify-content-center text-center my-auto'
                    >
                        <Col className='about_icon p-0' md={1}>
                            <AboutIcon color='secondary' sx={{fontSize: '4rem'}} />
                        </Col>
                        <Col className='align-self-center mx-0' md={4}>
                            <h2 className='title m-0'>About Me</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={4} className='about-profile p-5'>
                            <CardMedia component='img' image={profile} className='profile' style={{maxWidth: screenSize ? '25vh' : '20vh'}} />
                        </Col>
                        <Col xl={8} className='about-sum align-self-md-center'>
                            <ReadMoreReact readMoreText='Keep Reading' ideal={400} min={300} max={6000} text={data.about} />
                        </Col>
                    </Row>
            </Col>
        </Row>
    );
};
