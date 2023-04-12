import React from "react";

function FormWidget() {
  return (
    <div className="booking-form mt-120">
      <h4 className="blog-widget-title">Fell Free To Contact :</h4>
      <form className="form-style-one sibling-two">
        <div className="form-inner">
          <div className="input-icon">
            <i className="bx bx-user-circle" />
          </div>
          <input type="text" placeholder="Name*" />
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
          <textarea placeholder="Message..." defaultValue={""} />
        </div>
        <button className="eg-btn btn--primary-five btn--lg w-100 rounded-0">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default FormWidget;
