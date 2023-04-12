import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import caseStudyFour from "../data/case-study-data.json";
import MainLayout from "../layout/MainLayout";
function CasestudyFour() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Case Study Four" pageTitle="Case Study Four" />
      <div className="portfolio-section pt-120 pb-120">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {caseStudyFour.map((item) => {
              return (
                <div key={item.id} className="col-lg-6 col-md-6 col-sm-10">
                  <div className="recent-casestudy-one">
                    <Link legacyBehavior href="/portfolio-details">
                      <a className="big-arrow">
                        <img
                          src="assets/images/icons/big-arrow.svg"
                          alt="image"
                        />
                      </a>
                    </Link>
                    <div className="recent-casestudy-image">
                      <img src={item.img_4} alt="image" />
                    </div>
                    <div className="recent-casestudy-content">
                      <span>{item.tag_4}</span>
                      <h3>
                        <Link
                          legacyBehavior
                          href="/portfolio-details"
                          data-cursor="View Details"
                        >
                          <a>{item.title_4}</a>
                        </Link>
                      </h3>
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

export default CasestudyFour;
