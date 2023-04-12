import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import caseStudyData from "../data/case-study-data.json";
import MainLayout from "../layout/MainLayout";
function CasestudyTwo() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Case Study Two" pageTitle="Case Study Two" />
      <div className="portfolio-section pt-120 pb-120">
        <div className="container">
          <div className="row gy-5 justify-content-center">
            {caseStudyData.map((item) => {
              return (
                <div key={item.id} className="col-lg-4 col-md-6 col-sm-10">
                  <div className="casestudy-five-single">
                    <div className="casestudy-five-image">
                      <img src={item.img_2} alt="image" />
                    </div>
                    <div className="casestudy-five-content">
                      <span className="category">{item.tag_2}</span>
                      <h4>
                        <Link
                          legacyBehavior
                          href="/casestudy-details"
                          data-cursor="View Details"
                        >
                          <a>{item.title_2}</a>
                        </Link>
                      </h4>
                      <div className="explore-button with-border">
                        <Link legacyBehavior href="/casestudy-details">
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

export default CasestudyTwo;
