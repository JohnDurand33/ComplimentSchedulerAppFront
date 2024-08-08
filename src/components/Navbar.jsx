import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

const Navbar = () => {
    const navigate = useNavigate();
    const { session, clearSession } = useAuth();

    const handleLogout = () => {
        clearSession();
        navigate('/login');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>Compliment App</Typography>
                {session ? (
                    <>
                        <Button color="inherit" onClick={() => navigate('/dashboard')}>Contacts</Button>
                        <Button color="inherit" onClick={() => navigate('/new-event')}>New Event Setup</Button>
                        <Button color="inherit" onClick={() => navigate('/calendar')}>Calendar</Button>
                        <Button color="inherit" onClick={() => navigate('/custom-message')}>Custom Message</Button>
                        <Button color="inherit" onClick={() => navigate('/settings')}>Account</Button>
                        <Button color="inherit" onClick={handleLogout}>Sign Out</Button>
                    </>
                ) : (
                    <>
                        <Button color="inherit" onClick={() => navigate('/login')}>Sign In</Button>
                        <Button color="inherit" onClick={() => navigate('/signup')}>Sign Up</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;