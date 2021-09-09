import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import ShowMore from "./ShowMore";
import { Row, Col, Image, Container, ButtonGroup, Card } from "react-bootstrap";
import { LinkedIn, GitHub, Email } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import profile from "../../assets/images/profile.jpg";
import {useHistory} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ffff",
        },
        secondary: {
            main: "#f5cb5c",
        },
    },
});

const HomePage = (props) => {
    const history = useHistory()
    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        handleShowMore()
    })
    const handleShowMore = () => {
        if(window.innerWidth > 700) {
            setShowMore(true)
        } else {
            setShowMore(false)
        }
    }

    window.addEventListener('resize', handleShowMore)

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Container>
                <Row className='align-content-center mx-1 my-0 home'>
                    <Col className='align-self-center px-md-5 px-0' md={6}>
                        <h1 className='header_tag'>Hi, my name is</h1>
                        <h1 className='header_name mb-0'>Alan Ordorica</h1>
                        <p className='header_sub'>
                            I build solutions for the web
                        </p>
                        <p className='header_sum mb-0'>
                            A San Francisco bay area native, I am always seeking
                            challenges and opportunities to pursue my passion in
                            technology. I build solutions to problems and use my
                            unique perspective to develop new ideas. Join me on
                            my roadtrip!
                        </p>
                        <Row>
                            <Col className='text-center'>
                                <ButtonGroup>
                                    <IconButton
                                        href='http://linkedin.com/in/alanodev/'
                                        color='primary'
                                    >
                                        <LinkedIn fontSize='inherit' />
                                    </IconButton>
                                    <IconButton
                                        href='https://github.com/aordorica'
                                        color='primary'
                                    >
                                        <GitHub fontSize='inherit' />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => {
                                            history.push("/contact");
                                        }}
                                        color='primary'
                                    >
                                        <Email
                                            className='emailBtn'
                                            fontSize='inherit'
                                        />
                                    </IconButton>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='my-md-auto py-0 p-5' md={6}>
                        <Row>
                            <Image
                                className='profile mx-auto px-0'
                                rounded
                                src={profile}
                                fluid
                            />
                        </Row>
                        {!showMore && <ShowMore />}
                    </Col>
                    {showMore && <ShowMore />}
                </Row>
                <Row>
                    <Card>
                        <Card.Title>Some title</Card.Title>
                        <Card.Body>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Ratione sapiente dolorem quia assumenda
                            aperiam est minus dolorum sint corrupti hic laborum
                            recusandae, possimus autem, libero qui aspernatur ex
                            magni iure.
                        </Card.Body>
                        <Card.Img src={profile} />
                    </Card>
                </Row>
            </Container>
        </ThemeProvider>
    );
};

export default HomePage;
