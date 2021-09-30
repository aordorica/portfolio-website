import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import DrawerComponent from "./NavDrawer";
import favicon from "../../public/images/logo_yellow.png";

function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar elevation={10} position='fixed'>
            <CssBaseline />
            <Toolbar>
                <Typography variant='h4' className='flex-grow-1'>
                    <NavLink to='/'>
                        <img src={favicon} alt='Logo' width='50' height='50' />
                    </NavLink>
                </Typography>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className='nav'>
                        <NavLink
                            to='/'
                            activeClassName='is-active'
                            exact={true}
                            className='nav-item'
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to='/portfolio'
                            activeClassName='is-active'
                            exact={true}
                            className='nav-item'
                        >
                            Portfolio
                        </NavLink>
                        <NavLink
                            to='/contact'
                            activeClassName='is-active'
                            exact={true}
                            className='nav-item'
                        >
                            Contact
                        </NavLink>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
