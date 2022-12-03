import React from "react";
import { Container, Col, Row, Button } from "reactstrap";

function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col xl="10"></Col>
          test1
          <Col xl="1">test2</Col>
          <Col xl="1">test3</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
