import React from "react";

function ContactMe() {
  return (
    <div className="contact-section bg-color2 pt-120 pb-120 mb-44">
      <div className="container">
        <div className="row justify-content-center gy-5">
          <div className="col-xl-5 col-lg-6 col-md-6 col-sm-10">
            <div className="address-block">
              <h4>Phone :</h4>
              <a href="tel:+012-3456-789102">+012-3456-789102</a>
              <a href="tel:+012-3456-789103">+012-3456-789103</a>
            </div>
            <div className="address-block">
              <h4>Address :</h4>
              <a href="#">House # 01, Mirpur, Dhaka, Bangladesh</a>
            </div>
            <div className="address-block">
              <h4>Email :</h4>
              <a href="mailto:support@example.com">support@example.com</a>
              <a href="mailto:info@example.com">info@example.com</a>
            </div>
            <div className="address-block">
              <h4>Social :</h4>
              <ul className="social-one justify-content-start mt-3">
                <li>
                  <img src="assets/images/icons/instagram.svg" alt="image" />
                  <a href="https://www.instagram.com/">IN</a>
                </li>
                <li>
                  <img src="assets/images/icons/dribbble.svg" alt="image" />
                  <a href="https://www.dribbble.com/">DB</a>
                </li>
                <li>
                  <img src="assets/images/icons/pinterest.svg" alt="image" />
                  <a href="https://www.pinterest.com/">PI</a>
                </li>
                <li>
                  <img src="assets/images/icons/Twitter.svg" alt="image" />
                  <a href="https://www.twitter.com/">TW</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-6 col-sm-10">
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
                      rows={6}
                      placeholder="Write Your message"
                      defaultValue={""}
                    />
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
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
