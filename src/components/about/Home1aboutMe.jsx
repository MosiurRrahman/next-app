import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
function Home1aboutMe() {
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
    <div className="section-common about-me-section">
      <div className="container-fluid">
        <div className="about-me-content-1">
          <span>The Studio</span>
          <h2>Hello my name is Johnal Dainok. I’m editorial photographer.</h2>
          <p>
            My name is Johnal Dainok. I live in Ohio, USA. I’ve been a
            photographer for over 15 years now. I started getting on into
            photography when my family moved from Nevada to Ohio. Onar Switching
            places from such a young age tou made it possible for me to see many
            different andr places besides my hometown.
          </p>
        </div>
        {/* conter */}
        <div className="row justify-content-start">
          <div className="col-lg-4 col-md-4 col-sm-4 col-6">
            <div className="counter-single style-two">
              <div className="coundown d-flex flex-column">
                <h2 className="odometer">
                  <div id="count">
                    {startCounting ? (
                      <CountUp start={0} end={10} duration={3} />
                    ) : (
                      <></>
                    )}
                  </div>
                </h2>
                <p className="mb-0">Years Of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-6">
            <div className="counter-single style-two">
              <div className="coundown d-flex flex-column">
                <h2 className="odometer" data-odometer-final={10}>
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
          <div className="col-lg-4 col-md-4 col-sm-4 col-6">
            <div className="counter-single style-two add-k">
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
        </div>
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
                <div id="count">
                  {startCounting ? (
                    <span className="percent" id="html-pourcent">
                      100%
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="bar-container">
                <span className="progressbar" id="progress-html" />
              </div>
            </li>
            <li>
              <div className="progressbar-title">
                <h6>Video Graphy</h6>

                <div id="count">
                  {startCounting ? (
                    <span className="percent" id="css-pourcent">
                      90%
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="bar-container">
                <span className="progressbar" id="progress-css"></span>
              </div>
            </li>
            <li>
              <div className="progressbar-title">
                <h6>Portrait</h6>
                <div id="count">
                  {startCounting ? (
                    <span className="percent" id="javascript-pourcent">
                      70%
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="bar-container">
                <span className="progressbar" id="progress-javascript"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home1aboutMe;
