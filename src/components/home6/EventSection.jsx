import React, { useMemo } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const EventSection = () => {
   const slideSetting = useMemo(()=>{
    return{
      slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        loop: true,
        effect: 'fade',             // Use the fade effect
        fadeEffect: {
            crossFade: true           // Enable cross-fade transition
        },
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next-7",
            prevEl: ".prev-7",
        },
    }
  })
  return (
    <div className="home6-event-section mb-130">
    <div className="row">
      <div className="col-lg-12 position-relative">
        <div className="slider-btn-group">
          <div className="slider-btn prev-7">
            <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z" />
            </svg>
          </div>
          <div className="slider-btn next-7">
            <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z" />
            </svg>
          </div>
        </div>    
        <div className="event-wrap">
          <div className="row w-100">
            <div className="col-lg-12">
              <Swiper {...slideSetting} className="swiper event-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="single-event">
                      <div className="event-content">
                        <span>Upcoming Event</span>
                        <h2>Management Consulting Summit-2023</h2>
                        <ul>
                          <li>
                            <Link legacyBehavior href="/event-details">
                              <a>
                              <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <g>
                                  <path d="M6.5 5.6875C6.60774 5.6875 6.71108 5.7303 6.78726 5.80649C6.86345 5.88267 6.90625 5.98601 6.90625 6.09375V7.3125H8.125C8.23274 7.3125 8.33608 7.3553 8.41226 7.43149C8.48845 7.50767 8.53125 7.61101 8.53125 7.71875C8.53125 7.82649 8.48845 7.92983 8.41226 8.00601C8.33608 8.0822 8.23274 8.125 8.125 8.125H6.90625V9.34375C6.90625 9.45149 6.86345 9.55483 6.78726 9.63101C6.71108 9.7072 6.60774 9.75 6.5 9.75C6.39226 9.75 6.28892 9.7072 6.21274 9.63101C6.13655 9.55483 6.09375 9.45149 6.09375 9.34375V8.125H4.875C4.76726 8.125 4.66392 8.0822 4.58774 8.00601C4.51155 7.92983 4.46875 7.82649 4.46875 7.71875C4.46875 7.61101 4.51155 7.50767 4.58774 7.43149C4.66392 7.3553 4.76726 7.3125 4.875 7.3125H6.09375V6.09375C6.09375 5.98601 6.13655 5.88267 6.21274 5.80649C6.28892 5.7303 6.39226 5.6875 6.5 5.6875Z" />
                                  <path d="M2.84375 0C2.95149 0 3.05483 0.0428012 3.13101 0.118988C3.2072 0.195175 3.25 0.298506 3.25 0.40625V0.8125H9.75V0.40625C9.75 0.298506 9.7928 0.195175 9.86899 0.118988C9.94517 0.0428012 10.0485 0 10.1562 0C10.264 0 10.3673 0.0428012 10.4435 0.118988C10.5197 0.195175 10.5625 0.298506 10.5625 0.40625V0.8125H11.375C11.806 0.8125 12.2193 0.983705 12.524 1.28845C12.8288 1.5932 13 2.00652 13 2.4375V11.375C13 11.806 12.8288 12.2193 12.524 12.524C12.2193 12.8288 11.806 13 11.375 13H1.625C1.19402 13 0.780698 12.8288 0.475951 12.524C0.171205 12.2193 0 11.806 0 11.375V2.4375C0 2.00652 0.171205 1.5932 0.475951 1.28845C0.780698 0.983705 1.19402 0.8125 1.625 0.8125H2.4375V0.40625C2.4375 0.298506 2.4803 0.195175 2.55649 0.118988C2.63267 0.0428012 2.73601 0 2.84375 0ZM0.8125 3.25V11.375C0.8125 11.5905 0.898102 11.7972 1.05048 11.9495C1.20285 12.1019 1.40951 12.1875 1.625 12.1875H11.375C11.5905 12.1875 11.7972 12.1019 11.9495 11.9495C12.1019 11.7972 12.1875 11.5905 12.1875 11.375V3.25H0.8125Z" />
                                </g>
                              </svg> 03 December, 2023
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link legacyBehavior href="/event-details">
                              <a>
                              <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <g>
                                  <path d="M9.47167 7.26375C9.035 8.12663 8.44333 8.98625 7.83833 9.75813C7.26441 10.4858 6.65075 11.1829 6 11.8462C5.34924 11.1829 4.73557 10.4858 4.16167 9.75813C3.55667 8.98625 2.965 8.12663 2.52833 7.26375C2.08667 6.39194 1.83333 5.57538 1.83333 4.875C1.83333 3.79756 2.27232 2.76425 3.05372 2.00238C3.83512 1.24051 4.89493 0.8125 6 0.8125C7.10507 0.8125 8.16488 1.24051 8.94628 2.00238C9.72768 2.76425 10.1667 3.79756 10.1667 4.875C10.1667 5.57538 9.9125 6.39194 9.47167 7.26375ZM6 13C6 13 11 8.38013 11 4.875C11 3.58207 10.4732 2.34209 9.53553 1.42785C8.59785 0.513615 7.32608 0 6 0C4.67392 0 3.40215 0.513615 2.46447 1.42785C1.52678 2.34209 1 3.58207 1 4.875C1 8.38013 6 13 6 13Z" />
                                  <path d="M6 6.5C5.55797 6.5 5.13405 6.3288 4.82149 6.02405C4.50893 5.7193 4.33333 5.30598 4.33333 4.875C4.33333 4.44402 4.50893 4.0307 4.82149 3.72595C5.13405 3.4212 5.55797 3.25 6 3.25C6.44203 3.25 6.86595 3.4212 7.17851 3.72595C7.49107 4.0307 7.66667 4.44402 7.66667 4.875C7.66667 5.30598 7.49107 5.7193 7.17851 6.02405C6.86595 6.3288 6.44203 6.5 6 6.5ZM6 7.3125C6.66304 7.3125 7.29893 7.05569 7.76777 6.59857C8.23661 6.14145 8.5 5.52147 8.5 4.875C8.5 4.22853 8.23661 3.60855 7.76777 3.15143C7.29893 2.69431 6.66304 2.4375 6 2.4375C5.33696 2.4375 4.70107 2.69431 4.23223 3.15143C3.76339 3.60855 3.5 4.22853 3.5 4.875C3.5 5.52147 3.76339 6.14145 4.23223 6.59857C4.70107 7.05569 5.33696 7.3125 6 7.3125Z" />
                                </g>
                              </svg> New York City
                              </a>
                            </Link>
                          </li>
                        </ul>
                        <Link legacyBehavior href="/event-details">
                          <a className="primary-btn1 btn-hover">
                          View Details
                          <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z">
                            </path>
                          </svg>
                          <span />
                          </a>
                        </Link>
                      </div>
                      <div className="event-author-area">
                        <div className="batch">Guest Speaker</div>
                        <div className="author-img">
                          <img src="assets/img/home6/author2.jpg" alt="" />
                        </div>
                        <div className="content">
                          <h5>Mrs. Olivia Ava</h5>
                          <span>Popular Speaker</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="single-event">
                      <div className="event-content">
                        <span>Upcoming Event</span>
                        <h2>Word Camp Summit-2023</h2>
                        <ul>
                          <li>
                            <Link legacyBehavior href="/event-details">
                              <a>
                              <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <g>
                                  <path d="M6.5 5.6875C6.60774 5.6875 6.71108 5.7303 6.78726 5.80649C6.86345 5.88267 6.90625 5.98601 6.90625 6.09375V7.3125H8.125C8.23274 7.3125 8.33608 7.3553 8.41226 7.43149C8.48845 7.50767 8.53125 7.61101 8.53125 7.71875C8.53125 7.82649 8.48845 7.92983 8.41226 8.00601C8.33608 8.0822 8.23274 8.125 8.125 8.125H6.90625V9.34375C6.90625 9.45149 6.86345 9.55483 6.78726 9.63101C6.71108 9.7072 6.60774 9.75 6.5 9.75C6.39226 9.75 6.28892 9.7072 6.21274 9.63101C6.13655 9.55483 6.09375 9.45149 6.09375 9.34375V8.125H4.875C4.76726 8.125 4.66392 8.0822 4.58774 8.00601C4.51155 7.92983 4.46875 7.82649 4.46875 7.71875C4.46875 7.61101 4.51155 7.50767 4.58774 7.43149C4.66392 7.3553 4.76726 7.3125 4.875 7.3125H6.09375V6.09375C6.09375 5.98601 6.13655 5.88267 6.21274 5.80649C6.28892 5.7303 6.39226 5.6875 6.5 5.6875Z" />
                                  <path d="M2.84375 0C2.95149 0 3.05483 0.0428012 3.13101 0.118988C3.2072 0.195175 3.25 0.298506 3.25 0.40625V0.8125H9.75V0.40625C9.75 0.298506 9.7928 0.195175 9.86899 0.118988C9.94517 0.0428012 10.0485 0 10.1562 0C10.264 0 10.3673 0.0428012 10.4435 0.118988C10.5197 0.195175 10.5625 0.298506 10.5625 0.40625V0.8125H11.375C11.806 0.8125 12.2193 0.983705 12.524 1.28845C12.8288 1.5932 13 2.00652 13 2.4375V11.375C13 11.806 12.8288 12.2193 12.524 12.524C12.2193 12.8288 11.806 13 11.375 13H1.625C1.19402 13 0.780698 12.8288 0.475951 12.524C0.171205 12.2193 0 11.806 0 11.375V2.4375C0 2.00652 0.171205 1.5932 0.475951 1.28845C0.780698 0.983705 1.19402 0.8125 1.625 0.8125H2.4375V0.40625C2.4375 0.298506 2.4803 0.195175 2.55649 0.118988C2.63267 0.0428012 2.73601 0 2.84375 0ZM0.8125 3.25V11.375C0.8125 11.5905 0.898102 11.7972 1.05048 11.9495C1.20285 12.1019 1.40951 12.1875 1.625 12.1875H11.375C11.5905 12.1875 11.7972 12.1019 11.9495 11.9495C12.1019 11.7972 12.1875 11.5905 12.1875 11.375V3.25H0.8125Z" />
                                </g>
                              </svg> 03 December, 2023
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link legacyBehavior href="/event-details">
                              <a>
                              <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <g>
                                  <path d="M9.47167 7.26375C9.035 8.12663 8.44333 8.98625 7.83833 9.75813C7.26441 10.4858 6.65075 11.1829 6 11.8462C5.34924 11.1829 4.73557 10.4858 4.16167 9.75813C3.55667 8.98625 2.965 8.12663 2.52833 7.26375C2.08667 6.39194 1.83333 5.57538 1.83333 4.875C1.83333 3.79756 2.27232 2.76425 3.05372 2.00238C3.83512 1.24051 4.89493 0.8125 6 0.8125C7.10507 0.8125 8.16488 1.24051 8.94628 2.00238C9.72768 2.76425 10.1667 3.79756 10.1667 4.875C10.1667 5.57538 9.9125 6.39194 9.47167 7.26375ZM6 13C6 13 11 8.38013 11 4.875C11 3.58207 10.4732 2.34209 9.53553 1.42785C8.59785 0.513615 7.32608 0 6 0C4.67392 0 3.40215 0.513615 2.46447 1.42785C1.52678 2.34209 1 3.58207 1 4.875C1 8.38013 6 13 6 13Z" />
                                  <path d="M6 6.5C5.55797 6.5 5.13405 6.3288 4.82149 6.02405C4.50893 5.7193 4.33333 5.30598 4.33333 4.875C4.33333 4.44402 4.50893 4.0307 4.82149 3.72595C5.13405 3.4212 5.55797 3.25 6 3.25C6.44203 3.25 6.86595 3.4212 7.17851 3.72595C7.49107 4.0307 7.66667 4.44402 7.66667 4.875C7.66667 5.30598 7.49107 5.7193 7.17851 6.02405C6.86595 6.3288 6.44203 6.5 6 6.5ZM6 7.3125C6.66304 7.3125 7.29893 7.05569 7.76777 6.59857C8.23661 6.14145 8.5 5.52147 8.5 4.875C8.5 4.22853 8.23661 3.60855 7.76777 3.15143C7.29893 2.69431 6.66304 2.4375 6 2.4375C5.33696 2.4375 4.70107 2.69431 4.23223 3.15143C3.76339 3.60855 3.5 4.22853 3.5 4.875C3.5 5.52147 3.76339 6.14145 4.23223 6.59857C4.70107 7.05569 5.33696 7.3125 6 7.3125Z" />
                                </g>
                              </svg> New York City
                              </a>
                            </Link>
                          </li>
                        </ul>
                        <Link legacyBehavior href="/event-details">
                          <a className="primary-btn1 btn-hover">
                          View Details
                          <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z">
                            </path>
                          </svg>
                          <span />
                          </a>
                        </Link>
                      </div>
                      <div className="event-author-area">
                        <div className="batch">Guest Speaker</div>
                        <div className="author-img">
                          <img src="assets/img/home6/author3.jpg" alt="" />
                        </div>
                        <div className="content">
                          <h5>Mrs. Khusani Juie</h5>
                          <span>Popular Speaker</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="single-event">
                      <div className="event-content">
                        <span>Upcoming Event</span>
                        <h2>Influencers Meetup-2024</h2>
                        <ul>
                          <li>
                            <Link legacyBehavior href="/event-details">
                              <a>
                              <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <g>
                                  <path d="M6.5 5.6875C6.60774 5.6875 6.71108 5.7303 6.78726 5.80649C6.86345 5.88267 6.90625 5.98601 6.90625 6.09375V7.3125H8.125C8.23274 7.3125 8.33608 7.3553 8.41226 7.43149C8.48845 7.50767 8.53125 7.61101 8.53125 7.71875C8.53125 7.82649 8.48845 7.92983 8.41226 8.00601C8.33608 8.0822 8.23274 8.125 8.125 8.125H6.90625V9.34375C6.90625 9.45149 6.86345 9.55483 6.78726 9.63101C6.71108 9.7072 6.60774 9.75 6.5 9.75C6.39226 9.75 6.28892 9.7072 6.21274 9.63101C6.13655 9.55483 6.09375 9.45149 6.09375 9.34375V8.125H4.875C4.76726 8.125 4.66392 8.0822 4.58774 8.00601C4.51155 7.92983 4.46875 7.82649 4.46875 7.71875C4.46875 7.61101 4.51155 7.50767 4.58774 7.43149C4.66392 7.3553 4.76726 7.3125 4.875 7.3125H6.09375V6.09375C6.09375 5.98601 6.13655 5.88267 6.21274 5.80649C6.28892 5.7303 6.39226 5.6875 6.5 5.6875Z" />
                                  <path d="M2.84375 0C2.95149 0 3.05483 0.0428012 3.13101 0.118988C3.2072 0.195175 3.25 0.298506 3.25 0.40625V0.8125H9.75V0.40625C9.75 0.298506 9.7928 0.195175 9.86899 0.118988C9.94517 0.0428012 10.0485 0 10.1562 0C10.264 0 10.3673 0.0428012 10.4435 0.118988C10.5197 0.195175 10.5625 0.298506 10.5625 0.40625V0.8125H11.375C11.806 0.8125 12.2193 0.983705 12.524 1.28845C12.8288 1.5932 13 2.00652 13 2.4375V11.375C13 11.806 12.8288 12.2193 12.524 12.524C12.2193 12.8288 11.806 13 11.375 13H1.625C1.19402 13 0.780698 12.8288 0.475951 12.524C0.171205 12.2193 0 11.806 0 11.375V2.4375C0 2.00652 0.171205 1.5932 0.475951 1.28845C0.780698 0.983705 1.19402 0.8125 1.625 0.8125H2.4375V0.40625C2.4375 0.298506 2.4803 0.195175 2.55649 0.118988C2.63267 0.0428012 2.73601 0 2.84375 0ZM0.8125 3.25V11.375C0.8125 11.5905 0.898102 11.7972 1.05048 11.9495C1.20285 12.1019 1.40951 12.1875 1.625 12.1875H11.375C11.5905 12.1875 11.7972 12.1019 11.9495 11.9495C12.1019 11.7972 12.1875 11.5905 12.1875 11.375V3.25H0.8125Z" />
                                </g>
                              </svg> 03 December, 2023
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link legacyBehavior href="/event-details">
                              <a>
                              <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <g>
                                  <path d="M9.47167 7.26375C9.035 8.12663 8.44333 8.98625 7.83833 9.75813C7.26441 10.4858 6.65075 11.1829 6 11.8462C5.34924 11.1829 4.73557 10.4858 4.16167 9.75813C3.55667 8.98625 2.965 8.12663 2.52833 7.26375C2.08667 6.39194 1.83333 5.57538 1.83333 4.875C1.83333 3.79756 2.27232 2.76425 3.05372 2.00238C3.83512 1.24051 4.89493 0.8125 6 0.8125C7.10507 0.8125 8.16488 1.24051 8.94628 2.00238C9.72768 2.76425 10.1667 3.79756 10.1667 4.875C10.1667 5.57538 9.9125 6.39194 9.47167 7.26375ZM6 13C6 13 11 8.38013 11 4.875C11 3.58207 10.4732 2.34209 9.53553 1.42785C8.59785 0.513615 7.32608 0 6 0C4.67392 0 3.40215 0.513615 2.46447 1.42785C1.52678 2.34209 1 3.58207 1 4.875C1 8.38013 6 13 6 13Z" />
                                  <path d="M6 6.5C5.55797 6.5 5.13405 6.3288 4.82149 6.02405C4.50893 5.7193 4.33333 5.30598 4.33333 4.875C4.33333 4.44402 4.50893 4.0307 4.82149 3.72595C5.13405 3.4212 5.55797 3.25 6 3.25C6.44203 3.25 6.86595 3.4212 7.17851 3.72595C7.49107 4.0307 7.66667 4.44402 7.66667 4.875C7.66667 5.30598 7.49107 5.7193 7.17851 6.02405C6.86595 6.3288 6.44203 6.5 6 6.5ZM6 7.3125C6.66304 7.3125 7.29893 7.05569 7.76777 6.59857C8.23661 6.14145 8.5 5.52147 8.5 4.875C8.5 4.22853 8.23661 3.60855 7.76777 3.15143C7.29893 2.69431 6.66304 2.4375 6 2.4375C5.33696 2.4375 4.70107 2.69431 4.23223 3.15143C3.76339 3.60855 3.5 4.22853 3.5 4.875C3.5 5.52147 3.76339 6.14145 4.23223 6.59857C4.70107 7.05569 5.33696 7.3125 6 7.3125Z" />
                                </g>
                              </svg> New York City
                              </a>
                            </Link>
                          </li>
                        </ul>
                        <Link legacyBehavior href="/event-details">
                          <a className="primary-btn1 btn-hover">
                          View Details
                          <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z">
                            </path>
                          </svg>
                          <span />
                          </a>
                        </Link>
                      </div>
                      <div className="event-author-area">
                        <div className="batch">Guest Speaker</div>
                        <div className="author-img">
                          <img src="assets/img/home6/author.png" alt="" />
                        </div>
                        <div className="content">
                          <h5>Mrs. Lily Grace</h5>
                          <span>Popular Speaker</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default EventSection
