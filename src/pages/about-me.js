import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function AboutMePage() {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("count");
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight && elementBottom >= 0) {
        setStartCounting(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startCounting]);
  return (
    <>
      <Layout>
        <Breadcrumb pageName="About Me" pageTitle="About Me" />
        <div
          className="about-me-section bg-color2 pt-120 pb-120 mb-44"
          data-scroll
          data-scroll-speed={3}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-4">
                <div className="about-me-img">
                  <img src="assets/images/bg/about-me-img.png" alt="image" />
                </div>
              </div>
              <div className="col-xl-7 col-lg-8 ps-lg-4">
                <div className="about-me-content">
                  <h2>
                    Hello my name is Johnal Dainok. I’m editorial photographer.
                  </h2>
                  <p>
                    My name is Johnal Dainok. I live in Ohio, USA. I’ve been a
                    photographer for over 15 years now. I started getting into
                    photography when my family moved from Nevada to Ohio. Onar
                    Switching places from such a young age made it possible for
                    me to see many different andr places besides my hometown.
                  </p>
                  <p>
                    I wanted to capture everything that seemed magical to the
                    eye. After 5 years of thisa andoi freelancing and working
                    for big companies I founded my own photography agency. I
                    meani back and forth from Ohio to Nevada for work.
                  </p>
                  <div className="mt-120">
                    <div className="block-title">
                      <h3>Why Choose Me.</h3>
                      <p>
                        My name is Johnal Dainok. I live in Ohio, USA. I’ve been
                        a photographer for over 15 years now. I started getting
                        into photography when my
                      </p>
                    </div>
                    <div className="row justify-content-center gy-5">
                      <div className="col-lg-4">
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link active"
                              data-bs-toggle="tab"
                              href="#tab-one"
                              aria-selected="false"
                              role="tab"
                              tabIndex={-1}
                            >
                              <div className="counter-single text-center d-flex flex-column">
                                <div className="coundown d-flex flex-column">
                                  <p>Fashion Photography</p>
                                  <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                                    <h3
                                      className="odometer"
                                      data-odometer-final={50}
                                    >
                                      <div id="count">
                                        {startCounting ? (
                                          <CountUp
                                            start={0}
                                            end={50}
                                            duration={3}
                                          />
                                        ) : (
                                          <></>
                                        )}
                                      </div>
                                    </h3>
                                    <span className="project">Project</span>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link"
                              data-bs-toggle="tab"
                              href="#tab-two"
                              aria-selected="false"
                              role="tab"
                            >
                              <div className="counter-single text-center d-flex flex-column">
                                <div className="coundown d-flex flex-column">
                                  <p>Wedding Photography</p>
                                  <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                                    <h3
                                      className="odometer"
                                      data-odometer-final={150}
                                    >
                                      <div id="count">
                                        {startCounting ? (
                                          <CountUp
                                            start={0}
                                            end={150}
                                            duration={3}
                                          />
                                        ) : (
                                          <></>
                                        )}
                                      </div>
                                    </h3>
                                    <span className="project">Project</span>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link"
                              data-bs-toggle="tab"
                              href="#tab-three"
                              aria-selected="false"
                              role="tab"
                            >
                              <div className="counter-single text-center d-flex flex-column">
                                <div className="coundown d-flex flex-column">
                                  <p>Birthday Photography</p>
                                  <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                                    <h3
                                      className="odometer"
                                      data-odometer-final={90}
                                    >
                                      <div id="count">
                                        {startCounting ? (
                                          <CountUp
                                            start={0}
                                            end={90}
                                            duration={3}
                                          />
                                        ) : (
                                          <></>
                                        )}
                                      </div>
                                    </h3>
                                    <span className="project">Project</span>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link"
                              data-bs-toggle="tab"
                              href="#tab-four"
                              aria-selected="false"
                              role="tab"
                            >
                              <div className="counter-single text-center d-flex flex-column">
                                <div className="coundown d-flex flex-column">
                                  <p>Wildlife Photography</p>
                                  <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                                    <h3
                                      className="odometer"
                                      data-odometer-final={60}
                                    >
                                      <div id="count">
                                        {startCounting ? (
                                          <CountUp
                                            start={0}
                                            end={60}
                                            duration={3}
                                          />
                                        ) : (
                                          <></>
                                        )}
                                      </div>
                                    </h3>
                                    <span className="project">Project</span>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-8">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade"
                            id="tab-one"
                            role="tabpanel"
                          >
                            <div className="swiper award-slider">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <img
                                    src="assets/images/award/award1-1.png"
                                    alt="image"
                                  />
                                </div>
                                <div className="swiper-slide">
                                  <img
                                    src="assets/images/award/award1-2.png"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade active show"
                            id="tab-two"
                            role="tabpanel"
                          >
                            <div className="swiper award-slider">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <img
                                    src="assets/images/award/award2-1.png"
                                    alt="image"
                                  />
                                </div>
                                <div className="swiper-slide">
                                  <img
                                    src="assets/images/award/award2-2.png"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="tab-three"
                            role="tabpanel"
                          >
                            <div className="swiper award-slider">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <img
                                    src="assets/images/award/award3-1.png"
                                    alt="image"
                                  />
                                </div>
                                <div className="swiper-slide">
                                  <img
                                    src="assets/images/award/award1-2.png"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="tab-four"
                            role="tabpanel"
                          >
                            <div className="swiper award-slider">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <img
                                    src="assets/images/award/award1-1.png"
                                    alt="image"
                                  />
                                </div>
                                <div className="swiper-slide">
                                  <img
                                    src="assets/images/award/award1-2.png"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="tab-five"
                            role="tabpanel"
                          >
                            <div className="swiper award-slider">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <img
                                    src="assets/images/award/award1-1.png"
                                    alt="image"
                                  />
                                </div>
                                <div className="swiper-slide">
                                  <img
                                    src="assets/images/award/award1-2.png"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-120">
                    <div className="block-title">
                      <h3>Awards.</h3>
                      <p>
                        My name is Johnal Dainok. I live in Ohio, USA. I’ve been
                        a photographer for over 15 years now. I started getting
                        into photography when my
                      </p>
                      <ul className="award-list">
                        <li>
                          <span>Carmignac Photojournalism.</span>
                          <span>2022</span>
                        </li>
                        <li>
                          <span>International Photography Grant.</span>
                          <span>2020</span>
                        </li>
                        <li>
                          <span>Nikon Small World Competition.</span>
                          <span>2019</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-120">
                    <div className="block-title mb-0">
                      <h3>Collaboration.</h3>
                      <p>
                        I wanted to capture everything that seemed magical to
                        the eye. After 5 years of thisa andoi freelancing and
                        working for big companies I founded my own photography
                        agency. I meani back and forth from Ohio to Nevada for
                        work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AboutMePage;
