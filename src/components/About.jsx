//src/components/AboutMe.jsx
// Purpose: AboutMe component file

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagePath from '/public/img/clover-partners.jpg';



export default function About() {
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
            <h2 className="text-2xl text-gray-1000 font-bold leading-none mb-3">
            A powerful POS system that hustles as hard as you do
            </h2>
            <h3 className="text-xl text-gray-1000 font-bold leading-none mb-3">
            Speak with us to hear about our limited time offers for new businesses!
            </h3>
            <div >
                    <a href="https://www.clover.com/" className="btn btn-dark btn-lg">
                        Get in Touch
                    </a>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
