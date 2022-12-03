import React from "react";
import { Container, CardImg } from "reactstrap";
import LoginBar from "../components/LoginBar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import "../App.css";


class LandingPage extends React.Component {
  render() {
    return (
      <Container fluid>
        <LoginBar />
        <SearchBar />
        <Footer />
      </Container>
    );
  }
}

export default LandingPage;
