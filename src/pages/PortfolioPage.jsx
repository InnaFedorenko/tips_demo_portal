// src/pages/PortfolioPage.jsx
// purpose: This file is the PortfolioPage component. It is the page that displays the projects that I have worked on.
import React from 'react';
import { Card } from 'react-bootstrap';
import projects from '../data/projects'; // Import the updated projects array
import gitLogo from '/public/img/logos/github.svg';

export default function ProjectCards() {
  return (
    <div className="row my-3" >
    <h2 className="text-center">Creative Portfolio</h2>
      {projects.map((project, index) => (
        
        <div key={index} className="col-md-4 mb-4">
          <Card className="card">
            <Card.Img id= "projImg" variant="top" src={project.picture}/>
            <Card.Body>
              <Card.Link href={project.link} target="_blank">{project.name}</Card.Link>
              <Card.Link href={project.gitLink} target="_blank">
              <img   src={gitLogo}
                alt="GitHub Logo" 
                className="git-logo me-2"
                style={{ width: '20px' }} 
                />
               </Card.Link> 
              <Card.Text>Tech Stack: {project.techStack.join(', ')}</Card.Text>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
