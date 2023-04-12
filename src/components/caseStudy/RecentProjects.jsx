import Link from "next/link";
import React from "react";

function RecentProjects() {
  return (
    <>
      <div className="benefit-block mb-4">
        <h3>Related Projects:</h3>
      </div>
      <div className="row justify-content-center gy-5">
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className="casestudy-five-single">
            <div className="casestudy-five-image">
              <img src="assets/images/casestudy/casestudy5-2.jpg" alt="image" />
            </div>
            <div className="casestudy-five-content">
              <span className="category">Digital Marketing</span>
              <h4>
                <Link legacyBehavior href="/casestudy-details">
                  <a>How to Improve Your Digital Stretegy.</a>
                </Link>
              </h4>
              <div className="explore-button with-border">
                <Link legacyBehavior href="/casestudy-details">
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
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className="casestudy-five-single">
            <div className="casestudy-five-image">
              <img src="assets/images/casestudy/casestudy5-3.jpg" alt="image" />
            </div>
            <div className="casestudy-five-content">
              <span className="category">Development</span>
              <h4>
                <Link legacyBehavior href="/casestudy-details">
                  <a>Grow Your Company with Development.</a>
                </Link>
              </h4>
              <div className="explore-button with-border">
                <Link legacyBehavior href="/casestudy-details">
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
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className="casestudy-five-single">
            <div className="casestudy-five-image">
              <img src="assets/images/casestudy/casestudy5-2.jpg" alt="image" />
            </div>
            <div className="casestudy-five-content">
              <span className="category">Branding</span>
              <h4>
                <Link legacyBehavior href="/casestudy-details">
                  <a>Grow Your Business Policy in Branding.</a>
                </Link>
              </h4>
              <div className="explore-button with-border">
                <Link legacyBehavior href="/casestudy-details">
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
    </>
  );
}

export default RecentProjects;
