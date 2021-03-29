import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { validateEmail } from '../../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <section id='Contact'>
            <h3><strong>Contact Me!</strong></h3>
            <div className="flex-wrap">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="contactName">
                        <Form.Label htmlFor="name" >Name:</Form.Label>
                        <Form.Control name="name" as="textarea" rows={1} placeholder="Enter Name!" onBlur={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="contactEmail">
                        <Form.Label htmlFor="email" >Email:</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter Email!" onBlur={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="contactMessage">
                        <Form.Label htmlFor="message">Message:</Form.Label>
                        <Form.Control name="message" as="textarea" rows={3} placeholder="Enter your message here!" onBlur={handleChange} />

                    </Form.Group>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <Button variant="primary" type="submit">
                        Submit!
                </Button>
                </Form>
            </div>
        </section>
    );
}

export default Contact;
