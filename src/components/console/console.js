import "./console.css";
import Window from "./window";

import Desk from "./desk.js";

function console() {
  return (
    <div className="console">
      <Window />

      <Desk />
    </div>
  );
}

export default console;
