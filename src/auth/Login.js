import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import status6 from "./../assets/download (3).jpeg"; // Import your image here

const Login = () => {
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
      }}
    >
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <Col xs={12} md={6} lg={4}>
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <img
              src={status6}
              alt="App Logo"
              style={{
                maxWidth: '150px',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>

          {/* Login Form */}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                style={{ padding: '0.75rem', borderRadius: '0.25rem' }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" style={{ marginTop: '1rem' }}>
              <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                style={{ padding: '0.75rem', borderRadius: '0.25rem' }}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{
                width: '100%',
                marginTop: '1.5rem',
                padding: '0.75rem',
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                borderRadius: '0.25rem',
              }}
            >
              Login
            </Button>

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>
                Forgot password?
              </a>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
