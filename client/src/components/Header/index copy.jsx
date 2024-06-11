import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
//import { NavLink } from 'react-router-dom';
import "./style.css";
import logoImage from '';

//import { useLogin } from '../../utils/LoginContext'; 

const Header = () => {
  //const [activeMenuItem, setActiveMenuItem] = useState('');

  //TODO - LoginCheck and LoginCheck Helper - replace next page
  //const [state, dispatch] = useLogin(); // Get the login state from context

  //console.log(state);
/*
  const handleActiveMenuItem = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  useEffect(() => {
    const storedActiveItem = localStorage.getItem('activeMenuItem');
    setActiveMenuItem(storedActiveItem || 'home');
  }, []);

  useEffect(() => {
    localStorage.setItem('activeMenuItem', activeMenuItem);
  }, [activeMenuItem]);
*/
  return (
    
 <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logoImage}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="UniVersIty logo" 
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">Payment Actions</Nav.Link>
              <Nav.Link href="/services">Device Actions</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
