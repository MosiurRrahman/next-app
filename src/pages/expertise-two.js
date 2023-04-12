import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import expertcesData from "../data/experties.json";
import MainLayout from "../layout/MainLayout";
function ExpertiseTwo() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Experties Two" pageTitle="Experties Two" />
      <div className="team-section pt-120 pb-120 overflow-hidden" id="next">
        <div className="container">
          <div className="row justify-content-center gy-5">
            {expertcesData.slice(0, 4).map((item) => {
              return (
                <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="team-two-single">
                    <div className="team-two-image">
                      <img src={item.img_2} alt="" />
                      <div className="team-two-social gap-3">
                        <div className="social-plus">
                          <i className="bi bi-share" />
                        </div>
                        <ul className="social-links gap-2">
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
                    <div className="team-two-content">
                      <h3>
                        <a>{item.name}</a>
                      </h3>
                      <p>{item.designation}</p>
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

export default ExpertiseTwo;
