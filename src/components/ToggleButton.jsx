import React from "react";
import { useState } from "react";

const ToggleButton = () => {
  const [toggleValue, setToggleValue] = useState("left");

  const handleClick = () =>
    setToggleValue(toggleValue === "left" ? "right" : "left");
  return (
    <div className="toggle__button" onClick={handleClick}>
      <span
        className={`toggle__circle${
          toggleValue === "left" ? "" : " toggle__circle--right"
        }`}
      ></span>
    </div>
  );
};

export default ToggleButton;
