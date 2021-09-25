import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ShowMore from './ShowMore';
import Button from '@mui/material/Button';
import logo from '../../public/Favicon.png'

export const Intro = () => {
    return (
        <Row className='mx-auto my-0 home'>
            <Col
                xl={6}
                md={12}
                className='align-self-center px-md-5 px-0 offset-xl-3'
                style={{ zIndex: 101 }}
            >
                <Row>
                    <h3 className='header_tag'>Hi, my name is</h3>
                    <h1 className='header_name mb-0'>Alan Ordorica</h1>
                    <p className='header_sub'>
                        Software Engineer. Web Developer. Person
                    </p>
                    <p className='header_sum mb-0'>
                        I'm a Software Engineer from Oakland, California with a
                        passion for creating technology to elevate people.
                    </p>
                </Row>
                <Row className='p-5'>
                    <Col className='text-md-start text-center'>
                        <Button
                            className='px-4 py-2 info_btn'
                            color='secondary'
                            variant='outlined'
                        >
                            see my work
                        </Button>
                    </Col>
                </Row>
                <Row className='flex-fill'>
                    <Col className='d-flex flex-column h-100'>
                        <ShowMore />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}