import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { useRouter } from "next/router";
import { useState } from "react";
import { EffectFade, FreeMode, Navigation, Pagination, Thumbs } from "swiper";

function Home2Testimonial() {
  const currentRoute = useRouter().pathname;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const contentSlide = {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".testi1-next",
      prevEl: ".testi1-prev",
    },
  };
  const imgSlide = {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    effect: "fade",
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".testi1-next",
      prevEl: ".testi1-prev",
    },
  };
  return (
    <div
      className={
        currentRoute === "/index-bg-image"
          ? "testimonial-section2 pb-120 pl-80"
          : "testimonial-section2 section-common2 pb-120 pl-80"
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title-two">
              <h2>Client Feedback</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12 order-lg-1 order-2">
            <Swiper
              {...imgSlide}
              modules={[FreeMode, Navigation, Pagination, Thumbs, EffectFade]}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
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
            <div className="section-title-one text-lg-start text-center d-lg-flex d-none">
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
              onSwiper={setThumbsSwiper}
              loop={false}
              spaceBetween={10}
              freeMode={true}
              autoplay={true}
              // watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              {...contentSlide}
              className="swiper testi-content-slider"
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
                        commodo vehicula.
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
                        Ante id vulputate ultrices, eros est lacinia quam, vel
                        finibus nibh nisls Nulla ut dolor arcu. Praesent vel
                        justo at quam semper lobortis in rutrum justo vehicula a
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
                        Eros est lacinia quam, vel finibus nibh auctor eu,
                        commodo vitae ligulaMo ante id vulputate ultrices, nisls
                        Nulla ut dolor arcu. Praesent vel justo at in.
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
  );
}

export default Home2Testimonial;
