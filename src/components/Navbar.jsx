// src/components/Navbar.jsx
// purpose: This file contains the code for the navbar component. It is used on all pages of the site.

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/images/if_logo.png';

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
            alt="Inna Fedorenko Logo"
            height="50"
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
              className={` ${activeMenuItem === 'portfolio' ? 'active-link' : 'nav-link '}`}
              to="/portfolio"
              onClick={() => handleActiveMenuItem('portfolio')}
            >
              Portfolio
            </NavLink>
            <NavLink
              className={`${activeMenuItem === 'contact' ? 'active-link' : 'nav-link '}`}
              to="/contact"
              onClick={() => handleActiveMenuItem('contact')}
            >
              Contact
              </NavLink>
            <NavLink
              className={`${activeMenuItem === 'resume' ? 'active-link' : 'nav-link '}`}
              to="/resume"
              onClick={() => handleActiveMenuItem('resume')}
            >
              Resume
              </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
