/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container } from 'reactstrap';

function Contact() {
  return (
    <>
    <Container
     style={{
       width: '30rem',
       flex: 'initial',
       flexDirection: 'row',
       flexWrap: 'wrap',
     }}>
          <div>
            <h2>Here's how you can get in touch with me:</h2>
            <p></p>
          </div>
          <div className="contactInfo">
          <i className="fas fa-envelope-open-text"></i>
            <div className="nav-item"><a href="mailto:saramschoon@gmail.com" id="email" className="nav-link" target="_blank" rel="noreferrer">Email</a></div>
            <i className="fab fa-linkedin"></i>
            <div className="nav-item"><a href="https://www.linkedin.com/in/sara-schoonover-a14745205/" id="linkedin" className="nav-link" target="_blank" rel="noreferrer">LinkedIn</a></div>
            <i className="fab fa-github"></i>
            <div className="nav-item"><a href="https://github.com/SaraSchoonover?tab=repositories" id="github" className="nav-link" target="_blank" rel="noreferrer">Github</a></div>
        </div>
    </Container>
  </>
  );
}

export default Contact;
