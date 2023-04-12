import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);
function Counter1() {
  const sldier = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 10,
      slidesPerView: 8,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      pagination: false,
      navigation: false,
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2.5,
        },
        1600: {
          slidesPerView: 2.7,
        },
      },
    };
  }, []);
  return (
    <div className="counter-section pt-120">
      <div className="container">
        <div className="row mb-50">
          <div className="col-lg-4">
            <div className="about-three-header sibling-two mb-30 gap-4">
              <div className="d-flex align-items-end flex-wrap">
                <h2>08+</h2>
                <div className="about-three-title">
                  <h3>Years </h3>
                  <p>Of Experiences</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <h3 className="mb-0 fw-600">
              “ I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great. ”
            </h3>
          </div>
        </div>
        <div className="counter-wrapper style-four justify-content-between">
          <div className="coundown">
            <span className="counter-tag">Projects</span>
            <div className="d-flex flex-column">
              <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <h2 className="odometer" data-odometer-final={27} />
                <i className="bi bi-plus" />
              </div>
              <p>Completed</p>
            </div>
          </div>
          <div className="coundown">
            <span className="counter-tag">Experts</span>
            <div className="d-flex flex-column">
              <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <h2 className="odometer" data-odometer-final={20}>
                  01
                </h2>
                <i className="bi bi-plus" />
              </div>
              <p>Member </p>
            </div>
          </div>
          <div className="coundown">
            <span className="counter-tag">Clients</span>
            <div className="d-flex flex-column">
              <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <h2 className="odometer" data-odometer-final={11}>
                  01
                </h2>
                <i className="bi bi-plus" />
              </div>
              <p>World-wide</p>
            </div>
          </div>
          <div className="coundown">
            <span className="counter-tag">Success</span>
            <div className="d-flex flex-column">
              <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <h2 className="odometer" data-odometer-final={80}>
                  01
                </h2>
                <i className="bi bi-percent" />
              </div>
              <p>Story Patht</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-120">
        <Swiper {...sldier} className="swiper choose-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="choose-single">
                <img src="assets/images/bg/choose-1.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="choose-single">
                <img src="assets/images/bg/choose-2.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="choose-single">
                <img src="assets/images/bg/choose-3.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="choose-single">
                <img src="assets/images/bg/choose-2.jpg" alt="" />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Counter1;
