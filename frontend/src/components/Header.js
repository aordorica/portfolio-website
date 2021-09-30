import React from "react";
import { Container, Navbar } from "react-bootstrap";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <Container fluid className='shadow-lg'>
            <NavBar />
        </Container>
    );
};

export default Header;
