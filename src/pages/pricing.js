import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import MainLayout from "../layout/MainLayout";

function PricingPage() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Pricing Plan" pageTitle="Pricing Plan" />
      <div className="pricing-section pt-120 pb-120" id="next">
        <div className="container">
          <div className="row align-items-center justify-content-center gy-5">
            <div className="col-lg-4 col-md-6 order-lg-1 order-2">
              <div className="pricing-single">
                <div
                  className="price-area"
                  style={{
                    backgroundImage: 'url("assets/images/bg/price-bg1.svg")',
                  }}
                >
                  <h2>$80</h2>
                  <span>/Monthly</span>
                </div>
                <div className="pricing-title">
                  <h3>Basic</h3>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-patch-check" />
                    One Free Website
                  </li>
                  <li>
                    <i className="bi bi-patch-check" />
                    10 Page Seo Optimization
                  </li>
                  <li>
                    <i className="bi bi-patch-check" />2 Analyse Your Site Free
                  </li>
                  <li>
                    <i className="bi bi-patch-check" />1 Domain Name Free
                  </li>
                </ul>
                <div className="explore-button text-center">
                  <a
                    href="service-details.html"
                    className="eg-btn btn--primary-five btn--sm text-white btn--capsule"
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 order-lg-2 order-1">
              <div className="pricing-single style-two">
                <div className="tag-area">
                  <span className="left" />
                  <div className="tag">
                    <span>Best </span>
                    Option
                  </div>
                  <span className="right" />
                </div>
                <div
                  className="price-area"
                  style={{
                    backgroundImage: 'url("assets/images/bg/price-bg2.svg")',
                  }}
                >
                  <h2>$180</h2>
                  <span>/Monthly</span>
                </div>
                <div className="pricing-title">
                  <h3>Premium</h3>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-patch-check" />
                    Two Free Website
                  </li>
                  <li>
                    <i className="bi bi-patch-check" />
                    100 Page Seo Optimization
                  </li>
                  <li>
                    <i className="bi bi-patch-check" />
                    Unlimited Analyse Your Site
                  </li>
                  <li>
                    <i className="bi bi-patch-check" />
                    Unlimited Domain Name Free
                  </li>
                  <li>
                    <i className="bi bi-patch-check" />
                    To Custimzed Your Site{" "}
                  </li>
                  <li>
                    <i className="bi bi-patch-check" />
                    24/7 Support Team
                  </li>
                </ul>
                <div className="explore-button">
                  <a
                    href="service-details.html"
                    className="eg-btn btn--primary-five btn--md text-white btn--capsule"
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-lg-3 order-3">
              <div className="pricing-single">
                <div
                  className="price-area"
                  style={{
                    backgroundImage: 'url("assets/images/bg/price-bg1.svg")',
                  }}
                >
                  <h2>$100</h2>
                  <span>/Monthly</span>
                </div>
                <div className="pricing-title">
                  <h3>Ultimate</h3>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-patch-check" />
                    One Free Website
                  </li>
                  <li>
                    <i className="bi bi-patch-check" />
                    20 Page Seo Optimization
                  </li>
                  <li>
                    <i className="bi bi-patch-check" />
                    10 Domain Name Free
                  </li>
                  <li>
                    <i className="bi bi-patch-check" />
                    50 Analyse Your Site
                  </li>
                </ul>
                <div className="explore-button">
                  <a
                    href="service-details.html"
                    className="eg-btn btn--primary-five btn--sm text-white btn--capsule"
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-section pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title-four text-center mb-50">
                <span className="linear-text-two">Plan FAQ</span>
                <h2>Get To Know Pricing Plan</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="faq-wrap faq-style-two"
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
                    Who avoids a pain that produces no resultant pleasure?
                  </h5>
                  <div
                    id="collapse10"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading10"
                  >
                    <div className="faq-body">
                      Nor again is there anyone who loves or pursues or desires
                      to obtain pain of itself, because it is pain, but because
                      occasionally circumstances occur in which toil and pain
                      can procure.
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
                    One who avoids a pain that produces no resultant pleasure?
                  </h5>
                  <div
                    id="collapse11"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading11"
                  >
                    <div className="faq-body">
                      When our power of choice is untrammelled and when nothing
                      prevents our being able to do what we like best, every
                      pleasure.{" "}
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
                    Which of us ever undertakes laborious physical exercise to
                    obtain?
                  </h5>
                  <div
                    id="collapse12"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading12"
                  >
                    <div className="faq-body">
                      When our power of choice is untrammelled and when nothing
                      prevents our being able to do what we like best, every
                      pleasure.{" "}
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
                    Ecure other greater pleasures, or endures pains to avoid
                    worse pains?
                  </h5>
                  <div
                    id="collapse13"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading13"
                  >
                    <div className="faq-body">
                      When our power of choice is untrammelled and when nothing
                      prevents our being able to do what we like best, every
                      pleasure.{" "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <h5
                    id="heading14"
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse14"
                    aria-controls="collapse14"
                  >
                    Laborious physical exercise, except to obtain some advantage
                    from it?
                  </h5>
                  <div
                    id="collapse14"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading14"
                  >
                    <div className="faq-body">
                      When our power of choice is untrammelled and when nothing
                      prevents our being able to do what we like best, every
                      pleasure.{" "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <h5
                    id="heading15"
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse15"
                    aria-controls="collapse15"
                  >
                    Cannot it foresee the pain and trouble that are bound to
                    ensue?
                  </h5>
                  <div
                    id="collapse15"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading15"
                  >
                    <div className="faq-body">
                      When our power of choice is untrammelled and when nothing
                      prevents our being able to do what we like best, every
                      pleasure.{" "}
                    </div>
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

export default PricingPage;
