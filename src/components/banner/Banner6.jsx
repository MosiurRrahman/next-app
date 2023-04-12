import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Banner6() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".banner-three-next",
        prevEl: ".banner-three-prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    };
  }, []);
  return (
    <div
      className="banner-six-section"
      style={{
        backgroundImage:
          'url("assets/images/banner/banner-six/banner-six-bg.png")',
      }}
    >
      <div className="slider-arrows banner-six-arrow d-lg-flex d-none justify-content-between gap-2">
        <div
          className="banner-three-prev swiper-prev-arrow"
          tabIndex={0}
          role="button"
          aria-label="Previous slide"
        >
          <img src="assets/images/icons/arrow-prev-one.svg" alt="" />
        </div>
        <div
          className="banner-three-next swiper-next-arrow"
          tabIndex={0}
          role="button"
          aria-label="Next slide"
        >
          <img src="assets/images/icons/arrow-next-one.svg" alt="" />
        </div>
      </div>
      <a href="#service" className="scroll-down-arrow">
        <span className="dot" />
        <img
          src="assets/images/icons/scroll-down-arr.svg"
          className="arrow-down"
          alt=""
        />
      </a>
      <div className="container-fluid">
        <Swiper className="swiper banner-six-slider" {...slider}>
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="container-one">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-7 col-lg-7">
                    <div className="banner-six-content">
                      <div className="banner-text-vector">
                        <img src="assets/images/icons/vector-sun.svg" alt="" />
                      </div>
                      <h2>To Learn Trending Technology.</h2>
                      <p>
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their.
                      </p>
                      <div className="banner-six-button-grp">
                        <a
                          href="#service"
                          className="eg-btn btn--lg btn--primary-outline style-four"
                        >
                          Get Started
                        </a>
                        <div className="review">
                          <div className="number">
                            <h3>500</h3>
                          </div>
                          <div className="icon">
                            <ul className="star-list">
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-half" />
                              </li>
                            </ul>
                            <span>Client Review</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-10 d-lg-flex d-none">
                    <div className="banner-six-image">
                      <img
                        src="assets/images/banner/banner-six/banner6-1.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="container-one">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-7 col-lg-7">
                    <div className="banner-six-content">
                      <div className="banner-text-vector">
                        <img src="assets/images/icons/vector-sun.svg" alt="" />
                      </div>
                      <h2>Develop a brand strategy.</h2>
                      <p>
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their.
                      </p>
                      <div className="banner-six-button-grp">
                        <Link legacyBehavior href="/portfolio-full">
                          <a className="eg-btn btn--lg btn--primary-outline style-four">
                            Get Started
                          </a>
                        </Link>
                        <div className="review">
                          <div className="number">
                            <h3>500</h3>
                          </div>
                          <div className="icon">
                            <ul className="star-list">
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-half" />
                              </li>
                            </ul>
                            <span>Client Review</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-10 d-lg-flex d-none">
                    <div className="banner-six-image">
                      <img
                        src="assets/images/banner/banner-six/banner6-2.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="container-one">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-7 col-lg-7">
                    <div className="banner-six-content">
                      <div className="banner-text-vector">
                        <img src="assets/images/icons/vector-sun.svg" alt="" />
                      </div>
                      <h2>To Learn Trending Technology.</h2>
                      <p>
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their.
                      </p>
                      <div className="banner-six-button-grp">
                        <Link legacyBehavior href="/portfolio-full">
                          <a className="eg-btn btn--lg btn--primary-outline style-four">
                            Get Started
                          </a>
                        </Link>
                        <div className="review">
                          <div className="number">
                            <h3>500</h3>
                          </div>
                          <div className="icon">
                            <ul className="star-list">
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-half" />
                              </li>
                            </ul>
                            <span>Client Review</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-10 d-lg-flex d-none">
                    <div className="banner-six-image">
                      <img
                        src="assets/images/banner/banner-six/banner6-3.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Banner6;
