import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function portfolioIntoFlow() {
  return (
    <>
      <Layout>
        <Breadcrumb
          pageName="portfolio Into Flow"
          pageTitle="portfolio Into Flow"
        />
        <div className="our-portfilio-area bg-color2 pt-120 pb-120 mb-44">
          <div className="container">
            <div className="row justify-content-center g-4">
              <div className="col-lg-12 text-center">
                <h2 className="section-title-one">Portfolio</h2>
              </div>
              <div className="col-lg-12">
                <div className="filters filter-button-group">
                  <ul className="d-flex justify-content-center flex-wrap">
                    <li className="active" data-filter="*">
                      All <span>50</span>
                    </li>
                    <li data-filter=".wedding">
                      Wedding <span>30</span>
                    </li>
                    <li data-filter=".Fashion">
                      Fashion <span>80</span>
                    </li>
                    <li data-filter=".Lifestyle">
                      Lifestyle <span>60</span>
                    </li>
                    <li data-filter=".Nature">
                      Nature <span>60</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row grid g-4 mb-70 justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item wedding">
                <a
                  data-cursor="Personal<br>Photography"
                  href="portfolio-details.html"
                >
                  <div className="portfolio-single-one style-two magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/images/portfolio/portfolio2-1.png"
                      alt="image"
                    />
                    <div className="overlay"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Wedding Fashion">
                <a
                  data-cursor="Wedding<br>Photography"
                  href="portfolio-details.html"
                >
                  <div className="portfolio-single-one style-two magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/images/portfolio/portfolio2-3.png"
                      alt="image"
                    />
                    <div className="overlay"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Lifestyle">
                <a
                  data-cursor="Wedding<br>Photography"
                  href="portfolio-details.html"
                >
                  <div className="portfolio-single-one style-two magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/images/portfolio/portfolio2-4.png"
                      alt="image"
                    />
                    <div className="overlay"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Lifestyle Nature Wedding">
                <a
                  data-cursor="Nature<br>Photography"
                  href="portfolio-details.html"
                >
                  <div className="portfolio-single-one style-two magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/images/portfolio/portfolio2-1.png"
                      alt="image"
                    />
                    <div className="overlay"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Lifestyle">
                <a
                  data-cursor="Personal<br>Photography"
                  href="portfolio-details.html"
                >
                  <div className="portfolio-single-one style-two magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/images/portfolio/portfolio2-2.png"
                      alt="image"
                    />
                    <div className="overlay"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Wedding Nature">
                <a
                  data-cursor="Wedding<br>Photography"
                  href="portfolio-details.html"
                >
                  <div className="portfolio-single-one style-two magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/images/portfolio/portfolio2-5.png"
                      alt="image"
                    />
                    <div className="overlay"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Nature">
                <a
                  data-cursor="Travel<br>Photography"
                  href="portfolio-details.html"
                >
                  <div className="portfolio-single-one style-two magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/images/portfolio/portfolio2-8.png"
                      alt="image"
                    />
                    <div className="overlay"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Lifestyle Nature Wedding">
                <a
                  data-cursor="Travel<br>Photography"
                  href="portfolio-details.html"
                >
                  <div className="portfolio-single-one style-two magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/images/portfolio/portfolio2-7.png"
                      alt="image"
                    />
                    <div className="overlay"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Lifestyle Wedding Nature">
                <a
                  data-cursor="Wedding<br>Photography"
                  href="portfolio-details.html"
                >
                  <div className="portfolio-single-one style-two magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/images/portfolio/portfolio2-9.png"
                      alt="image"
                    />
                    <div className="overlay"></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="load-more-btn">
                  <a className="eg-btn btn--primary btn--lg" href="#">
                    Load More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default portfolioIntoFlow;
