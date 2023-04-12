import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, Pagination, EffectFade]);

function Banner2() {
  const slider = useMemo(() => {
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
        el: ".banner-two-pagination",
        clickable: "true",
      },
      autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    };
  }, []);
  return (
    <div
      className="banner-two-section position-relative"
      style={{
        background:
          'linear-gradient(70deg, rgba(249, 249, 249, 0.78) 10%, rgba(255, 242, 232, 0.87) 80%),url("assets/images/banner/banner-two/banner-two-bg.png")',
      }}
    >
      <div className="banner-two-pagination" />
      <div className="banner-two-shape1">
        <img src="assets/images/banner/banner-two/shape1.svg" alt="" />
      </div>
      <div className="banner-two-shape2">
        <img src="assets/images/banner/banner-two/shape2.svg" alt="" />
      </div>
      <div className="banner-two-shape3">
        <img src="assets/images/banner/banner-two/shape3.svg" alt="" />
      </div>
      <div className="banner-two-shape4">
        <img src="assets/images/banner/banner-two/shape4.svg" alt="" />
      </div>
      <Swiper {...slider} className="swiper banner-two-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="banner-two-content">
                    <h2>
                      Grow Your <span>Business</span> Easily.{" "}
                    </h2>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default.
                    </p>
                    <div className="button-group">
                      <a
                        href="#achievement"
                        className="eg-btn btn--primary-outline2 btn--lg"
                      >
                        Get Started
                      </a>
                      <div className="video-button">
                        <a
                          href="https://www.youtube.com/watch?v=u31qwQUeGuM"
                          className="video-popup"
                        >
                          <span className="video-play-icon">
                            <img
                              src="assets/images/icons/video-play-icon.svg"
                              alt=""
                            />
                          </span>
                          Success Story
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="banner-two-image">
                    <img
                      src="assets/images/banner/banner-two/banner2-1.png"
                      alt=""
                    />
                    <div className="banner-two-review">
                      <img
                        src="assets/images/banner/banner-two/banner-two-review.png"
                        alt=""
                      />
                    </div>
                    <div className="banner-two-project">
                      <img
                        src="assets/images/banner/banner-two/banenr-two-project.png"
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
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="banner-two-content">
                    <h2>
                      Grow Your <span>Business</span> Easily.{" "}
                    </h2>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default.
                    </p>
                    <div className="button-group">
                      <a
                        href="#achievement"
                        className="eg-btn btn--primary-outline2 btn--lg"
                      >
                        Get Started
                      </a>
                      <div className="video-button">
                        <a
                          href="https://www.youtube.com/watch?v=u31qwQUeGuM"
                          className="video-popup"
                        >
                          <span className="video-play-icon">
                            <img
                              src="assets/images/icons/video-play-icon.svg"
                              alt=""
                            />
                          </span>
                          Success Story
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="banner-two-image">
                    <img
                      src="assets/images/banner/banner-two/banner2-2.png"
                      alt=""
                    />
                    <div className="banner-two-review">
                      <img
                        src="assets/images/banner/banner-two/banner-two-review.png"
                        alt=""
                      />
                    </div>
                    <div className="banner-two-project">
                      <img
                        src="assets/images/banner/banner-two/banenr-two-project.png"
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
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="banner-two-content">
                    <h2>
                      Grow Your <span>Business</span> Easily.{" "}
                    </h2>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default.
                    </p>
                    <div className="button-group">
                      <a
                        href="#achievement"
                        className="eg-btn btn--primary-outline2 btn--lg"
                      >
                        Get Started
                      </a>
                      <div className="video-button">
                        <a
                          href="https://www.youtube.com/watch?v=u31qwQUeGuM"
                          className="video-popup"
                        >
                          <span className="video-play-icon">
                            <img
                              src="assets/images/icons/video-play-icon.svg"
                              alt=""
                            />
                          </span>
                          Success Story
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="banner-two-image">
                    <img
                      src="assets/images/banner/banner-two/banner2-3.png"
                      alt=""
                    />
                    <div className="banner-two-review">
                      <img
                        src="assets/images/banner/banner-two/banner-two-review.png"
                        alt=""
                      />
                    </div>
                    <div className="banner-two-project">
                      <img
                        src="assets/images/banner/banner-two/banenr-two-project.png"
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
  );
}

export default Banner2;
