import React from "react";
import ToggleSpan from "./ToggleSpan";
import ToggleButton from "./ToggleButton";

const Toggle = () => {
  return (
    <div className="pricing__toggle">
      <ToggleSpan name="Anually" />
      <ToggleButton />
      <ToggleSpan name="Monthly" />
    </div>
  );
};

export default Toggle;
