import Link from "next/link";
import React from "react";

function Service6() {
  return (
    <div className="service-section pt-120 pb-120" id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="section-title-seven mb-50 text-lg-start text-center">
              <span>Our Services</span>
              <h2>Agency Services Area</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <ul
            className="nav nav-tabs nav-style-two justify-content-xl-between justify-content-start"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#tab-one"
                aria-selected="false"
                role="tab"
                tabIndex={-1}
              >
                <span className="serial-number">01</span> Development Part
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#tab-two"
                aria-selected="true"
                role="tab"
              >
                <span className="serial-number">02</span>Desiging Area
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#tab-three"
                aria-selected="false"
                role="tab"
                tabIndex={-1}
              >
                <span className="serial-number">03</span>Marketing Strategy
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#tab-four"
                aria-selected="true"
                role="tab"
              >
                <span className="serial-number">04</span>Networking Part
              </a>
            </li>
          </ul>
        </div>
        <div id="myTabContent" className="tab-content">
          <div
            className="tab-pane fade active show"
            id="tab-one"
            role="tabpanel"
          >
            <div className="row g-4">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-1.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>App Development</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-2.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Game Development</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />{" "}
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-3.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Web Development</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />{" "}
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-4.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Mobile Development</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />{" "}
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-5.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Fronted Development</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />{" "}
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-6.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>React Development</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />{" "}
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-two" role="tabpanel">
            <div className="row g-4">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-3.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Web Development</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-4.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Mobile Development</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />{" "}
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-5.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Fronted Development</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />{" "}
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-three" role="tabpanel">
            <div className="row g-4">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-4.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Advertisement.</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />{" "}
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-5.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Broadcasting</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-6.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Sell Development</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-four" role="tabpanel">
            <div className="row g-4">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-3.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Network Monitoring</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-4.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Network Software</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-5.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Server Management</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-6.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Network Map</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-5.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Fronted Development</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-six-single">
                  <div className="service-two-icon">
                    <img src="assets/images/icons/service2-6.svg" alt="" />
                    <span />
                    <div className="serial-number">
                      <img src="assets/images/icons/ribbon-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="service-six-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Virtualization</a>
                      </Link>
                    </h4>
                    <p>
                      Pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <div className="explore-button">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img
                            src="assets/images/icons/button-arrow-linear.svg"
                            alt="image"
                          />
                          Explore More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service6;
