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
    <footer className="bg-light py-4">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs={12} md={6}>
            <div className="d-flex">
            {socialMedias.map((item, index) => (
                  <Logo key={index} socialMedia={item}
                  />
                ))}
            </div>
          </Col>
          <Col xs={12} md={6} className="text-md-end mt-3 mt-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} Inna Fedorenko</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
