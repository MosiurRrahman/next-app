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

function CaseStudy4() {
  const slide = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      centerSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".casestudy-four-pagination",
        clickable: "true",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        540: {
          slidesPerView: 1,
        },
        769: {
          slidesPerView: 1,
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
    <div className="casestudy-section-four overflow-hidden pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10">
            <div className="section-title-four sibling-three text-center">
              <span>Case Study</span>
              <h2>Our Case Study</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...slide} className="swiper casestudy-four-slider">
              <div className="swiper-wrapper mb-50">
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-four-single">
                    <Link legacyBehavior href="/portfolio-details">
                      <a className="plus-icon">
                        <i className="bi bi-plus" />
                      </a>
                    </Link>
                    <div className="casestudy-four-image">
                      <img src="assets/images/casestudy/case4-1.jpg" alt="" />
                      <div className="casestudy-four-content">
                        <p className="casestudy-four-subtitle">
                          Local SEO Marketing
                        </p>
                        <h3 className="casestudy-four-title">
                          <Link
                            legacyBehavior
                            href="/blog-details"
                            data-cursor="View Details"
                          >
                            <a>How To Grow Your Business Strategy. </a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-four-single">
                    <Link
                      legacyBehavior
                      href="/portfolio-details"
                      data-cursor="view Details"
                    >
                      <a className="plus-icon">
                        <i className="bi bi-plus" />
                      </a>
                    </Link>
                    <div className="casestudy-four-image">
                      <img src="assets/images/casestudy/case4-2.jpg" alt="" />
                      <div className="casestudy-four-content">
                        <p className="casestudy-four-subtitle">
                          Paid Advertising
                        </p>
                        <h3 className="casestudy-four-title">
                          <Link
                            legacyBehavior
                            href="/blog-details"
                            data-cursor="View Details"
                          >
                            <a>It’s Not Free, Paid Search Marketing</a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-four-single">
                    <Link legacyBehavior href="/portfolio-details">
                      <a className="plus-icon">
                        <i className="bi bi-plus" />
                      </a>
                    </Link>
                    <div className="casestudy-four-image">
                      <img src="assets/images/casestudy/case4-3.jpg" alt="" />
                      <div className="casestudy-four-content">
                        <p className="casestudy-four-subtitle">
                          Local SEO Marketing
                        </p>
                        <h3 className="casestudy-four-title">
                          <Link
                            legacyBehavior
                            href="/blog-details"
                            data-cursor="View Details"
                          >
                            <a>To Improve Development Skill.</a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-pagination pagination-style-one casestudy-four-pagination" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy4;
