import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import { Toolbar, IconButton, List, ListItem, ListItemText, ClickAwayListener } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: "transparent",
        boxShadow: "none",
    },
    drawerPaper: {
        width: drawerWidth,
        //backgroundColor: "#F76C6C",
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const menuItems = [
        {
            label: "About Me",
        },
        {
            label: "Projects",
        },
        {
            label: "Hobbies",
        },
        {
            label: "Contact Me",
        },
    ];

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <AppBar className={classes.appbar} position="fixed">
            <Toolbar>
                <IconButton size="medium" edge="start" arial-label="Menu" onClick={handleDrawerToggle}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Drawer
                className={classes.drawer}
                open={open}
                anchor="left"
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem button key={index} onClick={handleDrawerToggle}>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
}
