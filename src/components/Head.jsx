import React from "react";
import Toggle from "./Toggle";

const Head = ({ title }) => {
  return (
    <div className="pricing__head">
      <h1 className="pricing__title">{title}</h1>
      <Toggle />
    </div>
  );
};

export default Head;
