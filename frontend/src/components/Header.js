import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <NavLink activeClassName='is-active' exact={true} to='/'>Home</NavLink>
        <NavLink activeClassName='is-active' exact={true} to="/portfolio">Portfolio</NavLink>
        <NavLink activeClassName='is-active' to="/contact">Contact</NavLink>
    </header>
);

export default Header;
