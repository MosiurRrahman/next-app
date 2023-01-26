import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function portfolioTextDown() {
  return (
    <>
      <Layout>
        <Breadcrumb
          pageName="Portfolio Text Down"
          pageTitle="Portfolio Text Down"
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
            <div className="row grid gy-4 mb-40 justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item wedding">
                <div className="portfolio-single-two magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/images/portfolio/portfolio4-1.png"
                    alt="image"
                  />
                  <div className="content">
                    <h3>
                      <a
                        data-cursor="View<br>Details"
                        href="portfolio-details.html"
                      >
                        Floona Photoshoot
                      </a>
                    </h3>
                    <span>Commisson</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Wedding Fashion">
                <div className="portfolio-single-two magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/images/portfolio/portfolio4-3.png"
                    alt="image"
                  />
                  <div className="content">
                    <h3>
                      <a
                        data-cursor="View<br>Details"
                        href="portfolio-details.html"
                      >
                        Simply The best
                      </a>
                    </h3>
                    <span>Editorial</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Lifestyle">
                <div className="portfolio-single-two magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/images/portfolio/portfolio4-4.png"
                    alt="image"
                  />
                  <div className="content">
                    <h3>
                      <a
                        data-cursor="View<br>Details"
                        href="portfolio-details.html"
                      >
                        Interstellar Midnight
                      </a>
                    </h3>
                    <span>Personal</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Lifestyle Nature Wedding">
                <div className="portfolio-single-two magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/images/portfolio/portfolio4-6.png"
                    alt="image"
                  />
                  <div className="content">
                    <h3>
                      <a
                        data-cursor="View<br>Details"
                        href="portfolio-details.html"
                      >
                        Paradise Dream
                      </a>
                    </h3>
                    <span>Personal</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Lifestyle">
                <div className="portfolio-single-two magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/images/portfolio/portfolio4-2.png"
                    alt="image"
                  />
                  <div className="content">
                    <h3>
                      <a
                        data-cursor="View<br>Details"
                        href="portfolio-details.html"
                      >
                        Honey Magazine
                      </a>
                    </h3>
                    <span>Sculpture</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Wedding Nature">
                <div className="portfolio-single-two magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/images/portfolio/portfolio4-5.png"
                    alt="image"
                  />
                  <div className="content">
                    <h3>
                      <a
                        data-cursor="View<br>Details"
                        href="portfolio-details.html"
                      >
                        Pretty Cool Vibes
                      </a>
                    </h3>
                    <span>Portraits</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Nature">
                <div className="portfolio-single-two magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/images/portfolio/portfolio4-8.png"
                    alt="image"
                  />
                  <div className="content">
                    <h3>
                      <a
                        data-cursor="View<br>Details"
                        href="portfolio-details.html"
                      >
                        Erik Couchering
                      </a>
                    </h3>
                    <span>Editorial</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Lifestyle Nature Wedding">
                <div className="portfolio-single-two magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/images/portfolio/portfolio4-7.png"
                    alt="image"
                  />
                  <div className="content">
                    <h3>
                      <a
                        data-cursor="View<br>Details"
                        href="portfolio-details.html"
                      >
                        Sunny Side Up
                      </a>
                    </h3>
                    <span>Personal</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 grid-item Lifestyle Wedding Nature">
                <div className="portfolio-single-two magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/images/portfolio/portfolio4-9.png"
                    alt="image"
                  />
                  <div className="content">
                    <h3>
                      <a
                        data-cursor="View<br>Details"
                        href="portfolio-details.html"
                      >
                        Ornament State
                      </a>
                    </h3>
                    <span>Commisson</span>
                  </div>
                </div>
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

export default portfolioTextDown;
