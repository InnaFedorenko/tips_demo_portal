//src/components/AboutMe.jsx
// Purpose: AboutMe component file

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagePath from '/public/img/innafedorenko3.jpg';



export default function AboutMe() {
  return (
    <section className="bg-gray-1000 py-20">
      <Container className='my-3'>
        <Row className="align-items-center">
          <Col md={6} className="p-6">
            <img
              src={imagePath}
              className="rounded-full shadow-md img-fluid"
            />
          </Col>
          <Col md={6} className="p-6 ">
            <h1 className="text-3xl text-gray-1000 font-bold leading-none mb-3">
             INNA FEDORENKO
            </h1>
            <h2 className="text-xl text-gray-1000 font-bold leading-none mb-3">
            Web Developer
            </h2>
            <div >
                    <a href="/contact" className="btn btn-dark btn-lg">
                        Get in Touch
                    </a>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
