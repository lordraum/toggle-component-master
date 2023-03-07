import React from "react";
import ToggleSpan from "./ToggleSpan";

const Toggle = () => {
  return (
    <div className="pricing__toggle">
      <ToggleSpan name="Anually" />
      <ToggleSpan name="Monthly" />
    </div>
  );
};

export default Toggle;
