import Link from "next/link";
import React from "react";

function Portfolio3() {
  return (
    <>
      <div className="section-common sibling-two portfolio-section pt-120">
        <div className="row">
          <div className="section-title-three text-center">
            <div className="water-text">Portfolio</div>
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-sm-10 grid-item wedding">
            <div className="portfolio-single-one style-three magnetic-item">
              <img
                className="img-fluid"
                src="assets/images/portfolio/portfolio2-1.png"
                alt="image"
              />
              <div className="overlay">
                <div className="content">
                  <h3>
                    <Link
                      legacyBehavior
                      data-cursor="View<br>Details"
                      href="/portfolio-details"
                    >
                      <a>Wedding Photography.</a>
                    </Link>
                  </h3>
                  <span>Photographer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 grid-item Wedding Fashion">
            <div className="portfolio-single-one style-three magnetic-item">
              <img
                className="img-fluid"
                src="assets/images/portfolio/portfolio2-3.png"
                alt="image"
              />
              <div className="overlay">
                <div className="content">
                  <h3>
                    <Link
                      legacyBehavior
                      data-cursor="View<br>Details"
                      href="/portfolio-details"
                    >
                      <a>Wedding Photography.</a>
                    </Link>
                  </h3>
                  <span>Photographer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 grid-item Lifestyle">
            <div className="portfolio-single-one style-three magnetic-item">
              <img
                className="img-fluid"
                src="assets/images/portfolio/portfolio2-4.png"
                alt="image"
              />
              <div className="overlay">
                <div className="content">
                  <h3>
                    <Link
                      legacyBehavior
                      data-cursor="View<br>Details"
                      href="/portfolio-details"
                    >
                      <a>Wedding Photography.</a>
                    </Link>
                  </h3>
                  <span>Photographer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 grid-item Lifestyle Nature Wedding">
            <div className="portfolio-single-one style-three magnetic-item">
              <img
                className="img-fluid"
                src="assets/images/portfolio/portfolio2-1.png"
                alt="image"
              />
              <div className="overlay">
                <div className="content">
                  <h3>
                    <Link
                      legacyBehavior
                      data-cursor="View<br>Details"
                      href="/portfolio-details"
                    >
                      <a>Wedding Photography.</a>
                    </Link>
                  </h3>
                  <span>Photographer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 grid-item Lifestyle">
            <div className="portfolio-single-one style-three magnetic-item">
              <img
                className="img-fluid"
                src="assets/images/portfolio/portfolio2-2.png"
                alt="image"
              />
              <div className="overlay">
                <div className="content">
                  <h3>
                    <Link
                      legacyBehavior
                      data-cursor="View<br>Details"
                      href="/portfolio-details"
                    >
                      <a>Wedding Photography.</a>
                    </Link>
                  </h3>
                  <span>Photographer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 grid-item Wedding Nature">
            <div className="portfolio-single-one style-three magnetic-item">
              <img
                className="img-fluid"
                src="assets/images/portfolio/portfolio2-5.png"
                alt="image"
              />
              <div className="overlay">
                <div className="content">
                  <h3>
                    <Link
                      legacyBehavior
                      data-cursor="View<br>Details"
                      href="/portfolio-details"
                    >
                      <a>Wedding Photography.</a>
                    </Link>
                  </h3>
                  <span>Photographer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio3;
