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
            logoutUser();

            const data = await loginUser(email, password);

            // Set the new session token
            setSession(data.token);

            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
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