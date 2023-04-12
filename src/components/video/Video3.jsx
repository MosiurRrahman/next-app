import React from "react";

function Video3() {
  return (
    <div className="video-section">
      <div className="container">
        <video
          autoPlay
          loop="loop"
          muted
          preload="auto"
          src="assets/video/video-bg3.mp4"
          style={{ width: "100%", height: "85vh", objectFit: "cover" }}
        ></video>
        <div className="video-title">
          <h2>Analysis Period</h2>
        </div>
      </div>
    </div>
  );
}

export default Video3;
