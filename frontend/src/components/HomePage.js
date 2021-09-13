import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import ShowMore from "./ShowMore";
import Header from "./Header";
import Experience from "./Experience";
import ProfileCard from "./ProfileCard";
import "bootstrap/dist/css/bootstrap.min.css";
import theme from '../theme/theme';

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
        <ThemeProvider theme={theme}>
            <Header />
            <Container>
                <Row className='align-content-center mx-1 my-0 home'>
                    <Col className='align-self-center px-md-5 px-0'>
                        <h3 className='header_tag'>Hi, my name is</h3>
                        <h1 className='header_name mb-0'>Alan Ordorica</h1>
                        <p className='header_sub'>
                            I build solutions for the web.
                        </p>
                        <p className='header_sum mb-0'>
                            I'm a Software Engineer from Oakland, California
                            with a passion for creating technology to elevate
                            people.
                        </p>
                    </Col>
                    {smallScreen && <ProfileCard />}
                    <Row className='p-5'>
                        <Col className='text-md-start text-center'>
                            <Button
                                className='px-4 py-2 info_btn'
                                color='secondary'
                                variant='outlined'
                            >
                                get in touch
                            </Button>
                        </Col>
                    </Row>
                    <ShowMore />
                </Row>
            </Container>
            <Container fluid className='section' id='experience'>
                <Experience smallScreen={smallScreen} />
            </Container>
            
        </ThemeProvider>
    );
};

export default HomePage;
