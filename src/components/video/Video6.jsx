import React from "react";

function Video6() {
  return (
    <div className="video-section pb-120">
      <div className="container">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="assets/video/video-bg4.mp4"
          style={{ width: "100%", height: "70vh", objectFit: "cover" }}
        ></video>
      </div>
    </div>
  );
}

export default Video6;
