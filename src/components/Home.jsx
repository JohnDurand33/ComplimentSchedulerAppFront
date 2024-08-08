import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to the Compliment App</h1>
            <Button variant="contained" color="primary" onClick={() => navigate('/signup')}>
                Get Started
            </Button>
        </div>
    );
};

export default Home;