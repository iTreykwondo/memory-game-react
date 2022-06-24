import React from "react";

const Cards = (props) => {
  return (
    <div className="cards">
      {props.images.map((image, index) => {
        return (
          <img
            className="card-img"
            key={index}
            src={image}
            alt=""
            onClick={(event) => {
              props.getImage(event);
              props.shuffle(props.images);
            }}
          />
        );
      })}
    </div>
  );
};

export default Cards;
