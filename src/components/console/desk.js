import React from "react";
import QuadZero from "./quadZero";
import QuadOne from "./quadOne";
import QuadTwo from "./quadTwo";

function desk() {
  return (
    <div className="desk">
      <div className="quad-container">
        <QuadZero />
      </div>
      <div className="quad-container">
        <QuadOne />
      </div>
      <div className="quad-container">
        <QuadTwo />
      </div>
    </div>
  );
}

export default desk;
