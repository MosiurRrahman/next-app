import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade, Pagination]);

function Testimonial4() {
  const slide = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 30,
      centerSlides: true,
      loop: true,
      // autoplay: {
      // 	delay: 3000,
      // 	disableOnInteraction: true
      //   },
      pagination: {
        el: ".testi-four-pagination",
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
    <div className="testi-section-four overflow-hidden">
      <div className="container testi-four-wrapper position-relative">
        <div className="testi-four-bg">
          <img src="assets/images/bg/testi-shape-bg.png" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center mb-50">
            <div className="col-lg-10">
              <div className="section-title-four sibling-three text-center">
                <span>Clients Feedback</span>
                <h2>Trusted Feedback Of Clients</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Swiper {...slide} className="swiper testi-four-slider mb-50">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="testi-four-single">
                      <div className="testi-four-author">
                        <div className="designation">
                          <h3>Josep Paolo</h3>
                          <span>Norland Company</span>
                        </div>
                        <div className="testi-four-image">
                          <img
                            src="assets/images/testimonial/testi4-1.jpg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="testi-four-content">
                        <div className="testi-four-review">
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
                          <span>Service Good!</span>
                        </div>
                        <p>
                          But I must explain to you how all this idea mistaken
                          idea of denouncing pleasure to praising pain was born
                          and I will give you a complete account.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testi-four-single">
                      <div className="testi-four-author">
                        <div className="designation">
                          <h3>Senta Gomez</h3>
                          <span>Norland Company</span>
                        </div>
                        <div className="testi-four-image">
                          <img
                            src="assets/images/testimonial/testi4-2.jpg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="testi-four-content">
                        <div className="testi-four-review">
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
                          <span>Service Good!</span>
                        </div>
                        <p>
                          But I must explain to you how all this idea mistaken
                          idea of denouncing pleasure to praising pain was born
                          and I will give you a complete account.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testi-four-single">
                      <div className="testi-four-author">
                        <div className="designation">
                          <h3>Johnson Den</h3>
                          <span>Nairo Company</span>
                        </div>
                        <div className="testi-four-image">
                          <img
                            src="assets/images/testimonial/testi4-3.png"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="testi-four-content">
                        <div className="testi-four-review">
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
                          <span>Best Agency!</span>
                        </div>
                        <p>
                          But I must explain to you how all this idea mistaken
                          idea of denouncing pleasure to praising pain was born
                          and I will give you a complete account.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
              <div className="swiper-pagination pagination-style-one testi-four-pagination" />
              {/* <div class="testi-four-pagination position-relative">
                  </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial4;
