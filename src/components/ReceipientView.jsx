import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { getRecipients, updateRecipient } from '../logic/recipientLogic';

const RecipientView = () => {
    const { id } = useParams();
    const [recipient, setRecipient] = useState(null);

    useEffect(() => {
        const fetchRecipient = async () => {
            const recipients = await getRecipients();
            const recipient = recipients.find(r => r.id === parseInt(id));
            setRecipient(recipient);
        };
        fetchRecipient();
    }, [id]);

    const handleUpdate = async () => {
        await updateRecipient(id, recipient);
    };

    if (!recipient) return <div>Loading...</div>;

    return (
            <div>
                <h1>View Recipient</h1>
                <TextField label="Name" value={recipient.name} onChange={(e) => setRecipient({ ...recipient, name: e.target.value })} />
                <TextField label="Relationship" value={recipient.relationship} onChange={(e) => setRecipient({ ...recipient, relationship: e.target.value })} />
                <TextField label="Email" value={recipient.email} onChange={(e) => setRecipient({ ...recipient, email: e.target.value })} />
                <TextField label="Address" value={recipient.address} onChange={(e) => setRecipient({ ...recipient, address: e.target.value })} />
                <TextField label="Avatar URL" value={recipient.avatar} onChange={(e) => setRecipient({ ...recipient, avatar: e.target.value })} />
                <Button onClick={handleUpdate} variant="contained" color="primary">Update Recipient</Button>
            </div>
            );
};

            export default RecipientView;