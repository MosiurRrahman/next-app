import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);
function Team2() {
  const sldier = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 30,

      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
      navigation: {
        nextEl: ".team-two-next",
        prevEl: ".team-two-prev",
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
  }, []);
  return (
    <div className="team-section pt-120 pb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-lg-9">
            <div className="section-title-six sibling-two text-lg-start text-center">
              <span>Marketing Experties</span>
              <h2>
                Our Superb <span>Experties</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-end">
            <div className="slider-arrows arrow-style-one sibling-two text-center d-lg-flex d-none flex-row justify-content-center align-items-center gap-4">
              <div
                className="team-two-next swiper-next-arrow"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <i className="bi bi-chevron-left" />
              </div>
              <div
                className="team-two-prev swiper-prev-arrow"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <i className="bi bi-chevron-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...sldier} className="swiper team-two-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="team-two-single">
                    <div className="team-two-image">
                      <img src="assets/images/team/team2-1.png" alt="" />
                      <div className="team-two-social gap-3">
                        <div className="social-plus">
                          <i className="bi bi-share" />
                        </div>
                        <ul className="social-links gap-2">
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
                    </div>
                    <div className="team-two-content">
                      <h3>
                        <a>Frangoline Josefh</a>
                      </h3>
                      <p>Marekting Expert</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-two-single">
                    <div className="team-two-image">
                      <img src="assets/images/team/team2-2.png" alt="" />
                      <div className="team-two-social gap-3">
                        <div className="social-plus">
                          <i className="bi bi-share" />
                        </div>
                        <ul className="social-links gap-2">
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
                    </div>
                    <div className="team-two-content">
                      <h3>
                        <a>Jacoline Marry</a>
                      </h3>
                      <p>SEO Expert</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-two-single">
                    <div className="team-two-image">
                      <img src="assets/images/team/team2-3.png" alt="" />
                      <div className="team-two-social gap-3">
                        <div className="social-plus">
                          <i className="bi bi-share" />
                        </div>
                        <ul className="social-links gap-2">
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
                    </div>
                    <div className="team-two-content">
                      <h3>
                        <a>Robert Jhonson</a>
                      </h3>
                      <p>Video Editing</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-two-single">
                    <div className="team-two-image">
                      <img src="assets/images/team/team2-4.png" alt="" />
                      <div className="team-two-social gap-3">
                        <div className="social-plus">
                          <i className="bi bi-share" />
                        </div>
                        <ul className="social-links gap-2">
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
                    </div>
                    <div className="team-two-content">
                      <h3>
                        <a>Juliea Furarry</a>
                      </h3>
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

export default Team2;
