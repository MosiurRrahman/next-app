import Link from "next/link";
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
                  <Link legacyBehavior href="/portfolio-column-four">
                    <a className="eg-btn btn--primary btn--lg">
                      View Portfolio
                    </a>
                  </Link>
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
