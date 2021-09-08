import React from "react";
import { Row, Col, Image, Container, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import profile from "../../assets/images/profile.jpg";
import experience from "../Data/experience.json";
import { ExpandMore, LinkedIn, GitHub, Email } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#343A40",
        },
        secondary: {
            main: "#f5cb5c",
        },
    },
});

const HomePage = () => {
    const handleScroll = () => {};
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Container className='home'>
                <Row className='mx-2'>
                    <Col className='my-auto' md={6}>
                        <p className='header_tag'>Hi, my name is</p>
                        <p className='header_name mb-0'>Alan Ordorica</p>
                        <p className='header_sub'>
                            I build solutions for the web
                        </p>
                        <p className='header_sum'>
                            A San Francisco Bay Area native, I am always seeking
                            challenges and opportinities to pursue my passion in
                            technology. I build solutions to problems and use my
                            unique perspective to engineer not ideas. join me on
                            my road to build better products for all.
                        </p>
                        <Row>
                            <Col className='text-center'>
                                <ButtonGroup size='lg'>
                                    <IconButton color='secondary' >
                                        <LinkedIn />
                                    </IconButton>
                                    <IconButton color='secondary'>
                                        <GitHub />
                                    </IconButton>
                                    <IconButton color='secondary'>
                                        <Email />
                                    </IconButton>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='my-md-auto pt-3' md={6}>
                        <Row>
                            <Image
                                className='profile mx-auto px-0'
                                rounded
                                src={profile}
                            />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
    );
};

export default HomePage;
