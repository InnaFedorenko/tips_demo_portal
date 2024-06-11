//src/components/ContactForm.jsx
// Purpose: Contact form component
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import mycontacts from '../data/mycontacts.js';

export default function ContactForm() {
// declare state variables 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isEmailValid, setIsEmailValid] = useState(true);
// handle name change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
// handle email change
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };
// handle message change
  const handleMsgChange = (event) => {
    setMessage(event.target.value);
  };
// handle submit, validate form
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isEmailValid) {
      newErrors.email = 'Invalid email address';
    }
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    // if no errors, send email
    if (Object.keys(newErrors).length === 0) {
        const mailtoLink = `mailto:'ivf.fedorenko@gmail.com'?subject=${encodeURIComponent(`Let's talk!`)} &body=${encodeURIComponent(`Hello!\nI hope this email finds you well.\n ${message}\nBest regards,\n\nName: ${name}\nEmail: ${email}`)}`;
        window.location.href = mailtoLink;
    }
  };
// validate email
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };
// return contact form
  return (
    <Container className="mt-5">
      <Form className = "form" onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            isInvalid={errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            isInvalid={errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            value={message}
            onChange={handleMsgChange}
            isInvalid={errors.message}
          />
          <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
        </Form.Group>

        <Button id='submit' type="submit" className="btn btn-dark btn-lg">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
