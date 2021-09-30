import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
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
                    <Link to='/'>
                        <img src={favicon} alt='Logo' width='50' height='50' />
                    </Link>
                </Typography>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className='nav'>
                        <Link to='/' className='nav-item'>
                            Home
                        </Link>
                        <Link to='/portfolio' className='nav-item'>
                            Portfolio
                        </Link>
                        <Link to='/contact' className='nav-item'>
                            Contact
                        </Link>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
