import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, Pagination, EffectFade]);

function CaseStudy1() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 10,
      slidesPerView: 8,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
      navigation: {
        nextEl: ".casestudy-one-next",
        prevEl: ".casestudy-one-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    };
  }, []);
  return (
    <div className="recent-casestudy-section pt-120 pb-120 mobile-padding">
      <div className="container">
        <div className="row align-items-center mb-60">
          <div className="col-lg-9">
            <div className="section-title-one">
              <div className="section-subtitle">
                <img src="assets/images/icons/title-shape-before.svg" alt="" />
                Case Study
                <img src="assets/images/icons/title-shape-after.svg" alt="" />
              </div>
              <h2>
                Our <span>Case Study</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-end">
            <div className="slider-arrows arrow-style-one text-center d-lg-flex d-none flex-row justify-content-center align-items-center gap-4">
              <div
                className="casestudy-one-next swiper-next-arrow"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <i className="bi bi-arrow-left" />
              </div>
              <div
                className="casestudy-one-prev swiper-prev-arrow"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <i className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...slider} className="swiper recent-casestudy-slider-one">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="recent-casestudy-one">
                    <Link legacyBehavior href="/portfolio-details.htm">
                      <a className="big-arrow">
                        <img
                          src="assets/images/icons/big-arrow.svg"
                          alt="image"
                        />
                      </a>
                    </Link>
                    <div className="recent-casestudy-image">
                      <img
                        src="assets/images/casestudy/recent-case1-1.png"
                        alt="image"
                      />
                    </div>
                    <div className="recent-casestudy-content">
                      <span>Management</span>
                      <h3>
                        <Link
                          legacyBehavior
                          href="/portfolio-details"
                          data-cursor="View Details"
                        >
                          <a>Various versions have evolved over the years.</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="recent-casestudy-one">
                    <Link legacyBehavior href="/portfolio-details.htm">
                      <a className="big-arrow">
                        <img
                          src="assets/images/icons/big-arrow.svg"
                          alt="image"
                        />
                      </a>
                    </Link>
                    <div className="recent-casestudy-image">
                      <img
                        src="assets/images/casestudy/recent-case1-2.png"
                        alt="image"
                      />
                    </div>
                    <div className="recent-casestudy-content">
                      <span>Strategy</span>
                      <h3>
                        <Link
                          legacyBehavior
                          href="/portfolio-details"
                          data-cursor="View Details"
                        >
                          <a>Best Choise To Change Business Progress.</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="recent-casestudy-one">
                    <Link legacyBehavior href="/portfolio-details.htm">
                      <a className="big-arrow">
                        <img
                          src="assets/images/icons/big-arrow.svg"
                          alt="image"
                        />
                      </a>
                    </Link>
                    <div className="recent-casestudy-image">
                      <img
                        src="assets/images/casestudy/recent-case1-2.png"
                        alt="image"
                      />
                    </div>
                    <div className="recent-casestudy-content">
                      <span>Technology</span>
                      <h3>
                        <Link
                          legacyBehavior
                          href="/portfolio-details"
                          data-cursor="View Details"
                        >
                          <a>To Improve Development Skills With TechGen.</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="recent-casestudy-one">
                    <Link legacyBehavior href="/portfolio-details.htm">
                      <a className="big-arrow">
                        <img
                          src="assets/images/icons/big-arrow.svg"
                          alt="image"
                        />
                      </a>
                    </Link>
                    <div className="recent-casestudy-image">
                      <img
                        src="assets/images/casestudy/recent-case1-2.png"
                        alt="image"
                      />
                    </div>
                    <div className="recent-casestudy-content">
                      <span>Technology</span>
                      <h3>
                        <Link
                          legacyBehavior
                          href="/portfolio-details"
                          data-cursor="View Details"
                        >
                          <a>To Improve Development Skills With TechGen.</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy1;
