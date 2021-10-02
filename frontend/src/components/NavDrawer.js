import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import {NavLink} from "react-router-dom";
import SortSharpIcon from "@mui/icons-material/SortSharp";

function NavDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                anchor='right'
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List
                    className='align-content-center nav-drawer'
                    sx={{ top: "25%" }}
                >
                    <ListItem className='my-5' onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <NavLink
                                to='/'
                                activeClassName='is-active'
                                exact={true}
                                className='nav-item'
                            >
                                Home
                            </NavLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem className='my-5' onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <NavLink
                                to='/Portfolio'
                                activeClassName='is-active'
                                exact={true}
                                className='nav-item'
                            >
                                Portfolio
                            </NavLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem className='my-5' onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <NavLink
                                to='/contact'
                                activeClassName='is-active'
                                exact={true}
                                className='nav-item'
                            >
                                Contact
                            </NavLink>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton
                className='menuIcon'
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <SortSharpIcon sx={{ fontSize: "3rem" }} />
            </IconButton>
        </>
    );
}
export default NavDrawer;
