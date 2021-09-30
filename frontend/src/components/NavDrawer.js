import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import SortSharpIcon from "@mui/icons-material/SortSharp";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "blue",
        fontSize: "20px",
    },
    icon: {
        color: "white",
    },
}));

function NavDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to='/' className='nav-item'>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to='/Portfolio' className='nav-item'>Portfolio</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to='/contact' className='nav-item'>Contact</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton className='menuIcon' onClick={() => setOpenDrawer(!openDrawer)}>
                <SortSharpIcon />
            </IconButton>
        </>
    );
}
export default NavDrawer;
