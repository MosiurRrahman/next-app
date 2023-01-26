import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
function PortfolioDetailsPage() {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  return (
    <>
      <Layout>
        <Breadcrumb
          pageName="Portfolio Details"
          pageTitle="Portfolio Details"
        />
        <div className="portfolio-detaisl-section bg-color2">
          <div className="container-fluid">
            <div className="portfolio-details-image mb-60">
              <img
                src="assets/images/portfolio/portfolio-details-img.png"
                alt="image"
              />
            </div>
          </div>
          <div className="container">
            <div className="portfolio-details-content">
              <div className="row gy-5">
                <div className="col-lg-8">
                  <div className="photographer-details">
                    <span>Photographer</span>
                    <h2>Creative Inter That In Beige Photography.</h2>
                    <p>
                      My name is Johnal Dainok. I live in Ohio, USA. I’ve been a
                      photographer for over 15 years now. I started getting into
                      photography when my family moved from Nevada to Ohio. Onar
                      Switching places from such a young age made it possible
                      for me to see many different andr places besides my
                      hometown.
                    </p>
                    <p>
                      I wanted to capture everything that seemed magical to the
                      eye. After 5 years of thisa andoi freelancing and working
                      for big companies I founded my own photography agency. I
                      meani back and forth from Ohio to Nevada for work. I
                      started getting into photography when my family moved from
                      Nevada to Ohio. Onar Switching places from such a young
                      age made it possible for me to see many different.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="photo-info-card">
                    <ul>
                      <li>
                        <h5>Client :</h5>
                        <span>Johan Luke Julian</span>
                      </li>
                      <li>
                        <h5>Category :</h5>
                        <span>Wedding Night Photo </span>
                      </li>
                      <li>
                        <h5>Date :</h5>
                        <span>30 January, 2022</span>
                      </li>
                      <li>
                        <h5>Address :</h5>
                        <span>
                          168/170, Ave 01,Old York Drive Rich Mirpur, Dhaka,
                          Bangladesh
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row g-4 justify-content-center">
                <div className="col-lg-6">
                  <img
                    src="assets/images/portfolio/port-details-1.png"
                    alt="image"
                    onClick={() =>
                      setOpenimg({ openingState: true, openingIndex: 0 })
                    }
                  />
                </div>
                <div className="col-lg-6">
                  <div className="row g-4">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <img
                        src="assets/images/portfolio/port-details-2.png"
                        alt="image"
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 1 })
                        }
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <img
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 2 })
                        }
                        src="assets/images/portfolio/port-details-3.png"
                        alt="image"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <img
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 3 })
                        }
                        src="assets/images/portfolio/port-details-4.png"
                        alt="image"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <img
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 4 })
                        }
                        src="assets/images/portfolio/port-details-5.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="overview-text">
                <h2>Overview</h2>
                <p>
                  I wanted to capture everything that seemed magical to the eye.
                  After 5 years of thisa andoi freelancing and working for big
                  companies I founded my own photography agency. I meani back
                  and forth from Ohio to Nevada for work. I started getting into
                  photography when my family moved from Nevada to Ohio. Onar
                  Switching places from such a young age made it possible for me
                  to see many different.
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid pt-120 mb-44">
            <div className="portfolio-navigation">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="arrow-prev text-end">
                    <span>Previous</span>
                    <svg
                      width={171}
                      height={10}
                      viewBox="0 0 171 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 5L171 4.99999" />
                      <path d="M6 1L1 5L6 9" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 d-sm-block d-none text-center">
                  <h4>Portfolio</h4>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="arrow-prev text-start">
                    <span>Next</span>
                    <svg
                      width={171}
                      height={10}
                      viewBox="0 0 171 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 5L170 4.99999" />
                      <path d="M165 9L170 5L165 1" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Lightbox
          className="img-fluid"
          open={isOpenimg.openingState}
          plugins={[Fullscreen]}
          index={isOpenimg.openingIndex}
          close={() => setOpenimg(false)}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
          slides={[
            { src: "assets/images/portfolio/port-details-1-big.png" },
            { src: "assets/images/portfolio/port-details-2-big.png" },
            { src: "assets/images/portfolio/port-details-3-big.png" },
            { src: "assets/images/portfolio/port-details-4-big.png" },
            { src: "assets/images/portfolio/port-details-5-big.png" },
          ]}
        />
      </Layout>
    </>
  );
}

export default PortfolioDetailsPage;
