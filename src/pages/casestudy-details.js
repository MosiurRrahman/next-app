import React from "react";
import RecentProjects from "../components/caseStudy/RecentProjects";
import Breadcrumb from "../components/common/Breadcrumb";
import MainLayout from "../layout/MainLayout";

function CasestudyDetails() {
  return (
    <MainLayout>
      <Breadcrumb
        pageName="Case Study Details"
        pageTitle="Case Study Details"
      />
      <div
        className="port-detials-section case-study-section pt-120 pb-120"
        id="next"
      >
        <div className="container">
          <div className="portfolio-details">
            <div className="swiper about-six-slider mb-40">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="about-image-single">
                    <img
                      src="assets/images/portfolio/portfolio-details-1.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="about-image-single">
                    <img
                      src="assets/images/portfolio/portfolio-details-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="about-image-single">
                    <img
                      src="assets/images/portfolio/portfolio-details-3.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="about-six-pagination" />
            </div>
            <div className="case-study-content-wrap">
              <div className="case-study-title">
                <h3>To Make Change Your Business Strategy</h3>
                <p>
                  These cases are perfectly simple and easy to distinguish. In a
                  free hour, when our power of choice is untrammelled and when
                  nothing prevents our being able to do what we like best, every
                  pleasure is to be welcomed and every pain avoided. But in
                  certain circumstances and owing to the claims of duty or the
                  obligations of business{" "}
                </p>
              </div>
              <div className="case-study-info-wrap">
                <div className="info-list">
                  <ul>
                    <li>
                      <span>Category:</span> Development
                    </li>
                    <li>
                      <span>Clients:</span> Mr. Marko Paul
                    </li>
                    <li>
                      <span>Location:</span> Newyork, USA
                    </li>
                    <li>
                      <span>Company:</span> Elite Motors
                    </li>
                    <li>
                      <span>Website:</span> www.info.com
                    </li>
                    <li>
                      <span>Date:</span> 02/22/2022
                    </li>
                  </ul>
                </div>
                <div className="download-buttons">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="assets/images/icons/pdf-icon.svg" alt="" />{" "}
                        Download Pdf
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/images/icons/docs-icon.svg" alt="" />{" "}
                        Download Docs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-4 align-items-end mb-60">
            <div className="col-lg-12">
              <div className="benefit-block mt--50px">
                <h3>Requirements</h3>
                <p>
                  In a free hour, when our power of choice is untrammelled and
                  when nothing prevents our being able to do what we like best,
                  every pleasure is to be welcomed and every pain avoided.{" "}
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="blog-details-list">
                      <li>
                        <i className="bi bi-check2-circle" />
                        Pursues or desires to obtain pain of itself.
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" />
                        Repudiated and annoyances accepted.
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" />
                        Claims of duty or the obligations of business.
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" />
                        Ever undertakes laborious physical exercise.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="blog-details-list two">
                      <li>
                        <i className="bi bi-check2-circle" />
                        Pursues or desires to obtain pain of itself.
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" />
                        Repudiated and annoyances accepted.
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" />
                        Claims of duty or the obligations of business.
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" />
                        Ever undertakes laborious physical exercise.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-4 align-items-end mb-60">
            <div className="col-lg-12">
              <div className="benefit-block">
                <h3>Challenges Part &amp; Solutions</h3>
                <p>
                  No one rejects, dislikes, or avoids pleasure itself, because
                  it is pleasure, but because those who do not know how to
                  pursue pleasure rationally encounter consequences that are
                  extremely painful. Nor again is there anyone who loves or
                  pursues or desires to obtain pain of itself, because it is
                  pain, but because occasionally circumstances.
                </p>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="case-study-list">
                      <h5>Challenging Part:</h5>
                      <ul className="blog-details-list">
                        <li>
                          <i className="bi bi-check2-circle" />
                          Pursues or desires to obtain pain of itself.
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" />
                          Repudiated and annoyances accepted.
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" />
                          Claims of duty or the obligations of business.
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" />
                          Ever undertakes laborious physical exercise.
                        </li>
                      </ul>
                      <div className="case-img">
                        <img
                          className="img-fluid"
                          src="assets/images/casestudy/challenge-img.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="case-study-list">
                      <h5>Solution Part:</h5>
                      <ul className="blog-details-list">
                        <li>
                          <i className="bi bi-check2-circle" />
                          Pursues or desires to obtain pain of itself.
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" />
                          Repudiated and annoyances accepted.
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" />
                          Claims of duty or the obligations of business.
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" />
                          Ever undertakes laborious physical exercise.
                        </li>
                      </ul>
                      <div className="case-img">
                        <img
                          className="img-fluid"
                          src="assets/images/casestudy/solution-img.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-4 align-items-end mb-60">
            <div className="col-lg-12">
              <div className="benefit-block">
                <h3>Results</h3>
                <p>
                  No one rejects, dislikes, or avoids pleasure itself, because
                  it is pleasure, but because those who do not know how to
                  pursue pleasure rationally encounter consequences that are
                  extremely painful. Nor again is there anyone who loves or
                  pursues or desires to obtain pain of itself, because it is
                  pain, but because occasionally circumstances.
                </p>
              </div>
            </div>
          </div>
          <RecentProjects />
        </div>
      </div>
    </MainLayout>
  );
}

export default CasestudyDetails;
