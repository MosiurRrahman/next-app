/* eslint-disable react/no-unescaped-entities */
import CircleType from "circletype";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
function Home2banner() {
  const circleInstance = useRef();
  useEffect(() => {
    new CircleType(circleInstance.current).radius(10);
  }, []);
  return (
    <div className="banner-section-two section-common2 pt-120 overflow-hidden pl-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="water-text-two mb-3 marquee_text1">
              <h1>Creative Photographer</h1>
            </div>
          </div>
          <div className="col-lg-6 d-lg-block d-none">
            <div className="banner-two-image magnetic-item">
              <img src="assets/images/banner/banner-one-img.png" alt="image" />
            </div>
          </div>
          <div className="col-lg-6 position-relative">
            <div className="banner-two-circle">
              <div className="circle-text-common circel-tex-area1">
                <img src="assets/images/icons/camera-icon.svg" alt="image" />
                <p
                  ref={circleInstance}
                  id="CircleTypeText1"
                  className="circle-text"
                >
                  Photographer Creat&nbsp;
                </p>
              </div>
            </div>
            <div className="about-two-content">
              <span className="subtitle">Photographer</span>
              <h2 className="title text2">John Dainok</h2>
              <p>
                Hi, I'm a photographer. I love my job. I often have to
                communicate with people. I like to photograph unique characters
                and personalities.
              </p>
              <div className="banner-two-btn">
                <Link legacyBehavior href="/portfolio-slider">
                  <a className="eg-btn btn--primary-two btn--lg">
                    View My Profile
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2banner;
