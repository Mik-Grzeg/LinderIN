import React from "react";
import { Container, Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";

class LoginBar extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xl="10"></Col>
          <Col xl="1">
            <Link to="/register">
              <Button color="primary" size="sm">
                Register
              </Button>
            </Link>
          </Col>

          <Col xl="1">
            <Link to="/login">
              <Button color="primary" size="sm">
                Login
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginBar;
