import React, { useEffect, useMemo, useState } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade, Thumbs]);
const thumbs = {
  swiper: null,
};
function Testimonial3() {
  // Swiper instance
  const [swiper, updateSwiper] = useState(null);
  // Swiper thumbsinstance
  const [swiperThumbs, updateSwiperThumbs] = useState(null);
  useEffect(() => {
    if (swiper && swiperThumbs) {
      swiper.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiper;
    }
  }, [swiper, swiperThumbs]);
  const sldider = useMemo(() => {
    return {
      getSwiper: updateSwiper,
      spaceBetween: 0,
      speed: 1500,
	  effect:'fade',
	  fadeEffect:{
		crossFade:true,
	  },
	      autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
      navigation: {
        nextEl: ".banner-one-next",
        prevEl: ".banner-one-prev",
      },
    };
  }, []);
  const thumbs = useMemo(() => {
    return {
      getSwiper: updateSwiperThumbs,
      loop: true,
      spaceBetween: 10,
      speed: 1500,
      navigation: {
        nextEl: ".testi-three-next",
        prevEl: ".testi-three-prev",
      },
    };
  }, []);
  return (
    <div className="testimonial-section mobile-padding pb-120 pt-120">
      <div className="container">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10">
            <div className="section-title-four sibling-two text-center">
              <span>Client Feedback</span>
              <h2>
                Trusted Clients <span>Feedback</span>{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center text-center">
              <Swiper {...sldider} className="swiper testi-image-slider3">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="assets/images/testimonial/testi1-1.png"
                      alt="image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="assets/images/testimonial/testi1-2.png"
                      alt="image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="assets/images/testimonial/testi1-3.png"
                      alt="image"
                    />
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
          <div className="col-lg-10">
            <Swiper {...thumbs} className="swiper testi-content-slider3">
              <div className="quote-icon">
                <img src="assets/images/icons/comma2.svg" alt="image" />
              </div>
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-three">
                    <p>
                      I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth.
                    </p>
                    <div className="testi-three-author">
                      <h4>Holyona Jacky</h4>
                      <p>XYZ Company</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-three">
                    <p>
                      I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth.
                    </p>
                    <div className="testi-three-author">
                      <h4>John Marcel</h4>
                      <p>XYZ Company</p>
                    </div>
                  </div>
                </SwiperSlide>
                <diSwiperSlidev className="swiper-slide">
                  <div className="testi-single-three">
                    <p>
                      I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth.
                    </p>
                    <div className="testi-three-author">
                      <h4>Angelina Sena</h4>
                      <p>XYZ Company</p>
                    </div>
                  </div>
                </diSwiperSlidev>
              </div>
            </Swiper>
          </div>
          <div className="col-lg-12">
            <div className="slider-arrows arrow-style-two testi-three-arrow d-lg-flex d-none justify-content-between gap-4">
              <div
                className="swiper-prev-arrow testi-three-prev"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <img src="assets/images/icons/arrow-left4.svg" alt="" />
              </div>
              <div
                className="swiper-next-arrow testi-three-next"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <img src="assets/images/icons/arrow-right4.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial3;
