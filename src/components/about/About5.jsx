import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function About5() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 10,
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
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
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <div className="about-secion-five pt-120 overflow-hidden" id="about">
      <div className="container-fluid about-five-quote">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-5 col-lg-6 order-lg-1 order-2">
            <div className="about-five-image">
              <img src="assets/images/bg/about-five-image.jpg" alt="image" />
              <div className="about-five-quote">
                <h4>
                  Our Target to Esay Solution of Busniess Progress &amp;
                  Customer Satisfaction <span className="solid-line" />
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 ps-xl-5 ps-lg-3 order-lg-2 order-1">
            <div className="section-title-four style-two text-start mb-15 ">
              <span className="linear-text-two">Get to Know</span>
              <h2>
                Know<span className="linear-text-two">About</span> Us
              </h2>
            </div>
            <p className="mb-30 text-start">
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment,
              so blinded by desire, that they cannot foresee the pain and
              trouble that are bound to ensue; and equal blame belongs to those
              who fail in their duty through weakness
            </p>
            <h4 className="achivement-title text-lg-start text-center">
              Our Achievements:
            </h4>
            <Swiper {...slider} className="swiper achievement-slider mb-60">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-1.png"
                      alt="image"
                    />
                    <h6>Human Agency -22</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-2.png"
                      alt="image"
                    />
                    <h6>Best Quality Service</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-1.png"
                      alt="image"
                    />
                    <h6>Human Agency -22</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-3.png"
                      alt="image"
                    />
                    <h6>International Award</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-1.png"
                      alt="image"
                    />
                    <h6>Human Agency -22</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-1.png"
                      alt="image"
                    />
                    <h6>Galaxy Award-18</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-2.png"
                      alt="image"
                    />
                    <h6>Human Agency -22</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-1.png"
                      alt="image"
                    />
                    <h6>Human Agency -22</h6>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="explore-button style-two text-lg-start text-center">
              <a href="service-details.html">
                <img
                  src="assets/images/icons/button-arro-linear-big.svg"
                  alt="image"
                />{" "}
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About5;
