import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import status6 from "./../assets/download (3).jpeg";
import { loginUser } from "../redux/Action/AuthAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const { logingLoader, userLoginSuccess, userLoginError } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (userLoginSuccess) {
      navigate("/"); // Redirect to home page on successful login
    }
  }, [userLoginSuccess, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    // Dispatch login action
    dispatch(loginUser(loginData));
    setShow(true);
  };

  return (
    <>
      <div style={{ padding: "10px" }}>
        {userLoginError || userLoginSuccess ? (
          <Alert
            show={show}
            key={userLoginError ? "danger" : userLoginSuccess ? "success" : ""}
            variant={userLoginError ? "danger" : "success"}
            onClose={() => setShow(false)}
            dismissible
          >
            {userLoginError ? userLoginError : "Login successful!"}
          </Alert>
        ) : null}
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

            <Form onSubmit={handleLogin}>
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
                disabled={logingLoader}
              >
                {logingLoader ? "Logging In..." : "Login"}
              </Button>

              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <span>Don't have an account?</span>
                <a
                  href="/signup"
                  style={{ color: "#007bff", textDecoration: "none" }}
                >
                  {" "}
                  Sign Up
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
};

export default Login;
