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
import ProfileCard from "./ProfileCard";
import "bootstrap/dist/css/bootstrap.min.css";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ffff",
        },
        secondary: {
            main: "#f5cb5c",
        },
        divider: "rgba(255, 255, 255, 0.12)",
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
        MuiTab: {
            root: {
                textTransform: 'none',
            },
        },
        
    },
});

const useStyles = makeStyles({});

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
    const classes = useStyles();
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
