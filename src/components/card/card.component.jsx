import React from "react";
import "../card/card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <h1> {props.monster.name} </h1>
    <img
      alt={props.monster.name}
      src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`}
    />
  </div>
);
