import React from "react";

function Newslatter() {
  return (
    <div className="newsletter-section">
      <div className="double-circle-left">
        <img src="assets/images/icons/double-cirle1.svg" alt="image" />
      </div>
      <div className="double-circle-right">
        <img src="assets/images/icons/double-cirle2.svg" alt="image" />
      </div>
      <div className="arrow-twist">
        <img src="assets/images/icons/arrow-twist.svg" alt="image" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-5">
            <div className="newsletter-title">
              <h3>If You Are Interseted, Subscribe Our Newsletter!</h3>
              <span className="title-icon">
                <img src="assets/images/icons/bell-icon.svg" alt="image" />
              </span>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="input-with-button">
              <input type="text" placeholder="Write Email..." />
              <button className="eg-btn btn--lg btn--primary-five">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newslatter;
