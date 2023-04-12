import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import caseStudyData from "../data/experties.json";
import MainLayout from "../layout/MainLayout";
function ExpertiseFour() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Experties Four" pageTitle="Experties Four" />

      <div className="team-section pt-120 pb-120 overflow-hidden" id="next">
        <div className="container">
          <div className="row justify-content-center gy-5">
            {caseStudyData.slice(0, 4).map((item) => {
              return (
                <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="team-six-single">
                    <div className="team-six-image">
                      <img src={item.img_4} alt="" />
                      <ul className="social-links gap-2">
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
                    <div className="team-six-content">
                      <h3>{item.name_4}</h3>
                      <p>{item.designation_4}</p>
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

export default ExpertiseFour;
