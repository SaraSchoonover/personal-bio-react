/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function About() {
  return (
  <>
    <Container>
      <Row>
        <Col>
          <div>
            <h2>Hi, I'm Sara</h2>
            <p></p>
          </div></Col>
        <Col className="bio-img">
        </Col>
      </Row>
    </Container>
  </>
  );
}
