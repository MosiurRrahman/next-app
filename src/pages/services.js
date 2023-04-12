import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import serviceData from "../data/service-data.json";
import MainLayout from "../layout/MainLayout";
function Services() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Services" pageTitle="Services" />
      <div className="service-section-five pt-120 pb-80">
        <div className="container">
          <div className="row justify-content-center mb-40">
            <div className="col-lg-10">
              <div className="section-title-four text-center">
                <span className="linear-text-two">What We Do</span>
                <h2>
                  Our <span className="linear-text-two">Services</span> Area
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {serviceData.map((item) => {
              return (
                <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-single-five">
                    <div className="service-five-icon">
                      <img src={item.img} alt="image" />
                    </div>
                    <div className="service-five-info">
                      <h3>
                        <Link legacyBehavior href=".service-details">
                          <a>{item.title}</a>
                        </Link>
                      </h3>
                      <p>{item.description}</p>
                      <div className="explore-button">
                        <Link legacyBehavior href="/service-details">
                          <a>
                            <img
                              src="assets/images/icons/button-arrow-linear.svg"
                              alt="image"
                            />
                            Explore More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Services;
