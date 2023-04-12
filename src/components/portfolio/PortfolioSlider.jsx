import React from "react";

function PortfolioSlider() {
  return (
    <div className="portfolio-slider-section pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="swiper portfolio-sldier">
              <div className="swiper-wrapper" data-cursor="Drag">
                <div className="swiper-slide">
                  <div className="portfolio-three-single">
                    <div className="portfolio-three-image">
                      <img
                        src="assets/images/portfolio/port-slider1.jpg"
                        alt=""
                      />
                      <div className="portfolio-three-content">
                        <div className="subtitle">
                          <p>Digital Marketing</p>
                        </div>
                        <div className="title">
                          <h3>
                            <a href="portfolio-details.html">
                              Marketing Stranger Change.
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="portfolio-three-single">
                    <div className="portfolio-three-image">
                      <img
                        src="assets/images/portfolio/port-slider2.jpg"
                        alt=""
                      />
                      <div className="portfolio-three-content">
                        <div className="subtitle">
                          <p>Business Startup</p>
                        </div>
                        <div className="title">
                          <h3>
                            <a href="portfolio-details.html">
                              Make Sure Startup Agency.
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSlider;
