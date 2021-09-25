import React from "react";
import NavBarMenu from "./NavBarMenu";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar } from "react-bootstrap";
import favicon from "../../public/images/logo_yellow.png";
import SortSharpIcon from "@mui/icons-material/SortSharp";
import { useState } from "react";

const Header = () => {
    
    return (
        <Navbar fixed='top' expand='lg' id='header' className='pt-0'>
            <Container fluid className='header active shadow-lg'>
                <LinkContainer to='/'>
                    <Navbar.Brand className='px-md-0'>
                        <img src={favicon} alt='Logo' width='50' height='50' />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle
                    className='mx-4 p-2'
                    aria-controls='basic-navbar-nav'
                >
                    <SortSharpIcon
                        className='menuIcon'
                    />
                </Navbar.Toggle>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <NavBarMenu />
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
