import Link from "next/link";
import React from "react";

function Home1Portfolio() {
  return (
    <div className="section-common portfolio-section pt-120">
      <div className="row">
        <div className="section-title-three text-center">
          <div className="water-text">Portfolio</div>
          <h2>Portfolio</h2>
        </div>
      </div>
      <div className="row justify-content-center g-4">
        <div className="col-lg-4 col-md-6 col-sm-6 grid-item wedding">
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
                    <a> Wedding Photography</a>
                  </Link>
                </h3>
                <span>Photographer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 grid-item Wedding Fashion">
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
                    <a> Creative Photography</a>
                  </Link>
                </h3>
                <span>Photographer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 grid-item Lifestyle">
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
                    <a> Travel Photography.</a>
                  </Link>
                </h3>
                <span>Photographer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 grid-item Lifestyle Nature Wedding">
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
                    <a> Nature Photography</a>
                  </Link>
                </h3>
                <span>Photographer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 grid-item Lifestyle">
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
                    <a> Art Photography</a>
                  </Link>
                </h3>
                <span>Photographer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 grid-item Wedding Nature">
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
                    <a> Business Photography</a>
                  </Link>
                </h3>
                <span>Photographer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1Portfolio;
