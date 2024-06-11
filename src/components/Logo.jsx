// src/components/Logo.jsx
// purpose: Logo component for social media icons
import React from "react";
import { Link } from 'react-router-dom';
import gitLogo from '/public/img/logos/github.svg';
import linkedinLogo from '/public/img/logos/linkedin.svg';
import twitterLogo from '/public/img/logos/twitter.svg';
import emailLogo from '/public/img/logos/email.svg';

export default function Logo ({socialMedia}) {
    return (
      <Link to={socialMedia.url}>
        {socialMedia.name === 'GitHub' &&
        <img src={gitLogo} 
                alt="GitHub Logo" 
                className="git-logo me-2"
                style={{ width: '20px' }} needed                
                />
        }
        {socialMedia.name === 'Linkedin' && 
        <img src={linkedinLogo}
                alt="LinkedIn Logo"
                className="linkedin-logo me-2"
                style={{ width: '20px' }} 
                />
      }
      {socialMedia.name === 'Twitter' &&
        <img src={twitterLogo}
                alt="Twitter Logo"
                className="twitter-logo me-2"
                style={{ width: '20px' }} 
                />
      }
      {socialMedia.name === 'Email' &&
        <img src={emailLogo}
                alt="Email Logo"
                className="email-logo me-2"
                style={{ width: '20px' }} 
                />
      }
      </Link>
    );
  };

