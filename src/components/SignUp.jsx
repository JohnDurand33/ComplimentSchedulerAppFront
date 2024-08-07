import React, { useState } from 'react';
import { registerUser } from '../logic/authLogic';
import { TextField, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSignup = async () => {
        try {
            await registerUser(email, password);
            history.push('/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Signup</h1>
            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleSignup} variant="contained" color="primary">Signup</Button>
        </div>
    );
};

export default Signup;