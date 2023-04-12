import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import caseStudyData from "../data/experties.json";
import MainLayout from "../layout/MainLayout";
function ExpertiseThree() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Experties Three" pageTitle="Experties Three" />
      <div className="team-section pt-120 pb-120 overflow-hidden" id="next">
        <div className="container">
          <div className="row justify-content-center gy-5">
            {caseStudyData.slice(0, 4).map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-8"
                >
                  <div className="team-four-single">
                    <div className="team-four-image">
                      <img src={item.img_3} alt="image" />
                      <div className="team-four-desig">
                        {item.designation_3}
                      </div>
                    </div>
                    <div className="team-four-content">
                      <h4>{item.name}</h4>
                      <div className="team-four-social-area">
                        <span>Available on:</span>
                        <ul className="team-four-social">
                          <li>
                            <a href="https://www.linkedin.com/">
                              <i className="bx bxl-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.pinterest.com/">
                              <i className="bx bxl-pinterest-alt" />
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
                        </ul>
                      </div>
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

export default ExpertiseThree;
