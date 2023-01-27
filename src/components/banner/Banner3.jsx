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
function Banner3() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 800,
      spaceBetween: 10,
      parallax: true,
      loop: true,
      autoplay: true,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: ".swiper-pagination-num",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' + className + '">' + 0 + (index + 1) + "</span>"
          );
        },
      },
    };
  }, []);
  return (
    <div className="banner-section-three bg-color2 position-relative">
      <div className="container-fluid px-0">
        <Swiper {...slider} className="swiper banner-three-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="banner-three-content">
                <h2>Creative Beige Photography.</h2>
                <p>
                  Phasellus scelerisque turpis sed eros tristique, eu fringilla
                  eros placerat. Pellentesque at maximus sapien, a dictum
                  lectus.
                </p>
                <Link legacyBehavior href="/portfolio-column-three">
                  <a className="eg-btn btn--primary-two btn--lg">
                    View Portfolio
                  </a>
                </Link>
              </div>
              <img
                src="assets/images/banner/banner-three-one.jpg"
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="banner-three-content">
                <h2>Creative Drone Photography.</h2>
                <p>
                  Phasellus scelerisque turpis sed eros tristique, eu fringilla
                  eros placerat. Pellentesque at maximus sapien, a dictum
                  lectus.
                </p>
                <Link legacyBehavior href="/portfolio-column-three">
                  <a className="eg-btn btn--primary-two btn--lg">
                    View Portfolio
                  </a>
                </Link>
              </div>
              <img
                src="assets/images/banner/banner-three-four.jpg"
                alt="image"
              />
            </SwiperSlide>
            <diSwiperSlidev className="swiper-slide">
              <div className="banner-three-content">
                <h2>Creative Travel Photography.</h2>
                <p>
                  Phasellus scelerisque turpis sed eros tristique, eu fringilla
                  eros placerat. Pellentesque at maximus sapien, a dictum
                  lectus.
                </p>
                <Link legacyBehavior href="/portfolio-column-three">
                  <a className="eg-btn btn--primary-two btn--lg">
                    View Portfolio
                  </a>
                </Link>
              </div>
              <img
                src="assets/images/banner/banner-three-three.jpg"
                alt="image"
              />
            </diSwiperSlidev>
            <SwiperSlide className="swiper-slide">
              <div className="banner-three-content">
                <h2>Creative Nature Photography.</h2>
                <p>
                  Phasellus scelerisque turpis sed eros tristique, eu fringilla
                  eros placerat. Pellentesque at maximus sapien, a dictum
                  lectus.
                </p>
                <Link legacyBehavior href="/portfolio-column-three">
                  <a className="eg-btn btn--primary-two btn--lg">
                    View Portfolio
                  </a>
                </Link>
              </div>
              <img
                src="assets/images/banner/banner-three-two.png"
                alt="image"
              />
            </SwiperSlide>
          </div>
          <div className="swiper-pagination swiper-pagination-num" />
        </Swiper>
      </div>
    </div>
  );
}

export default Banner3;
