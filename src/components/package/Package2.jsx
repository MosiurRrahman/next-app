import Link from "next/link";
import React from "react";

function Package2() {
  return (
    <>
      <div className="section-common sibling-two package-section pt-120">
        <div className="row">
          <div className="section-title-three text-center">
            <div className="water-text">What I Do</div>
            <h2>What I Do</h2>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="package-single">
              <div className="packge-feature">
                <h3>Photography</h3>
                <ul className="feature-list">
                  <li>
                    <img
                      src="assets/images/icons/list-circle-arrow.svg"
                      alt="image"
                    />
                    200 Personal Photograph.
                  </li>
                  <li>
                    <img
                      src="assets/images/icons/list-circle-arrow.svg"
                      alt="image"
                    />
                    5 Hour To 8 Hour Duration.
                  </li>
                </ul>
              </div>
              <Link legacyBehavior href="/booking">
                <a className="eg-btn btn--primary btn--lg">Book Now</a>
              </Link>
              <div className="package-price">
                <h6>Start Form</h6>
                <span>$200</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="package-single">
              <div className="packge-feature">
                <h3>Photography</h3>
                <ul className="feature-list">
                  <li>
                    <img
                      src="assets/images/icons/list-circle-arrow.svg"
                      alt="image"
                    />
                    200 Personal Photograph.
                  </li>
                  <li>
                    <img
                      src="assets/images/icons/list-circle-arrow.svg"
                      alt="image"
                    />
                    5 Hour To 8 Hour Duration.
                  </li>
                </ul>
              </div>
              <Link legacyBehavior href="/booking">
                <a className="eg-btn btn--primary btn--lg">Book Now</a>
              </Link>
              <div className="package-price">
                <h6>Start Form</h6>
                <span>$200</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="package-single">
              <div className="packge-feature">
                <h3>Photo Editing</h3>
                <ul className="feature-list">
                  <li>
                    <img
                      src="assets/images/icons/list-circle-arrow.svg"
                      alt="image"
                    />
                    200 Personal Photograph.
                  </li>
                  <li>
                    <img
                      src="assets/images/icons/list-circle-arrow.svg"
                      alt="image"
                    />
                    5 Hour To 8 Hour Duration.
                  </li>
                </ul>
              </div>
              <Link legacyBehavior href="/booking">
                <a className="eg-btn btn--primary btn--lg">Book Now</a>
              </Link>
              <div className="package-price">
                <h6>Start Form</h6>
                <span>$200</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="package-single">
              <div className="packge-feature">
                <h3>Videography</h3>
                <ul className="feature-list">
                  <li>
                    <img
                      src="assets/images/icons/list-circle-arrow.svg"
                      alt="image"
                    />
                    200 Personal Photograph.
                  </li>
                  <li>
                    <img
                      src="assets/images/icons/list-circle-arrow.svg"
                      alt="image"
                    />
                    5 Hour To 8 Hour Duration.
                  </li>
                </ul>
              </div>
              <Link legacyBehavior href="/booking">
                <a className="eg-btn btn--primary btn--lg">Book Now</a>
              </Link>
              <div className="package-price">
                <h6>Start Form</h6>
                <span>$200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Package2;
