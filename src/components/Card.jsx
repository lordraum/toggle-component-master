import React from "react";
import CardHead from "./CardHead";
import Button from "./Button";

const Card = ({ children, title, price }) => {
  return (
    <div className="card">
      <CardHead title={title} price={price} />
      {children}

      <Button />
    </div>
  );
};

export default Card;
