import React, { useState } from 'react'
import Axios from 'axios';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
      
        const data = { email, message };
      
        Axios.post('https://us-central1-browser-power.cloudfunctions.net/submit', data).catch(error => {
          console.log(error);
        });
      };

    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Email:
                    <br />
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />
                </label>
                <label>
                    Message:
                    <br />
                    <textarea 
                        type="text" 
                        name="message" 
                        value={message} 
                        onChange={e => setMessage(e.target.value)} 
                    />
                </label>
                <br />
                <input 
                    type="submit" 
                    value="submit" 
                />
            </form>
        </div>
    )
};

export default Contact;
