import React from "react";
import MiniProject from "./MiniProject";

const App = () => {
  return (
    <div>
      <div className="backgroundImage" />
      <div className="mainContainer">
        <div className="section0">
          <div className="navBox">
            <div className="nav1">
              <div className="nav1Text">richardmands.com</div>
              <div className="nav1Text">| Mini-Project</div>
            </div>
          </div>
        </div>

        <MiniProject />
      </div>
    </div>
  );
};

export default App;
