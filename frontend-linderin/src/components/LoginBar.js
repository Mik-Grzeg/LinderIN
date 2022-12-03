import React from "react";
import { Container, Col, Row, Button, CardImg} from "reactstrap";
import { Link } from "react-router-dom";
import MatchCard from "./MatchCard";

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

        <Row>
          <Col xl="10"></Col>
          <Col xl="1">
            <CardImg
              className="CardImg"
              alt="Card image cap"
              src="https://images.unsplash.com/photo-1669023030485-573b6a75ab64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              style={{
                height: 50,
								width: 50,
								borderRadius: "50%"
              }}
            />
          </Col>
          <Col xl="1">User Name</Col>
        </Row>
        <MatchCard />
      </Container>
    );
  }
}

export default LoginBar;
