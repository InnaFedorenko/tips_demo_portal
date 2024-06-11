// src/components/Navbar.jsx
// purpose: This file contains the code for the navbar component. It is used on all pages of the site.

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/images/clover-logo.png';

export default function Navbar_b() {
  // Set the active menu item based on the current page
  const [activeMenuItem, setActiveMenuItem] = useState('');
  // handleActiveMenuItem is a function that sets the active menu item
  const handleActiveMenuItem = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  useEffect(() => {
    // Get the active menu item from storage on page load
    const storedActiveItem = localStorage.getItem('activeMenuItem');
    setActiveMenuItem(storedActiveItem || 'about'); // Default to 'about' if none stored
  }, []);

  useEffect(() => {
    // Store the active menu item in local storage whenever it changes
    localStorage.setItem('activeMenuItem', activeMenuItem);
  }, [activeMenuItem]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logoImage}
            alt="App Logo"
            height="60"
            width= "90"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              exact
              className={` ${activeMenuItem === 'about' ? 'active-link' : 'nav-link '}`}
              to="/"
              onClick={() => handleActiveMenuItem('about')}
            >
              About
            </NavLink>
            <NavLink
              className={` ${activeMenuItem === 'device' ? 'active-link' : 'nav-link '}`}
              to="/device"
              onClick={() => handleActiveMenuItem('device')}
            >
              Device Actions
            </NavLink>
            <NavLink
              className={`${activeMenuItem === 'payment' ? 'active-link' : 'nav-link '}`}
              to="/payment"
              onClick={() => handleActiveMenuItem('payment')}
            >
              Payment Actions
              </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
