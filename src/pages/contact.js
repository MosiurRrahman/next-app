import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import MainLayout from "../layout/MainLayout";

function Contact() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Contact Us" pageTitle="Contact Us" />
   
        <div className="contact-section pt-120 pb-120" id="next">
          <div className="container contact-three-wrapper sibling-two">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-7">
                <div className="section-title-four text-center mb-50">
                  <span>Need Contact</span>
                  <h2>
                    Contact With <span>Experties</span>{" "}
                  </h2>
                </div>
                <form className="form-style-one sibling-five">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <div className="input-icon">
                          <i className="bx bx-user-circle" />
                        </div>
                        <input type="text" placeholder="Full Name*" />
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
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <div className="input-icon">
                          <i className="bx bx-shopping-bag" />
                        </div>
                        <input type="text" placeholder="Company Name*" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <textarea
                          rows={5}
                          placeholder="Write Message..."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="checkbox-container">
                        <input
                          className="styled-checkbox style-two"
                          id="styled-checkbox-1"
                          type="checkbox"
                          defaultValue="value1"
                        />
                        <label htmlFor="styled-checkbox-1">
                          Please save my all information when I furthur connect
                          with company.
                        </label>
                      </div>
                    </div>
                  </div>
                  <button className="eg-btn btn--primary-five btn--lg w-100">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-block style-two">
                  <div className="working-hour-title sibling-three">
                    <h3>Working Hours:</h3>
                    <div className="title-vector">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <ul className="working-list working-list-two sibling-two">
                    <li>
                      <span>Mon to Sat </span>
                      <span>: 8am- 9pm</span>
                    </li>
                    <li>
                      <span>Sunday </span>
                      <span>: Closed</span>
                    </li>
                  </ul>
                  <hr className="separator" />
                  <div className="expert-info-two sibling-two">
                    <div className="expert-phone">
                      <div className="icon">
                        <img src="assets/images/icons/phone-icon3.svg" alt="" />
                      </div>
                      <div className="expert-number">
                        <span>Call Now</span>
                        <a href="tel:+998-8776345">+998-8776345</a>
                      </div>
                    </div>
                    <span className="or py-1" />
                    <div className="expert-phone">
                      <div className="icon">
                        <img src="assets/images/icons/email-icon3.svg" alt="" />
                      </div>
                      <div className="expert-number">
                        <span>Email Now</span>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========== contact_section end======== */}
        <div className="location-section pb-120">
          <div className="container">
            <div className="row justify-content-center gy-4">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="office-location-signle">
                  <a
                    className="map-button"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                    role="button"
                    data-cursor="NewYork"
                  >
                    <i className="bi bi-geo-alt" />
                    <h5>View Map</h5>
                    <img src="assets/images/icons/location-arrow.svg" alt="" />
                  </a>
                  <div className="content">
                    <h3>NewYork City</h3>
                    <p>
                      NewYork City, Office(01), <br /> Road:01, House:3A/B,
                      Section-B
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="office-location-signle">
                  <a
                    className="map-button"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                    role="button"
                    data-cursor="Canada"
                  >
                    <i className="bi bi-geo-alt" />
                    <h5>View Map</h5>
                    <img src="assets/images/icons/location-arrow.svg" alt="" />
                  </a>
                  <div className="content">
                    <h3>Canada City</h3>
                    <p>
                      Canada City, Office(01), <br /> Road:03, House:3E/L,
                      Section-B
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="office-location-signle">
                  <a
                    className="map-button"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                    role="button"
                    data-cursor="Austrilia"
                  >
                    <i className="bi bi-geo-alt" />
                    <h5>View Map</h5>
                    <img src="assets/images/icons/location-arrow.svg" alt="" />
                  </a>
                  <div className="content">
                    <h3>Austrilia City</h3>
                    <p>
                      Austrilia City, Office(01), <br /> Road:07, House:3J/O,
                      Section-B
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========== newsletter_section start ========== */}
        <div className="newsletter-section">
          <div className="double-circle-left">
            <img src="assets/images/icons/double-cirle1.svg" alt="image" />
          </div>
          <div className="double-circle-right">
            <img src="assets/images/icons/double-cirle2.svg" alt="image" />
          </div>
          <div className="arrow-twist">
            <img src="assets/images/icons/arrow-twist.svg" alt="image" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-5">
                <div className="newsletter-title">
                  <h3>If You Are Interseted, Subscribe Our Newsletter!</h3>
                  <span className="title-icon">
                    <img src="assets/images/icons/bell-icon.svg" alt="image" />
                  </span>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="input-with-button">
                  <input type="text" placeholder="Write Email..." />
                  <button className="eg-btn btn--lg btn--primary-five">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========== newsletter_section end ============= */}
        {/* ========== footer_section start======== */}
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
      
    </MainLayout>
  );
}

export default Contact;
