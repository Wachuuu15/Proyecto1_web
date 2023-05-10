import React from "react";
import "./Reproductor.css";
import ReactPlayer from "react-player";
import Lavander from "/./imgs/lavander.jpg";
import Play from "/./imgs/icply.png";

function Reproductor() {
    return (
        <div className="Reproductor-container">
            <div className="video-reproduction">
            <img src={Lavander} />
            </div>
            <div className="text-video">
                <h2>LAVANDER HAZE (OFFICIAL MUSIC VIDEO)</h2>
            </div>
            <div className="play">
            <img src={Play} />
            </div>
        </div>
    );
}

export default Reproductor;
