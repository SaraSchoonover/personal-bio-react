/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Col, Row, Container } from 'reactstrap';

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
            <Row>
              <Col><i className="fas fa-envelope-open-text"></i>
            <div><a href="mailto:saramschoon@gmail.com" id="email" className="nav-link" target="_blank" rel="noreferrer">Email</a></div></Col>
            <Col>
            <i className="fab fa-linkedin"></i>
            <div><a href="https://www.linkedin.com/in/sara-schoonover-a14745205/" id="linkedin" className="nav-link" target="_blank" rel="noreferrer">LinkedIn</a></div>
            </Col>
            <Col>
            <i className="fab fa-github"></i>
            <div><a href="https://github.com/SaraSchoonover?tab=repositories" id="github" className="nav-link" target="_blank" rel="noreferrer">Github</a></div>
            </Col>
            </Row>
        </div>
    </Container>
  </>
  );
}

export default Contact;
