// src/layout/Navbar.js

import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaHome, FaUserCircle, FaFacebookMessenger } from 'react-icons/fa'; 
import { ImSearch } from 'react-icons/im';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar bg="white" variant="light" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" style={{ fontWeight: 'bold', fontSize: '24px' }}>
          MyAsspp
        </Navbar.Brand>
        {/* <Form className="d-flex mx-auto">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{ width: '300px' }}
          />
        </Form> */}
        <Nav className="ml-auto">
          <Nav.Link href="#"><ImSearch size={24} /></Nav.Link>
          <Nav.Link href="/"><FaHome size={24} /></Nav.Link>
          <Nav.Link href="/chatlist"><FaFacebookMessenger size={24} /></Nav.Link>
          <Nav.Link href="/profile"><FaUserCircle size={24} /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
