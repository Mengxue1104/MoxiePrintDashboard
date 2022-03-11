import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from "react-router-dom";

export const mainListItems = (
    <React.Fragment>
        <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="/products">
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
        </ListItemButton>
        <ListItemButton component={Link} to="/users">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
        </ListItemButton>
        <ListItemButton component={Link} to="/example">
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Example Menu" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Example Menu" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Example Menu" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Example Menu" />
        </ListItemButton>
    </React.Fragment>
);