import React from "react";
import "./Eras.css";
import tick from "/./imgs/tick.jpg";


function Eras() {
    return (
        <div className="Eras-container">
          <div className="eras-ticket">
              <img src={tick}/>
          </div>
        </div>
    );
}

export default Eras;