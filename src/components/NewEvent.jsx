import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const NewEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');

    const handleCreateEvent = () => {
        // Handle event creation logic here
    };

    return (
        <div>
            <h1>Create New Event</h1>
            <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} multiline rows={4} />
            <TextField type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <TextField label="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
            <Button onClick={handleCreateEvent} variant="contained" color="primary">Create Event</Button>
        </div>
    );
};

export default NewEvent;