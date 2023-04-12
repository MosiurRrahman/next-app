import React from "react";

function Contact5() {
  return (
    <div className="contact-section5 pl-110">
      <div className="container-fluid">
        <div className="row align-items-center g-0">
          <div className="col-xl-4 order-xl-1 order-2">
            <div className="booking-form">
              <h3 className="form-title">Book A Free Consultation</h3>
              <form className="form-style-one sibling-two">
                <div className="form-inner">
                  <div className="input-icon">
                    <i className="bx bx-user-circle" />
                  </div>
                  <input type="text" placeholder="Full Name*" />
                </div>
                <div className="form-inner">
                  <div className="input-icon">
                    <i className="bx bx-phone-call" />
                  </div>
                  <input type="text" placeholder="Phone*" />
                </div>
                <div className="form-inner">
                  <div className="input-icon">
                    <i className="bx bx-envelope" />
                  </div>
                  <input type="text" placeholder="Email*" />
                </div>
                <div className="form-inner">
                  <div className="input-icon">
                    <i className="bx bx-calendar" />
                  </div>
                  <input
                    placeholder="Select your date"
                    type="text"
                    name="checkIn"
                    id="datepicker"
                    autoComplete="off"
                    className="calendar"
                  />
                </div>
                <button className="eg-btn btn--primary-five btn--lg w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-xl-8 order-xl-2 order-1">
            <div className="contact-five-image position-relative">
              <div className="working-hour-block">
                <div className="working-hour-title">
                  <h3>Working Hours:</h3>
                  <div className="title-vector">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <ul className="working-list">
                  <li>
                    <span>Mon to Sat </span>
                    <span>: 8am- 9pm</span>
                  </li>
                  <li>
                    <span>Sunday </span>
                    <span className="linear-text-two">: Closed</span>
                  </li>
                </ul>
                <a href="mailto:info@example.com" className="linear-text-two">
                  <i className="bi bi-envelope" /> <span /> info@example.com
                </a>
              </div>
              <div className="map-area">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193325.0481540361!2d-74.06757856146028!3d40.79052383652264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1660366711448!5m2!1sen!2sbd"
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
      </div>
    </div>
  );
}

export default Contact5;
