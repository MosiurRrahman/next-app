import Footer3 from "@/components/Footer/Footer3";
import Header from "@/components/header/Header";
import Link from "next/link";
import React from "react";

const OurTeam4 = () => {
  return (
    <>
      <Header style="innerpage2" />
      <div
        className="breadcrumb-section style-2"
        style={{
          backgroundImage:
            "linear-gradient(rgba(248, 248, 248, 0.5), rgba(248, 248, 248, 0.5)), url(assets/img/innerpage/breadcrumb-bg6.jpg)",
        }}
      >
        <svg
          className="vector"
          xmlns="http://www.w3.org/2000/svg"
          width={300}
          height={374}
          viewBox="0 0 300 374"
          fill="none"
        >
          <path
            d="M49.999 359.57C49.999 530.694 188.228 669.14 358.399 669.14C528.57 669.14 666.799 530.694 666.799 359.57C666.799 188.445 528.57 50 358.399 50C188.228 50 49.999 188.445 49.999 359.57Z"
            strokeWidth={100}
          />
        </svg>
        <div className="container-lg container-fluid">
          <div className="banner-wrapper">
            <div className="banner-content">
              <div className="row align-items-center gy-5">
                <div className="col-lg-7">
                  <div className="section-title">
                    <h1>
                      We Have <span>Dynamic Teams.</span>
                    </h1>
                  </div>
                  <div className="dash-and-paragraph">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 338 44"
                    >
                      <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM337.001 3L337.163 3.47297C337.394 3.3937 337.534 3.15889 337.494 2.9178C337.454 2.67671 337.245 2.5 337.001 2.5V3ZM324.001 44L324.222 38.2307L319.115 40.924L324.001 44ZM3 3.5H337.001V2.5H3V3.5ZM336.839 2.52703C328.657 5.33201 323.03 10.8388 320.343 17.6231C317.657 24.4031 317.923 32.4183 321.444 40.223L322.356 39.8117C318.933 32.2249 318.697 24.4919 321.272 17.9914C323.846 11.4951 329.241 6.18899 337.163 3.47297L336.839 2.52703Z" />
                    </svg>
                    <p>
                      Offer a wide range of services to help businesses
                      establish.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 d-flex justify-content-xxl-center">
                  <Link className="circle-btn btn-hover" href="/career-list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>{" "}
                    Join Our <br /> Team
                    <span style={{ top: "50.5px", left: "83.75px" }} />
                  </Link>
                </div>
              </div>
            </div>
            <ul className="breadcrumb-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Team Style-04</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="team-card-section pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row gy-5">
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1 two">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img1.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>Jorche Milton</h6>
                  <span>Axleo, CEO</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1 two">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img2.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>Robert Jhonson</h6>
                  <span>Co-founder</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1 two">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img3.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>Mrs. Emily Sophia</h6>
                  <span>Excutive Manager</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1 two">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img4.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>Benjamin Lucas</h6>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1 two">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img5.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>Mr. Daniel Scoot</h6>
                  <span>Sr. Digital Marketer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1 two">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img6.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>Grace Lily</h6>
                  <span>Excutive Manager</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1 two">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img7.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>Ava Sophia</h6>
                  <span>UI/UX Designer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1 two">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img8.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>William Samuel</h6>
                  <span>Digital Marketer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home3-gallery-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sub-title mb-25">
                <h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={13}
                    viewBox="0 0 21 13"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.75024 10.9373C8.83968 11.6054 7.71592 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C7.71592 1 8.83968 1.39457 9.75024 2.06265C8.66454 3.2243 8 4.78454 8 6.5C8 8.21546 8.66454 9.7757 9.75024 10.9373ZM10.5 11.6238C9.39703 12.4861 8.00853 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C8.00853 0 9.39703 0.513889 10.5 1.37616C11.603 0.513889 12.9915 0 14.5 0C18.0899 0 21 2.91015 21 6.5C21 10.0899 18.0899 13 14.5 13C12.9915 13 11.603 12.4861 10.5 11.6238ZM11.2498 2.06265C12.1603 1.39457 13.2841 1 14.5 1C17.5376 1 20 3.46243 20 6.5C20 9.53757 17.5376 12 14.5 12C13.2841 12 12.1603 11.6054 11.2498 10.9373C12.3355 9.7757 13 8.21546 13 6.5C13 4.78454 12.3355 3.2243 11.2498 2.06265ZM10.5 2.72506C11.4299 3.71007 12 5.03846 12 6.5C12 7.96154 11.4299 9.28993 10.5 10.2749C9.57008 9.28993 9 7.96154 9 6.5C9 5.03846 9.57008 3.71007 10.5 2.72506Z"
                    />
                  </svg>
                  OFFICE GALLERY{" "}
                  <svg
                    className="arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={6}
                    viewBox="0 0 50 6"
                  >
                    <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                  </svg>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper gallery-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="single-gallery-img">
                <a
                  href="assets/img/home3/gallery-img-01.png"
                  data-fancybox="gallery"
                  className="view-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                  >
                    <path d="M7.07182 0.444444L7.8453 1.27778L6.62983 2.5C6.40884 2.72222 6.40884 3.05556 6.62983 3.27778C6.85083 3.5 7.18232 3.5 7.40331 3.27778L8.61878 2.05556L9.44751 2.83333C9.66851 3.05556 9.94475 2.88889 9.94475 2.66667V0.277778C9.94475 0.111111 9.83425 0 9.66851 0H7.29282C7.07182 0 6.90608 0.277778 7.07182 0.444444ZM0.441989 2.83333L1.21547 2.05556L2.43094 3.27778C2.65193 3.5 2.98343 3.5 3.20442 3.27778C3.42541 3.05556 3.42541 2.72222 3.20442 2.5L2.0442 1.27778L2.81768 0.444444C3.03867 0.277778 2.87293 0 2.65193 0H0.276243C0.110497 0 0 0.111111 0 0.277778V2.66667C0 2.88889 0.276243 3.05556 0.441989 2.83333ZM2.81768 9.5L1.98895 8.72222L3.20442 7.5C3.42541 7.27778 3.42541 6.94445 3.20442 6.72222C2.98343 6.5 2.65193 6.5 2.43094 6.72222L1.21547 7.94444L0.38674 7.16667C0.276243 6.94444 0 7.11111 0 7.33333V9.72222C0 9.88889 0.110497 10 0.276243 10H2.65193C2.87293 10 3.03867 9.72222 2.81768 9.5ZM9.50276 7.11111L8.67403 7.88889L7.45856 6.66667C7.23757 6.44444 6.90608 6.44444 6.68508 6.66667C6.46409 6.88889 6.46409 7.22222 6.68508 7.44444L7.90055 8.66667L7.12707 9.5C6.96133 9.66667 7.07182 10 7.34807 10H9.72376C9.8895 10 10 9.88889 10 9.72222V7.33333C9.94475 7.11111 9.66851 6.94444 9.50276 7.11111Z" />
                  </svg>{" "}
                  View image
                </a>
                <img src="assets/img/home3/gallery-img-01.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-gallery-img">
                <a
                  href="assets/img/home3/gallery-img-02.png"
                  data-fancybox="gallery"
                  className="view-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                  >
                    <path d="M7.07182 0.444444L7.8453 1.27778L6.62983 2.5C6.40884 2.72222 6.40884 3.05556 6.62983 3.27778C6.85083 3.5 7.18232 3.5 7.40331 3.27778L8.61878 2.05556L9.44751 2.83333C9.66851 3.05556 9.94475 2.88889 9.94475 2.66667V0.277778C9.94475 0.111111 9.83425 0 9.66851 0H7.29282C7.07182 0 6.90608 0.277778 7.07182 0.444444ZM0.441989 2.83333L1.21547 2.05556L2.43094 3.27778C2.65193 3.5 2.98343 3.5 3.20442 3.27778C3.42541 3.05556 3.42541 2.72222 3.20442 2.5L2.0442 1.27778L2.81768 0.444444C3.03867 0.277778 2.87293 0 2.65193 0H0.276243C0.110497 0 0 0.111111 0 0.277778V2.66667C0 2.88889 0.276243 3.05556 0.441989 2.83333ZM2.81768 9.5L1.98895 8.72222L3.20442 7.5C3.42541 7.27778 3.42541 6.94445 3.20442 6.72222C2.98343 6.5 2.65193 6.5 2.43094 6.72222L1.21547 7.94444L0.38674 7.16667C0.276243 6.94444 0 7.11111 0 7.33333V9.72222C0 9.88889 0.110497 10 0.276243 10H2.65193C2.87293 10 3.03867 9.72222 2.81768 9.5ZM9.50276 7.11111L8.67403 7.88889L7.45856 6.66667C7.23757 6.44444 6.90608 6.44444 6.68508 6.66667C6.46409 6.88889 6.46409 7.22222 6.68508 7.44444L7.90055 8.66667L7.12707 9.5C6.96133 9.66667 7.07182 10 7.34807 10H9.72376C9.8895 10 10 9.88889 10 9.72222V7.33333C9.94475 7.11111 9.66851 6.94444 9.50276 7.11111Z" />
                  </svg>{" "}
                  View image
                </a>
                <img src="assets/img/home3/gallery-img-02.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-gallery-img">
                <a
                  href="assets/img/home3/gallery-img-03.png"
                  data-fancybox="gallery"
                  className="view-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                  >
                    <path d="M7.07182 0.444444L7.8453 1.27778L6.62983 2.5C6.40884 2.72222 6.40884 3.05556 6.62983 3.27778C6.85083 3.5 7.18232 3.5 7.40331 3.27778L8.61878 2.05556L9.44751 2.83333C9.66851 3.05556 9.94475 2.88889 9.94475 2.66667V0.277778C9.94475 0.111111 9.83425 0 9.66851 0H7.29282C7.07182 0 6.90608 0.277778 7.07182 0.444444ZM0.441989 2.83333L1.21547 2.05556L2.43094 3.27778C2.65193 3.5 2.98343 3.5 3.20442 3.27778C3.42541 3.05556 3.42541 2.72222 3.20442 2.5L2.0442 1.27778L2.81768 0.444444C3.03867 0.277778 2.87293 0 2.65193 0H0.276243C0.110497 0 0 0.111111 0 0.277778V2.66667C0 2.88889 0.276243 3.05556 0.441989 2.83333ZM2.81768 9.5L1.98895 8.72222L3.20442 7.5C3.42541 7.27778 3.42541 6.94445 3.20442 6.72222C2.98343 6.5 2.65193 6.5 2.43094 6.72222L1.21547 7.94444L0.38674 7.16667C0.276243 6.94444 0 7.11111 0 7.33333V9.72222C0 9.88889 0.110497 10 0.276243 10H2.65193C2.87293 10 3.03867 9.72222 2.81768 9.5ZM9.50276 7.11111L8.67403 7.88889L7.45856 6.66667C7.23757 6.44444 6.90608 6.44444 6.68508 6.66667C6.46409 6.88889 6.46409 7.22222 6.68508 7.44444L7.90055 8.66667L7.12707 9.5C6.96133 9.66667 7.07182 10 7.34807 10H9.72376C9.8895 10 10 9.88889 10 9.72222V7.33333C9.94475 7.11111 9.66851 6.94444 9.50276 7.11111Z" />
                  </svg>{" "}
                  View image
                </a>
                <img src="assets/img/home3/gallery-img-03.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-gallery-img">
                <a
                  href="assets/img/home3/gallery-img-04.png"
                  data-fancybox="gallery"
                  className="view-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                  >
                    <path d="M7.07182 0.444444L7.8453 1.27778L6.62983 2.5C6.40884 2.72222 6.40884 3.05556 6.62983 3.27778C6.85083 3.5 7.18232 3.5 7.40331 3.27778L8.61878 2.05556L9.44751 2.83333C9.66851 3.05556 9.94475 2.88889 9.94475 2.66667V0.277778C9.94475 0.111111 9.83425 0 9.66851 0H7.29282C7.07182 0 6.90608 0.277778 7.07182 0.444444ZM0.441989 2.83333L1.21547 2.05556L2.43094 3.27778C2.65193 3.5 2.98343 3.5 3.20442 3.27778C3.42541 3.05556 3.42541 2.72222 3.20442 2.5L2.0442 1.27778L2.81768 0.444444C3.03867 0.277778 2.87293 0 2.65193 0H0.276243C0.110497 0 0 0.111111 0 0.277778V2.66667C0 2.88889 0.276243 3.05556 0.441989 2.83333ZM2.81768 9.5L1.98895 8.72222L3.20442 7.5C3.42541 7.27778 3.42541 6.94445 3.20442 6.72222C2.98343 6.5 2.65193 6.5 2.43094 6.72222L1.21547 7.94444L0.38674 7.16667C0.276243 6.94444 0 7.11111 0 7.33333V9.72222C0 9.88889 0.110497 10 0.276243 10H2.65193C2.87293 10 3.03867 9.72222 2.81768 9.5ZM9.50276 7.11111L8.67403 7.88889L7.45856 6.66667C7.23757 6.44444 6.90608 6.44444 6.68508 6.66667C6.46409 6.88889 6.46409 7.22222 6.68508 7.44444L7.90055 8.66667L7.12707 9.5C6.96133 9.66667 7.07182 10 7.34807 10H9.72376C9.8895 10 10 9.88889 10 9.72222V7.33333C9.94475 7.11111 9.66851 6.94444 9.50276 7.11111Z" />
                  </svg>{" "}
                  View image
                </a>
                <img src="assets/img/home3/gallery-img-04.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-gallery-img">
                <a
                  href="assets/img/home3/gallery-img-05.png"
                  data-fancybox="gallery"
                  className="view-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                  >
                    <path d="M7.07182 0.444444L7.8453 1.27778L6.62983 2.5C6.40884 2.72222 6.40884 3.05556 6.62983 3.27778C6.85083 3.5 7.18232 3.5 7.40331 3.27778L8.61878 2.05556L9.44751 2.83333C9.66851 3.05556 9.94475 2.88889 9.94475 2.66667V0.277778C9.94475 0.111111 9.83425 0 9.66851 0H7.29282C7.07182 0 6.90608 0.277778 7.07182 0.444444ZM0.441989 2.83333L1.21547 2.05556L2.43094 3.27778C2.65193 3.5 2.98343 3.5 3.20442 3.27778C3.42541 3.05556 3.42541 2.72222 3.20442 2.5L2.0442 1.27778L2.81768 0.444444C3.03867 0.277778 2.87293 0 2.65193 0H0.276243C0.110497 0 0 0.111111 0 0.277778V2.66667C0 2.88889 0.276243 3.05556 0.441989 2.83333ZM2.81768 9.5L1.98895 8.72222L3.20442 7.5C3.42541 7.27778 3.42541 6.94445 3.20442 6.72222C2.98343 6.5 2.65193 6.5 2.43094 6.72222L1.21547 7.94444L0.38674 7.16667C0.276243 6.94444 0 7.11111 0 7.33333V9.72222C0 9.88889 0.110497 10 0.276243 10H2.65193C2.87293 10 3.03867 9.72222 2.81768 9.5ZM9.50276 7.11111L8.67403 7.88889L7.45856 6.66667C7.23757 6.44444 6.90608 6.44444 6.68508 6.66667C6.46409 6.88889 6.46409 7.22222 6.68508 7.44444L7.90055 8.66667L7.12707 9.5C6.96133 9.66667 7.07182 10 7.34807 10H9.72376C9.8895 10 10 9.88889 10 9.72222V7.33333C9.94475 7.11111 9.66851 6.94444 9.50276 7.11111Z" />
                  </svg>{" "}
                  View image
                </a>
                <img src="assets/img/home3/gallery-img-05.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer3 />
    </>
  );
};

export default OurTeam4;
