import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Banner5({ setSidebarOpen }) {
  const sldider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".banner-five-next",
        prevEl: ".banner-five-prev",
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
    <div className="banner-five-area overflow-hidden">
      <div className="container-fluid px-0">
        <div className="banner-five-wrap">
          <div className="banner-five-sidebar">
            <div
              className="sidebar-button  mobile-menu-btn"
              onClick={() => setSidebarOpen(true)}
            >
              <span />
              <span />
              <span />
            </div>
            <ul className="social-style-one">
              <li>
                <a href="https://www.linkedin.com/">
                  <i className="bx bxl-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/">
                  <i className="bx bxl-pinterest-alt" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
            </ul>
            <div className="scroll-down">
              <a href="#about">Scroll Down</a>
            </div>
          </div>
          <div className="banner-five-main postition-relative">
            <Swiper {...sldider} className="swiper banner-five-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="banner-five-image">
                    <img
                      src="assets/images/banner/banner-five/banner5-1.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="banner-five-content">
                    <span className="linear-text-two">What We Do</span>
                    <h2>
                      Progress With
                      <span className="linear-text-two">
                        {" "}
                        Digital Marketing.
                      </span>
                    </h2>
                    <p>
                      Anyone who loves or pursues or desires to obtain pain of
                      itself, because it is pain, because occasionally
                      circumstances occur in which toil.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="banner-five-image">
                    <img
                      src="assets/images/banner/banner-five/banner5-2.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="banner-five-content">
                    <span className="linear-text-two">What We Do</span>
                    <h2>
                      Business Growing With{" "}
                      <span className="linear-text-two">Design</span>
                    </h2>
                    <p>
                      Anyone who loves or pursues or desires to obtain pain of
                      itself, because it is pain, because occasionally
                      circumstances occur in which toil.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="banner-five-image">
                    <img
                      src="assets/images/banner/banner-five/banner5-3.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="banner-five-content">
                    <span className="linear-text-two">What We Do</span>
                    <h2>
                      Business Growing With{" "}
                      <span className="linear-text-two">Development</span>
                    </h2>
                    <p>
                      Anyone who loves or pursues or desires to obtain pain of
                      itself, because it is pain, because occasionally
                      circumstances occur in which toil.
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-arrows banner-five-arrow d-flex justify-content-center flex-sm-column flex-row">
              <div
                className="banner-five-prev swiper-prev-arrow"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <img src="assets/images/icons/arrow-prev-one.svg" alt="" />
              </div>
              <div
                className="banner-five-next swiper-next-arrow"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <img src="assets/images/icons/arrow-next-one.svg" alt="" />
              </div>
            </div>
            <Link legacyBehavior href="/services">
              <a className="view-more-circle">
                <span />
                <h5 className="linear-text-two">View More</h5>
                <img src="assets/images/icons/arro-long.svg" alt="" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner5;
