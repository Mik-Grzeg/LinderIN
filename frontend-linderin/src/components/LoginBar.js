import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  CardImg,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";
import MatchCard from "./MatchCard";

const logedIn = true;
function LoginBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Container fluid>
      {logedIn ? (
        <Row className="mt-4">
          <Col xl="9"></Col>
          <Col xl="1">
            <Link to="/register">
              <Button className="p-2" color="primary" size="sm">
                Register
              </Button>
            </Link>
          </Col>

          <Col xl="1">
            <Link to="/login">
              <Button className="p-2" color="primary" size="sm">
                Login
              </Button>
            </Link>
          </Col>
        </Row>
      ) : (
        <Row className="mt-4">
          <Col xl="9"></Col>
          <Col xl="2">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} className="p-3">
              <DropdownToggle caret>
                <CardImg
                  className="Ca"
                  src="https://images.unsplash.com/photo-1669023030485-573b6a75ab64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: "50%",
                  }}
                />
                <span className="invisible">t</span>
                User Name
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Edit Profile</DropdownItem>
                <DropdownItem>Log out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default LoginBar;
