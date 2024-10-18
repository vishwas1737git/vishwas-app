import React, { useState } from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { FaHome, FaUserCircle, FaFacebookMessenger } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoLogoYoutube } from "react-icons/io";
import { RiAddBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [longPress, setLongPress] = useState(false);
  let pressTimer;

  const handlePressStart = () => {
    setLongPress(false);
    pressTimer = setTimeout(() => {
      setLongPress(true);
      setShowProfileDropdown(true);
    }, 500);
  };

  const handlePressEnd = () => {
    clearTimeout(pressTimer);
    if (!longPress) {
      window.location.href = "/profile";
    }
  };

  const handlePressCancel = () => {
    clearTimeout(pressTimer);
  };

  const handleDropdownClose = () => {
    setShowProfileDropdown(false);
  };

  return (
    <>
      <Navbar bg="white" variant="light" fixed="bottom" className="shadow-sm">
        <Container>
          <Nav className="mx-auto" style={{ display: "contents" }}>
            {" "}
            {/* Centering icons */}
            <Link to="/">
              <FaHome color="black" size={24} />
            </Link>
            <Link to="#">
              <ImSearch color="black" size={24} />
            </Link>
            <Link to="/chatlist">
              <RiAddBoxFill color="black" size={26} />
            </Link>
            <Link to="/chatlist">
              <IoLogoYoutube color="black" size={26} />
            </Link>
            <Link
              onMouseDown={handlePressStart}
              onMouseUp={handlePressEnd}
              onMouseLeave={handlePressCancel}
              onTouchStart={handlePressStart}
              onTouchEnd={handlePressEnd}
              onTouchCancel={handlePressCancel}
              style={{ cursor: "pointer" }}
            >
              <FaUserCircle color="black" size={24} />
            </Link>
          </Nav>
        </Container>
      </Navbar>

      {showProfileDropdown && (
        <Dropdown.Menu
          show
          style={{ position: "absolute", bottom: "60px", right: "20px" }} // Adjusted for footer
        >
          <Dropdown.Item href="/profile">Profile</Dropdown.Item>
          <Dropdown.Item href="/settings">Settings</Dropdown.Item>
          <Dropdown.Item href="/logout">Logout</Dropdown.Item>
          <Dropdown.Item onClick={handleDropdownClose}>Close</Dropdown.Item>
        </Dropdown.Menu>
      )}
    </>
  );
};

export default Footer;
