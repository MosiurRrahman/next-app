import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import experticesData from "../data/experties.json";
import MainLayout from "../layout/MainLayout";
function Experties() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Experties" pageTitle="Experties" />
      <div className="team-section pt-120 pb-120 overflow-hidden" id="next">
        <div className="container">
          <div className="row justify-content-center gy-5">
            {experticesData.map((item) => {
              return (
                <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="team-five-single">
                    <div className="team-five-image">
                      <img src={item.img_1} alt="image" />
                      <div className="wave-shape">
                        <img src="assets/images/bg/wave-shape.svg" alt="" />
                      </div>
                      <div className="team-social-area gap-3">
                        <div className="social-plus">
                          <i className="bx bx-plus" />
                        </div>
                        <ul className="social-links d-flex justify-content-center align-items-center flex-row gap-2">
                          <li>
                            <a href="https://www.linkedin.com/">
                              <i className="bx bxl-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com/">
                              <i className="bx bxl-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-five-info">
                      <h4>{item.name}</h4>
                      <p>{item.designation}</p>
                    </div>
                    <div className="team-five-bottom linear-text-two">
                      <a href="mailto:info@example.com ">
                        <i className="bi bi-envelope" /> <span />{" "}
                        info@example.com
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row d-flex justify-content-center mt-60">
            <div className="col-lg-4 text-center">
              <a href="#" className="eg-btn btn--primary-five btn--lg">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Experties;
