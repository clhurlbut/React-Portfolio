import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

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
        <Container id='Contact' fluid>
            <h3><strong>Contact Me!</strong></h3>

            <Form className="flex-wrap" onSubmit={handleSubmit}>
                <Form.Group controlId="Name">
                    <Form.Label >Name:</Form.Label>
                    <Form.Control name="Name" as="textarea" rows={1} placeholder="Enter Name!" onBlur={handleChange} />
                </Form.Group>
                <Form.Group controlId="Email">
                    <Form.Label  >Email:</Form.Label>
                    <Form.Control name="Email" type="email" placeholder="Enter Email!" onBlur={handleChange} />
                </Form.Group>
                <Form.Group controlId="Message">
                    <Form.Label >Message:</Form.Label>
                    <Form.Control name="Message" as="textarea" rows={3} placeholder="Enter your message here!" onBlur={handleChange} />

                </Form.Group>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </Form>
            <Container>
                <Button variant="outline-primary" type="submit" id="contactButton">
                    Submit!
                </Button>
            </Container>


        </Container>
    );
}

export default Contact;
