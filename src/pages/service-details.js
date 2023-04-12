import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import MainLayout from "../layout/MainLayout";

function ServiceDetails() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Service Details" pageTitle="Service Details" />
      <div className="service-details-section pt-120" id="next">
        <div className="container">
          <div className="service-detials-image">
            <img src="assets/images/bg/service-details.jpg" alt="image" />
            <div className="service-details-vector">
              <img
                src="assets/images/icons/service-detials-icon.svg"
                alt="image"
              />
            </div>
          </div>
          <div className="service-details-content">
            <h3 className="title">
              Business Strategy: Focus On Your Marketing Strategy
            </h3>
            <p>
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself, because it is pain, but because
              occasionally circumstances occur in which toil and pain can
              procure him some great pleasure. To take a trivial example, which
              of us ever undertakes laborious physical exercise except to obtain
              some advantage.
            </p>
            <div className="row justify-content-between align-items-center mb-70">
              <div className="col-xl-5 col-lg-6">
                <ul className="service-list">
                  <li>Pursues or desires to obtain pain of itself.</li>
                  <li>Repudiated and annoyances accepted.</li>
                  <li>Claims of duty or the obligations of business.</li>
                  <li>Ever undertakes laborious physical exercise.</li>
                  <li>Pain can procure him some great pleasure.</li>
                </ul>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="service-list-image">
                  <img src="assets/images/bg/marketing-image.jpg" alt="image" />
                </div>
              </div>
            </div>
            <h4 className="sub-title">Generate Question On Service</h4>
            <div className="row align-items-start">
              <div className="col-lg-5 d-lg-flex d-none">
                <img src="assets/images/bg/faq-image.jpg" alt="" />
              </div>
              <div className="col-lg-7">
                <div
                  className="faq-wrap"
                  data-wow-duration="1.5s"
                  data-wow-delay=".2s"
                >
                  <div className="faq-item">
                    <h5
                      id="heading10"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse10"
                      aria-controls="collapse10"
                    >
                      Except to obtain some advantage from it?
                    </h5>
                    <div
                      id="collapse10"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading10"
                    >
                      <div className="faq-body">
                        When our power of choice is untrammelled and when
                        nothing prevents our being able to do what we like best,
                        every pleasure.
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading11"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse11"
                      aria-controls="collapse11"
                    >
                      Frequently occur that pleasures have to be repudiated?
                    </h5>
                    <div
                      id="collapse11"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading11"
                    >
                      <div className="faq-body">
                        When our power of choice is untrammelled and when
                        nothing prevents our being able to do what we like best,
                        every pleasure.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading12"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse12"
                      aria-controls="collapse12"
                    >
                      Repudiated and annoyances accepted?
                    </h5>
                    <div
                      id="collapse12"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading12"
                    >
                      <div className="faq-body">
                        When our power of choice is untrammelled and when
                        nothing prevents our being able to do what we like best,
                        every pleasure.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading13"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse13"
                      aria-controls="collapse13"
                    >
                      Ever undertakes laborious physical exercise?
                    </h5>
                    <div
                      id="collapse13"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading13"
                    >
                      <div className="faq-body">
                        When our power of choice is untrammelled and when
                        nothing prevents our being able to do what we like best,
                        every pleasure.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-section-five pt-120 pb-80" id="service">
        <div className="container">
          <div className="row justify-content-start mb-40">
            <div className="col-lg-10">
              <div className="section-title-four style-two text-start">
                <span className="linear-text-two">Service Field</span>
                <h2>More Service </h2>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service-single-five">
                <div className="service-five-icon">
                  <img src="assets/images/icons/service5-1.svg" alt="image" />
                </div>
                <div className="service-five-info">
                  <h3>
                    <a href="service-details.html">Business Stretegy</a>
                  </h3>
                  <p>
                    Nor again is there anyone who loves or pursues or desires to
                    obtain pain of itself, because it is pain
                  </p>
                  <div className="explore-button">
                    <a href="service-details.html">
                      <img
                        src="assets/images/icons/button-arrow-linear.svg"
                        alt="image"
                      />{" "}
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service-single-five">
                <div className="service-five-icon">
                  <img src="assets/images/icons/service5-2.svg" alt="image" />
                </div>
                <div className="service-five-info">
                  <h3>
                    <a href="service-details.html">Marketing &amp; Sales</a>
                  </h3>
                  <p>
                    Nor again is there anyone who loves or pursues or desires to
                    obtain pain of itself, because it is pain
                  </p>
                  <div className="explore-button">
                    <a href="service-details.html">
                      <img
                        src="assets/images/icons/button-arrow-linear.svg"
                        alt="image"
                      />{" "}
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service-single-five">
                <div className="service-five-icon">
                  <img src="assets/images/icons/service5-3.svg" alt="image" />
                </div>
                <div className="service-five-info">
                  <h3>
                    <a href="service-details.html">Technology</a>
                  </h3>
                  <p>
                    Nor again is there anyone who loves or pursues or desires to
                    obtain pain of itself, because it is pain
                  </p>
                  <div className="explore-button">
                    <a href="service-details.html">
                      <img
                        src="assets/images/icons/button-arrow-linear.svg"
                        alt="image"
                      />{" "}
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ServiceDetails;
