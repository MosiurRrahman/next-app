import React from "react";

function About1() {
  return (
    <div className="about-section-one position-relative pt-120">
      <div className="title-opacity-wrapper">
        <div className="title-opacity">
          <h2>ABOUT</h2>
          <span />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-one mb-30">
              <div className="section-subtitle">
                <img src="assets/images/icons/title-shape-before.svg" alt="" />
                About Company
                <img src="assets/images/icons/title-shape-after.svg" alt="" />
              </div>
              <h3>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable the majority have suffered alteration.
              </h3>
            </div>
            <div className="row counter-wrapper style-three gy-5">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="coundown d-flex flex-column align-items-center">
                  <div className="counter-number d-flex flex-row align-items-center justify-content-center gap-1">
                    <span className="counter-serial">1</span>
                    <h2 className="odometer" data-odometer-final={99}>
                      99
                    </h2>
                    <i className="bi bi-percent" />
                  </div>
                  <p>Satisfied Client</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="coundown d-flex flex-column align-items-center">
                  <div className="counter-number d-flex flex-row align-items-center justify-content-center gap-1">
                    <span className="counter-serial">2</span>
                    <h2 className="odometer" data-odometer-final={987}>
                      987
                    </h2>
                  </div>
                  <p>Total Projects</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="coundown d-flex flex-column align-items-center">
                  <div className="counter-number d-flex flex-row align-items-center justify-content-center gap-1">
                    <span className="counter-serial">3</span>
                    <h2 className="odometer" data-odometer-final={99}>
                      99
                    </h2>
                    <i className="bi bi-percent" />
                  </div>
                  <p>On-time Projects</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="coundown d-flex flex-column align-items-center">
                  <div className="counter-number d-flex flex-row align-items-center justify-content-center gap-1">
                    <span className="counter-serial">4</span>
                    <h2 className="odometer" data-odometer-final={24}>
                      24/
                    </h2>
                    <i className="bi bi-slash-lg" /> <h2>7</h2>
                  </div>
                  <p>Support Live</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
