import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Row,
  Col,
  FormGroup,
} from "reactstrap";

async function setJobOffers(Args) {
  let url = `http://localhost:8080/api/job_offer`;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
    body: JSON.stringify({
      keywords: Args.keywords,
      description: Args.description,
      img_uri: Args.img_uri,
      recruiter_email: localStorage.getItem("userName"),
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === 200) {
        return true;
      } else {
        return false;
      }
    });
}

function AddJobOffer() {
  const [modal, setModal] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [description, setDesciption] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await setJobOffers({
      keywords: keywords,
      description: description,
      img_uri: imageUrl,
    });

    if (resp === true) {
      console.log("powinno dzialac");
    } else {
      console.log(" nie powinno dzialac");
    }
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Add Job Offer
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Add Job Offer</ModalHeader>
        <ModalBody>
          <Container fluid="xl">
            <Row>
              <Col>
                <FormGroup className="mt-3">
                  <label>Keywords</label>
                  <input
                    className="form-control mt-1"
                    placeholder="Enter keywords"
                    id="email"
                    onChange={(e) => setKeywords(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <label>Description</label>
                  <input
                    className="form-control mt-1"
                    placeholder="Enter Description"
                    onChange={(e) => setDesciption(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <label>ImageURL</label>
                  <input
                    className="form-control mt-1"
                    placeholder="Enter image URL"
                    onChange={(e) => setimageUrl(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <div className="d-grid gap-2 mt-3">
              <Button
                type="button"
                className="btn btn-lblue"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddJobOffer;
