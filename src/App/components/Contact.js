/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Col, Row, Container } from 'reactstrap';

function Contact() {
  return (
    <>
    <Container className="contactInfo"
     >
          <div className="contactContainer">
            <Row>
            <Col>
                <h3>find me here: </h3>

          <div className="contactStyles">

              <i className="fas fa-envelope-open-text"> Email</i>
            <div><a href="mailto:saramschoon@gmail.com" id="email" className="nav-link" target="_blank" rel="noreferrer"></a></div>
            <i className="fab fa-linkedin"> Linked In</i>
            <div><a href="https://www.linkedin.com/in/sara-schoonover-a14745205/" id="linkedin" className="nav-link" target="_blank" rel="noreferrer"></a></div>
            <i className="fab fa-github"> Github</i>
            <div><a href="https://github.com/SaraSchoonover?tab=repositories" id="github" className="nav-link" target="_blank" rel="noreferrer"></a></div>

              <i className="fab fa-instagram"> Instagram</i>
           </div>
           </Col>
           <Col>
           <img className="bioImage" src="https://images.squarespace-cdn.com/content/v1/586bb37015d5db0182382d50/1542398119360-QCA3WW5C9QTXOKCSJMEC/ke17ZwdGBToddI8pDm48kKT96-mTqGc-stp-zZRIm9p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTNp7wJXdR1xX66M6thRzqrQ6_o4HcW8ZfkNO26r5aioETgZ1M0luSsj-o69URGWyw/Facetune_16-11-2018-13-52-27.JPG?format=500w" alt="sara"></img>
           </Col>
           </Row>
        </div>
    </Container>
  </>
  );
}

export default Contact;
