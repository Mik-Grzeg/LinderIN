import React, { useState } from "react";
import { Container, Col, Row, Button, InputGroup, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount, selectCount } from "../redux/Offer";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  async function getJobOffers(keyword) {
    let url = `http://localhost:8080/api/matches/japan`;
    const encoded = encodeURI(url);
    fetch(encoded, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
    		dispatch(incrementByAmount(data));
				console.log(offer)
        return data;
      });
  }

  const navigate = useNavigate();
  const offer = useSelector(selectCount);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await getJobOffers({
      keyword: keyword,
    });
			navigate("/main")
  };

  return (
    <Container fluid>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <Col>
          <InputGroup>
            <Input
              type="text"
              className="p-2 form-control"
              placeholder="learnJapaneese"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button
              type="button"
              className="btn btn-lblue"
              onClick={handleSubmit}
            >
              Find new better life
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
