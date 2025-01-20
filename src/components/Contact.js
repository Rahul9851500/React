import React from 'react';
import './styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="inputs">
                <h2>Contact Me</h2>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message" className="message"></textarea>
                <button>Send</button>
            </div>
        </div>
    );
};

export default Contact;

