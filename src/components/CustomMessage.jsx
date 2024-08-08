import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import { sendEmail } from '../logic/sendLogic';
import { useNavigate } from 'react-router-dom';

const CustomMessage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sendEmailChecked, setSendEmailChecked] = useState(false);
    const navigate = useNavigate();

    const handleSend = async () => {
        if (sendEmailChecked) {
            await sendEmail('compliments_of@duranddesigned.com', email, 'Custom Message', message);
        }
    };

    return (
        <div>
            <h1>Send Custom Message</h1>
            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Message" value={message} onChange={(e) => setMessage(e.target.value)} multiline rows={4} />
            <FormControlLabel
                control={<Checkbox checked={sendEmailChecked} onChange={(e) => setSendEmailChecked(e.target.checked)} />}
                label="Send Email"
            />
            <Button onClick={handleSend} variant="contained" color="primary">Send</Button>
        </div>
    );
};

export default CustomMessage;