import React from "react";
import CountUp from "react-countup";
function FeatureCounter() {
  return (
    <div className="h1-feature-counter mb-120">
      <div className="container-md container-fluid">
        <div className="row justify-content-center g-md-4 gy-5">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="counter-single client">
              <div className="counter-icon">
                <img src="assets/images/icon/client.svg " alt="image" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    <CountUp end={100} />
                  </h3>
                  <span>+</span>
                </div>
                <p>Client Served</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="counter-single animals">
              <div className="counter-icon">
                <img src="assets/images/icon/animals.svg" alt="image" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-12">
                  <h3 className="odometer">
                    <CountUp end={700} />
                  </h3>
                  <span>+</span>
                </div>
                <p>Served animals</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="counter-single walked">
              <div className="counter-icon">
                <img src="assets/images/icon/walked.svg " alt="image" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    <CountUp end={1000} />
                  </h3>
                </div>
                <p>Miles Walked </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="counter-single years">
              <div className="counter-icon">
                <img src="assets/images/icon/years.svg " alt="image" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    <CountUp end={"02"} />
                  </h3>
                </div>
                <p>Combined years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCounter;
