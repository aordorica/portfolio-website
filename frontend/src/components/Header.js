import React from "react";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import favicon from "../../assets/images/logo_yellow.png";
import SortSharpIcon from "@material-ui/icons/SortSharp";
import Backdrop from "@material-ui/core/Backdrop";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
}));

const NavBarMenu = () => (
    <Nav className='mx-auto'>
        <Container>
            <Row className='text-center my-auto'>
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

const Header = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles()
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <Navbar sticky='top' expand='md' id='header' className='pt-0'>
            <Container fluid className='header active py-2 shadow-lg'>
                <LinkContainer to='/'>
                    <Navbar.Brand className='px-5'>
                        <img src={favicon} alt='Logo' width='50' height='50' />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle
                    className='mx-4 p-2'
                    aria-controls='basic-navbar-nav'
                >
                    <SortSharpIcon
                        className='menuIcon'
                        style={{ fontSize: "2rem" }}
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
