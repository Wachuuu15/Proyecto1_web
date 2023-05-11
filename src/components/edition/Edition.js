import React from "react";
import "./Edition.css";
import disk from "/./imgs/cover.png";
import edition from "/./imgs/4a.jpg";
import edition1 from "/./imgs/db1.png";
import edition2 from "/./imgs/db2.png";
import edition3 from "/./imgs/db3.png";
import edition4 from "/./imgs/db4.png";
import haze from "/./imgs/sbgk.jpg";

function Edition() {
    return (
        <div className="Edition-container">
          <div className="collection-one">
              <img src={disk} />
          </div>

            <div className="disk-1">
                <img src={edition1} />
              </div>
              <div className="title-1">
                <h1>Moonstone Blue Edition</h1>
              </div>

              <div className="disk-2">
                <img src={edition2} />
              </div>
              <div className="title-2">
                <h1>Jade Green Edition</h1>
              </div>

              <div className="disk-3">
                <img src={edition3} />
              </div>
              <div className="title-3">
                <h1>Blood Moon Edition</h1>
              </div>

              <div className="disk-4">
                <img src={edition4} />
              </div>
              <div className="title-4">
                <h1>Mahogany Edition</h1>
              </div>

          <div className="collection-name">
            <h1>Collect all 4 Editions!</h1>
            <h2>Each vinyl album  includes:</h2>
          </div>

        </div>
    );
}

export default Edition;
