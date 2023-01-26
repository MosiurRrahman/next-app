import { useRouter } from "next/router";
import React from "react";

function Home2Contact() {
  const currentRoute = useRouter().pathname;
  return (
    <div
      className={
        currentRoute === "/index-bg-image"
          ? "contact-section3 pb-120 pl-80 mb-44"
          : "contact-section3 section-common2 pb-120 pl-80 mb-44"
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title-two">
              <h2>Get In Touch</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-7 col-lg-6">
            <h3 className="form-title">Have Any Questions</h3>
            <form className="contact-me-form">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-inner">
                    <input type="text" placeholder="Enter your name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-inner">
                    <input type="text" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-inner">
                    <input type="text" placeholder="Querry" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-inner">
                    <textarea
                      rows="6"
                      placeholder="Write Your message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="eg-btn btn--primary btn--lg">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-xl-5 col-lg-6 ps-lg-4 ps-auto">
            <div className="contact-content">
              <h2>
                <span>Let’s talk</span>About Your Photography.
              </h2>
              <p>
                I started getting on into photography when my family moved from
                oni Nevada to Ohio gong toubleta.I started getting on into
                photographyai when my family moved from Nevada to.
              </p>
            </div>
            <div className="phone-block">
              <div className="phone-title">
                Urgent? <span>Call Me</span>
              </div>
              <h4>
                <a href="tel:+012-3456-789102">+012-3456-789102</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2Contact;
