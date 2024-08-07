import React, { useState } from 'react';
import { loginUser } from '../logic/authLogic';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../App';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const { setSession } = useAuth();

    const handleLogin = async () => {
        try {
            const data = await loginUser(email, password);
            setSession(data.token);
            history.push('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleLogin} variant="contained" color="primary">Login</Button>
        </div>
    );
};

export default Login;