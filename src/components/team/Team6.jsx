import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Team6() {
  const sldier = {
    slidesPerView: "auto",
    speed: 1500,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },

    navigation: {
      nextEl: ".team-six-next",
      prevEl: ".team-six-prev",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
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
  return (
    <div className="team-section pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center mb-50">
          <div className="col-lg-10">
            <div className="section-title-seven text-lg-start text-center">
              <span>Team Member</span>
              <h2>TechGen Experties Team</h2>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="slider-arrows arrow-style-two text-center d-lg-flex  flex-row justify-content-end align-items-center gap-4">
              <div
                className="team-six-next swiper-next-arrow"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <img src="assets/images/icons/arrow-prev-one.svg" alt="" />
              </div>
              <div
                className="team-six-prev swiper-prev-arrow"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <img src="assets/images/icons/arrow-next-one.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...sldier} className="swiper team-six-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="team-six-single">
                    <div className="team-six-image">
                      <img src="assets/images/team/team6-1.jpg" alt="" />
                      <ul className="social-links gap-2">
                        <li>
                          <a href="https://www.linkedin.com/">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-six-content">
                      <h3>Frangoline Josefh</h3>
                      <p>Marekting Expert</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-six-single">
                    <div className="team-six-image">
                      <img src="assets/images/team/team6-2.jpg" alt="" />
                      <ul className="social-links gap-2">
                        <li>
                          <a href="https://www.linkedin.com/">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-six-content">
                      <h3>Jacoline Marry</h3>
                      <p>SEO Expert</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-six-single">
                    <div className="team-six-image">
                      <img src="assets/images/team/team6-3.jpg" alt="" />
                      <ul className="social-links gap-2">
                        <li>
                          <a href="https://www.linkedin.com/">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-six-content">
                      <h3>Robert Jhonson</h3>
                      <p>Video Editing</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-six-single">
                    <div className="team-six-image">
                      <img src="assets/images/team/team6-3.jpg" alt="" />
                      <ul className="social-links gap-2">
                        <li>
                          <a href="https://www.linkedin.com/">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-six-content">
                      <h3>Robert Jhonson</h3>
                      <p>Video Editing</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-six-single">
                    <div className="team-six-image">
                      <img src="assets/images/team/team6-4.jpg" alt="" />
                      <ul className="social-links gap-2">
                        <li>
                          <a href="https://www.linkedin.com/">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-six-content">
                      <h3>Juliea Furarry</h3>
                      <p>Content Expert</p>
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

export default Team6;
