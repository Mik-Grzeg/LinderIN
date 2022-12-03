import React from "react";
import TinderCard from "react-tinder-card";
import { CardImg } from "reactstrap";

function Swiper(args) {

const onSwipe = (direction) => {
  console.log("You swiped: " + direction);
};

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + " left the screen");
};

  return (
    <div className="tinder">
      <TinderCard
        className="center"
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["right", "left"]}
      >
        <CardImg
          className="CardImg"
          src="https://images.unsplash.com/photo-1669023030485-573b6a75ab64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          style={{
            height: 400,
            width: 400,
            borderRadius: "50%",
          }}
        />
      </TinderCard>
    </div>
  );
}

export default Swiper;
