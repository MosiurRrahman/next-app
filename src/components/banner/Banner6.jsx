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
function Banner6() {
  const slider = useMemo(() => {
    return {
      loop: true,
      speed: 1000,
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 5,
      mousewheel: true,
      breakpoints: {
        280: {
          slidesPerView: 3,
          navigation: false,
        },
        386: {
          slidesPerView: 3,
          navigation: false,
        },
        576: {
          slidesPerView: 3,
          navigation: false,
        },
        768: {
          slidesPerView: 3,
          navigation: false,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 5,
        },
        1400: {
          slidesPerView: 5,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="banner-section-six section-common2">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <Swiper {...slider} className="swiper banner-center-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="banner-six-single">
                    <img
                      src="assets/images/banner/banner-three-three.jpg"
                      alt="image"
                    />
                    <div className="banner-six-content">
                      <h2>
                        <Link
                          legacyBehavior
                          href="/portfolio-details"
                          data-cursor="View Work"
                        >
                          <a>Creative Photography.</a>
                        </Link>
                      </h2>
                      <span>Photographer</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="banner-six-single">
                    <img
                      src="assets/images/banner/banner-three-four.jpg"
                      alt="image"
                    />
                    <div className="banner-six-content">
                      <h2>
                        <Link
                          legacyBehavior
                          href="/portfolio-details"
                          data-cursor="View Work"
                        >
                          <a>Travel Photography.</a>
                        </Link>
                      </h2>
                      <span>Photographer</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="banner-six-single">
                    <img
                      src="assets/images/banner/banner-three-one.jpg"
                      alt="image"
                    />
                    <div className="banner-six-content">
                      <h2>
                        <Link
                          legacyBehavior
                          href="/portfolio-details"
                          data-cursor="View Work"
                        >
                          <a>Nature Photography.</a>
                        </Link>
                      </h2>
                      <span>Photographer</span>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner6;
