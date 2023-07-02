import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DarkModeToggle from './DarkModeToggle';
import { Link } from "react-router-dom"
import { ADMIN_PANEL, MIN_IO_DASHBOARD } from '../App';

export default function ResponsiveAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: '#1a1a1a', zIndex: "1202" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Image Detection
                    </Typography>
                    <DarkModeToggle />
                    <Link to="/" >
                        <Button style={{ color: "white" }}>
                            Home
                        </Button>
                    </Link>
                    <Link to={MIN_IO_DASHBOARD} target="_blank">
                        <Button style={{ color: "white" }}>
                            Min-IO Dashboard
                        </Button>
                    </Link>
                    <Link to={ADMIN_PANEL} target="_blank">
                        <Button style={{ color: "white" }}>
                            Admin Panel
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
