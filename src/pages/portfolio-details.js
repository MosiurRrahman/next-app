import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Breadcrumb from "../components/common/Breadcrumb";
import MainLayout from "../layout/MainLayout";
SwiperCore.use([Navigation, Autoplay, Pagination, EffectFade]);
function PortfolioDetails() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      pagination: false,
      pagination: {
        el: ".about-six-pagination",
        clickable: "true",
      },
    };
  }, []);
  return (
    <MainLayout>
      <Breadcrumb pageName="Portfolio Details" pageTitle="Portfolio Details" />
      <div className="port-detials-section pt-120 pb-120" id="next">
        <div className="container">
          <div className="portfolio-details">
            <Swiper {...slider} className="swiper about-six-slider mb-40">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="about-image-single">
                    <img
                      src="assets/images/portfolio/portfolio-details-1.jpg"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="about-image-single">
                    <img
                      src="assets/images/portfolio/portfolio-details-2.jpg"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="about-image-single">
                    <img
                      src="assets/images/portfolio/portfolio-details-3.jpg"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="about-six-pagination" />
            </Swiper>
            <h3>To Much Change Your Business Strategy &amp; Stay Updated.</h3>
            <p>
              These cases are perfectly simple and easy to distinguish. In a
              free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business
            </p>
          </div>
          <div className="row mb-60 gy-4 justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10 order-lg-1 order-1">
              <div className="portfolio-card">
                <div className="circle-progressbar">
                  <div className="circle-progress-wrap">
                    <div
                      className="progress-bar"
                      data-percent={90}
                      data-duration={1000}
                      data-color="#ccc,yellow"
                    />
                  </div>
                </div>
                <div className="content">
                  <h4>Clients Satisfaction</h4>
                  <p>
                    Business it will frequently occur that pleasures have to be
                    repudiated.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 order-lg-2 order-3">
              <div className="portfolio-card-two">
                <div className="list-wrapper">
                  <ul className="info-list">
                    <li>
                      <span>Category:</span>
                      <span>Development</span>
                    </li>
                    <li>
                      <span>Clients:</span>
                      <span>Mr. Marko Paul</span>
                    </li>
                    <li>
                      <span>Country:</span>
                      <span>Newyork, USA</span>
                    </li>
                    <li>
                      <span>Budget:</span>
                      <span>$2000( USD)</span>
                    </li>
                    <li>
                      <span>Date:</span>
                      <span>02/22/2022</span>
                    </li>
                  </ul>
                  <ul className="share-list d-flex justify-content-center flex-row align-items-center gap-3">
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
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 order-lg-3 order-2">
              <div className="portfolio-card">
                <div className="clock-image">
                  <img
                    src="assets/images/portfolio/portfolio-clock.svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h4>6 Month</h4>
                  <span>(Time Duration)</span>
                  <p>
                    Every pleasure is to be welcomed and every pain avoided.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-4 align-items-end mb-60">
            <div className="col-lg-7">
              <div className="benefit-block">
                <h3>Portfolio Benefits:</h3>
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
            <div className="col-lg-5">
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
          </div>
          <div className="row justify-content-center gy-4">
            <div className="benefit-block mb-2">
              <h3>Related Projects:</h3>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-single-two magnetic-item">
                <a
                  href="portfolio-details.html"
                  className="big-arrow"
                  data-cursor="View<br>Details"
                >
                  <img src="assets/images/icons/big-arrow.svg" alt="" />
                </a>
                <img
                  src="assets/images/portfolio/portfolio2-1.jpg"
                  alt="image"
                />
                <div className="overlay">
                  <div className="content">
                    <h3>
                      <a
                        data-cursor="View<br>Details"
                        href="portfolio-details.html"
                      >
                        Gorgeous Website Develop With Discussion.
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-single-two magnetic-item">
                <a
                  href="portfolio-details.html"
                  className="big-arrow"
                  data-cursor="View<br>Details"
                >
                  <img src="assets/images/icons/big-arrow.svg" alt="" />
                </a>
                <img
                  src="assets/images/portfolio/portfolio2-3.jpg"
                  alt="image"
                />
                <div className="overlay">
                  <div className="content">
                    <h3>
                      <a
                        data-cursor="View<br>Details"
                        href="portfolio-details.html"
                      >
                        {" "}
                        SEO Expert of Nearly 2 Decades.
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-single-two magnetic-item">
                <a
                  href="portfolio-details.html"
                  className="big-arrow"
                  data-cursor="View<br>Details"
                >
                  <img src="assets/images/icons/big-arrow.svg" alt="" />
                </a>
                <img
                  src="assets/images/portfolio/portfolio2-6.jpg"
                  alt="image"
                />
                <div className="overlay">
                  <div className="content">
                    <h3>
                      <a
                        data-cursor="View<br>Details"
                        href="portfolio-details.html"
                      >
                        Always Be Fast With Our Generation.
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default PortfolioDetails;
