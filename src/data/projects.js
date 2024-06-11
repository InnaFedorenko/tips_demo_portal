// src/data/projects.js
// This file contains the data for the projects section. It is imported by
// ../components/Projects.js

import weatherProj from '/public/img/portfolio/weather.jpeg';
import proj1 from '/public/img/portfolio/Proj1.jpeg';
import nodes from '/public/img/portfolio/Note_taker.jpeg';
import proj2 from '/public/img/portfolio/Project2_.jpeg';
import pwaImg from '/public/img/portfolio/pwa-1(19).jpeg';
import proj3 from '/public/img/portfolio/proj3.jpeg';

const projects = [
  {
    name: 'Education Marketplace',
    picture: proj3,
    link: 'https://education-market.onrender.com',
    gitLink: 'https://github.com/InnaFedorenko/education-market',
    techStack: ['MERN Stack', 'React bootstrap'],
    description: 'Decentralized education marketplace.',
  },
  {
    name: 'French-Fry Family Events',
    picture: proj2,
    link: 'https://french-fry-event-83fa51ccd940.herokuapp.com/',
    gitLink: 'https://github.com/rstreep/french-fry-event/tree/inna',
    techStack: ['NodeJs', 'Express', 'MySQL', 'HTML', 'Materialize CSS', 'Jest'],
    description: 'The French-Fry Family Events Management Site.',
  },
  {
    name: 'JATE Text Editor',
    picture: pwaImg,
    link: 'https://text-editor-pwa-if.onrender.com',
    gitLink: 'https://github.com/InnaFedorenko/text-editor-PWA-if',
    techStack: ['NodeJs', 'Express', 'PWA', 'React'],
    description: 'Progressive Web Text Editor.',
  },
  {
    name: 'Note Taker',
    picture: nodes,
    link: 'https://note-taker-mapm.onrender.com',
    gitLink: 'https://github.com/InnaFedorenko/note-taker',
    techStack: ['NodeJS', 'Express', 'MySQL', 'HTML', 'CSS'],
    description: 'A web application that can be used to write, save, and delete notes.',
  },
  {
    name: 'Weather Dashboard',
    picture: weatherProj,
    link: 'https://innafedorenko.github.io/weather-dashboard/',
    gitLink: 'https://github.com/InnaFedorenko/weather-dashboard',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    description: 'A weather forecast for the next 5 days.',
  },
  {
    name: 'Family Fiesta',
    picture: proj1,
    link: 'https://rstreep.github.io/family-event-planner/',
    gitLink: 'https://github.com/rstreep/family-event-planner',
    techStack: ['MySQL', 'NodeJS', 'JavaScript', 'HTML', 'CSS'],
    description: 'Wizard type application to plan a family event.',
  }
];

export default projects;
