import React from "react";
import { Container, Col } from "reactstrap";
import Swiper2 from "../components/Swiper2";
import Footer from "../components/Footer";
import "../App.css";

class MainPage extends React.Component {
  render() {
    return (
      <Container fluid className="background">
        <Swiper2 />
        <Footer />
      </Container>
    );
  }
}

export default MainPage;
