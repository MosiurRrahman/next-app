import CircleType from "circletype";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
function Home1Banner() {
  const circleInstance = useRef();
  useEffect(() => {
    new CircleType(circleInstance.current).radius(10);
  }, []);
  return (
    <div className="section-common banner-section-one d-flex flex-column">
      <div className="banner-mobile-image d-lg-none d-block">
        <img src="assets/images/bg/portfolio-image-1.png" alt="image" />
      </div>
      <div className="banner-one-content">
        <div className="banner-one-circle">
          <div className="circle-text-common circel-tex-area1">
            <img src="assets/images/icons/camera-icon.svg" alt="image" />
            <p
              id="CircleTypeText1"
              ref={circleInstance}
              className="circle-text"
            >
              Photographer Creat&nbsp;{" "}
            </p>
          </div>
        </div>
        <span className="subtitle">Photographer</span>
        <h2 className="title text2">
          Johom <span className="title-padding">Dainok</span>
        </h2>
        <p className="description">
          Phasellus scelerisque turpis sed eros tristique, eu fringilla eros
          placerat. Pellentesque at maximus sapien, a dictum lectus.
        </p>
        <Link legacyBehavior href="/portfolio-column-two">
          <a className="eg-btn btn--primary btn--lg">View My Profile</a>
        </Link>
      </div>
    </div>
  );
}

export default Home1Banner;
