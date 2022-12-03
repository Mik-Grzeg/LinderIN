import React from "react";
import { Container } from "reactstrap";
import LoginBar from "../components/LoginBar";

class LandingPage extends React.Component {
  render() {
    return (
      <Container fluid>
        <LoginBar />
      </Container>
    );
  }
}

export default LandingPage;
