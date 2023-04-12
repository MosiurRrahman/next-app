import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);
function Testimonial2() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".testi-two-pagination",
        clickable: "true",
      },

      navigation: false,
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
        1600: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <div className="testimonial-section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title-six text-center mb-60">
              <span>What Clients Say</span>
              <h2>
                Truely Clients <span>Feedback</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row mb-60">
          <div className="col-12">
            <Swiper {...slider} className="swiper testi-two-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-two">
                    <div className="review">
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
                      <h5>Trusted!</h5>
                    </div>
                    <p>
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure.
                    </p>
                    <div className="author">
                      <p>
                        <img src="assets/images/icons/review-icon.svg" alt="" />
                        Review Verified,
                        <span>Solid Company</span>
                      </p>
                      <h5>Mr. Jackoline Frangly(CEO)</h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-two">
                    <div className="review">
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
                      <h5>Trusted!</h5>
                    </div>
                    <p>
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure.
                    </p>
                    <div className="author">
                      <p>
                        <img src="assets/images/icons/review-icon.svg" alt="" />
                        Review Verified,
                        <span>Qura Company</span>
                      </p>
                      <h5>Jhon Farray Huk (CTO)</h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-two">
                    <div className="review">
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
                      <h5>Trusted!</h5>
                    </div>
                    <p>
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure.
                    </p>
                    <div className="author">
                      <p>
                        <img src="assets/images/icons/review-icon.svg" alt="" />
                        Review Verified,
                        <span>Mongo Company</span>
                      </p>
                      <h5>Josh Patty Hale (CEO)</h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-two">
                    <div className="review">
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
                      <h5>Trusted!</h5>
                    </div>
                    <p>
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure.
                    </p>
                    <div className="author">
                      <p>
                        <img src="assets/images/icons/review-icon.svg" alt="" />
                        Review Verified,
                        <span>Solid Company</span>
                      </p>
                      <h5>Jhon Farray Huk (CTO)</h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-two">
                    <div className="review">
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
                      <h5>Trusted!</h5>
                    </div>
                    <p>
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure.
                    </p>
                    <div className="author">
                      <p>
                        <img src="assets/images/icons/review-icon.svg" alt="" />
                        Review Verified,
                        <span>Solid Company</span>
                      </p>
                      <h5>Mr. Jackoline Frangly(CEO)</h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-two">
                    <div className="review">
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
                      <h5>Trusted!</h5>
                    </div>
                    <p>
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure.
                    </p>
                    <div className="author">
                      <p>
                        <img src="assets/images/icons/review-icon.svg" alt="" />
                        Review Verified,
                        <span>Qura Company</span>
                      </p>
                      <h5>Jhon Farray Huk (CTO)</h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-two">
                    <div className="review">
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
                      <h5>Trusted!</h5>
                    </div>
                    <p>
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure.
                    </p>
                    <div className="author">
                      <p>
                        <img src="assets/images/icons/review-icon.svg" alt="" />
                        Review Verified,
                        <span>Mongo Company</span>
                      </p>
                      <h5>Josh Patty Hale (CEO)</h5>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="pagination-style-two testi-two-pagination" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial2;
