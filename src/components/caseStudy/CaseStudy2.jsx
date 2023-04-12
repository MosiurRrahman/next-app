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
function CaseStudy2() {
  const slider = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
      },
      navigation: {
        nextEl: ".case-two-next",
        prevEl: ".case-two-prev",
      },
      pagination: {
        el: ".case-two-pagination",
        clickable: "true",
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
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <div className="casestudy-section pt-120">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title-six text-center mb-60">
              <span>Case Study</span>
              <h2>
                Recent <span>Case Study</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row mb-50">
          <div className="col-12">
            <Swiper {...slider} className="swiper casestudy-two-sldier">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img src="assets/images/casestudy/case2-1.jpg" alt="" />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">
                          SEO Marketing
                        </p>
                        <h4 className="casestudy-three-title">
                          <Link
                            legacyBehavior
                            href="/casestudy-details"
                            data-cursor="View Details"
                          >
                            <a>Grow Business Site With SEO..</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img src="assets/images/casestudy/case2-2.jpg" alt="" />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">
                          Content Writing
                        </p>
                        <h4 className="casestudy-three-title">
                          <Link
                            legacyBehavior
                            href="/casestudy-details"
                            data-cursor="View Details"
                          >
                            <a>Content Writing Change Strategy</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img src="assets/images/casestudy/case2-3.jpg" alt="" />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">
                          Website Design
                        </p>
                        <h4 className="casestudy-three-title">
                          <Link
                            legacyBehavior
                            href="/casestudy-details"
                            data-cursor="View Details"
                          >
                            <a>Create Modern Design One Step</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img src="assets/images/casestudy/case2-1.jpg" alt="" />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">
                          Modern Technology
                        </p>
                        <h4 className="casestudy-three-title">
                          <Link
                            legacyBehavior
                            href="/casestudy-details"
                            data-cursor="View Details"
                          >
                            <a>Modern Technoloy. </a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="row case-two-pagination-area">
          <div className="col-lg-8">
            <div className="pagination-style-two sibling-two case-two-pagination" />
          </div>
          <div className="col-lg-4 d-flex justify-content-end">
            <div className="slider-arrows arrow-style-one sibling-two text-center d-lg-flex d-none flex-row justify-content-center align-items-center gap-4">
              <div className="case-two-next swiper-next-arrow">
                <i className="bi bi-chevron-left" />
              </div>
              <div className="case-two-prev swiper-prev-arrow">
                <i className="bi bi-chevron-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy2;
