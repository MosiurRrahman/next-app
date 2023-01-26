import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function client() {
  return (
    <Layout>
      <Breadcrumb pageName="Clients" pageTitle="Clients" />
      <div className="client-section bg-color2 pt-120 pb-120 mb-44">
        <div className="container">
          <div className="client-single">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                <div className="client-image">
                  <img src="assets/images/bg/client1.png" alt="image" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="client-designatoin">
                  <h4>Jackson Mateo</h4>
                  <span>CEO, Egenslab</span>
                  <Link legacyBehavior href="/portfolio-details">
                    <a className="eg-btn btn--primary btn--md">Work Sample</a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="client-quote">
                  <div className="quote-icon">
                    <img src="assets/images/icons/quote-icon.svg" alt="image" />
                  </div>
                  <p>
                    I wanted to capture everything that seemed magical to the
                    eye. After Oown years of thisa owni andoi freelancing and
                    working for big companies wanq founded my own photography
                    agency I meani back.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="client-single style-two">
            <div className="row justify-content-center align-items-center flex-lg-nowrap flex-wrap-reverse g-4">
              <div className="col-xl-7 col-lg-6">
                <div className="client-quote">
                  <div className="quote-icon">
                    <img src="assets/images/icons/quote-icon.svg" alt="image" />
                  </div>
                  <p>
                    I wanted to capture everything that seemed magical to the
                    eye. After Oown years of thisa owni andoi freelancing and
                    working for big companies wanq founded my own photography
                    agency I meani back.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="client-designatoin">
                  <h4>Ordan Gulamin</h4>
                  <span>Modeling</span>
                  <Link legacyBehavior href="/portfolio-details">
                    <a className="eg-btn btn--primary btn--md">Work Sample</a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                <div className="client-image">
                  <img src="assets/images/bg/client2.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div className="client-single">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                <div className="client-image">
                  <img src="assets/images/bg/client3.png" alt="image" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="client-designatoin">
                  <h4>Warner Stayen</h4>
                  <span>Personal</span>
                  <Link legacyBehavior href="/portfolio-details">
                    <a className="eg-btn btn--primary btn--md">Work Sample</a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="client-quote">
                  <div className="quote-icon">
                    <img src="assets/images/icons/quote-icon.svg" alt="image" />
                  </div>
                  <p>
                    I wanted to capture everything that seemed magical to the
                    eye. After Oown years of thisa owni andoi freelancing and
                    working for big companies wanq founded my own photography
                    agency I meani back.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-70">
            <div className="col-12 text-center">
              <button className="eg-btn btn--primary btn--lg">Load More</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default client;
