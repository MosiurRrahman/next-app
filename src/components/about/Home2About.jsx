import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import CountUp from "react-countup";
function Home2About() {
  const [startCounting, setStartCounting] = useState(false);
  const currentRoute = useRouter().pathname;
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
    <div
      className={
        currentRoute === "/index-bg-image"
          ? "about-section pt-120 pb-120 pl-80"
          : "about-section section-common2 pt-120 pb-120 pl-80"
      }
    >
      <div className="container">
        <div className="row align-items-end justify-content-start">
          <div className="col-xl-7 pe-lg-5 pe-0">
            <div className="about-two-content">
              <div className="big-title mb-5">
                <h2>Why Choose Me.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis sed recusandae harum aliquid dolorem quam suscipit,
                  ducimus.
                </p>
              </div>
            </div>
            <div className="counter-wrapper row justify-content-center g-4">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="counter-single text-center d-flex flex-column hover-border1">
                  <div className="coundown d-flex flex-column">
                    <p>Fashion Photography</p>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <h3 className="odometer" data-odometer-final={50}>
                        <div id="count">
                          {startCounting ? (
                            <CountUp start={0} end={10} duration={3} />
                          ) : (
                            <></>
                          )}
                        </div>
                      </h3>
                      <span>Project</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="counter-single text-center d-flex flex-column hover-border1">
                  <div className="coundown d-flex flex-column">
                    <p>Wedding Photography</p>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <h3 className="odometer" data-odometer-final={50}>
                        <div id="count">
                          {startCounting ? (
                            <CountUp start={0} end={50} duration={3} />
                          ) : (
                            <></>
                          )}
                        </div>
                      </h3>
                      <span>Project</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="counter-single text-center d-flex flex-column hover-border1">
                  <div className="coundown d-flex flex-column">
                    <p>Product Photography</p>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <h3 className="odometer" data-odometer-final={50}>
                        <div id="count">
                          {startCounting ? (
                            <CountUp start={0} end={50} duration={3} />
                          ) : (
                            <></>
                          )}
                        </div>
                      </h3>
                      <span>Project</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="award-block">
              <h4 className="award-title">Best Achievement</h4>
              <div className="award-wrapper">
                <div className="award-item" data-cursor="Award-2022">
                  <img src="assets/images/award/award-1.png" alt="image" />
                </div>
                <div className="award-item" data-cursor="Award-2021">
                  <img src="assets/images/award/award-2.png" alt="image" />
                </div>
                <div className="award-item" data-cursor="Award-2020">
                  <img src="assets/images/award/award-3.png" alt="image" />
                </div>
                <div className="award-item" data-cursor="Award-2019">
                  <img src="assets/images/award/award-4.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="experience-block">
              <h2>Experience</h2>
              <p>
                My name is Johnal Dainok. I live in Ohio, USA. I’ve been a
                photographer for over 15 years now. I started getting on into
                photography when my family moved from.
              </p>
              <ul className="skills-bar-container">
                <li>
                  <div className="progressbar-title">
                    <h6>Photography</h6>
                    <span className="percent" id="html-pourcent">
                      100%
                    </span>
                  </div>
                  <div className="bar-container">
                    <span className="progressbar" id="progress-html" />
                  </div>
                </li>
                <li>
                  <div className="progressbar-title">
                    <h6>Video Graphy</h6>
                    <span className="percent" id="css-pourcent">
                      92%
                    </span>
                  </div>
                  <div className="bar-container">
                    <span className="progressbar" id="progress-css" />
                  </div>
                </li>
                <li>
                  <div className="progressbar-title">
                    <h6>Portrait</h6>
                    <span className="percent" id="javascript-pourcent">
                      70%
                    </span>
                  </div>
                  <div className="bar-container">
                    <span className="progressbar" id="progress-javascript" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2About;
