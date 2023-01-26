import React from "react";

function Contact3() {
  return (
    <>
      <div className="section-common sibling-two contact-section pt-120 pb-120 mb-44">
        <div className="row">
          <div className="section-title-three text-center">
            <div className="water-text">Get In Touch</div>
            <h2>Get In Touch</h2>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-10 col-lg-10">
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
    </>
  );
}

export default Contact3;
