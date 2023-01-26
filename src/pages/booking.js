import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function BookingPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Booking" pageTitle="Booking" />
      <div className="calendar-section bg-color2 pt-120 pb-120 mb-44">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-10">
              <div className="address-block">
                <h4>Address :</h4>
                <a href="#">
                  168/170, Ave 01,Old York Drive Rich Mirpur, Dhaka, Bangladesh
                </a>
              </div>
              <div className="address-block">
                <h4>Phone :</h4>
                <a href="tel:+012-3456-789102">+012-3456-789102</a>
              </div>
              <div className="address-block">
                <h4>Email :</h4>
                <a href="mailto:support@example.com">support@example.com</a>
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-6 col-sm-10">
              <h3 className="form-title">Book Here</h3>
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
                      <div className="searchbox-input date-picker-input input__list">
                        <input
                          autoComplete="off"
                          placeholder="Date"
                          type="text"
                          name="checkIn"
                          id="datepicker"
                          defaultValue
                          className="claender"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <input type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <textarea
                        rows={6}
                        placeholder="Write Your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="eg-btn btn--primary btn--lg"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BookingPage;
