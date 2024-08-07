import React, { useState } from 'react';
import { createRecipient } from '../logic/recipientLogic';
import { TextField, Button } from '@mui/material';

const CreateRecipient = () => {
    const [name, setName] = useState('');
    const [relationship, setRelationship] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleCreate = async () => {
        await createRecipient({ name, relationship, email, address, avatar });
    };

    return (
        <div>
            <h1>Create Recipient</h1>
            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField label="Relationship" value={relationship} onChange={(e) => setRelationship(e.target.value)} />
            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <TextField label="Avatar URL" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
            <Button onClick={handleCreate} variant="contained" color="primary">Create Recipient</Button>
        </div>
    );
};

export default CreateRecipient;