import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function CaseStudy6() {
  const sldier = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 10,
      slidesPerView: 1,
      // centerSlides: true,
      mousewheel: {
        releaseOnEdges: false,
      },
      loop: true,
      autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
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
    <div className="casestudy-six-section pb-120">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10">
            <div className="section-title-seven text-lg-start text-center mb-50">
              <span>Portfolio</span>
              <h2>Recent Portfolio</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...sldier} className="swiper casestudy-six-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-three-single sibling-three">
                    <Link
                      legacyBehavior
                      href="/portfolio-details"
                      data-cursor="View Details"
                    >
                      <a className="big-arrow">
                        <img
                          src="assets/images/icons/big-arrow.svg"
                          alt="image"
                        />
                      </a>
                    </Link>
                    <div className="casestudy-three-image">
                      <img src="assets/images/casestudy/case6-1.jpg" alt="" />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">
                          SEO Marketing
                        </p>
                        <h4 className="casestudy-three-title">
                          <Link
                            legacyBehavior
                            href="/portfolio-details"
                            data-cursor="View Details"
                          >
                            <a>Grow Business Site With SEO.. </a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-three-single sibling-three">
                    <Link
                      legacyBehavior
                      href="/portfolio-details"
                      data-cursor="View Details"
                    >
                      <a className="big-arrow">
                        <img
                          src="assets/images/icons/big-arrow.svg"
                          alt="image"
                        />
                      </a>
                    </Link>
                    <div className="casestudy-three-image">
                      <img src="assets/images/casestudy/case6-2.jpg" alt="" />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">
                          Content Writing
                        </p>
                        <h4 className="casestudy-three-title">
                          <Link
                            legacyBehavior
                            href="/portfolio-details"
                            data-cursor="View Details"
                          >
                            <a>Content Writing Change Strategy</a>
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

export default CaseStudy6;
