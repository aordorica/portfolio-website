import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Button from "@mui/material/Button";
import { useState } from "react";
import FileModal from './FileModal'

const NavBarMenu = () => {
    return (
        <Nav className='w-100'>
            <Container fluid>
                <Row className='justify-content-end'>
                    <Col sm={1} className='align-self-center'>
                        <NavLink
                            to='/'
                            activeClassName='is-active'
                            exact={true}
                        >
                            Home
                        </NavLink>
                    </Col>
                    <Col sm={1} className='align-self-center'>
                        <NavLink
                            to='/portfolio'
                            activeClassName='is-active'
                            exact={true}
                        >
                            Projects
                        </NavLink>
                    </Col>
                    <Col sm={1} className='align-self-center'>
                        <NavLink to='/contact' activeClassName='is-active'>
                            Contact
                        </NavLink>
                    </Col>
                    <Col sm={9} className='align-self-center text-lg-end'>
                        <FileModal />
                    </Col>
                </Row>
            </Container>
        </Nav>
    );
};

export default NavBarMenu;
