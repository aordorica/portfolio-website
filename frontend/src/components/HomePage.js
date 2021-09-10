import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
    ThemeProvider,
    createTheme,
    makeStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ShowMore from "./ShowMore";
import Header from "./Header";
import Experience from "./Experience";
import ProfileCard from './ProfileCard';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ffff",
        },
        secondary: {
            main: "#f5cb5c",
        },
    },
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            // Name of the rule
            outlined: {
                transition: "transform 0.2s",
                "&:hover": {
                    background: "#f5cb5c",
                    borderRadius: 3,
                    border: 0,
                    color: "white",
                    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                },
            },
        },
    },
});

const useStyles = makeStyles({});

const HomePage = (props) => {
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        handleShowMore();
    });
    const handleShowMore = () => {
        if (window.innerWidth > 700) {
            setShowMore(true);
        } else {
            setShowMore(false);
        }
    };

    window.addEventListener("resize", handleShowMore);
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Container>
                <Row className='align-content-center mx-1 my-0 home'>
                    <Col className='align-self-center px-md-5 px-0'>
                        <h1 className='header_tag'>Hi, my name is</h1>
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
                    {showMore && <ProfileCard />}
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
                <Experience showMore={showMore}>
                    <h1>Experience</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eos voluptatum nulla minima, minus similique
                        dolor! Sit et consequuntur deleniti, quod corporis hic
                        possimus excepturi, iusto obcaecati at libero architecto
                        esse?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eos voluptatum nulla minima, minus similique
                        dolor! Sit et consequuntur deleniti, quod corporis hic
                        possimus excepturi, iusto obcaecati at libero architecto
                        esse?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eos voluptatum nulla minima, minus similique
                        dolor! Sit et consequuntur deleniti, quod corporis hic
                        possimus excepturi, iusto obcaecati at libero architecto
                        esse?
                    </p>
                </Experience>
            </Container>
            <Container fluid className='section'>
                <Experience showMore={showMore}>
                    <h1>About</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eos voluptatum nulla minima, minus similique
                        dolor! Sit et consequuntur deleniti, quod corporis hic
                        possimus excepturi, iusto obcaecati at libero architecto
                        esse?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eos voluptatum nulla minima, minus similique
                        dolor! Sit et consequuntur deleniti, quod corporis hic
                        possimus excepturi, iusto obcaecati at libero architecto
                        esse?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eos voluptatum nulla minima, minus similique
                        dolor! Sit et consequuntur deleniti, quod corporis hic
                        possimus excepturi, iusto obcaecati at libero architecto
                        esse?
                    </p>
                </Experience>
            </Container>
        </ThemeProvider>
    );
};

export default HomePage;
