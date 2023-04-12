import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, Pagination, EffectFade]);
function Customar6() {
  const sliders = useMemo(() => {
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
    <div className="customer-section-six">
      <div className="customer-six-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section-title-small-two style-white">
                <h5>Here 10K+ Comapny Have Connceted With Us</h5>
              </div>
              <Swiper {...sliders} className="swiper customer-slider">
                <div
                  className="swiper-wrapper d-flex align-items-center"
                  style={{ alignItems: "center" }}
                  s
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo2">
                      <a href="#">
                        <img
                          src="assets/images/company/company6-1.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo2">
                      <a href="#">
                        <img
                          src="assets/images/company/company6-2.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo2">
                      <a href="#">
                        <img
                          src="assets/images/company/company6-3.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo2">
                      <a href="#">
                        <img
                          src="assets/images/company/company6-4.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo2">
                      <a href="#">
                        <img
                          src="assets/images/company/company6-5.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo2">
                      <a href="#">
                        <img
                          src="assets/images/company/company6-6.png"
                          alt="image"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="customer-logo2">
                      <a href="#">
                        <img
                          src="assets/images/company/company6-2.png"
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

export default Customar6;
