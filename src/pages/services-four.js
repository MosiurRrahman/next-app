import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import MainLayout from "../layout/MainLayout";
import serviceData from "../data/service-data.json"
function servicesFour() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Fervices Four" pageTitle="Fervices Four" />
      <div className="servcie-section-four pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title-seven mb-50 text-center">
                <span>Our Services</span>
                <h2>Agency Services Area</h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service-six-single">
                <div className="service-two-icon">
                  <img src="assets/images/icons/service2-1.svg" alt="" />
                  <span />
                  <div className="serial-number"><img src="assets/images/icons/ribbon-icon.svg" alt="" />
                  </div>
                </div>
                <div className="service-six-content">
                  <h3><a href="service-details.html">App Development</a></h3>
                  <p>Pleasures have to be repudiated and annoyances accepted.</p>
                  <div className="explore-button">
                    <a href="service-details.html"><img src="assets/images/icons/button-arrow-linear.svg" alt="image" /> Explore
                      More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service-six-single">
                <div className="service-two-icon">
                  <img src="assets/images/icons/service2-2.svg" alt="" />
                  <span />
                  <div className="serial-number"><img src="assets/images/icons/ribbon-icon.svg" alt="" />
                  </div>
                </div>
                <div className="service-six-content">
                  <h3><a href="service-details.html">Game Development</a></h3>
                  <p>Pleasures have to be repudiated and annoyances accepted.</p>
                  <div className="explore-button">
                    <a href="service-details.html"><img src="assets/images/icons/button-arrow-linear.svg" alt="image" /> Explore
                      More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service-six-single">
                <div className="service-two-icon">
                  <img src="assets/images/icons/service2-3.svg" alt="" />
                  <span />
                  <div className="serial-number"><img src="assets/images/icons/ribbon-icon.svg" alt="" />
                  </div>
                </div>
                <div className="service-six-content">
                  <h3><a href="service-details.html">Web Development</a></h3>
                  <p>Pleasures have to be repudiated and annoyances accepted.</p>
                  <div className="explore-button">
                    <a href="service-details.html"><img src="assets/images/icons/button-arrow-linear.svg" alt="image" /> Explore
                      More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service-six-single">
                <div className="service-two-icon">
                  <img src="assets/images/icons/service2-4.svg" alt="" />
                  <span />
                  <div className="serial-number"><img src="assets/images/icons/ribbon-icon.svg" alt="" />
                  </div>
                </div>
                <div className="service-six-content">
                  <h3><a href="service-details.html">Mobile Development</a></h3>
                  <p>Pleasures have to be repudiated and annoyances accepted.</p>
                  <div className="explore-button">
                    <a href="service-details.html"><img src="assets/images/icons/button-arrow-linear.svg" alt="image" /> Explore
                      More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service-six-single">
                <div className="service-two-icon">
                  <img src="assets/images/icons/service2-5.svg" alt="" />
                  <span />
                  <div className="serial-number"><img src="assets/images/icons/ribbon-icon.svg" alt="" />
                  </div>
                </div>
                <div className="service-six-content">
                  <h3><a href="service-details.html">Fronted Development</a></h3>
                  <p>Pleasures have to be repudiated and annoyances accepted.</p>
                  <div className="explore-button">
                    <a href="service-details.html"><img src="assets/images/icons/button-arrow-linear.svg" alt="image" /> Explore
                      More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service-six-single">
                <div className="service-two-icon">
                  <img src="assets/images/icons/service2-6.svg" alt="" />
                  <span />
                  <div className="serial-number"><img src="assets/images/icons/ribbon-icon.svg" alt="" />
                  </div>
                </div>
                <div className="service-six-content">
                  <h3><a href="service-details.html">React Development</a></h3>
                  <p>Pleasures have to be repudiated and annoyances accepted.</p>
                  <div className="explore-button">
                    <a href="service-details.html"><img src="assets/images/icons/button-arrow-linear.svg" alt="image" /> Explore
                      More</a>
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

export default servicesFour;
