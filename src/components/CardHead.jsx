import React from "react";

const CardHead = ({ title, price }) => {
  return (
    <div className="card__head">
      <h2 className="card__head-title">{title}</h2>
      <p className="card__">{price}</p>
    </div>
  );
};

export default CardHead;
