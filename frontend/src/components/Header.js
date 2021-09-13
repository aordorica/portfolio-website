import React from "react";
import NavBarMenu from "./NavBarMenu";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar } from "react-bootstrap";
import favicon from "../../assets/images/logo_yellow.png";
import SortSharpIcon from "@material-ui/icons/SortSharp";
import { useState, useRef, useEffect } from "react";

const Header = () => {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(!open)
    }

    const navRef = useRef(0)
    useEffect(() => {
        console.log(navRef.current.offsetHeight);
    })

    return (
        <Navbar ref={navRef} sticky='top' expand='md' id='header' className='pt-0'>
            <Container fluid className='header active shadow-lg'>
                <LinkContainer to='/'>
                    <Navbar.Brand className='px-md-0 px-2'>
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
