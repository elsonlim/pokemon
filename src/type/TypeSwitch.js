import React from "react";

import "./Type.css";

function TypeSwitch({ name, onClick, isActive = true }) {
  return (
    <div
      onClick={onClick}
      className={`Type switch ${name} ${isActive ? "" : "inactive"}`}
    >
      {name}
    </div>
  );
}

export default TypeSwitch;
