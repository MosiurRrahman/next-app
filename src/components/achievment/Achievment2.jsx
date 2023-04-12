import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, Pagination, EffectFade]);

function Achievment2() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },

      breakpoints: {
        280: {
          slidesPerView: 2,
        },
        386: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 5,
        },
      },
    };
  }, []);
  return (
    <div
      className="achievement-section pt-120 position-relative"
      id="achievement"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5">
            <div className="achievement-text">
              <h3>Our Previous Year Achievement</h3>
              <p>
                Our power of choice is untrammelled and when nothing prevents
                our being able.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid achievement-slider-area">
        <div className="row justify-content-end">
          <div className="col-xl-7">
            <Swiper
              {...slider}
              className="swiper achivement-slider"
              data-cursor="Drag"
            >
              <div className="swiper-wrapper swiper-wrapper align-items-center">
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img src="assets/images/company/achiv-1.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img src="assets/images/company/achiv-2.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img src="assets/images/company/achiv-3.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img src="assets/images/company/achiv-4.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img src="assets/images/company/achiv-5.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img src="assets/images/company/achiv-1.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img src="assets/images/company/achiv-2.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img src="assets/images/company/achiv-3.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img src="assets/images/company/achiv-4.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img src="assets/images/company/achiv-5.png" alt="" />
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

export default Achievment2;
