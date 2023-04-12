import Link from "next/link";
import React from "react";

function Contact6() {
  return (
    <div className="contact-now-six-section">
      <div className="container">
        <div
          className="contact-now-six-wrpper"
          style={{
            backgroundImage: 'url("assets/images/bg/contact-now-six.png")',
          }}
        >
          <div className="title-area">
            <h3>If You Fell Free , Contact With Us!</h3>
            <p>
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized.
            </p>
          </div>
          <a href="tel:0237543" className="call-icon">
            <img src="assets/images/bg/call-six-vector.svg" alt="" />
            <i className="bx bx-phone-call" />
          </a>
          <div className="contact-button">
            <Link legacyBehavior href="/contact">
              <a className="eg-btn btn--primary-four btn--lg rounded-2">
                Contact Now
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact6;
