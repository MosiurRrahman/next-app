import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import PortfolioSlider from "../components/portfolio/PortfolioSlider";
import MainLayout from "../layout/MainLayout";

function Faq() {
  return (
    <MainLayout>
      <Breadcrumb pageName="FAQ" pageTitle="FAQ" />
      <div className="team-section pt-120 pb-120 overflow-hidden" id="next">
        <div className="container">
          <div className="row justify-content-center gy-5">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-six-single">
                <div className="team-six-image">
                  <img src="assets/images/team/team6-4.jpg" alt="" />
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
                  <h3>Juliea Furarry</h3>
                  <p>Content Expert</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-six-single">
                <div className="team-six-image">
                  <img src="assets/images/team/team6-1.jpg" alt="" />
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
                  <h3>Frangoline Josefh</h3>
                  <p>Marekting Expert</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-six-single">
                <div className="team-six-image">
                  <img src="assets/images/team/team6-2.jpg" alt="" />
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
                  <h3>Jacoline Marry</h3>
                  <p>SEO Expert</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-six-single">
                <div className="team-six-image">
                  <img src="assets/images/team/team6-3.jpg" alt="" />
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
                  <h3>Robert Jhonson</h3>
                  <p>Video Editing</p>
                </div>
              </div>
            </div>
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
      <PortfolioSlider />
    </MainLayout>
  );
}

export default Faq;
