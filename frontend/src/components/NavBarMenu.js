import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const NavBarMenu = () => (
    <Nav className='w-25'>
        <Container>
            <Row className='text-center'>
                <Col sm={4} className='py-2'>
                    <NavLink to='/' activeClassName='is-active' exact={true}>
                        Home
                    </NavLink>
                </Col>
                <Col sm={4} className='py-2'>
                    <NavLink
                        to='/portfolio'
                        activeClassName='is-active'
                        exact={true}
                    >
                        Projects
                    </NavLink>
                </Col>
                <Col sm={4} className='py-2'>
                    <NavLink to='/contact' activeClassName='is-active'>
                        Contact
                    </NavLink>
                </Col>
            </Row>
        </Container>
    </Nav>
);

export default NavBarMenu;
