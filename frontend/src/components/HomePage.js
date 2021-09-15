import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./Header";
import Experience from "./Experience";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Particle from "./Particle";
import { Intro } from "./Intro";

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
            <Container fluid className='d-flex flex-column'>
                <Intro />
            </Container>
                <Container fluid className='section' id='about'>
                    <About screenSize={smallScreen} />
                </Container>
            <Container fluid className='section' id='experience'>
                <Experience screenSize={smallScreen} />
            </Container>
        </div>
    );
};

export default HomePage;
