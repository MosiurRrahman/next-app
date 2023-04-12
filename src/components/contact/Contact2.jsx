import React from "react";

function Contact2() {
  return (
    <div className="contact-section5 pl-110 overflow-hidden">
      <div className="container">
        <div className="row align-items-center g-0">
          <div className="col-xl-6 order-lg-1 order-2">
            {/* map-modal */}
            <div
              className="modal fade"
              id="exampleModalToggle"
              aria-hidden="true"
              tabIndex={-1}
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.32809515636!2d90.3665091154322!3d23.806929392530332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1671510521035!5m2!1sen!2sbd"
                      width={600}
                      height={450}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="contact-two-image position-relative"
              style={{
                backgroundImage: 'url("assets/images/bg/contact2-bg.jpg")',
              }}
            >
              <div className="address-block">
                <div className="address-block-title">
                  <span>Contact Here</span>
                  <h2>Get In Touch</h2>
                  <p>
                    We denounce with righteous indignation and dislike men who
                    are so beguiled and demoralized by the charms of pleasure.
                  </p>
                </div>
                <ul className="address-list">
                  <li>
                    <div className="icon">
                      <img src="assets/images/icons/email-icon.svg" alt="" />
                    </div>
                    <div className="address">
                      <a href="mailto:info@example1.com">info@example1.com</a>
                      <a href="mailto:info@example2.com">info@example2.com</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icons/location-icon.svg" alt="" />
                    </div>
                    <div className="address">
                      <a href="mailto:info@example1.com">
                        Road no-02, House no-122/123,
                      </a>
                      <a href="mailto:info@example2.com">NewYork City, USA</a>
                    </div>
                  </li>
                </ul>
                <a
                  className="eg-btn btn--primary-outline2 btn--lg"
                  data-bs-toggle="modal"
                  href="#exampleModalToggle"
                  role="button"
                >
                  Our Site Map
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 order-lg-2 order-1">
            <div className="booking-form">
              <form className="form-style-one sibling-four">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <div className="input-icon">
                        <i className="bx bx-user-circle" />
                      </div>
                      <input type="text" placeholder="First Name*" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <div className="input-icon">
                        <i className="bx bx-user-circle" />
                      </div>
                      <input type="text" placeholder="Last Name*" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <div className="input-icon">
                        <i className="bx bx-phone-call" />
                      </div>
                      <input type="text" placeholder="Phone*" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <div className="input-icon">
                        <i className="bx bx-envelope" />
                      </div>
                      <input type="text" placeholder="Email*" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <div className="input-icon">
                        <i className="bx bx-cog" />
                      </div>
                      <input
                        type="text"
                        placeholder="What’s Kind Of Services*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <div className="input-icon">
                        <i className="bx bx-dollar" />
                      </div>
                      <input type="text" placeholder="Type Your Budget Here" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <textarea
                        rows={2}
                        placeholder="Your Message Here..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <button className="eg-btn btn--primary btn--lg w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact2;
