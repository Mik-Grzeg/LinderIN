import React from "react";
import { Container } from "reactstrap";
import LoginBar from "../components/LoginBar";
import SearchBar from "../components/SearchBar";

class LandingPage extends React.Component {
  render() {
    return (
      <Container fluid>
        <LoginBar />
				<SearchBar />
      </Container>
    );
  }
}

export default LandingPage;
