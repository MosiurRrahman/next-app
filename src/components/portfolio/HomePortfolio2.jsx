import { useRouter } from "next/router";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function HomePortfolio2() {
  const router = useRouter().pathname;
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 800,
      spaceBetween: 20,
      loop: true,
      autoplay: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: ".portfolio-next1",
        prevEl: ".portfolio-prev1",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          navigation: false,
        },
        386: {
          slidesPerView: 1,
          navigation: false,
        },
        576: {
          slidesPerView: 2,
          navigation: false,
        },
        768: {
          slidesPerView: 2,
          navigation: false,
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
      },
    };
  }, []);
  return (
    <div
      className={
        router === "/index-bg-image"
          ? "portfolio-section pb-120 pl-80"
          : "portfolio-section section-common2 pb-120 pl-80"
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title-two">
              <h2>Portfolio</h2>
            </div>
          </div>
        </div>
        <div className="row mb-70">
          <div className="col-12">
            <ul
              className="nav nav-tabs portfolio-tab-list mb-70"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#tab-slider-one"
                  aria-selected="false"
                  role="tab"
                  tabIndex={-1}
                >
                  All<span>50</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-slider-two"
                  aria-selected="false"
                  role="tab"
                >
                  Fashion<span>50</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-slider-three"
                  aria-selected="false"
                  role="tab"
                >
                  Wedding<span>80</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-slider-four"
                  aria-selected="false"
                  role="tab"
                >
                  Nature<span>150</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-slider-five"
                  aria-selected="false"
                  role="tab"
                >
                  Lifestyle<span>350</span>
                </a>
              </li>
            </ul>
            {/* tab-slider start*/}
            <div className="tab-content">
              <div
                className="tab-pane fade"
                id="tab-slider-one"
                role="tabpanel"
              >
                <Swiper
                  {...slider}
                  className="swiper portfolio-slider-one position-relative"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/portfolio/port-slider1.png"
                        alt="image"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/portfolio/port-slider2.png"
                        alt="image"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/portfolio/port-slider3.png"
                        alt="image"
                      />
                    </SwiperSlide>
                  </div>
                  <div className="slider-arrows d-flex justify-content-between">
                    <div
                      className="portfolio-prev1 swiper-prev-arrow"
                      tabIndex={0}
                      role="button"
                      aria-label="Previous slide"
                    >
                      {/* <i class="bi bi-chevron-left"></i> */}
                    </div>
                    <div
                      className="portfolio-next1 swiper-next-arrow"
                      tabIndex={0}
                      role="button"
                      aria-label="Next slide"
                    >
                      {/* <i class="bi bi-chevron-right"></i> */}
                    </div>
                  </div>
                </Swiper>
              </div>
              <div
                className="tab-pane fade active show"
                id="tab-slider-two"
                role="tabpanel"
              >
                <Swiper
                  {...slider}
                  className="swiper portfolio-slider-one position-relative"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/portfolio/port-slider1.png"
                        alt="image"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/portfolio/port-slider2.png"
                        alt="image"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/portfolio/port-slider3.png"
                        alt="image"
                      />
                    </SwiperSlide>
                  </div>
                  <div className="slider-arrows d-flex justify-content-between">
                    <div
                      className="portfolio-prev1 swiper-prev-arrow"
                      tabIndex={0}
                      role="button"
                      aria-label="Previous slide"
                    />
                    <div
                      className="portfolio-next1 swiper-next-arrow"
                      tabIndex={0}
                      role="button"
                      aria-label="Next slide"
                    />
                  </div>
                </Swiper>
              </div>
              <div
                className="tab-pane fade"
                id="tab-slider-three"
                role="tabpanel"
              >
                <Swiper
                  {...slider}
                  className="swiper portfolio-slider-one position-relative"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/portfolio/port-slider1.png"
                        alt="image"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/portfolio/port-slider2.png"
                        alt="image"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/portfolio/port-slider3.png"
                        alt="image"
                      />
                    </SwiperSlide>
                  </div>
                  <div className="slider-arrows d-flex justify-content-between">
                    <div
                      className="portfolio-prev1 swiper-prev-arrow"
                      tabIndex={0}
                      role="button"
                      aria-label="Previous slide"
                    />
                    <div
                      className="portfolio-next1 swiper-next-arrow"
                      tabIndex={0}
                      role="button"
                      aria-label="Next slide"
                    />
                  </div>
                </Swiper>
              </div>
              <div
                className="tab-pane fade"
                id="tab-slider-four"
                role="tabpanel"
              >
                <Swiper
                  {...slider}
                  className="swiper portfolio-slider-one position-relative"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/portfolio/port-slider1.png"
                        alt="image"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/portfolio/port-slider2.png"
                        alt="image"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/portfolio/port-slider3.png"
                        alt="image"
                      />
                    </SwiperSlide>
                  </div>
                  <div className="slider-arrows d-flex justify-content-between">
                    <div
                      className="portfolio-prev1 swiper-prev-arrow"
                      tabIndex={0}
                      role="button"
                      aria-label="Previous slide"
                    />
                    <div
                      className="portfolio-next1 swiper-next-arrow"
                      tabIndex={0}
                      role="button"
                      aria-label="Next slide"
                    />
                  </div>
                </Swiper>
              </div>
              <div
                className="tab-pane fade"
                id="tab-slider-five"
                role="tabpanel"
              >
                <Swiper
                  {...slider}
                  className="swiper portfolio-slider-one position-relative"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/portfolio/port-slider1.png"
                        alt="image"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/portfolio/port-slider2.png"
                        alt="image"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/portfolio/port-slider3.png"
                        alt="image"
                      />
                    </SwiperSlide>
                  </div>
                  <div className="slider-arrows d-flex justify-content-between">
                    <div
                      className="portfolio-prev1 swiper-prev-arrow"
                      tabIndex={0}
                      role="button"
                      aria-label="Previous slide"
                    />
                    <div
                      className="portfolio-next1 swiper-next-arrow"
                      tabIndex={0}
                      role="button"
                      aria-label="Next slide"
                    />
                  </div>
                </Swiper>
              </div>
            </div>
            {/* tab-slider end*/}
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <a
              href="portfolio-masonary.html"
              className="eg-btn btn--primary btn--lg"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePortfolio2;
