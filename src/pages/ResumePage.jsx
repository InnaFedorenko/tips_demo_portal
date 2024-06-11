// src/pages/ResumePage.jsx
//purpose: to display resume page
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import Skills from '../components/Skills';
import cvPath from '/public/cv/resume_IF_FSD.pdf'


export default function ResumePage (){
return (   
  <Container className="mt-5">
    {/* <h1>Your Resume</h1> */}
    <Skills />
    <a href={cvPath} className="btn btn-dark btn-lg" download>
        Download CV
      </a>
  </Container>
)
};

