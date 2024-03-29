"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home6PerformanceSection = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },
      pagination: {
        el: ".pagination1",
        clickable: "true",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="home6-performance-section mb-130" id="trigger-route-1">
        <svg
          className="scroll-svg2"
          width={1480}
          height={433}
          viewBox="0 0 1480 433"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="route-1"
            d="M720.5 10C783.834 13 940 31.5 918.5 113.5C899.258 186.89 427.834 161.333 178.5 138C131.5 132.333 60.5014 146 34.0003 173C-30.941 239.164 34.0001 363 255.5 291.5C409.69 241.728 480.001 385.5 697 302C936.501 209.842 1381 213 1470 422.5"
            stroke="#DAE2FF"
            strokeWidth={20}
            strokeLinecap="round"
          />
        </svg>
        <div className="container-lg container-fluid">
          <div className="row g-lg-4 gy-5 align-items-end justify-content-between mb-70">
            <div className="col-lg-6">
              <div className="section-title3 text-animation">
                <h2>To Use &amp; Get Quality Performance.</h2>
                <p>
                  Cloud-based solution that simplifies project management,
                  allowing teams to focus on delivering high-quality results
                  without the complexities.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-area text-animation">
                <form>
                  <div className="form-inner">
                    <input type="text" placeholder="Enter Email" />
                    <button type="submit" className="primary-btn3 btn-hover">
                      Get Started
                      <svg
                        width={11}
                        height={11}
                        viewBox="0 0 11 11"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.9532 0.0585938L10.7354 1.14748C10.5495 2.07672 10.2769 3.53489 10.1862 5.1213C10.0949 6.71893 10.193 8.37925 10.7022 9.73705C10.8476 10.1249 10.6511 10.5572 10.2633 10.7026C9.87545 10.8481 9.44314 10.6516 9.2977 10.2637C8.68188 8.62153 8.59246 6.71935 8.68867 5.03573C8.72547 4.39179 8.79012 3.76993 8.86653 3.19447L1.53028 10.5307C1.23739 10.8236 0.762511 10.8236 0.469618 10.5307C0.176725 10.2378 0.176725 9.76295 0.469618 9.47006L7.82522 2.11446C7.18266 2.19925 6.4871 2.27186 5.77631 2.31171C4.07609 2.40705 2.1819 2.32292 0.704509 1.68975C0.323786 1.52658 0.147423 1.08567 0.310589 0.704951C0.473756 0.324229 0.914665 0.147865 1.29539 0.311032C2.44299 0.802862 4.0488 0.906228 5.69233 0.814067C7.31342 0.723165 8.86773 0.449612 9.86173 0.263237L10.9532 0.0585938Z"
                        />
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </button>
                  </div>
                </form>
                <ul>
                  <li>
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7ZM10.5262 4.34875C10.4637 4.28647 10.3893 4.23743 10.3074 4.20456C10.2256 4.1717 10.1379 4.15569 10.0497 4.15749C9.96144 4.15928 9.87449 4.17885 9.79401 4.21502C9.71352 4.25119 9.64116 4.30322 9.58125 4.368L6.54238 8.23987L4.711 6.40763C4.5866 6.29171 4.42206 6.2286 4.25204 6.2316C4.08203 6.2346 3.91982 6.30347 3.79958 6.42371C3.67934 6.54394 3.61047 6.70615 3.60747 6.87617C3.60447 7.04618 3.66758 7.21072 3.7835 7.33513L6.09875 9.65125C6.16112 9.71351 6.23539 9.76257 6.31714 9.7955C6.39888 9.82843 6.48642 9.84456 6.57453 9.84293C6.66264 9.84129 6.74952 9.82193 6.82998 9.78599C6.91045 9.75005 6.98285 9.69828 7.04287 9.63375L10.5359 5.2675C10.655 5.14369 10.7207 4.97812 10.7191 4.80634C10.7175 4.63456 10.6485 4.47027 10.5271 4.34875H10.5262Z" />
                    </svg>
                    No Credit Card Required.
                  </li>
                  <li>
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7ZM10.5262 4.34875C10.4637 4.28647 10.3893 4.23743 10.3074 4.20456C10.2256 4.1717 10.1379 4.15569 10.0497 4.15749C9.96144 4.15928 9.87449 4.17885 9.79401 4.21502C9.71352 4.25119 9.64116 4.30322 9.58125 4.368L6.54238 8.23987L4.711 6.40763C4.5866 6.29171 4.42206 6.2286 4.25204 6.2316C4.08203 6.2346 3.91982 6.30347 3.79958 6.42371C3.67934 6.54394 3.61047 6.70615 3.60747 6.87617C3.60447 7.04618 3.66758 7.21072 3.7835 7.33513L6.09875 9.65125C6.16112 9.71351 6.23539 9.76257 6.31714 9.7955C6.39888 9.82843 6.48642 9.84456 6.57453 9.84293C6.66264 9.84129 6.74952 9.82193 6.82998 9.78599C6.91045 9.75005 6.98285 9.69828 7.04287 9.63375L10.5359 5.2675C10.655 5.14369 10.7207 4.97812 10.7191 4.80634C10.7175 4.63456 10.6485 4.47027 10.5271 4.34875H10.5262Z" />
                    </svg>
                    14 days free trial.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="performance-slider-wrap">
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  {...settings}
                  className="swiper home6-performance-slider"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="performance-card">
                        <div className="performance-img">
                          <img
                            src="assets/img/home6/performance-img1.png"
                            alt=""
                          />
                        </div>
                        <div className="performance-content">
                          <h6>Project Planning</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="performance-card">
                        <div className="performance-img">
                          <img
                            src="assets/img/home6/performance-img2.png"
                            alt=""
                          />
                        </div>
                        <div className="performance-content">
                          <h6>Resources Allocation</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="performance-card">
                        <div className="performance-img">
                          <img
                            src="assets/img/home6/performance-img3.png"
                            alt=""
                          />
                        </div>
                        <div className="performance-content">
                          <h6>Meeting Schedule</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="performance-card">
                        <div className="performance-img">
                          <img
                            src="assets/img/home6/performance-img4.png"
                            alt=""
                          />
                        </div>
                        <div className="performance-content">
                          <h6>Team Collaboration</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
                <div className="slider-btn-group two">
                  <div className="slider-btn prev-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={11}
                      viewBox="0 0 15 11"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="slider-btn next-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={11}
                      viewBox="0 0 15 11"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="pagination-wrap">
                  <div className="pagination pagination1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home6-counter-section mb-130">
        <div className="container-lg container-fluid">
          <div className="counter-wrapper">
            <div className="row g-md-4 gy-5 justify-content-center">
              <div className="col-md-4 col-sm-6 d-flex justify-content-sm-center justify-content-start">
                <div className="single-counter">
                  <div className="icon">
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.9375 7.96875C15.9375 7.72011 15.8387 7.48165 15.6629 7.30584C15.4871 7.13002 15.2486 7.03125 15 7.03125C14.7514 7.03125 14.5129 7.13002 14.3371 7.30584C14.1613 7.48165 14.0625 7.72011 14.0625 7.96875V16.4025L12.0502 14.3691C11.9635 14.2816 11.8605 14.212 11.747 14.1643C11.6335 14.1166 11.5118 14.0917 11.3886 14.0911C11.2655 14.0904 11.1435 14.1141 11.0295 14.1606C10.9155 14.2071 10.8118 14.2757 10.7243 14.3623C10.6368 14.4489 10.5672 14.5519 10.5195 14.6654C10.4718 14.7789 10.4469 14.9007 10.4463 15.0238C10.4457 15.1469 10.4693 15.2689 10.5158 15.3829C10.5624 15.4969 10.6309 15.6006 10.7175 15.6881L14.3334 19.3425C14.4206 19.4307 14.5244 19.5006 14.6388 19.5484C14.7533 19.5962 14.876 19.6208 15 19.6208C15.124 19.6208 15.2467 19.5962 15.3612 19.5484C15.4756 19.5006 15.5794 19.4307 15.6666 19.3425L19.2825 15.6881C19.3691 15.6006 19.4376 15.4969 19.4842 15.3829C19.5307 15.2689 19.5543 15.1469 19.5537 15.0238C19.5531 14.9007 19.5282 14.7789 19.4805 14.6654C19.4328 14.5519 19.3632 14.4489 19.2757 14.3623C19.1882 14.2757 19.0845 14.2071 18.9705 14.1606C18.8565 14.1141 18.7345 14.0904 18.6114 14.0911C18.4882 14.0917 18.3665 14.1166 18.253 14.1643C18.1395 14.212 18.0365 14.2816 17.9498 14.3691L15.9375 16.4025V7.96875ZM6.5625 21.0938C6.31386 21.0938 6.0754 21.1925 5.89959 21.3683C5.72377 21.5442 5.625 21.7826 5.625 22.0312C5.625 22.2799 5.72377 22.5183 5.89959 22.6942C6.0754 22.87 6.31386 22.9688 6.5625 22.9688H23.4375C23.6861 22.9688 23.9246 22.87 24.1004 22.6942C24.2762 22.5183 24.375 22.2799 24.375 22.0312C24.375 21.7826 24.2762 21.5442 24.1004 21.3683C23.9246 21.1925 23.6861 21.0938 23.4375 21.0938H6.5625Z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.375 0.9375C4.71516 0.9375 0.9375 4.71516 0.9375 9.375V20.625C0.9375 25.2848 4.71516 29.0625 9.375 29.0625H20.625C25.2848 29.0625 29.0625 25.2848 29.0625 20.625V9.375C29.0625 4.71516 25.2848 0.9375 20.625 0.9375H9.375ZM2.8125 9.375C2.8125 5.75063 5.75063 2.8125 9.375 2.8125H20.625C24.2494 2.8125 27.1875 5.75063 27.1875 9.375V20.625C27.1875 24.2494 24.2494 27.1875 20.625 27.1875H9.375C5.75063 27.1875 2.8125 24.2494 2.8125 20.625V9.375Z"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <div className="number">
                      <h3 className="counter">04</h3>
                      <span>M+</span>
                    </div>
                    <p>Total Download</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 d-flex justify-content-sm-center justify-content-start">
                <div className="single-counter">
                  <div className="icon">
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.1285 27.1233C21.726 27.1212 21.3349 26.9898 21.0129 26.7483L14.0004 21.4983L6.98789 26.7201C6.66923 26.9494 6.28665 27.0728 5.8941 27.073C5.50155 27.0733 5.11883 26.9503 4.79989 26.7214C4.48095 26.4926 4.24188 26.1694 4.11638 25.7975C3.99089 25.4255 3.98529 25.0235 4.10039 24.6483L6.80977 16.3139L1.43789 11.1201C1.1778 10.8585 1.00065 10.526 0.928645 10.1642C0.856636 9.80235 0.892961 9.42733 1.03307 9.08606C1.17318 8.74479 1.41085 8.45244 1.71632 8.2456C2.0218 8.03876 2.3815 7.92663 2.75039 7.92325H9.63164L12.3035 1.99825C12.4549 1.67613 12.6949 1.40377 12.9954 1.21299C13.2959 1.02221 13.6445 0.920898 14.0004 0.920898C14.3563 0.920898 14.7049 1.02221 15.0054 1.21299C15.3059 1.40377 15.5458 1.67613 15.6973 1.99825L18.3879 7.93263H25.2504C25.6185 7.93782 25.9769 8.05126 26.281 8.25879C26.585 8.46633 26.8213 8.75878 26.9602 9.09968C27.0992 9.44059 27.1347 9.81485 27.0624 10.1758C26.9901 10.5368 26.8131 10.8685 26.5535 11.1295L21.1816 16.342L23.891 24.6576C23.9841 24.938 24.0096 25.2365 23.9654 25.5286C23.9213 25.8208 23.8087 26.0983 23.6369 26.3387C23.465 26.5791 23.2388 26.7754 22.9767 26.9118C22.7146 27.0481 22.424 27.1206 22.1285 27.1233ZM2.75039 9.79825L8.12227 14.9826C8.36491 15.2222 8.53764 15.5233 8.62189 15.8537C8.70614 16.1841 8.6987 16.5312 8.60039 16.8576L5.88164 25.2483L12.8848 19.9983C13.2076 19.7592 13.5987 19.6302 14.0004 19.6302C14.4021 19.6302 14.7932 19.7592 15.116 19.9983L22.1379 25.2483L19.4098 16.9233C19.3115 16.5968 19.304 16.2497 19.3883 15.9193C19.4725 15.5889 19.6453 15.2878 19.8879 15.0483L25.2504 9.7795H18.3785C18.0215 9.7786 17.6721 9.67578 17.3715 9.48313C17.0709 9.29048 16.8316 9.01602 16.6816 8.692L14.0004 2.74825L11.3379 8.692C11.1879 9.01602 10.9486 9.29048 10.648 9.48313C10.3474 9.67578 9.99805 9.7786 9.64102 9.7795L2.75039 9.79825Z" />
                    </svg>
                  </div>
                  <div className="content">
                    <div className="number">
                      <h3 className="counter">4.8</h3>
                      <span>+</span>
                    </div>
                    <p>User Ratings</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 d-flex justify-content-sm-center justify-content-start">
                <div className="single-counter">
                  <div className="icon">
                    <svg
                      width={29}
                      height={29}
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 0.873047C10.3784 0.873047 7.4375 3.81398 7.4375 7.43555C7.4375 11.0571 10.3784 13.998 14 13.998C17.6216 13.998 20.5625 11.0571 20.5625 7.43555C20.5625 3.81398 17.6216 0.873047 14 0.873047ZM14 2.74805C16.5875 2.74805 18.6875 4.84805 18.6875 7.43555C18.6875 10.023 16.5875 12.123 14 12.123C11.4125 12.123 9.3125 10.023 9.3125 7.43555C9.3125 4.84805 11.4125 2.74805 14 2.74805ZM2.75 25.248H14C14.2486 25.248 14.4871 25.3468 14.6629 25.5226C14.8387 25.6984 14.9375 25.9369 14.9375 26.1855C14.9375 26.4342 14.8387 26.6726 14.6629 26.8485C14.4871 27.0243 14.2486 27.123 14 27.123H1.8125C1.56386 27.123 1.3254 27.0243 1.14959 26.8485C0.973772 26.6726 0.875 26.4342 0.875 26.1855V24.3105C0.875 22.0728 1.76395 19.9267 3.34629 18.3443C4.92862 16.762 7.07474 15.873 9.3125 15.873H14C14.2486 15.873 14.4871 15.9718 14.6629 16.1476C14.8387 16.3234 14.9375 16.5619 14.9375 16.8105C14.9375 17.0592 14.8387 17.2976 14.6629 17.4735C14.4871 17.6493 14.2486 17.748 14 17.748H9.3125C7.57202 17.748 5.90282 18.4395 4.67211 19.6702C3.4414 20.9009 2.75 22.5701 2.75 24.3105V25.248ZM21.9697 15.873C18.6069 15.873 15.8769 18.603 15.8769 21.9659C15.8769 25.3287 18.6069 28.0587 21.9697 28.0587C25.3325 28.0587 28.0625 25.3287 28.0625 21.9659C28.0625 18.603 25.3325 15.873 21.9697 15.873ZM21.9697 17.748C24.2975 17.748 26.1875 19.638 26.1875 21.9659C26.1875 24.2937 24.2975 26.1837 21.9697 26.1837C19.6419 26.1837 17.7519 24.2937 17.7519 21.9659C17.7519 19.638 19.6419 17.748 21.9697 17.748Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.5795 22.0267L23.6411 19.9071C23.7265 19.8173 23.8289 19.7455 23.9423 19.6956C24.0558 19.6457 24.178 19.6188 24.3018 19.6164C24.4257 19.614 24.5489 19.6362 24.6641 19.6817C24.7794 19.7272 24.8845 19.7951 24.9733 19.8815C25.0622 19.9679 25.133 20.071 25.1817 20.1849C25.2305 20.2988 25.2562 20.4213 25.2573 20.5452C25.2584 20.6691 25.235 20.792 25.1883 20.9068C25.1417 21.0216 25.0727 21.126 24.9854 21.2139L22.2517 24.0246C22.1644 24.1147 22.06 24.1863 21.9445 24.2352C21.829 24.2842 21.7049 24.3094 21.5795 24.3094C21.4541 24.3094 21.3299 24.2842 21.2145 24.2352C21.099 24.1863 20.9945 24.1147 20.9073 24.0246L18.9536 22.0155C18.8663 21.9275 18.7973 21.8231 18.7507 21.7083C18.704 21.5936 18.6806 21.4707 18.6817 21.3467C18.6828 21.2228 18.7085 21.1004 18.7572 20.9865C18.806 20.8725 18.8768 20.7694 18.9657 20.6831C19.0545 20.5967 19.1596 20.5288 19.2749 20.4833C19.3901 20.4378 19.5132 20.4156 19.6371 20.4179C19.761 20.4203 19.8832 20.4472 19.9966 20.4971C20.1101 20.547 20.2125 20.6189 20.2979 20.7086L21.5795 22.0267Z"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <div className="number">
                      <h3 className="counter">2.5</h3>
                      <span>M+</span>
                    </div>
                    <p>Active User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home6PerformanceSection;
