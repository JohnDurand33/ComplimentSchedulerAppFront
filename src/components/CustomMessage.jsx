import React, { useState } from 'react';
import { sendEmail } from '../logic/sendLogic';
import { TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';

const CustomMessage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sendEmailChecked, setSendEmailChecked] = useState(false);

    const handleSend = async () => {
        if (sendEmailChecked) {
            await sendEmail('compliments_of@duranddesigned.com', email, 'Custom Message', message);
        }
    };

    return (
        <div>
            <h1>Send Custom Message</h1>
            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Message" value={message} onChange={(e) => setMessage(e.target.value)} multiline rows={10} />
            <FormControlLabel
                control={<Checkbox checked={sendEmailChecked} onChange={(e) => setSendEmailChecked(e.target.checked)} />}
                label="Send Email"
            />
            <Button onClick={handleSend} variant="contained" color="primary">Send</Button>
        </div>
    );
};

export default CustomMessage;