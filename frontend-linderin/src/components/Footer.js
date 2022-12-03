import React from "react";
import { Container, Col, Row, Button } from "reactstrap";
import "./Footer.css";
import "../App.css"

function Footer() {
  return (
    <footer className="btn-lblue">
      <Container fluid >
        <Row>
          <Col xl="4">Sudoers</Col>
          <Col xl="4">
            Mikołaj Macura Mikołaj Grzegorzek Dawid Klose Dawid Krzoska
          </Col>
          <Col xl="4">LinderIN TreadMark</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
