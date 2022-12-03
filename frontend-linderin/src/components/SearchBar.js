import React from "react";
import { Container, Col, Row, Button, InputGroup, Input } from "reactstrap";

class SearchBar extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Col>
            <InputGroup>
              <Input />
              <Button>Find new better life</Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchBar;
