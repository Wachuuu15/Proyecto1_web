import React from "react";
import "./Lavander.css";
import Lavanda from "/./imgs/tandy.jpg";

function Lavander() {
    return(
        <div className="Lavander-container">
          <div className="disk-lavander">
              <img src={Lavanda} />
          </div>
        </div>
    );
}

export default Lavander;