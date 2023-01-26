import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { useState } from "react";
import { EffectFade, FreeMode, Navigation, Pagination, Thumbs } from "swiper";

// import required modules
function Testimonial4() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const imageSlide = {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    effect: "fade",
    watchSlidesProgress: true,
  };
  const sliderContent = {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".testi1-next",
      prevEl: ".testi1-prev",
    },
  };
  return (
    <>
      <div className="testimonial-section bg-color2 pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12 order-lg-1 order-2">
              <Swiper
                onSwiper={setThumbsSwiper}
                freeMode={true}
                autoplay={true}
                // watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                {...imageSlide}
                className="swiper testi-image-slider"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="assets/images/testimonial/testi1-1.png"
                      alt="image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="assets/images/testimonial/testi1-2.png"
                      alt="image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="assets/images/testimonial/testi1-3.png"
                      alt="image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="assets/images/testimonial/testi1-4.png"
                      alt="image"
                    />
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
            <div className="col-lg-6 col-sm-12 position-relative order-lg-2 order-1">
              <div className="section-title-one text-lg-start text-center">
                <h2>Lets find what My honored members say.</h2>
              </div>
              <div className="slider-arrows arrows-style-1 text-center d-lg-flex d-none flex-row justify-content-lg-end justify-content-center align-items-center w-100 gap-3 mb-50">
                <div
                  className="testi1-prev swiper-prev-arrow"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <i className="bi bi-chevron-left" />
                </div>
                <div
                  className="testi1-next swiper-next-arrow"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <i className="bi bi-chevron-right" />
                </div>
              </div>
              <Swiper
                {...sliderContent}
                className="swiper testi-content-slider"
                modules={[FreeMode, Navigation, Pagination, Thumbs, EffectFade]}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="testi-single-one">
                      <div className="testi-header">
                        <div className="designation">
                          <h3>Savannah Nguyen</h3>
                          <span>Executive CEO</span>
                        </div>
                        <div className="review-area">
                          <ul className="review-list">
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
                              <i className="bi bi-star-fill" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="testi-body">
                        <p>
                          Quisque magna lorem, mattis a auctor eu, commodo vitae
                          ligulaMo ante id vulputate ultrices, eros est lacinia
                          quam, vel finibus nibh nisls Nulla ut dolor arcu.
                          Praesent vel justo at quam semper lobortis in rutrum
                          justo. Ut in sem non elit molestie commodo vehicula a
                          ex.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testi-single-one">
                      <div className="testi-header">
                        <div className="designation">
                          <h3>Anjelina Lira</h3>
                          <span>Executive Manager</span>
                        </div>
                        <div className="review-area">
                          <ul className="review-list">
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
                              <i className="bi bi-star-fill" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="testi-body">
                        <p>
                          Quisque magna lorem, mattis a auctor eu, commodo vitae
                          ligulaMo ante id vulputate ultrices, eros est lacinia
                          quam, vel finibus nibh nisls Nulla ut dolor arcu.
                          Praesent vel justo at quam semper lobortis in rutrum
                          justo. Ut in sem non elit molestie commodo vehicula a
                          ex.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testi-single-one">
                      <div className="testi-header">
                        <div className="designation">
                          <h3>Emma Watson</h3>
                          <span>Area Manager</span>
                        </div>
                        <div className="review-area">
                          <ul className="review-list">
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
                              <i className="bi bi-star-fill" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="testi-body">
                        <p>
                          Quisque magna lorem, mattis a auctor eu, commodo vitae
                          ligulaMo ante id vulputate ultrices, eros est lacinia
                          quam, vel finibus nibh nisls Nulla ut dolor arcu.
                          Praesent vel justo at quam semper lobortis in rutrum
                          justo. Ut in sem non elit molestie commodo vehicula a
                          ex.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testi-single-one">
                      <div className="testi-header">
                        <div className="designation">
                          <h3>Savannah Nguyen</h3>
                          <span>Executive CEO</span>
                        </div>
                        <div className="review-area">
                          <ul className="review-list">
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
                              <i className="bi bi-star-fill" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="testi-body">
                        <p>
                          Quisque magna lorem, mattis a auctor eu, commodo vitae
                          ligulaMo ante id vulputate ultrices, eros est lacinia
                          quam, vel finibus nibh nisls Nulla ut dolor arcu.
                          Praesent vel justo at quam semper lobortis in rutrum
                          justo. Ut in sem non elit molestie commodo vehicula a
                          ex.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial4;
