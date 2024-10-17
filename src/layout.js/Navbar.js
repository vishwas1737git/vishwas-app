import React, { useState } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { FaHome, FaUserCircle, FaFacebookMessenger } from 'react-icons/fa'; 
import { ImSearch } from 'react-icons/im';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  console.log("showProfileDropdownshowProfileDropdownshowProfileDropdown",showProfileDropdown)
  let pressTimer;

  const handleMouseDown = () => {
    // Start a timer when the user presses down on the icon
    pressTimer = setTimeout(() => {
      setShowProfileDropdown(true); // Show dropdown after long press
    }, 500); // 500ms for long press detection
  };

  const handleMouseUp = () => {
    clearTimeout(pressTimer); // Clear the timer if the mouse is released before 500ms
    if (!showProfileDropdown) {
      // Short click, redirect to profile page
      window.location.href = '/profile';
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(pressTimer); // Ensure timer is cleared if the user moves the cursor away
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
            
            {/* Profile Icon with click/hold behavior */}
            <Nav.Link 
              onMouseDown={handleMouseDown} 
              onMouseUp={handleMouseUp} 
              onMouseLeave={handleMouseLeave} 
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
