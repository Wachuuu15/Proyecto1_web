import React from "react";
import "./Video.css";
import mp4 from "/./imgs/mdan.mp4";



function Video() {
    return (
      <div className="Video-principal">
        <div className="video-container">
            <video src={mp4} autoPlay muted loop />
      
        </div>
        <div className="content">
         <a href="#" className="btn-video">Available Now</a>
        </div>
      </div>
    );
}

export default Video;