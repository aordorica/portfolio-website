import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Col, Container, Row } from "react-bootstrap";
import SvgIcon from "@mui/material/SvgIcon";
import validator from "validator";
import { ReactComponent as ContactIcon } from "../../public/images/contact.svg";
import axios from "axios";
import contactInfo from "../Data/personInfo.json";

const servURL = "https://www.alanordorica.com/api";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [validEmail, setValidEmail] = useState(true);
    const [validName, setValidName] = useState(true);
    const [contactError, setContactError] = useState(false);
    const [mailSent, setmailSent] = useState(false);
    const [error, setError] = useState({
        name: "",
        email: "",
    });

    const sendPostRequest = async () => {
        try {
            await axios.post(servURL, formData);
            setmailSent(true);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
        }
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (validEmail && validName) {
            setContactError(false);
            sendPostRequest();
        } else {
            setContactError(true);
        }
    };

    const handleNameEntry = () => {
        if (!formData.name) {
            setValidName(false);
            setError({ ...error, name: "Please enter your name" });
        } else {
            setValidName(true);
            setError({ ...error, name: "" });
        }
    };

    const handleEmailValidation = () => {
        if (!validator.isEmail(formData.email)) {
            setValidEmail(false);
            setError({ ...error, email: "Invalid Email" });
        } else {
            setValidEmail(true);
            setError({ ...error, email: "" });
        }
    };

    const onNameChange = (e) => {
        const name = e.target.value;
        setFormData({ ...formData, name });
    };
    const onEmailChange = (e) => {
        const email = e.target.value;
        setFormData({ ...formData, email });
    };
    const onMessageChange = (e) => {
        const message = e.target.value;
        setFormData({ ...formData, message });
    };

    return (
        <div>
            <NavBar/>
            <Container fluid id='portfolio' className='section'>
                <Row className='h-100 mx-1 mx-md-5'>
                    <Col
                        lg={4}
                        className='pt-lg-5 align-self-center align-self-lg-start pt-lg-5 mt-lg-4'
                    >
                        <Row
                            className='text-center text-lg-start'
                            // style={{ marginLeft: "5vw", marginTop: "15vh" }}
                        >
                            <h2 className='title my-0'>
                                Contact
                                <SvgIcon
                                    sx={{
                                        fontSize: "1.5em",
                                        marginLeft: "1.2rem",
                                    }}
                                >
                                    <ContactIcon />
                                </SvgIcon>
                            </h2>
                            <p className='subTitle'>Let's Connect</p>
                            {mailSent && (
                                <h3 style={{ color: "green" }}>
                                    Success! Mail Sent!
                                </h3>
                            )}
                            {contactError && (
                                <h3 style={{ color: "red" }}>
                                    Please fill out all the fields correctly
                                </h3>
                            )}
                        </Row>
                    </Col>
                    <Col lg={8} className='pb-5 align-self-center'>
                        <Row className='mb-5'>
                            <Col className=''>
                                <Row>
                                    <Col className='my-3 personInfo'>
                                        <div>
                                            <p>Contact details</p>
                                            <h3>
                                                <a href={`mailto: ${contactInfo.email}`}>
                                                    {contactInfo.email}
                                                </a>
                                            </h3>
                                            <h3>{contactInfo.phone}</h3>
                                        </div>
                                    </Col>
                                    <Col className='my-3 personInfo'>
                                        <div>
                                            <p>Social Links</p>
                                            <h3>
                                                <a href={contactInfo.linkedin}>
                                                    LinkedIn
                                                </a>
                                            </h3>
                                            <h3>
                                                <a href={contactInfo.github}>
                                                    Github
                                                </a>
                                            </h3>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='my-3 personInfo'>
                                        <div>
                                            <p>Location</p>
                                            <h3>{contactInfo.address}</h3>
                                        </div>
                                    </Col>
                                    <Col className='my-3 personInfo'></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className='justify-content-md-start justify-content-center'>
                            <Box
                                component='form'
                                onSubmit={onFormSubmit}
                                // style={{ width: "75%" }}
                            >
                                <TextField
                                    color='secondary'
                                    label='Name'
                                    variant='outlined'
                                    placeholder='Johnny Appleseed'
                                    fullWidth
                                    sx={{ height: "8vh" }}
                                    error={!validName}
                                    onChange={onNameChange}
                                    onBlur={handleNameEntry}
                                    value={formData.name}
                                    name='name'
                                    helperText={error.name}
                                />
                                <TextField
                                    color='secondary'
                                    label='Email'
                                    variant='outlined'
                                    placeholder='johnny@Appleseed.com'
                                    margin='normal'
                                    fullWidth
                                    sx={{ height: "8vh" }}
                                    error={!validEmail}
                                    onBlur={handleEmailValidation}
                                    value={formData.email}
                                    onChange={onEmailChange}
                                    name='email'
                                    helperText={error.email}
                                />
                                <TextField
                                    color='secondary'
                                    label='Message'
                                    variant='outlined'
                                    placeholder='Hi Alan, Lets talk about something amazing shall we!'
                                    fullWidth
                                    rows={4}
                                    multiline
                                    onChange={onMessageChange}
                                    value={formData.message}
                                    name='message'
                                />
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    type='submit'
                                    sx={{
                                        marginTop: "5vh",
                                    }}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactPage;
