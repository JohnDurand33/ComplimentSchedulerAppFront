import React, { useState } from 'react';
import { loginUser, logoutUser } from '../logic/authLogic';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setSession } = useAuth();

    const handleLogin = async () => {
        try {
            // Clear any existing session before attempting to log in
            logoutUser();

            // Attempt to log in with the provided credentials
            const data = await loginUser(email, password);

            // Set the new session token
            setSession(data.token);

            // Navigate to the dashboard upon successful login
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
            // Optionally handle error (e.g., display an error message to the user)
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                onClick={handleLogin}
                variant="contained"
                color="primary"
            >
                Login
            </Button>
        </div>
    );
};

export default Login;