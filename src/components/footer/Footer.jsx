import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Footer() {
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
      breakpoints: {
        280: {
          slidesPerView: 2,
        },
        386: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 5,
        },
      },
    };
  }, []);
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.32809515636!2d90.3665091154322!3d23.806929392530332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1671510521035!5m2!1sen!2sbd"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-4 order-sm-1 order-2">
              <div className="footer-info">
                <Link legacyBehavior href="/">
                  <a className="footer-logo">
                    <img src="assets/images/bg/footer-logo.svg" alt="image" />
                  </a>
                </Link>
                <span>
                  <img src="assets/images/icons/title-vector.svg" alt="image" />
                </span>
                <p>
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain.
                </p>
                <ul className="footer-social sibling-two">
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i className="bx bxl-pinterest-alt" />
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
                </ul>
              </div>
            </div>
            <div className="col-xl-8 pt-90 order-sm-2 order-1">
              <div className="row mb-70 gy-5">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="footer-list-area">
                    <h3 className="footer-list-title">Our Services</h3>
                    <ul className="footer-list sibling-two">
                      <li>
                        <a href="#">Website Design</a>
                      </li>
                      <li>
                        <a href="#">Content Writing</a>
                      </li>
                      <li>
                        <a href="#">SEO Marketing</a>
                      </li>
                      <li>
                        <a href="#">Video Editing</a>
                      </li>
                      <li>
                        <a href="#">Copy Writing</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6">
                  <div className="footer-list-area">
                    <h3 className="footer-list-title">Office Address</h3>
                    <ul className="footer-address-list sibling-two">
                      <li>
                        <div className="icon">
                          <i className="bi bi-envelope" />
                        </div>
                        <div className="address">
                          <a href="mailto:info@example1.com">
                            info@example1.com
                          </a>
                          <a href="mailto:info@example2.com">
                            info@example2.com
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="bi bi-geo-alt" />
                        </div>
                        <div className="address">
                          <a href="#">NewYork City, Office-01, Road-01</a>
                          <a href="#">House-3A/B, Section-B</a>
                        </div>
                      </li>
                    </ul>
                    <a
                      className="eg-btn btn--lg btn--primary-outline style-one"
                      data-bs-toggle="modal"
                      href="#exampleModalToggle"
                      role="button"
                    >
                      Get SiteMap
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="footer-list-area">
                    <h3 className="footer-list-title">More Info</h3>
                    <ul className="footer-list sibling-two">
                      <li>
                        <Link legacyBehavior href="/contact">
                          <a>Contact Us</a>
                        </Link>
                      </li>
                      <li>
                        <a href="#">Privacy &amp; Policy</a>
                      </li>
                      <li>
                        <a href="#">Cookie Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row pb-90 g-4 align-items-center justify-content-center">
                <div className="col-xxl-2 col-xl-3 col-lg-3 text-lg-start text-center">
                  <h3 className="footer-award-title">Achievements:</h3>
                </div>
                <div className="col-xxl-10 col-xl-9 col-lg-9">
                  <Swiper
                    {...slider}
                    className="swiper footer-award-slider"
                    data-cursor="Drag"
                  >
                    <div className="swiper-wrapper swiper-wrapper align-items-center">
                      <SwiperSlide className="swiper-slide">
                        <div className="achievement-single">
                          <img
                            src="assets/images/company/foot-award1.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="achievement-single">
                          <img
                            src="assets/images/company/foot-award2.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="achievement-single">
                          <img
                            src="assets/images/company/foot-award3.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="achievement-single">
                          <img
                            src="assets/images/company/foot-award4.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="achievement-single">
                          <img
                            src="assets/images/company/foot-award2.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="achievement-single">
                          <img
                            src="assets/images/company/foot-award2.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                 
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="row copyright-area">
            <div className="col-lg-12 text-center">
              <p>
                © copyright 2023 TechGen | Design By{" "}
                <a href="#" className="linear-text-two">
                  Egens Lab
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
