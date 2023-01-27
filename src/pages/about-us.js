import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Counter from "../components/common/Counter";
import Team1 from "../components/team/Team1";
import Testimonial4 from "../components/testimonial/Testimonial4";
import Layout from "../layout/Layout";

function aboutUsPage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="About Us" pageTitle="About Us" />
        <div>
          {/* ========== about-me start============= */}
          <div
            className="about-us-section bg-color2 pt-120 pb-120"
            data-scroll
            data-scroll-speed={3}
          >
            <div className="container">
              <div className="row justify-content-center align-items-center mb-40 g-4">
                <div className="col-lg-8 text-lg-start text-center">
                  <div className="about-us-content">
                    <h2>We’re PicsZen, a small photo agency based.</h2>
                  </div>
                </div>
                <div className="col-lg-4 text-lg-end text-center">
                  <Link legacyBehavior href="/booking">
                    <a className="eg-btn btn--primary btn--lg">
                      Appointment Now
                    </a>
                  </Link>
                </div>
              </div>
              <div className="row align-items-center g-4">
                <div className="col-lg-6">
                  <div className="about-us-image">
                    <img src="assets/images/bg/about-us1.png" alt="image" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-us-content">
                    <p>
                      My name is Johnal Dainok. I live in Ohio, USA. I’ve been a
                      photographer for over 15 years now. I started getting into
                      photography when my family moved from Nevada to Ohio. Onar
                      Switching places from such a young age made it possible
                      for me to see many different andr places besides my
                      hometown.
                    </p>
                    <p>
                      I wanted to capture everything that seemed magical to the
                      eye. After 5 years of thisa andoi freelancing and working
                      for big companies I founded my own photography agency. I
                      meani back and forth from Ohio to Nevada for work.
                    </p>
                    <p>
                      I wanted to capture everything that seemed magical to the
                      eye. After 5 years of thisa andoi freelancing and working
                      for big companies I founded my own photography.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="experience-block">
                    <h2>Experience</h2>
                    <p>
                      My name is Johnal Dainok. I live in Ohio, USA. I’ve been a
                      photographer for over 15 years now. I started getting on
                      into photography when my family moved from.
                    </p>
                    <ul className="skills-bar-container">
                      <li>
                        <div className="progressbar-title">
                          <h6>Photography</h6>
                          <span className="percent" id="html-pourcent" />
                        </div>
                        <div className="bar-container">
                          <span className="progressbar" id="progress-html" />
                        </div>
                      </li>
                      <li>
                        <div className="progressbar-title">
                          <h6>Video Graphy</h6>
                          <span className="percent" id="css-pourcent" />
                        </div>
                        <div className="bar-container">
                          <span className="progressbar" id="progress-css" />
                        </div>
                      </li>
                      <li>
                        <div className="progressbar-title">
                          <h6>Portrait</h6>
                          <span className="percent" id="javascript-pourcent" />
                        </div>
                        <div className="bar-container">
                          <span
                            className="progressbar"
                            id="progress-javascript"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-image-group d-flex flex-row flex-nowrap justify-content-lg-start justify-content-center">
                    <img src="assets/images/bg/about-us2.png" alt="image" />
                    <img
                      src="assets/images/bg/about-us3.png"
                      className="d-xxl-block d-none"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ========== about-me end============= */}
          <Counter />
          {/* testimonial-section */}
          <Testimonial4 />
          {/* ========== testimonial_section end======== */}
          {/* ========== team_section start======== */}
          <Team1 />
        </div>
      </Layout>
    </>
  );
}

export default aboutUsPage;
