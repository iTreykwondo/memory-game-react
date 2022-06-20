import React from "react";

const Cards = (props) => {
  return (
    <div>
      {props.images.map((image, index) => {
        return (
          <img
            key={index}
            src={image}
            alt=""
            onClick={(e) => props.shuffle(props.images)}
          />
        );
      })}
    </div>
  );
};

export default Cards;
