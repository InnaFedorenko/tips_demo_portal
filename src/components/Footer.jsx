// src/components/Footer.jsx
// purpose: Footer component for the website
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './Logo';
import socialMedias from "../data/socialMedia";


export default function Footer() {
  return (
    <footer>
      <Container fluid className="footer-container">
         <p >&copy; 2024 Q2 HW project by Inna Fedorenko</p>
      </Container>
    </footer>
  );
}
