import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function CaseStudy5() {
  const sldider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 10,
      centerSlides: true,
      loop: true,
      autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          loop: true,
        },
        386: {
          slidesPerView: 1,
          loop: true,
        },
        576: {
          slidesPerView: 2,
          loop: true,
        },
        768: {
          slidesPerView: 2,
          loop: true,
        },
        992: {
          slidesPerView: 2,
          loop: true,
        },
        1200: {
          slidesPerView: 3,
          loop: true,
        },
        1400: {
          slidesPerView: 3,
          loop: true,
        },
      },
    };
  }, []);
  return (
    <div className="casestudy-section-five pl-110 pb-120 overflow-hidden">
      <div className="container-fluid">
        <div className="row justify-content-start mb-40">
          <div className="col-lg-10">
            <div className="section-title-four style-two text-lg-start text-center ">
              <span className="linear-text-two">Case Study</span>
              <h2>
                Our Recent<span className="linear-text-two">Case Study</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...sldider} className="swiper casestudy-five-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-five-single">
                    <div className="casestudy-five-image">
                      <img
                        src="assets/images/casestudy/casestudy5-1.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="casestudy-five-content">
                      <span className="category">SEO Marketing</span>
                      <h4>
                        <Link
                          legacyBehavior
                          href="/casestudy-details"
                          data-cursor="View Details"
                        >
                          <a>Grow Your Business With Digital Marketing.</a>
                        </Link>
                      </h4>
                      <div className="explore-button with-border">
                        <Link legacyBehavior href="/casestudy-details">
                          <a>
                            <img
                              src="assets/images/icons/button-arrow-linear.svg"
                              alt="image"
                            />
                            Explore More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-five-single">
                    <div className="casestudy-five-image">
                      <img
                        src="assets/images/casestudy/casestudy5-2.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="casestudy-five-content">
                      <span className="category">Digital Marketing</span>
                      <h4>
                        <Link
                          legacyBehavior
                          href="/casestudy-details"
                          data-cursor="View Details"
                        >
                          <a>How to Improve Your Digital Stretegy.</a>
                        </Link>
                      </h4>
                      <div className="explore-button with-border">
                        <Link legacyBehavior href="/casestudy-details">
                          <a>
                            <img
                              src="assets/images/icons/button-arrow-linear.svg"
                              alt="image"
                            />
                            Explore More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-five-single">
                    <div className="casestudy-five-image">
                      <img
                        src="assets/images/casestudy/casestudy5-3.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="casestudy-five-content">
                      <span className="category">Development</span>
                      <h4>
                        <Link
                          legacyBehavior
                          href="/casestudy-details"
                          data-cursor="View Details"
                        >
                          <a>Grow Your Company with Development.</a>
                        </Link>
                      </h4>
                      <div className="explore-button with-border">
                        <Link legacyBehavior href="/casestudy-details">
                          <a>
                            <img
                              src="assets/images/icons/button-arrow-linear.svg"
                              alt="image"
                            />
                            Explore More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-five-single">
                    <div className="casestudy-five-image">
                      <img
                        src="assets/images/casestudy/casestudy5-2.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="casestudy-five-content">
                      <span className="category">Branding</span>
                      <h4>
                        <Link
                          legacyBehavior
                          href="/casestudy-details"
                          data-cursor="View Details"
                        >
                          <a> Grow Your Business Policy in Branding. </a>
                        </Link>
                      </h4>
                      <div className="explore-button with-border">
                        <Link legacyBehavior href="/casestudy-details">
                          <a>
                            <img
                              src="assets/images/icons/button-arrow-linear.svg"
                              alt="image"
                            />
                            Explore More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-five-single">
                    <div className="casestudy-five-image">
                      <img
                        src="assets/images/casestudy/casestudy5-3.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="casestudy-five-content">
                      <span className="category">Development</span>
                      <h4>
                        <Link
                          legacyBehavior
                          href="/casestudy-details"
                          data-cursor="View Details"
                        >
                          <a>Grow Your Company with Development.</a>
                        </Link>
                      </h4>
                      <div className="explore-button with-border">
                        <Link legacyBehavior href="/casestudy-details">
                          <a>
                            <img
                              src="assets/images/icons/button-arrow-linear.svg"
                              alt="image"
                            />
                            Explore More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-five-single">
                    <div className="casestudy-five-image">
                      <img
                        src="assets/images/casestudy/casestudy5-2.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="casestudy-five-content">
                      <span className="category">Digital Marketing</span>
                      <h4>
                        <Link
                          legacyBehavior
                          href="/casestudy-details"
                          data-cursor="View Details"
                        >
                          <a>How to Improve Your Digital Stretegy.</a>
                        </Link>
                      </h4>
                      <div className="explore-button with-border">
                        <Link legacyBehavior href="/casestudy-details">
                          <a>
                            <img
                              src="assets/images/icons/button-arrow-linear.svg"
                              alt="image"
                            />
                            Explore More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-five-single">
                    <div className="casestudy-five-image">
                      <img
                        src="assets/images/casestudy/casestudy5-3.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="casestudy-five-content">
                      <span className="category">Development</span>
                      <h4>
                        <Link
                          legacyBehavior
                          href="/casestudy-details"
                          data-cursor="View Details"
                        >
                          <a>Grow Your Company with Development.</a>
                        </Link>
                      </h4>
                      <div className="explore-button with-border">
                        <Link legacyBehavior href="/casestudy-details">
                          <a>
                            <img
                              src="assets/images/icons/button-arrow-linear.svg"
                              alt="image"
                            />
                            Explore More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-five-single">
                    <div className="casestudy-five-image">
                      <img
                        src="assets/images/casestudy/casestudy5-2.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="casestudy-five-content">
                      <span className="category">Branding</span>
                      <h4>
                        <Link
                          legacyBehavior
                          href="/casestudy-details"
                          data-cursor="View Details"
                        >
                          <a> Grow Your Business Policy in Branding. </a>
                        </Link>
                      </h4>
                      <div className="explore-button with-border">
                        <Link legacyBehavior href="/casestudy-details">
                          <a>
                            <img
                              src="assets/images/icons/button-arrow-linear.svg"
                              alt="image"
                            />
                            Explore More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="casestudy-five-single">
                    <div className="casestudy-five-image">
                      <img
                        src="assets/images/casestudy/casestudy5-3.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="casestudy-five-content">
                      <span className="category">Development</span>
                      <h4>
                        <Link
                          legacyBehavior
                          href="/casestudy-details"
                          data-cursor="View Details"
                        >
                          <a>Grow Your Company with Development.</a>
                        </Link>
                      </h4>
                      <div className="explore-button with-border">
                        <Link legacyBehavior href="/casestudy-details">
                          <a>
                            <img
                              src="assets/images/icons/button-arrow-linear.svg"
                              alt="image"
                            />
                            Explore More
                          </a>
                        </Link>
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

export default CaseStudy5;
