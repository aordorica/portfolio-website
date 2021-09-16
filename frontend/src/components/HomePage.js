import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./Header";
import Experience from "./Experience";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Particle from "./Particle";
import { Intro } from "./Intro";
import { Paper } from "@mui/material";

const HomePage = (props) => {
    const [smallScreen, setsmallScreen] = useState(false);

    useEffect(() => {
        handlesmallScreen();
    });
    const handlesmallScreen = () => {
        if (window.innerWidth < 700) {
            setsmallScreen(false);
        } else {
            setsmallScreen(true);
        }
    };

    window.addEventListener("resize", handlesmallScreen);
    return (
        <div>
            <Particle />
            <Header />
            <Container
                // style={{border: '2px solid white'}}
                fluid
                className='section justify-content-center d-flex px-4 px-md-5'
                id='intro'
            >
                <Intro />
            </Container>
            <Container
                fluid
                className='section justify-content-center d-flex px-4 px-md-5'
                id='about'
                // style={{border: '1px solid white'}}
            >
                <About screenSize={smallScreen}/>
            </Container>
            <Container
                fluid
                className='section justify-content-center d-flex px-0 px-md-5'
                id='experience'
                style={{border: '2px solid white'}}
            >
                <Experience screenSize={smallScreen} />
            </Container>
        </div>
    );
};

export default HomePage;
