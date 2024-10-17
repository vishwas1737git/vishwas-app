import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logged out");
    navigate("/login"); // Navigate back to the profile or login page
  };

  return (
    <Container style={{ marginTop: "50px", textAlign: "center" }}>
      <h2>Settings</h2>
      <Button variant="primary" style={{ margin: "20px" }} onClick={() => alert("Go to Account Settings")}>
        Account Settings
      </Button>
      <Button variant="primary" style={{ margin: "20px" }} onClick={() => alert("Go to Privacy Settings")}>
        Privacy Settings
      </Button>
      <Button variant="danger"  style={{ margin: "20px" }} onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default SettingsPage;
