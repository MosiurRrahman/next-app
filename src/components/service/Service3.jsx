import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Service3() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 10,
      centerSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".blog-three-next",
        prevEl: ".blog-three-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        540: {
          slidesPerView: 1,
        },
        769: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <div className="servcie-section pt-120 overflow-hidden">
      <div className="container-fluid">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10">
            <div className="section-title-four sibling-two text-center">
              <span>TechGen Services</span>
              <h2>
                Trending Tech<span> Services </span>{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...slider} className="swiper service-three-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="service-three-single">
                    <div className="circle-border">
                      <img src="assets/images/bg/circle-vector2.svg" alt="" />
                    </div>
                    <div className="service-three-front">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Data Science</h4>
                      <p>
                        Power of choice is untrammelled and when nothing
                        prevents.
                      </p>
                      <Link legacyBehavior href="/service-details">
                        <a className="service-btn">
                          <img
                            src="assets/images/icons/btn-arrow3.svg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className="service-three-back"
                      style={{
                        background:
                          'linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)) ,url("assets/images/bg/service3-1.jpg")',
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    >
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Data Science</h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Explore More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="service-three-single">
                    <div className="circle-border">
                      <img src="assets/images/bg/circle-vector2.svg" alt="" />
                    </div>
                    <div className="service-three-front">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-2.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Machine Learning</h4>
                      <p>
                        Power of choice is untrammelled and when nothing
                        prevents.
                      </p>
                      <Link legacyBehavior href="/service-details">
                        <a className="service-btn">
                          <img
                            src="assets/images/icons/btn-arrow3.svg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className="service-three-back"
                      style={{
                        background:
                          'linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)) ,url("assets/images/bg/service3-2.jpg")',
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    >
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Machine Learning</h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Explore More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="service-three-single">
                    <div className="circle-border">
                      <img src="assets/images/bg/circle-vector2.svg" alt="" />
                    </div>
                    <div className="service-three-front">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-3.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Cloud Computing</h4>
                      <p>
                        Power of choice is untrammelled and when nothing
                        prevents.
                      </p>
                      <Link legacyBehavior href="/service-details">
                        <a className="service-btn">
                          <img
                            src="assets/images/icons/btn-arrow3.svg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className="service-three-back"
                      style={{
                        background:
                          'linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)) ,url("assets/images/bg/service3-3.jpg")',
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    >
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Cloud Computing</h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Explore More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="service-three-single">
                    <div className="circle-border">
                      <img src="assets/images/bg/circle-vector2.svg" alt="" />
                    </div>
                    <div className="service-three-front">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-4.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Block Chain</h4>
                      <p>
                        Power of choice is untrammelled and when nothing
                        prevents.
                      </p>
                      <Link legacyBehavior href="/service-details">
                        <a className="service-btn">
                          <img
                            src="assets/images/icons/btn-arrow3.svg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className="service-three-back"
                      style={{
                        background:
                          'linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)) ,url("assets/images/bg/service3-4.jpg")',
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    >
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Block Chain</h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Explore More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="service-three-single">
                    <div className="circle-border">
                      <img src="assets/images/bg/circle-vector2.svg" alt="" />
                    </div>
                    <div className="service-three-front">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-2.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Machine Learning</h4>
                      <p>
                        Power of choice is untrammelled and when nothing
                        prevents.
                      </p>
                      <Link legacyBehavior href="/service-details">
                        <a className="service-btn">
                          <img
                            src="assets/images/icons/btn-arrow3.svg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className="service-three-back"
                      style={{
                        background:
                          'linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)) ,url("assets/images/bg/service3-2.jpg")',
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    >
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Machine Learning</h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Explore More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="service-three-single">
                    <div className="circle-border">
                      <img src="assets/images/bg/circle-vector2.svg" alt="" />
                    </div>
                    <div className="service-three-front">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-3.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Cloud Computing</h4>
                      <p>
                        Power of choice is untrammelled and when nothing
                        prevents.
                      </p>
                      <Link legacyBehavior href="/service-details">
                        <a className="service-btn">
                          <img
                            src="assets/images/icons/btn-arrow3.svg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className="service-three-back"
                      style={{
                        background:
                          'linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)) ,url("assets/images/bg/service3-3.jpg")',
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    >
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Cloud Computing</h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Explore More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="service-three-single">
                    <div className="circle-border">
                      <img src="assets/images/bg/circle-vector2.svg" alt="" />
                    </div>
                    <div className="service-three-front">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-4.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Block Chain</h4>
                      <p>
                        Power of choice is untrammelled and when nothing
                        prevents.
                      </p>
                      <Link legacyBehavior href="/service-details">
                        <a className="service-btn">
                          <img
                            src="assets/images/icons/btn-arrow3.svg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className="service-three-back"
                      style={{
                        background:
                          'linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)) ,url("assets/images/bg/service3-4.jpg")',
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    >
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Block Chain</h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Explore More</a>
                      </Link>
                    </div>
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

export default Service3;
