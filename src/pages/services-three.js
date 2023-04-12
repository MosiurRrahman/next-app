import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import serviceData from "../data/service-data.json";
import MainLayout from "../layout/MainLayout";
function servicesThree() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Services Three" pageTitle="Services Three" />
      <div className="servcie-section-four pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center mb-50">
            <div className="col-lg-10">
              <div className="section-title-four sibling-three text-center">
                <span>Services Here</span>
                <h2>Provide SEO Services </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center gy-4">
            {serviceData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                >
                  <div className="service-four-single">
                    <div className="service-four-header">
                      <div className="service-four-icon">
                        <img src={item.img_3} alt="" />
                      </div>
                      <span />
                      <div className="serial-number">01</div>
                    </div>
                    <h4 className="service-four-title">
                      <Link
                        legacyBehavior
                        href="/service-details"
                        data-cursor="View Details"
                      >
                        <a>{item.title3}</a>
                      </Link>
                    </h4>
                    <p>{item.description_three}</p>
                    <Link legacyBehavior href="/service-details" data-cursor="View Details">
                      <a className="explore-btn">Explore More</a>
                    </Link>
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

export default servicesThree;
