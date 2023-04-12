import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import serviceData from "../data/service-data.json";
import MainLayout from "../layout/MainLayout";

function serviceTwo() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Services Two" pageTitle="Services Two" />
      <div className="service-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title-six text-center mb-60">
                <span>Techio Services</span>
                <h2>
                  Marketing <span>Analytics</span> Field
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {serviceData.map((item) => {
              return (
                <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-two-single">
                    <div className="service-two-icon">
                      <img src={item.img_2} alt="" />
                      <span />
                      <div className="serial-number">{item.id}</div>
                    </div>
                    <div className="service-two-content">
                      <h3>
                        <Link legacyBehavior href="/service-details">
                          <a>{item.title}</a>
                        </Link>
                      </h3>
                      <p>{item.description_two}</p>
                      <Link legacyBehavior href="/service-details">
                        <a className="explore-btn">Explore More</a>
                      </Link>
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

export default serviceTwo;
