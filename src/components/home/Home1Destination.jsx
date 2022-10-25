import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import destinationCardData from "../data/destination_card.json";
SwiperCore.use([Navigation, Autoplay, EffectFade]);
export default function Home1Destination() {
  const destinationSlide = {
    slidesPerView: "auto",
    spaceBetween: 20,

    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
        navigation: false,
      },
      480: {
        slidesPerView: 1,
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
        slidesPerView: 3,
      },
    },
  };
  const slider1 = {
    navigation: {
      nextEl: ".bannerPrev1",
      prevEl: ".bannerNext1",
    },
    autoplay: true,
    speed: 1500,
  };
  const slider2 = {
    navigation: {
      nextEl: ".bannerPrev2",
      prevEl: ".bannerNext2",
    },
  };
  const slider3 = {
    navigation: {
      nextEl: ".bannerPrev3",
      prevEl: ".bannerNext3",
    },
  };
  return (
    <div className="destinations-area pt-105">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="section-head pb-40">
              <h5>Popular Destinations</h5>
              <h2>Select Our Best Popular Destinations</h2>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="package-slider-wrap">
                <img
                  src="assets/images/destination/d-1.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="pakage-overlay">
                  <strong>Spain</strong>
                </div>
                <div className="slider-arrows text-center d-xl-flex d-none justify-content-between">
                  <div className="bannerNext1 swiper-btn">
                    <i className="bx bx-chevron-left"></i>
                  </div>
                  <div className="bannerPrev1 swiper-btn">
                    <i className="bx bx-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="row destinations-1">
                <Swiper {...destinationSlide} {...slider1} className="swipper">
                  <div className="swipper-wrapper">
                    {destinationCardData.slice(0, 4).map((data) => {
                      const { id, image, title, rating, price } = data;
                      return (
                        <SwiperSlide key={id}>
                          <div className="package-card">
                            <div className="package-thumb">
                              <img src={image} alt="" className="img-fluid" />
                            </div>
                            <div className="package-details">
                              <div className="package-info">
                                <h5>
                                  <span>${price}</span>/Per Person
                                </h5>
                              </div>
                              <h3>
                                <i className="flaticon-arrival" />
                                <Link href="/package-details"><a>{title}</a></Link>
                              </h3>
                              <div className="package-rating">
                                <i className="bx bxs-star" />
                                <strong>
                                  <span>{rating}</span> Rating
                                </strong>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        <div className="row">
          <div className="col-lg-9 col-md-9">
            <div className="row destinations-2">
              <Swiper className="swipper" {...destinationSlide} {...slider2}>
                <div className="swipper-wrapper">
                  {destinationCardData.slice(4, 8).map((data) => {
                    const { id, image, title, rating, price } = data;
                    return (
                      <SwiperSlide key={id}>
                        <div className="package-card">
                          <div className="package-thumb">
                            <img src={image} alt="" className="img-fluid" />
                          </div>
                          <div className="package-details">
                            <div className="package-info">
                              <h5>
                                <span>${price}</span>/Per Person
                              </h5>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link href="package-details"><a>{title}</a></Link>
                            </h3>
                            <div className="package-rating">
                              <i className="bx bxs-star" />
                              <strong>
                                <span>{rating}</span> Rating
                              </strong>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </Swiper>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="package-slider-wrap">
              <img
                src="assets/images/destination/d-2.png"
                alt=""
                className="img-fluid"
              />
              <div className="pakage-overlay">
                <strong>Italy</strong>
              </div>
              <div className="slider-arrows text-center d-xl-flex d-none justify-content-between">
                <div className="bannerNext2 swiper-btn">
                  <i className="bx bx-chevron-left"></i>
                </div>
                <div className="bannerPrev2 swiper-btn">
                  <i className="bx bx-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="package-slider-wrap">
              <img
                src="assets/images/destination/d-3.png"
                alt=""
                className="img-fluid"
              />
              <div className="pakage-overlay">
                <strong>Dubai</strong>
              </div>
              <div className="slider-arrows text-center d-xl-flex d-none justify-content-between">
                <div className="bannerNext3 swiper-btn">
                  <i className="bx bx-chevron-left"></i>
                </div>
                <div className="bannerPrev3 swiper-btn">
                  <i className="bx bx-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="row destinations-1">
              <Swiper {...destinationSlide} {...slider3} className="swipper">
                {destinationCardData.slice(8, 12).map((data) => {
                  const { id, image, title, rating, price } = data;
                  return (
                    <SwiperSlide key={id}>
                      <div className="package-card">
                        <div className="package-thumb">
                          <img src={image} alt="" className="img-fluid" />
                        </div>
                        <div className="package-details">
                          <div className="package-info">
                            <h5>
                              <span>${price}</span>/Per Person
                            </h5>
                          </div>
                          <h3>
                            <i className="flaticon-arrival" />
                            <Link href="/package-details"><a>{title}</a></Link>
                          </h3>
                          <div className="package-rating">
                            <i className="bx bxs-star" />
                            <strong>
                              <span>{rating}</span> Rating
                            </strong>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
