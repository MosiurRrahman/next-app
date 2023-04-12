import React from "react";

function Video5() {
  return (
    <div className="video-section">
      <div className="container-fluid">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="assets/video/video-bg.mp4"
          style={{ width: "100%", height: "85vh", objectFit: "cover" }}
        ></video>
      </div>
    </div>
  );
}

export default Video5;
