import React from "react";

function ContactUs() {
  return (
    <>
      <div>
        <div className="address-section bg-color1">
          <div className="container">
            <div className="row justify-content-start g-4">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="address-block-two">
                  <div className="address-icon">
                    <img src="assets/images/icons/email-icon.svg" alt="image" />
                  </div>
                  <a href="mailto:support@example.com">support@example.com</a>
                  <span>Email</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="address-block-two">
                  <div className="address-icon">
                    <img
                      src="assets/images/icons/location-icon.svg"
                      alt="image"
                    />
                  </div>
                  <a href="#">Mirpur, Dhaka, Bangladesh</a>
                  <span>Address</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="address-block-two">
                  <div className="address-icon">
                    <img src="assets/images/icons/phone-icon.svg" alt="image" />
                  </div>
                  <a href="tel:00407763574-8901">0040 7763 574-8901</a>
                  <span>Phone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========== address-section end============= */}
        <div className="contact-form-section bg-color2 pt-120 pb-120 mb-44">
          <div className="container">
            <form className="contact-us-form">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="form-inner">
                    <input type="text" placeholder="Enter your name" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="form-inner">
                    <input type="text" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-inner">
                    <input type="text" placeholder="Querry" />
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
                <div className="col-12 text-center">
                  <button type="submit" className="eg-btn btn--primary btn--lg">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
