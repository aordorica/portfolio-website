import React from "react";
import { NavLink } from "react-router-dom";
import bg from '../../public/assets/bg_main.jpg';

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink activeClassName='is-active' exact={true} to='/'>
            Home
        </NavLink>
        <NavLink activeClassName='is-active' exact={true} to='/portfolio'>
            Portfolio
        </NavLink>
        <NavLink activeClassName='is-active' to='/contact'>
            Contact
        </NavLink>
        <img className='bg' src={bg} alt='loading...' />
    </header>
);

export default Header;
