import React from "react";
import { useState } from 'react'
import Header from "./Header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Col, Container, Row } from "react-bootstrap";
import SvgIcon from "@mui/material/SvgIcon";
import validator from 'validator'
import { ReactComponent as ContactIcon} from '../../public/images/contact.svg'
import axios from 'axios'

const servURL = "http://www.alanordorica.com/contact";

const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    })
    const [validEmail, setValidEmail] = useState(true)
    const [validName, setValidName] = useState(true)
    const [contactError, setContactError] = useState(false)
    const [mailSent, setmailSent] = useState(false)
    const [error, setError] = useState({
      name: '',
      email: ''
    })

    const sendPostRequest = async () => {
      try {
        await axios.post(servURL, formData)
        setmailSent(true)
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error(error);
      }
    };

    const onFormSubmit = (e) => {
      e.preventDefault()
      if(validEmail && validName) {
        setContactError(false)
        sendPostRequest()
      } else {
        setContactError(true)
      }
    }

    const handleNameEntry = () => {
      if(!formData.name) {
        setValidName(false)
        setError({ ...error, name: 'Please enter your name'})
      } else {
        setValidName(true)
        setError({ ...error, name: ''})
      }
    }

    const handleEmailValidation = () => {
      if(!validator.isEmail(formData.email)) {
        setValidEmail(false)
        setError({ ...error, email: 'Invalid Email'})
      } else {
        setValidEmail(true)
        setError({ ...error, email: ''})
      }
    }

    const onNameChange = (e) => {
      const name = e.target.value
      setFormData({ ...formData, name })
    }
    const onEmailChange = (e) => {
      const email = e.target.value
      setFormData({ ...formData, email })
    }
    const onMessageChange = (e) => {
      const message = e.target.value
      setFormData({ ...formData, message })
    }

    return (
        <div>
            <Header />
            <Container fluid id='portfolio' className='section'>
                <Row className='h-100'>
                    <Col className='align-items-center d-flex flex-column h-100 justify-content-center'>
                        <Row className='text-center'>
                            <h1>
                              Contact
                              <SvgIcon sx={{ fontSize: '1.5em', marginLeft: '1rem'}}>
                                <ContactIcon />
                              </SvgIcon>
                            </h1>
                            {mailSent && <h3 style={{color: 'green'}}>Success! Mail Sent!</h3>}
                            {contactError && <h3 style={{color: 'red'}}>Please fill out all the fields correctly</h3>}
                        </Row>
                        <Row>
                            <Col className='my-5 mx-5 px-lg-5'>
                                <Box className='text-center' component='form' onSubmit={onFormSubmit}>
                                    <TextField
                                        color='secondary'
                                        label='Name'
                                        variant='standard'
                                        placeholder='Johnny Appleseed'
                                        fullWidth
                                        sx={{ marginBottom: "3vh", height: '8vh' }}
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
                                        variant='standard'
                                        placeholder='johnny@Appleseed.com'
                                        margin='normal'
                                        fullWidth
                                        sx={{ marginBottom: "3vh", height: '8vh' }}
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
                                        variant='standard'
                                        placeholder='Hi Alan, Lets talk about something amazing shall we!'
                                        fullWidth
                                        multiline
                                        sx={{ marginTop: "5vh" }}
                                        onChange={onMessageChange}
                                        value={formData.message}
                                        name='message'
                                    />
                                    <Button
                                        variant='outlined'
                                        color='secondary'
                                        type='submit'
                                        sx={{
                                            marginTop: "10vh",
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactPage;
