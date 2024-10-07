// src/auth/Login.js

import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-4" style={{ color: '#333' }}>LOGIN PAGE</h1>
      <Form className="w-100" style={{ maxWidth: '400px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: '#0095f6', borderColor: '#0095f6' }}>
          Log In
        </Button>
      </Form>
      <p className="mt-4 text-center">Don't have an account? <a href="/signup" style={{ color: '#0095f6' }}>Sign up</a></p>
    </Container>
  );
};

export default Login;
