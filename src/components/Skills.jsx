// src/components/Skills.jsx
// purpose: This file contains the Skills component which is used to display the skills section of the portfolio page.
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import skills from '../data/skills'; // Import skills array
export default function Skills() {
  return (
    <div>
      <h2>About me</h2>
      <p className="text-gray-800 mb-8">
      I am a highly experienced IT professional with more than 15 years in the field, including 8 years in leadership roles. I hold a Master of Computer Science degree and specialize in web development and quality assurance, staying up-to-date with the latest technology trends. My expertise covers various sectors, such as Healthcare, Financial Services, and Education. 
      </p>
      <p className="text-gray-800 mb-8">
        Throughout my career, I've excelled in managing programs and accounts, overseeing portfolios worth $10+ million. I've cultivated successful partnerships with a diverse range of clients, from major corporations to fast-growing startups. My approach is in alignment with company values, emphasizing both contractual and financial aspects.
      </p>
      <p className="text-gray-800 mb-8">
        I'm a strategic thinker with a keen eye for detail, prioritizing value and always seeking innovative solutions while fostering strong interpersonal relationships. I thrive on innovation and am constantly driven by a pursuit of knowledge. 
      </p>
      <h2>Skills</h2>
      <div className="mb-4 skills ">
        {skills.map((skill, index) => (
          <span key={index} className="badge  bg-light me-2">{skill}</span>
        ))}
      </div>
    </div>
  );
};