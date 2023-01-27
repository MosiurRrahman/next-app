import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Mousewheel]);
function Banner4() {
  const slider = useMemo(() => {
    return {
      loop: true,
      speed: 1000,
      spaceBetween: 30,
      slidesPerView: 2,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination-num2",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' + className + '">' + 0 + (index + 1) + "</span>"
          );
        },
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
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 1.3,
        },
      },
    };
  }, []);
  return (
    <>
      <div>
        <div className="left-fixed-social fixed-social-two">
          <ul className="social-three">
            <li>
              <a href="https://www.instagram.com/">
                <i className="bx bxl-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://www.dribbble.com/">
                <i className="bx bxl-pinterest-alt" />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">
                <i className="bx bxl-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <i className="bx bxl-facebook" />
              </a>
            </li>
          </ul>
        </div>
        {/* ========== left social start============= */}
        {/* ========== banner-section start============= */}
        <div className="banner-section-five section-common2 d-flex align-items-center">
          <div className="container-fluid">
            <div className="row">
              <Swiper {...slider} className="swiper banner5-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="banner-five-single">
                      <img
                        src="assets/images/banner/banner-three-two.png"
                        alt="image"
                      />
                      <div className="banner-five-content">
                        <h4>Photo</h4>
                        <h2>
                          <Link legacyBehavior href="/portfolio-column-four">
                            <a>Wildlife Photography.</a>
                          </Link>
                        </h2>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="banner-five-single">
                      <img
                        src="assets/images/banner/banner-three-one.jpg"
                        alt="image"
                      />
                      <div className="banner-five-content">
                        <h4>Photo</h4>
                        <h2>
                          <Link legacyBehavior href="/portfolio-column-four">
                            <a>Nature Photography.</a>
                          </Link>
                        </h2>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="banner-five-single">
                      <img
                        src="assets/images/banner/banner-three-three.jpg"
                        alt="image"
                      />
                      <div className="banner-five-content">
                        <h4>Photo</h4>
                        <h2>
                          <Link legacyBehavior href="/portfolio-column-four">
                            <a>Travel Photography.</a>
                          </Link>
                        </h2>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="swiper-pagination swiper-pagination-num2" />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner4;
