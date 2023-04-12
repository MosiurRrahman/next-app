import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, Pagination, EffectFade]);

function Banner3() {
  const slide = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".banner-three-next",
        prevEl: ".banner-three-prev",
      },
      pagination: {
        el: ".banner-three-pagination",
        type: "fraction",
        formatFractionCurrent: function (number) {
          if (number < 10) {
            return "0" + number;
          } else {
            return number;
          }
        },
        formatFractionTotal: function (number) {
          if (number < 10) {
            return "0" + number;
          } else {
            return number;
          }
        },
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
    <div className="banner-three-section postition-relative">
      <div className="banner-three-shape1">
        <img
          src="assets/images/banner/banner-three/banner-three-shape1.svg"
          alt="image"
        />
      </div>
      <div className="banner-three-shape2">
        <img
          src="assets/images/banner/banner-three/banner-three-shape2.svg"
          alt="image"
        />
      </div>
      <div className="banner-three-shape3">
        <img
          src="assets/images/banner/banner-three/banner-three-shape3.svg"
          alt="image"
        />
      </div>
      <div className="banner-three-shape4">
        <img
          src="assets/images/banner/banner-three/banner-three-shape4.svg"
          alt="image"
        />
      </div>
      <div className="banner-three-shape5">
        <img
          src="assets/images/banner/banner-three/banner-three-shape5.svg"
          alt="image"
        />
      </div>
      <div className="banner-three-shape6">
        <img
          src="assets/images/banner/banner-three/banner-three-shape6.svg"
          alt="image"
        />
      </div>
      <div className="slider-arrows banner-three-arrow d-flex justify-content-between gap-4">
        <div
          className="banner-three-prev swiper-prev-arrow"
          tabIndex={0}
          role="button"
          aria-label="Previous slide"
        >
          <img src="assets/images/icons/arr-left-3.svg" alt="" />
        </div>
        <div className="banner-three-pagination" />
        <div
          className="banner-three-next swiper-next-arrow"
          tabIndex={0}
          role="button"
          aria-label="Next slide"
        >
          <img src="assets/images/icons/arr-right-3.svg" alt="" />
        </div>
      </div>
      <div className="container-fluid">
        <Swiper {...slide} className="swiper banner-three-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-7 col-lg-7">
                    <div className="banner-three-content">
                      <span>Technology Services</span>
                      <h2>
                        To Provide The Best <span>Technology. </span>
                      </h2>
                      <p>
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum
                      </p>
                      <a
                        href="portfolio-full.html"
                        className="eg-btn btn--lg btn--primary-outline style-two"
                      >
                        Browse A Project
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-10 d-lg-flex d-none">
                    <div className="banner-three-image">
                      <img
                        src="assets/images/banner/banner-three/image1.png"
                        alt="image"
                      />
                      <div className="banner-three-shape">
                        <img
                          src="assets/images/banner/banner-three/banenr3-img-shape.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-7 col-lg-7">
                    <div className="banner-three-content">
                      <span>Technology Services</span>
                      <h2>
                        To Provide The Best <span>Solution. </span>
                      </h2>
                      <p>
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum
                      </p>
                      <a
                        href="portfolio-full.html"
                        className="eg-btn btn--lg btn--primary-outline style-two"
                      >
                        Browse A Project
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-10 d-lg-flex d-none">
                    <div className="banner-three-image d-md-flex d-none">
                      <img
                        src="assets/images/banner/banner-three/image2.png"
                        alt="image"
                      />
                      <div className="banner-three-shape">
                        <img
                          src="assets/images/banner/banner-three/banenr3-img-shape.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-7 col-lg-7">
                    <div className="banner-three-content">
                      <span>Technology Services</span>
                      <h2>
                        To Provide The Best <span>Services. </span>
                      </h2>
                      <p>
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum
                      </p>
                      <a
                        href="portfolio-full.html"
                        className="eg-btn btn--lg btn--primary-outline style-two"
                      >
                        Browse A Project
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-10 d-lg-flex d-none">
                    <div className="banner-three-image">
                      <img
                        src="assets/images/banner/banner-three/image3.png"
                        alt="image"
                      />
                      <div className="banner-three-shape">
                        <img
                          src="assets/images/banner/banner-three/banenr3-img-shape.svg"
                          alt=""
                        />
                      </div>
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

export default Banner3;
