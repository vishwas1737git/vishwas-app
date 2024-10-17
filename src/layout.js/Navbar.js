import React, { useState } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { FaHome, FaUserCircle, FaFacebookMessenger } from 'react-icons/fa'; 
import { ImSearch } from 'react-icons/im';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [longPress, setLongPress] = useState(false); // To track if it's a long press
  let pressTimer;

  // Common function to handle press start for both mouse and touch
  const handlePressStart = () => {
    setLongPress(false); // Reset long press state

    // Start a timer when the user presses down or touches the icon
    pressTimer = setTimeout(() => {
      setLongPress(true); // Long press detected
      setShowProfileDropdown(true); // Show dropdown after long press
    }, 500); // 1000ms (1 second) for long press detection
  };

  // Common function to handle press end for both mouse and touch
  const handlePressEnd = () => {
    clearTimeout(pressTimer); // Clear the timer if the press or touch is released

    if (!longPress) {
      // Short click or tap, redirect to profile page
      window.location.href = '/profile';
    }
  };

  // Ensure the timer is cleared if the user cancels the press or touch
  const handlePressCancel = () => {
    clearTimeout(pressTimer);
  };

  const handleDropdownClose = () => {
    setShowProfileDropdown(false);
  };

  return (
    <>
      <Navbar bg="white" variant="light" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/" style={{ fontWeight: 'bold', fontSize: '24px' }}>
            MyApp
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#"><ImSearch size={24} /></Nav.Link>
            <Nav.Link href="/"><FaHome size={24} /></Nav.Link>
            <Nav.Link href="/chatlist"><FaFacebookMessenger size={24} /></Nav.Link>
            
            {/* Profile Icon with touch/mouse support */}
            <Nav.Link 
              onMouseDown={handlePressStart} 
              onMouseUp={handlePressEnd}
              onMouseLeave={handlePressCancel}
              onTouchStart={handlePressStart}
              onTouchEnd={handlePressEnd}
              onTouchCancel={handlePressCancel}
              style={{ cursor: 'pointer' }}>
              <FaUserCircle size={24} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Profile Dropdown */}
      {showProfileDropdown && (
        <Dropdown.Menu show style={{ position: 'absolute', top: '60px', right: '20px' }}>
          <Dropdown.Item href="/profile">Profile</Dropdown.Item>
          <Dropdown.Item href="/settings">Settings</Dropdown.Item>
          <Dropdown.Item href="/logout">Logout</Dropdown.Item>
          <Dropdown.Item onClick={handleDropdownClose}>Close</Dropdown.Item>
        </Dropdown.Menu>
      )}
    </>
  );
};

export default NavBar;
