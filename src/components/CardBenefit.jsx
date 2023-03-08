import React from "react";

const CardBenefit = ({ benefit }) => {
  return (
    <div className="card__benefit-box">
      <p className="card__benefit">{benefit}</p>
    </div>
  );
};

export default CardBenefit;
