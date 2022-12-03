import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import { Card, CardText, CardBody, CardTitle, Row, Col } from "reactstrap";
import "./Swiper2.css";

const db = [
  {
    name: "Richard Hendricks",
    url: "https://images.unsplash.com/photo-1668661628231-d630edd8ad95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80",
  },
  {
    name: "Erlich Bachman",
    url: "https://images.unsplash.com/photo-1669034646879-4a68073ee8cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
  },
  {
    name: "Monica Hall",
    url: "https://images.unsplash.com/photo-1669130950037-3d33bd490971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  },
  {
    name: "Jared Dunn",
    url: "https://images.unsplash.com/photo-1668634038912-1735064107e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Dinesh Chugtai",
    url: "https://images.unsplash.com/photo-1669034646756-a99807dfbc41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
  },
];

function Swiper2() {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="fullsizeCeneter">
      <div className="cardContainer">
        {characters.map((character) => (
          <TinderCard
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
					<Row>
					<Col>
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card"
            >
            </div>
					</Col>
					<Col>
					<div className="black card">
              <text>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"}</text>
					</div>
					</Col>
					</Row>
          </TinderCard>

        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
}

export default Swiper2;
