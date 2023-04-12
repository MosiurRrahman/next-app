import Link from "next/link";
import React from "react";

function Contact4() {
  return (
    <div className="contact-banner-section">
      <div className="container-fluid">
        <div className="contact-banner-wrapper text-lg-start text-center">
          <div className="background-shape">
            <img src="assets/images/bg/background-shap.png" alt="image" />
          </div>
          <div className="row align-items-center gy-4">
            <div className="col-xl-7 col-lg-6">
              <h3>Do Your Need To Change Business Strategy?</h3>
              <p>I will give you a complete account of the system expound.</p>
            </div>
            <div className="col-xl-5 col-lg-6 d-flex justify-content-md-between justify-content-center flex-md-nowrap flex-wrap align-items-center">
              <div className="contact-banner-image">
                <img src="assets/images/icons/call-icon.svg" alt="" />
              </div>
              <Link legacyBehavior href="/contact">
                <a className="eg-btn btn--md btn--primary sibling-two">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact4;
