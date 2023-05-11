import React from "react";
import "./Edition.css";
import disk from "/./imgs/cover.png";
import edition from "/./imgs/4a.jpg";


function Edition() {
    return (
        <div className="Edition-container">
          <div className="collection-one">
              <img src={disk} />
          </div>

          <div className="title-1">
            <h1>Moonstone</h1>
          </div>
        </div>
    );
}

export default Edition;
