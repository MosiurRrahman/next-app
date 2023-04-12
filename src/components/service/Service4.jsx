import Link from "next/link";
import React from "react";

function Service4() {
  return (
    <div className="servcie-section-four pt-120">
      <div className="container">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10">
            <div className="section-title-four sibling-three text-center">
              <span>Services Here</span>
              <h2>Provide SEO Services </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center gy-4">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="service-four-single">
              <div className="service-four-header">
                <div className="service-four-icon">
                  <img src="assets/images/icons/service4-1.svg" alt="" />
                </div>
                <span />
                <div className="serial-number">01</div>
              </div>
              <h4 className="service-four-title">
                <a href="service-details.html" data-cursor="View Details">
                  Global Search Strategy
                </a>
              </h4>
              <p>
                Nor again is there anyone who loves or pursues or desires to
                obtain.
              </p>
              <Link legacyBehavior href="/service-details">
                <a className="explore-btn">Explore More</a>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="service-four-single">
              <div className="service-four-header">
                <div className="service-four-icon">
                  <img src="assets/images/icons/service4-2.svg" alt="" />
                </div>
                <span />
                <div className="serial-number">02</div>
              </div>
              <h4 className="service-four-title">
                <Link
                  legacyBehavior
                  href="/service-details"
                  data-cursor="View Details"
                >
                  <a>Local Search Strategy</a>
                </Link>
              </h4>
              <p>
                Nor again is there anyone who loves or pursues or desires to
                obtain.
              </p>
              <Link legacyBehavior href="/service-details">
                <a className="explore-btn">Explore More</a>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="service-four-single">
              <div className="service-four-header">
                <div className="service-four-icon">
                  <img src="assets/images/icons/service4-3.svg" alt="" />
                </div>
                <span />
                <div className="serial-number">03</div>
              </div>
              <h4 className="service-four-title">
                <Link legacyBehavior href="/service-details">
                  <a>Paid Advertising</a>
                </Link>
              </h4>
              <p>
                Nor again is there anyone who loves or pursues or desires to
                obtain.
              </p>
              <Link legacyBehavior href="/service-details">
                <a className="explore-btn">Explore More</a>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="service-four-single">
              <div className="service-four-header">
                <div className="service-four-icon">
                  <img src="assets/images/icons/service4-4.svg" alt="" />
                </div>
                <span />
                <div className="serial-number">04</div>
              </div>
              <h4 className="service-four-title">
                <Link legacyBehavior href="/service-details">
                  <a>Key Word Research</a>
                </Link>
              </h4>
              <p>
                Nor again is there anyone who loves or pursues or desires to
                obtain.
              </p>
              <Link legacyBehavior href="/service-details">
                <a className="explore-btn">Explore More</a>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="service-four-single">
              <div className="service-four-header">
                <div className="service-four-icon">
                  <img src="assets/images/icons/service4-5.svg" alt="" />
                </div>
                <span />
                <div className="serial-number">05</div>
              </div>
              <h4 className="service-four-title">
                <Link legacyBehavior href="/service-details">
                  <a>Content Writing</a>
                </Link>
              </h4>
              <p>
                Nor again is there anyone who loves or pursues or desires to
                obtain.
              </p>
              <Link legacyBehavior href="/service-details">
                <a className="explore-btn">Explore More</a>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="service-four-single">
              <div className="service-four-header">
                <div className="service-four-icon">
                  <img src="assets/images/icons/service4-6.svg" alt="" />
                </div>
                <span />
                <div className="serial-number">06</div>
              </div>
              <h4 className="service-four-title">
                <Link legacyBehavior href="/service-details">
                  <a>Link Building</a>
                </Link>
              </h4>
              <p>
                Nor again is there anyone who loves or pursues or desires to
                obtain.
              </p>
              <Link legacyBehavior href="/service-details">
                <a className="explore-btn">Explore More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service4;
