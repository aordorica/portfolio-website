import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import Experience from "./Experience";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Particle from "./Particle";
import { Intro } from "./Intro";
import { motion } from "framer-motion";
import variants from "../config/transition";

const HomePage = () => {
    const [smallScreen, setsmallScreen] = useState(false);

    useEffect(() => {
        handlesmallScreen();
    });
    const handlesmallScreen = () => {
        if (window.innerWidth < 768) {
            setsmallScreen(false);
        } else {
            setsmallScreen(true);
        }
    };

    window.addEventListener("resize", handlesmallScreen);
    return (
        <motion.div initial='initial' animate='enter' variants={variants}>
            <div>
                <Particle />
                <NavBar />
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
        </motion.div>
    );
};

export default HomePage;
