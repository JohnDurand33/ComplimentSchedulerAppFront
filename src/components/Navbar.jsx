import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../App';

const Navbar = () => {
    const history = useHistory();
    const { session, clearSession } = useAuth();

    const handleLogout = () => {
        clearSession();
        history.push('/login');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>Compliment App</Typography>
                {session ? (
                    <>
                        <Button color="inherit" onClick={() => history.push('/dashboard')}>Contacts</Button>
                        <Button color="inherit" onClick={() => history.push('/new-event')}>New Event Setup</Button>
                        <Button color="inherit" onClick={() => history.push('/calendar')}>Calendar</Button>
                        <Button color="inherit" onClick={() => history.push('/custom-message')}>Custom Message</Button>
                        <Button color="inherit" onClick={() => history.push('/settings')}>Account</Button>
                        <Button color="inherit" onClick={handleLogout}>Sign Out</Button>
                    </>
                ) : (
                    <>
                        <Button color="inherit" onClick={() => history.push('/login')}>Sign In</Button>
                        <Button color="inherit" onClick={() => history.push('/signup')}>Sign Up</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;