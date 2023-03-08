import React from "react";

const CardHead = ({ title, price }) => {
  return (
    <div className="card__head">
      <h2 className="card__title">{title}</h2>
      <p className="card__price">
        <span>$</span>
        {price}
      </p>
    </div>
  );
};

export default CardHead;
