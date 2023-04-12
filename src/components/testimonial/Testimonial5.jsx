import { useRouter } from "next/router";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Testimonial5() {
  const currntRoute = useRouter().pathname;
  const sldider = useMemo(() => {
    return {
      loop: true,
      spaceBetween: 10,
      speed: 1500,
      allowTouchMove: false,
      navigation: {
        nextEl: ".testi-five-next",
        prevEl: ".testi-five-prev",
      },
    };
  }, []);
  const thumbs = useMemo(() => {
    return {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 1,
      freeMode: true,
      speed: 1500,
      effect: "fade",

      allowTouchMove: false,
      navigation: {
        nextEl: ".testi-five-next",
        prevEl: ".testi-five-prev",
      },
      fadeEffect: {
        crossFade: true,
      },
      watchSlidesProgress: true,
    };
  }, []);
  return (
    <div
      className={`testimonial-section pb-120 overflow-hidden ${
        currntRoute === "/about" ? "pt-120" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="row justify-content-start mb-50">
              <div className="col-lg-12">
                <div className="section-title-four style-two text-lg-start text-center ">
                  <span className="linear-text-two">Testimonials</span>
                  <h2>
                    Trusted Clients{" "}
                    <span className="linear-text-two">Feedback</span>
                  </h2>
                </div>
              </div>
            </div>
            <Swiper {...sldider} className="swiper testi-five-content-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-five">
                    <div className="testi-review-area">
                      <ul>
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
                      <span>Best Consulting</span>
                    </div>
                    <p>
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment, so blinded by desire foresee easy to
                      distinguish pain saying great explorer through shrinking.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-five">
                    <div className="testi-review-area">
                      <ul>
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
                      <span>Best Consulting</span>
                    </div>
                    <p>
                      Idea of denouncing pleasure and praising pain was born and
                      I will give you a complete account of the system, and
                      expound the actual teachings of the great explorer of the
                      truth, the master-builder of human happiness.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-five">
                    <div className="testi-review-area">
                      <ul>
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
                      <span>Best Consulting</span>
                    </div>
                    <p>
                      I will give you a complete account of the system, expound
                      the actual teachings of the great explorer of the truth,
                      the master-builder of human happiness the actual teachings
                      of the great explorer give you a complete account.{" "}
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="row align-items-center mt-30 justify-content-center gy-4">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <Swiper {...thumbs} className="swiper testi-five-image-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="testi-five-author">
                        <img
                          src="assets/images/testimonial/testi1-1.png"
                          alt="image"
                        />
                        <h4>Holyona Jacky</h4>
                        <p>XYZ Company</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testi-five-author">
                        <img
                          src="assets/images/testimonial/testi1-2.png"
                          alt="image"
                        />
                        <h4>John Marcel</h4>
                        <p>XYZ Company</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testi-five-author">
                        <img
                          src="assets/images/testimonial/testi1-3.png"
                          alt="image"
                        />
                        <h4>Angelina Sena</h4>
                        <p>XYZ Company</p>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6">
                <div className="slider-arrows arrow-style-two text-center d-flex  flex-row justify-content-sm-end justify-content-center align-items-center gap-4">
                  <div
                    className="testi-five-next swiper-next-arrow"
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                  >
                    <img src="assets/images/icons/arrow-prev-one.svg" alt="" />
                  </div>
                  <div
                    className="testi-five-prev swiper-prev-arrow"
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                  >
                    <img src="assets/images/icons/arrow-next-one.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 d-lg-flex d-none">
            <div className="testimonial-five-image">
              <img
                src="assets/images/testimonial/testi-image.jpg"
                alt="image"
              />
              <div className="client-badge">
                <div className="client-icon">
                  <img
                    src="assets/images/icons/testimonial-icon.svg"
                    alt="image"
                  />
                </div>
                <div className="client-info">
                  <h3 className="linear-text-two">90.0%</h3>
                  <p>Clients Satisfy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial5;
