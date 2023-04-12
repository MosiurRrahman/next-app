import Link from "next/link";
import React from "react";

function Service2() {
  return (
    <div className="service-section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title-six text-center mb-60">
              <span>Techio Services</span>
              <h2>
                Marketing <span>Analytics</span> Field
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-two-single">
              <div className="service-two-icon">
                <img src="assets/images/icons/service2-1.svg" alt="" />
                <span />
                <div className="serial-number">01</div>
              </div>
              <div className="service-two-content">
                <h3>
                  <Link legacyBehavior href="/service-details">
                    <a>Website Design</a>
                  </Link>
                </h3>
                <p>Pleasures have to be repudiated and annoyances accepted.</p>
                <Link legacyBehavior href="/service-details">
                  <a className="explore-btn">Explore More</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-two-single">
              <div className="service-two-icon">
                <img src="assets/images/icons/service2-2.svg" alt="" />
                <span />
                <div className="serial-number">02</div>
              </div>
              <div className="service-two-content">
                <h3>
                  <Link legacyBehavior href="/service-details">
                    <a>SEO Marketing</a>
                  </Link>
                </h3>
                <p>Pleasures have to be repudiated and annoyances accepted.</p>
                <Link legacyBehavior href="/service-details">
                  <a className="explore-btn">Explore More</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-two-single">
              <div className="service-two-icon">
                <img src="assets/images/icons/service2-3.svg" alt="" />
                <span />
                <div className="serial-number">03</div>
              </div>
              <div className="service-two-content">
                <h3>
                  <Link legacyBehavior href="/service-details">
                    <a>Social Media</a>
                  </Link>
                </h3>
                <p>Pleasures have to be repudiated and annoyances accepted.</p>
                <Link legacyBehavior href="/service-details">
                  <a className="explore-btn">Explore More</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-two-single">
              <div className="service-two-icon">
                <img src="assets/images/icons/service2-4.svg" alt="" />
                <span />
                <div className="serial-number">04</div>
              </div>
              <div className="service-two-content">
                <h3>
                  <Link legacyBehavior href="/service-details">
                    <a>Video Editing</a>
                  </Link>
                </h3>
                <p>Pleasures have to be repudiated and annoyances accepted.</p>
                <Link legacyBehavior href="/service-details">
                  <a className="explore-btn">Explore More</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-two-single">
              <div className="service-two-icon">
                <img src="assets/images/icons/service2-5.svg" alt="" />
                <span />
                <div className="serial-number">05</div>
              </div>
              <div className="service-two-content">
                <h3>
                  <Link legacyBehavior href="/service-details">
                    <a>Content Writing</a>
                  </Link>
                </h3>
                <p>Pleasures have to be repudiated and annoyances accepted.</p>
                <Link legacyBehavior href="/service-details">
                  <a className="explore-btn">Explore More</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-two-single">
              <div className="service-two-icon">
                <img src="assets/images/icons/service2-6.svg" alt="" />
                <span />
                <div className="serial-number">06</div>
              </div>
              <div className="service-two-content">
                <h3>
                  <Link legacyBehavior href="/service-details">
                    <a>Copy Writing</a>
                  </Link>
                </h3>
                <p>Pleasures have to be repudiated and annoyances accepted.</p>
                <Link legacyBehavior href="/service-details">
                  <a className="explore-btn">Explore More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service2;
