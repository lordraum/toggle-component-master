import React from "react";
import { useContext } from "react";
import { ToggleContext } from "../contexts/ToggleContext";

const ToggleButton = () => {
  const { toggleValue, handleClick } = useContext(ToggleContext);

  return (
    <div
      className="toggle__button"
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      role="button"
      aria-label="Press Enter key to see monthly prices, type again to return anually options"
      tabIndex="0"
    >
      <span
        className={`toggle__circle${
          toggleValue === "left" ? "" : " toggle__circle--right"
        }`}
      ></span>
    </div>
  );
};

export default ToggleButton;
