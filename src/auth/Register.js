// src/auth/Register.js

import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import status6 from "./../assets/download (3).jpeg"; // Import your image here
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/Action/AuthAction"; // Make sure to import your registration action
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registeringLoader, userRegisterSuccess, userRegisterError } =
    useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const registerData = {
      name: username,
      email,
      password,
    };

    // Dispatch register action
    dispatch(registerUser(registerData));
    setShow(true);

    // Redirect on successful registration
    if (userRegisterSuccess) {
      navigate("/login"); // Redirect to login page or wherever you prefer
    }
  };

  return (
    <>
      <div style={{ padding: "10px" }}>
        <Alert
          show={show}
          key={
            userRegisterError ? "danger" : userRegisterSuccess ? "success" : ""
          }
          variant={
            userRegisterError ? "danger" : userRegisterSuccess ? "success" : ""
          }
        >
          {userRegisterError
            ? userRegisterError
            : userRegisterSuccess
            ? "Registration Successful! You can now log in."
            : ""}
        </Alert>
      </div>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
        }}
      >
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col xs={12} md={6} lg={4}>
            {/* Logo */}
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <img
                src={status6}
                alt="App Logo"
                style={{
                  maxWidth: "150px",
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>

            {/* Registration Form */}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  style={{ padding: "0.75rem", borderRadius: "0.25rem" }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ padding: "0.75rem", borderRadius: "0.25rem" }}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicPassword"
                style={{ marginTop: "1rem" }}
              >
                <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ padding: "0.75rem", borderRadius: "0.25rem" }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{
                  width: "100%",
                  marginTop: "1.5rem",
                  padding: "0.75rem",
                  backgroundColor: "#007bff",
                  borderColor: "#007bff",
                  borderRadius: "0.25rem",
                }}
                disabled={registeringLoader}
                onClick={handleSubmit}
              >
                {registeringLoader ? "Registering..." : "Register"}
              </Button>

              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <span>Already have an account?</span>
                <a
                  href="/login"
                  style={{ color: "#007bff", textDecoration: "none" }}
                >
                  {" "}
                  Sign In
                </a>
              </div>
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <a
                  href="#"
                  style={{ color: "#007bff", textDecoration: "none" }}
                >
                  Forgot password?
                </a>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
