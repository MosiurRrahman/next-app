import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Customar() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
      freeMode: true,
      speed: 5000,
      freeModeMomentum: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
      navigation: {
        nextEl: ".casestudy-one-next",
        prevEl: ".casestudy-one-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 2,
          loop: true,
        },
        386: {
          slidesPerView: 2,
          loop: true,
        },
        540: {
          slidesPerView: 2,
          loop: true,
        },
        768: {
          slidesPerView: 3,
          loop: true,
        },
        992: {
          slidesPerView: 4,
          loop: true,
        },
        1200: {
          slidesPerView: 4,
          loop: true,
        },
        1400: {
          slidesPerView: 5,
          loop: true,
        },
        1600: {
          slidesPerView: 6,
          loop: true,
        },
      },
    };
  }, []);
  return (
    <div className="customer-section-five pl-110 overflow-hidden">
      <div className="customer-five-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section-title-small-two ">
                <h5>Here 10K+ Comapny Have Connceted With Us</h5>
              </div>
              <Swiper {...slider} className="swiper customer-slider">
                <div className="swiper-wrapper d-flex align-items-center">
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo">
                      <a href="#">
                        <img
                          src="assets/images/company/company5-1.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo">
                      <a href="#">
                        <img
                          src="assets/images/company/company5-2.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo">
                      <a href="#">
                        <img
                          src="assets/images/company/company5-3.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo">
                      <a href="#">
                        <img
                          src="assets/images/company/company5-4.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo">
                      <a href="#">
                        <img
                          src="assets/images/company/company5-5.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo">
                      <a href="#">
                        <img
                          src="assets/images/company/company5-6.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo">
                      <a href="#">
                        <img
                          src="assets/images/company/company5-2.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo">
                      <a href="#">
                        <img
                          src="assets/images/company/company5-4.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo">
                      <a href="#">
                        <img
                          src="assets/images/company/company5-5.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo">
                      <a href="#">
                        <img
                          src="assets/images/company/company5-6.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo">
                      <a href="#">
                        <img
                          src="assets/images/company/company5-2.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customar;
