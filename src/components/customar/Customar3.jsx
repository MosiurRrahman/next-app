import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, Pagination, EffectFade]);

function Customar3() {
  const slide = useMemo(() => {
    return {
      slidesPerView: 1,
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
        },
        386: {
          slidesPerView: 2,
        },
        540: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    };
  }, []);
  return (
    <div className="customer-section-five pt-120 pl-110 overflow-hidden">
      <div className="customer-five-wrapperr">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section-title-small-two style-two">
                <h5>Here 10K+ Comapny Have Connceted With Us</h5>
              </div>
              <Swiper {...slide} className="swiper customer-slider">
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
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customar3;
