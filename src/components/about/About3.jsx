import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
function About3() {
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
      <div className="section-common sibling-two about-me-section">
        <div className="container-fluid">
          <div className="about-me-content-1">
            <span>The Studio</span>
            <h2>Hello my name is Johnal Dainok. I’m editorial photographer.</h2>
            <p>
              My name is Johnal Dainok. I live in Ohio, USA. I’ve been a
              photographer for over 15 years now. I started getting on into
              photography when my family moved from Nevada to Ohio. Onar
              Switching places from such a young age tou made it possible for me
              to see many different andr places besides my hometown.
            </p>
          </div>
          <div className="row align-items-end">
            <div className="col-lg-6">
              {/* experience */}
              <div className="experience-block style-two">
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
                      <span className="percent" id="html-pourcent" />
                    </div>
                    <div className="bar-container">
                      <span className="progressbar" id="progress-html" />
                    </div>
                  </li>
                  <li>
                    <div className="progressbar-title">
                      <h6>Video Graphy</h6>
                      <span className="percent" id="css-pourcent" />
                    </div>
                    <div className="bar-container">
                      <span className="progressbar" id="progress-css" />
                    </div>
                  </li>
                  <li>
                    <div className="progressbar-title">
                      <h6>Portrait</h6>
                      <span className="percent" id="javascript-pourcent" />
                    </div>
                    <div className="bar-container">
                      <span className="progressbar" id="progress-javascript" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              {/* conter */}
              <div className="counter-box row justify-content-center g-4">
                <div className="col-lg-6 col-md-4 col-sm-4 col-6">
                  <div className="counter-single">
                    <div className="coundown d-flex flex-column">
                      <h2 className="odometer" data-odometer-final={15}>
                        <div id="count">
                          {startCounting ? (
                            <CountUp start={0} end={15} duration={3} />
                          ) : (
                            <></>
                          )}
                        </div>
                      </h2>
                      <p className="mb-0">Years Of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-4 col-6">
                  <div className="counter-single">
                    <div className="coundown d-flex flex-column">
                      <h2 className="odometer" data-odometer-final={12}>
                        <div id="count">
                          {startCounting ? (
                            <CountUp start={0} end={12} duration={3} />
                          ) : (
                            <></>
                          )}
                        </div>
                      </h2>
                      <p className="mb-0">Awards Win</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-4 col-6">
                  <div className="counter-single add-k">
                    <div className="coundown d-flex flex-column">
                      <h2 className="odometer" data-odometer-final={10}>
                        <div id="count">
                          {startCounting ? (
                            <CountUp start={0} end={10} duration={3} />
                          ) : (
                            <></>
                          )}
                        </div>
                      </h2>
                      <p className="mb-0">Awesome Photos</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-4 col-6">
                  <div className="counter-single add-k">
                    <div className="coundown d-flex flex-column">
                      <h2 className="odometer" data-odometer-final={44}>
                        <div id="count">
                          {startCounting ? (
                            <CountUp start={0} end={44} duration={3} />
                          ) : (
                            <></>
                          )}
                        </div>
                      </h2>
                      <p className="mb-0">Awesome Videos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About3;
