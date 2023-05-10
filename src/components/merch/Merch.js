import React from "react";
import "./Merch.css";
import merch from "/./imgs/omcd.jpg";

function Merch() {
    return (
        <div className="Merch-container">
          <div className="merch-one">
              <img src={merch} />
          </div>
        </div>
      );
}

export default Merch;