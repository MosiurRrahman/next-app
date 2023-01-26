import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
function Counter() {
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
      <div className="counter-section bg-color1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="counter-single style-two">
                <div className="coundown d-flex flex-column">
                  <h2 className="odometer" data-odometer-final={50}>
                    <div id="count">
                      {startCounting ? (
                        <CountUp start={0} end={50} duration={3} />
                      ) : (
                        <></>
                      )}
                    </div>
                  </h2>
                  <p className="mb-0">Fashion Photography</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="counter-single style-two">
                <div className="coundown d-flex flex-column">
                  <h2 className="odometer" data-odometer-final={150}>
                    <div id="count">
                      {startCounting ? (
                        <CountUp start={0} end={150} duration={3} />
                      ) : (
                        <></>
                      )}
                    </div>
                  </h2>
                  <p className="mb-0">Wedding Photography</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="counter-single style-two">
                <div className="coundown d-flex flex-column">
                  <h2 className="odometer" data-odometer-final={90}>
                    <div id="count">
                      {startCounting ? (
                        <CountUp start={0} end={90} duration={3} />
                      ) : (
                        <></>
                      )}
                    </div>
                  </h2>
                  <p className="mb-0">Birthday Photography</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="counter-single style-two">
                <div className="coundown d-flex flex-column">
                  <h2 className="odometer" data-odometer-final={90}>
                    <div id="count">
                      {startCounting ? (
                        <CountUp start={0} end={50} duration={3} />
                      ) : (
                        <></>
                      )}
                    </div>
                  </h2>
                  <p className="mb-0">Street Photography</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
