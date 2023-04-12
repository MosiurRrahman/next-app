import React from 'react'

function Video4() {
  return (
    <div className="video-section">
    <div className="container-fluid">
      <video autoPlay loop="loop" muted preload="auto" style={{width: '100%', height: '85vh', objectFit: 'cover'}}>
        <source src="assets/video/video-bg2.mp4" type="video/mp4" />
      </video>
      <div className="video-title">
        <h2>Weekly Meeting</h2>
      </div>
    </div>
  </div>
  )
}

export default Video4