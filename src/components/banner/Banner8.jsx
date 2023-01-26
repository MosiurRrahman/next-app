import React from "react";

function Banner8() {
  return (
    <>
      <div className="section-common sibling-two banner-section-one d-flex flex-column">
        <div className="row g-4 align-items-center justify-content-center">
          <div className="col-xl-7 col-lg-7 col-md-10">
            <div className="banner-one-content">
              <span className="subtitle">Photographer</span>
              <h2 className="title text2">Johom Dainok</h2>
              <p className="description">
                Phasellus scelerisque turpis sed eros tristique, eu fringilla
                eros placerat. Pellentesque at maximus sapien, a dictum lectus.
              </p>
              <a
                href="portfolio-column-two.html"
                className="eg-btn btn--primary btn--lg"
              >
                View My Profile
              </a>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-10">
            <div className="banner-image">
              <img src="assets/images/banner/banner-center-1.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner8;
