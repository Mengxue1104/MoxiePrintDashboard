import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from "react-router-dom";
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddIcon from '@mui/icons-material/Add';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HearingIcon from '@mui/icons-material/Hearing';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="/vendors">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Vendors" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListItemButton component={Link} to="/PageNotFound">
            <ListItemIcon>
                <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Category" />
        </ListItemButton>
        <ListItemButton component={Link} to="/PageNotFound">
            <ListItemIcon>
                <InventoryIcon />
            </ListItemIcon>
            <ListItemText primary="Inventory" />
        </ListItemButton>
        <ListItemButton component={Link} to="/PageNotFound">
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton component={Link} to="/PageNotFound">
            <ListItemIcon>
                <ReviewsIcon />
            </ListItemIcon>
            <ListItemText primary="Reviews" />
        </ListItemButton>
        <ListItemButton component={Link} to="/PageNotFound">
            <ListItemIcon>
                <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Price" />
        </ListItemButton>
        <ListItemButton component={Link} to="/PageNotFound">
            <ListItemIcon>
                <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add" />
        </ListItemButton>
        <ListItemButton component={Link} to="/PageNotFound">
            <ListItemIcon>
                <QuestionMarkIcon />
            </ListItemIcon>
            <ListItemText primary="Help" />
        </ListItemButton>
        <ListItemButton component={Link} to="/PageNotFound">
            <ListItemIcon>
                <HearingIcon />
            </ListItemIcon>
            <ListItemText primary="Hearing" />
        </ListItemButton>
        <ListItemButton component={Link} to="/PageNotFound">
            <ListItemIcon>
                <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary="Manage" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
            <ListItemText onClick={() => {window.location='/'}} color="inherit" primary="Logout" />
        </ListItemButton>
    </React.Fragment>
);