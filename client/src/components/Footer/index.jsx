import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// import app component styles
import './style.css';

const Footer = () => {

  return (
    <footer>
      <Container fluid className="footer-container">
         <p >&copy; 2024 Q2 HW project by Inna Fedorenko</p>
      </Container>
    </footer>
  );
};

export default Footer;
