import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
//import { NavLink } from 'react-router-dom';
import "./style.css";
import logoImage from '/clover-logo.png';


const Header = () => {
  return (
    
    <header>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logoImage}
            width="70"
            height="40"
            className="d-inline-block align-top"
            alt="UniVersIty logo" 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/payment-actions">Payment Actions</Nav.Link>
            <Nav.Link href="/device-actions">Device Actions</Nav.Link>
          </Nav>
          <Nav className="me-auto">

          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  );
}

export default Header;
