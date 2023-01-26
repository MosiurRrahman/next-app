import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import PriceTab from "../components/price/PriceTab";
import Layout from "../layout/Layout";

function serviceOne() {
  return (
    <Layout>
      <Breadcrumb pageName="Services" pageTitle="Services" />
      <div className="servcie-section pt-120">
        <div className="container-fluid">
          <div className="row justify-content-center gy-5">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="service-single">
                <div className="service-image">
                  <img src="assets/images/bg/service-1.png" alt="image" />
                </div>
                <div className="service-content">
                  <img
                    src="assets/images/icons/service-icon1.svg"
                    alt="image"
                  />
                  <h3>
                    <a href="#">Personal</a>
                  </h3>
                  <p>
                    My name is Johnal Dainok. I live in Ohiogi USA. I’ve been ar
                    photographer for overd 15 years now. I started getting one
                    top of thisant for this is our variental group intro
                    gonateon photography when my moved.
                  </p>
                  <a className="eg-btn btn--primary btn--lg" href="#">
                    Appointment Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="service-single">
                <div className="service-image">
                  <img src="assets/images/bg/service-2.png" alt="image" />
                </div>
                <div className="service-content">
                  <img
                    src="assets/images/icons/service-icon2.svg"
                    alt="image"
                  />
                  <h3>
                    <a href="#">Wedding</a>
                  </h3>
                  <p>
                    My name is Johnal Dainok. I live in Ohiogi USA. I’ve been ar
                    photographer for overd 15 years now. I started getting one
                    top of thisant for this is our variental group intro
                    gonateon photography when my moved.
                  </p>
                  <a className="eg-btn btn--primary btn--lg" href="#">
                    Appointment Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="service-single">
                <div className="service-image">
                  <img src="assets/images/bg/service-3.png" alt="image" />
                </div>
                <div className="service-content">
                  <img
                    src="assets/images/icons/service-icon3.svg"
                    alt="image"
                  />
                  <h3>
                    <a href="#">Modeling</a>
                  </h3>
                  <p>
                    My name is Johnal Dainok. I live in Ohiogi USA. I’ve been ar
                    photographer for overd 15 years now. I started getting one
                    top of thisant for this is our variental group intro
                    gonateon photography when my moved.
                  </p>
                  <a className="eg-btn btn--primary btn--lg" href="#">
                    Appointment Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="service-single">
                <div className="service-image">
                  <img src="assets/images/bg/service-4.png" alt="image" />
                </div>
                <div className="service-content">
                  <img
                    src="assets/images/icons/service-icon4.svg"
                    alt="image"
                  />
                  <h3>
                    <a href="#">Editing</a>
                  </h3>
                  <p>
                    My name is Johnal Dainok. I live in Ohiogi USA. I’ve been ar
                    photographer for overd 15 years now. I started getting one
                    top of thisant for this is our variental group intro
                    gonateon photography when my moved.
                  </p>
                  <a className="eg-btn btn--primary btn--lg" href="#">
                    Appointment Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PriceTab />
    </Layout>
  );
}

export default serviceOne;
