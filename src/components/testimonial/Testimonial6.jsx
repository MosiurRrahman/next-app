import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Testimonial6() {
  const sldier = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 10,
      loop: true,
      autoplay: false,
      pagination: false,
      navigation: {
        nextEl: ".testi-six-next",
        prevEl: ".testi-six-prev",
      },
    };
  }, []);
  return (
    <div className="testimonial-section-six">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Swiper
              {...sldier}
              className="swiper testi-six-slider position-relative"
            >
              <div className="arrow-style-two text-center d-md-flex d-none  flex-row justify-content-between align-items-center gap-4">
                <div
                  className="testi-six-next swiper-next-arrow"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <img src="assets/images/icons/arrow-prev-one.svg" alt="" />
                </div>
                <div
                  className="testi-six-prev swiper-prev-arrow"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <img src="assets/images/icons/arrow-next-one.svg" alt="" />
                </div>
              </div>
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testi-six-single">
                    <div className="quote-icon">
                      <img src="assets/images/icons/quote-icon2.svg" alt="" />
                    </div>
                    <div className="testi-six-content">
                      <div className="testi-six-review">
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
                        I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth
                      </p>
                    </div>
                    <div className="testi-six-author">
                      <img
                        src="assets/images/testimonial/testi6-1.jpg"
                        alt=""
                      />
                      <h4>Mr. Jonathon Singh </h4>
                      <p>Marko Company, CEO</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testi-six-single">
                    <div className="testi-six-content">
                      <div className="testi-six-review">
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
                        I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth
                      </p>
                    </div>
                    <div className="testi-six-author">
                      <img
                        src="assets/images/testimonial/testi4-1.jpg"
                        alt=""
                      />
                      <h4>Curl Marks </h4>
                      <p>Marko Company, MD</p>
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

export default Testimonial6;
