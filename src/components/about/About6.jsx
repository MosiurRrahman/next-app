import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
function About6() {
  return (
    <div className="about-six-section pt-120 pb-120" id="about">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-5 pe-lg-4 pe-auto">
            <div className="swiper about-six-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="about-image-single">
                    <img src="assets/images/bg/about6-1.jpg" alt="" />
                    <div className="about-image-info">
                      <h3>Intra-related Discussion Of Company </h3>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="about-image-single">
                    <img src="assets/images/bg/about6-1.jpg" alt="" />
                    <div className="about-image-info">
                      <h3>Monthly Discussion Of Company</h3>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="about-image-single">
                    <img src="assets/images/bg/about6-1.jpg" alt="" />
                    <div className="about-image-info">
                      <h3>Final Budget Discussion Of Company </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-six-pagination" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-six-cotnent">
              <div className="section-title-seven">
                <span className="mb-3">About TechGen</span>
                <h3>
                  “We denounce with righteous indignation and dislike men who
                  are so beguiled and demoralized by the charms of pleasure of
                  the moment, so blinded by desire.”
                </h3>
              </div>
              <div className="counter-wrapper style-two mb-60">
                <div className="coundown">
                  <span className="counter-tag">Projects</span>
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <h2 className="odometer">
                        <CountUp start={0} end={27} duration={3} />
                      </h2>
                      <i className="bi bi-plus" />
                    </div>
                    <p>Total Value</p>
                  </div>
                </div>
                <div className="coundown">
                  <span className="counter-tag">Experts</span>
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <h2 className="odometer" data-odometer-final={20}>
                        <CountUp start={0} end={120} duration={3} />
                      </h2>
                      <i className="bi bi-plus" />
                    </div>
                    <p>Lowest </p>
                  </div>
                </div>
                <div className="coundown">
                  <span className="counter-tag">Success</span>
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <h2 className="odometer" data-odometer-final={20}>
                        <CountUp start={0} end={57} duration={3} />
                      </h2>
                      <i className="bi bi-percent" />
                    </div>
                    <p>Highest</p>
                  </div>
                </div>
              </div>
              <Link legacyBehavior href="/about">
                <a className="eg-btn btn--lg btn--primary-outline style-four">
                  Explore More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About6;
