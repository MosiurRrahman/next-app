import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import caseStudyData from "../data/case-sudy-data.json";
import MainLayout from "../layout/MainLayout";
function CasestudyThree() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Case Study Three" pageTitle="Case Study Three" />
      <div className="portfolio-section pt-120 pb-120">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {caseStudyData.map((item) => {
              return (
                <div key={item.id} className="col-lg-6 col-md-6 col-sm-10">
                  <div className="casestudy-four-single">
                    <Link
                      legacyBehavior
                      href="/casestudy-details"
                      data-cursor="view Details"
                    >
                      <a className="plus-icon">
                        <i className="bi bi-plus" />
                      </a>
                    </Link>
                    <div className="casestudy-four-image">
                      <img src={item.img_3} alt="" />
                      <div className="casestudy-four-content">
                        <p className="casestudy-four-subtitle">{item.tag_3}</p>
                        <h3 className="casestudy-four-title">
                          <Link
                            legacyBehavior
                            href="/casestudy-details"
                            data-cursor="View Details"
                          >
                            <a>{item.title_2}</a>
                          </Link>
                        </h3>
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

export default CasestudyThree;
