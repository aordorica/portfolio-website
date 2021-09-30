import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import Experience from "./Experience";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Particle from "./Particle";
import { Intro } from "./Intro";

const HomePage = () => {
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
            <NavBar/>
            <Container
                fluid
                className='section justify-content-center d-flex px-4 px-md-5'
                id='intro'
            >
                <Intro screenSize={smallScreen} />
            </Container>
            <Container
                fluid
                className='section justify-content-center d-flex px-4 px-md-5'
                id='about'
            >
                <About screenSize={smallScreen} />
            </Container>
            <Container
                fluid
                className='section justify-content-center d-flex px-0 px-md-5'
                id='experience'
            >
                <Experience screenSize={smallScreen} />
            </Container>
        </div>
    );
};

export default HomePage;
