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

function CaseStudy3() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 10,
      centerSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".casestudy-three-next",
        prevEl: ".casestudy-three-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.3,
        },
        992: {
          slidesPerView: 1.2,
        },
        1200: {
          slidesPerView: 1.3,
        },
        1400: {
          slidesPerView: 1.4,
        },
        1600: {
          slidesPerView: 1.5,
        },
      },
    };
  }, []);
  return (
    <div className="casestudy-section-three pt-120">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title-five mb-40">
              <h2>TechGen COMPLETED PORTFOLIO.</h2>
              <p>To take a trivial example, which of us ever undertakes.</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <Link legacyBehavior href="/portfolio-full">
                <a className="eg-btn btn--primary-outline style-two btn--lg">
                  Browse All
                </a>
              </Link>
              <div className="slider-arrows arrow-style-two d-flex justify-content-lg-end justify-content-start gap-lg-4 gap-2">
                <div
                  className="casestudy-three-prev swiper-prev-arrow"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <img src="assets/images/icons/arrow-left4.svg" alt="" />
                </div>
                <div className="swiper-pagination" />
                <div
                  className="casestudy-three-next swiper-next-arrow"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <img src="assets/images/icons/arrow-right4.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <Swiper {...slider} className="swiper casestudy-three-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-three-single">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/casestudy/casestudy3-1.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">
                          Modern Technology
                        </p>
                        <h4 className="casestudy-three-title">
                          <Link
                            legacyBehavior
                            href="/portfolio-details"
                            data-cursor="View Details"
                          >
                            <a> Modern Technoloy To Generate Update. </a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-three-single">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/casestudy/casestudy3-2.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">
                          Modern Technology
                        </p>
                        <h4 className="casestudy-three-title">
                          <Link
                            legacyBehavior
                            href="/portfolio-details"
                            data-cursor="View Details"
                          >
                            <a>To Create Mobile App With React</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-three-single">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/casestudy/casestudy3-3.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">
                          Modern Technology
                        </p>
                        <h4 className="casestudy-three-title">
                          <Link
                            legacyBehavior
                            href="blog-details"
                            data-cursor="View Details"
                          >
                            <a>How To Grow Your Technology Strategy.</a>
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
      </div>
    </div>
  );
}

export default CaseStudy3;
