import React from "react";

function BannerViceo() {
  return (
    <>
      <div className="banner-video-section">
        <div className="container-fluid">
          <div className="row">
            <div className="banner-video-single px-0">
              <div className="video-wrapper-youtube">
                <div className="banner-video-content">
                  <h1>Welcome to PicsZen !</h1>
                  <a
                    className="eg-btn btn--primary btn--lg"
                    href="portfolio-column-four.html"
                  >
                    View Portfolio
                  </a>
                </div>
                <video
                  autoPlay
                  loop="loop"
                  muted
                  preload="auto"
                  style={{ width: "100%", height: "100vh", objectFit: "cover" }}
                >
                  <source
                    src="assets/video/banner-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerViceo;
