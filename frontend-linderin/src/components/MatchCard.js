import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardText,
} from "reactstrap";
import "./MatchCard.css";
function MatchCard(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Open Modal
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg" {...args}>
        <ModalHeader toggle={toggle}>MatchCard</ModalHeader>
        <ModalBody>
          <Container fluid="xl">
            <Row>
              <Col xl="4">
                Losowy Opis Firmy What is Lorem Ipsum? Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </Col>
              <Col xl="4">
                <CardImg
                  className="CardImg"
                  alt="Card image cap"
                  src="https://images.unsplash.com/photo-1669023030485-573b6a75ab64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  style={{
                    height: 450,
                  }}
                  width="100%"
                />
              </Col>
              <Col xl="4">
                <div>
                  <CardImg
                    className="CardImg"
                    alt="Card image cap"
                    src="https://images.unsplash.com/photo-1661494054093-569593ccd455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                    style={{
                      height: 450,
                    }}
                    width="100%"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl="5"></Col>
              <Col xl="2">
                <Button color="primary" onClick={toggle}>
                  Contact
                </Button>{" "}
              </Col>
              <Col xl="5"></Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default MatchCard;
