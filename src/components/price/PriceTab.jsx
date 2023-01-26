import Link from "next/link";
import React from "react";

function PriceTab() {
  return (
    <>
      <div className="pricing-section pt-120 pb-120 mb-44">
        <div className="container">
          <div className="row gy-5 justify-content-center">
            <div className="col-12">
              <ul
                className="nav nav-tabs portfolio-tab-list mb-70"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#tab-slider-one"
                    aria-selected="false"
                    role="tab"
                    tabIndex={-1}
                  >
                    Per/Hour
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#tab-slider-two"
                    aria-selected="false"
                    role="tab"
                  >
                    Per/Day
                  </a>
                </li>
              </ul>
              {/* tab-slider start*/}
              <div className="tab-content">
                <div
                  className="tab-pane fade"
                  id="tab-slider-one"
                  role="tabpanel"
                >
                  <div className="row g-4">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                      <div className="pricing-single">
                        <div className="pricing-header">
                          <span>Wedding Function</span>
                          <h2>
                            {" "}
                            <sup>$</sup> 990
                          </h2>
                        </div>
                        <ul className="pricing-feature-list">
                          <li>
                            <span>Time</span>
                            <span>5-7 Hours</span>
                          </li>
                          <li>
                            <span>Package</span>
                            <span>300+ Photo</span>
                          </li>
                          <li>
                            <span>Video</span>
                            <span>Photo Timeline</span>
                          </li>
                          <li>
                            <span>Photo Edit</span>
                            <span>Free</span>
                          </li>
                          <li>
                            <span>Delivery</span>
                            <span>1-2 Month</span>
                          </li>
                        </ul>
                        <Link legacyBehavior href="/booking">
                          <a className="eg-btn btn--primary btn--lg">
                            Appointment Now
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                      <div className="pricing-single">
                        <div className="pricing-header">
                          <span>Studio Portrait</span>
                          <h2>
                            {" "}
                            <sup>$</sup> 1090
                          </h2>
                        </div>
                        <ul className="pricing-feature-list">
                          <li>
                            <span>Time</span>
                            <span>2 Hours</span>
                          </li>
                          <li>
                            <span>Package</span>
                            <span>Up To 50 Photo</span>
                          </li>
                          <li>
                            <span>Video</span>
                            <span>Up To 03</span>
                          </li>
                          <li>
                            <span>Photo Edit</span>
                            <span>Free</span>
                          </li>
                          <li>
                            <span>Delivery</span>
                            <span>2-3 Months</span>
                          </li>
                        </ul>
                        <Link legacyBehavior href="/booking">
                          <a className="eg-btn btn--primary btn--lg">
                            Appointment Now
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                      <div className="pricing-single">
                        <div className="pricing-header">
                          <span>Fashion </span>
                          <h2>
                            {" "}
                            <sup>$</sup> 2990
                          </h2>
                        </div>
                        <ul className="pricing-feature-list">
                          <li>
                            <span>Time</span>
                            <span>3 Hours</span>
                          </li>
                          <li>
                            <span>Package</span>
                            <span>300+ Photo</span>
                          </li>
                          <li>
                            <span>Video</span>
                            <span>Up To 07</span>
                          </li>
                          <li>
                            <span>Photo Edit</span>
                            <span>Free</span>
                          </li>
                          <li>
                            <span>Delivery</span>
                            <span>5-6 Areas</span>
                          </li>
                        </ul>
                        <Link legacyBehavior href="/booking">
                          <a className="eg-btn btn--primary btn--lg">
                            Appointment Now
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade active show"
                  id="tab-slider-two"
                  role="tabpanel"
                >
                  <div className="row g-4">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                      <div className="pricing-single">
                        <div className="pricing-header">
                          <span>Wedding day</span>
                          <h2>
                            {" "}
                            <sup>$</sup> 4,990
                          </h2>
                        </div>
                        <ul className="pricing-feature-list">
                          <li>
                            <span>Time</span>
                            <span>5-7 Hours</span>
                          </li>
                          <li>
                            <span>Package</span>
                            <span>300+ Photo</span>
                          </li>
                          <li>
                            <span>Video</span>
                            <span>Photo Timeline</span>
                          </li>
                          <li>
                            <span>Photo Edit</span>
                            <span>Free</span>
                          </li>
                          <li>
                            <span>Delivery</span>
                            <span>1-2 Month</span>
                          </li>
                        </ul>
                        <Link legacyBehavior href="/booking">
                          <a className="eg-btn btn--primary btn--lg">
                            Appointment Now
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                      <div className="pricing-single">
                        <div className="pricing-header">
                          <span>Studio Portrait</span>
                          <h2>
                            {" "}
                            <sup>$</sup> 1,990
                          </h2>
                        </div>
                        <ul className="pricing-feature-list">
                          <li>
                            <span>Time</span>
                            <span>2 Hours</span>
                          </li>
                          <li>
                            <span>Package</span>
                            <span>Up To 50 Photo</span>
                          </li>
                          <li>
                            <span>Video</span>
                            <span>Up To 03</span>
                          </li>
                          <li>
                            <span>Photo Edit</span>
                            <span>Free</span>
                          </li>
                          <li>
                            <span>Delivery</span>
                            <span>2-3 Months</span>
                          </li>
                        </ul>
                        <Link legacyBehavior href="/booking">
                          <a className="eg-btn btn--primary btn--lg">
                            Appointment Now
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                      <div className="pricing-single">
                        <div className="pricing-header">
                          <span>Fashion </span>
                          <h2>
                            {" "}
                            <sup>$</sup> 4,990
                          </h2>
                        </div>
                        <ul className="pricing-feature-list">
                          <li>
                            <span>Time</span>
                            <span>3 Hours</span>
                          </li>
                          <li>
                            <span>Package</span>
                            <span>300+ Photo</span>
                          </li>
                          <li>
                            <span>Video</span>
                            <span>Up To 07</span>
                          </li>
                          <li>
                            <span>Photo Edit</span>
                            <span>Free</span>
                          </li>
                          <li>
                            <span>Delivery</span>
                            <span>5-6 Areas</span>
                          </li>
                        </ul>
                        <Link legacyBehavior href="/booking">
                          <a className="eg-btn btn--primary btn--lg">
                            Appointment Now
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* tab-slider end*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceTab;
