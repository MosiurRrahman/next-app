import Footer3 from "@/components/Footer/Footer3";
import Breadcrumb from "@/components/common/Breadcrumb";
import Home3GallerySection from "@/components/gallery-section/home3-gallery-section";
import Header from "@/components/header/Header";
import InnerPageHeader from "@/components/header/InnerPageHeader";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const page = () => {
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
                      Apply Senior <span>Digital Marketer.</span>
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
                  <a
                    className="circle-btn btn-hover"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>{" "}
                    Apply <br /> Position
                    <span />
                  </a>
                </div>
              </div>
            </div>
            <ul className="breadcrumb-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Digital Marketer</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="career-details-page pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row gy-5">
            <div className="col-lg-8">
              <div className="career-details-content">
                <p>
                  <span>Job Overview: </span>As a Digital Marketer at{" "}
                  <strong>Axleo</strong> , you will play a pivotal role in
                  creating and executing comprehensive digital marketing
                  strategies for our diverse range of clients. You will be part
                  of a collaborative team where creativity, data-driven
                  insights, and strategic thinking converge to drive impactful
                  results.
                </p>
                <span className="line-break" />
                <span className="line-break" />
                <span className="line-break" />
                <p>
                  <span>Key Responsibilities: </span> Our dynamic and innovative
                  digital marketing agency dedicated to delivering cutting-edge
                  solutions for our clients. We pride ourselves on pushing the
                  boundaries of digital marketing to achieve outstanding
                  results.
                </p>
                <span className="line-break" />
                <ul>
                  <li>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M19.1517 6.56245C18.5861 5.997 17.9164 5.71426 17.1427 5.71426H12.9686C13.1324 5.26788 13.2142 4.79168 13.2142 4.28569C13.2142 3.37805 12.9109 2.675 12.3045 2.17636C11.698 1.67791 10.9299 1.42871 9.99986 1.42871C9.71716 1.42871 9.4585 1.4938 9.22411 1.62409C8.98972 1.75418 8.78508 1.93845 8.61027 2.17636C8.43549 2.41446 8.2848 2.64885 8.15838 2.87956C8.03176 3.11024 7.89409 3.37805 7.74535 3.68307C7.59657 3.98829 7.47386 4.21885 7.37715 4.37517C7.11677 4.78445 6.74467 5.26417 6.26115 5.81484C6.24622 5.83716 6.19411 5.90045 6.10483 6.00459C6.01555 6.1088 5.94483 6.18878 5.8928 6.24456C5.81719 6.32516 5.74093 6.40516 5.66404 6.48454C5.56342 6.58876 5.47414 6.67237 5.39612 6.73566C5.31277 6.80309 5.22906 6.87006 5.145 6.93659C5.05571 7.0073 4.96827 7.05933 4.8827 7.09291C4.79721 7.12633 4.71723 7.14306 4.64284 7.14306H1.42865C1.03422 7.14306 0.697495 7.28281 0.418505 7.56172C0.139593 7.84052 0 8.17725 0 8.57159V15.7144C0 16.1088 0.139436 16.4455 0.418505 16.7245C0.697651 17.0035 1.03418 17.1431 1.42865 17.1431H4.64284C5.08175 17.1431 5.91129 17.3628 7.13158 17.8017C8.53775 18.3151 9.73565 18.5716 10.7253 18.5716C11.7743 18.5716 12.6188 18.2721 13.2587 17.6732C13.8985 17.0744 14.2149 16.2578 14.2073 15.2233C14.654 14.6504 14.8771 13.9882 14.8771 13.2368C14.8771 13.0732 14.8659 12.9132 14.8437 12.757C15.0893 12.3329 15.2269 11.8901 15.2568 11.4288H17.143C17.9242 11.4288 18.5958 11.1462 19.1576 10.5807C19.7192 10.0153 20 9.34203 20 8.56088C19.9998 7.79435 19.717 7.12837 19.1517 6.56245ZM2.64507 15.5025C2.50364 15.6439 2.33629 15.7146 2.14287 15.7146C1.9493 15.7146 1.78187 15.6439 1.64056 15.5025C1.49913 15.3611 1.42853 15.1938 1.42853 15.0003C1.42853 14.8069 1.49917 14.6394 1.64056 14.4981C1.78203 14.3567 1.9493 14.2859 2.14287 14.2859C2.33629 14.2859 2.50364 14.3567 2.64507 14.4981C2.78642 14.6394 2.8571 14.8068 2.8571 15.0003C2.8571 15.1938 2.78638 15.3611 2.64507 15.5025ZM18.1471 9.57669C17.8645 9.85943 17.5293 10.0007 17.1424 10.0007H13.4484C13.5599 10.1272 13.6529 10.304 13.7273 10.5309C13.8018 10.7578 13.839 10.9643 13.839 11.1503C13.839 11.6637 13.6418 12.1062 13.2474 12.4782C13.3815 12.7163 13.4484 12.9731 13.4484 13.2483C13.4484 13.5236 13.3832 13.797 13.2531 14.0686C13.1228 14.34 12.946 14.5353 12.7228 14.6544C12.76 14.8772 12.7787 15.0858 12.7787 15.2794C12.7787 16.5215 12.0756 17.1428 10.6694 17.1428C10.0666 17.1428 9.39884 17.0238 8.66601 16.7859C7.94485 16.5517 7.22497 16.3136 6.50641 16.0716C5.79953 15.8336 5.17834 15.7146 4.64256 15.7146H4.28547V8.57191H4.64256C5.1708 8.57191 5.69156 8.3598 6.20498 7.93555C6.4283 7.7494 6.80404 7.35501 7.33224 6.75243C7.86801 6.14985 8.28472 5.61055 8.58224 5.13423C8.67895 4.97791 8.81663 4.73609 8.99527 4.40875C9.48633 3.37449 9.82114 2.85747 9.99978 2.85747C10.5281 2.85747 10.9577 2.97092 11.2888 3.19776C11.6199 3.42476 11.7854 3.78736 11.7854 4.28585C11.7854 4.60584 11.7296 4.92021 11.6181 5.22895C11.5064 5.53769 11.3837 5.79076 11.2498 5.98786C11.1159 6.18495 10.9931 6.38963 10.8815 6.6017C10.7699 6.81372 10.7142 6.99421 10.7142 7.14295H17.1427C17.5146 7.14295 17.8458 7.28621 18.1361 7.57263C18.4261 7.85924 18.5711 8.19194 18.5711 8.57151C18.5711 8.95875 18.4298 9.29352 18.1471 9.57669Z" />
                      </g>
                    </svg>
                    Develop and implement end-to-end digital marketing
                    campaigns, encompassing SEO, SEM, social media, email, and
                    more.
                  </li>
                  <li>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M19.1517 6.56245C18.5861 5.997 17.9164 5.71426 17.1427 5.71426H12.9686C13.1324 5.26788 13.2142 4.79168 13.2142 4.28569C13.2142 3.37805 12.9109 2.675 12.3045 2.17636C11.698 1.67791 10.9299 1.42871 9.99986 1.42871C9.71716 1.42871 9.4585 1.4938 9.22411 1.62409C8.98972 1.75418 8.78508 1.93845 8.61027 2.17636C8.43549 2.41446 8.2848 2.64885 8.15838 2.87956C8.03176 3.11024 7.89409 3.37805 7.74535 3.68307C7.59657 3.98829 7.47386 4.21885 7.37715 4.37517C7.11677 4.78445 6.74467 5.26417 6.26115 5.81484C6.24622 5.83716 6.19411 5.90045 6.10483 6.00459C6.01555 6.1088 5.94483 6.18878 5.8928 6.24456C5.81719 6.32516 5.74093 6.40516 5.66404 6.48454C5.56342 6.58876 5.47414 6.67237 5.39612 6.73566C5.31277 6.80309 5.22906 6.87006 5.145 6.93659C5.05571 7.0073 4.96827 7.05933 4.8827 7.09291C4.79721 7.12633 4.71723 7.14306 4.64284 7.14306H1.42865C1.03422 7.14306 0.697495 7.28281 0.418505 7.56172C0.139593 7.84052 0 8.17725 0 8.57159V15.7144C0 16.1088 0.139436 16.4455 0.418505 16.7245C0.697651 17.0035 1.03418 17.1431 1.42865 17.1431H4.64284C5.08175 17.1431 5.91129 17.3628 7.13158 17.8017C8.53775 18.3151 9.73565 18.5716 10.7253 18.5716C11.7743 18.5716 12.6188 18.2721 13.2587 17.6732C13.8985 17.0744 14.2149 16.2578 14.2073 15.2233C14.654 14.6504 14.8771 13.9882 14.8771 13.2368C14.8771 13.0732 14.8659 12.9132 14.8437 12.757C15.0893 12.3329 15.2269 11.8901 15.2568 11.4288H17.143C17.9242 11.4288 18.5958 11.1462 19.1576 10.5807C19.7192 10.0153 20 9.34203 20 8.56088C19.9998 7.79435 19.717 7.12837 19.1517 6.56245ZM2.64507 15.5025C2.50364 15.6439 2.33629 15.7146 2.14287 15.7146C1.9493 15.7146 1.78187 15.6439 1.64056 15.5025C1.49913 15.3611 1.42853 15.1938 1.42853 15.0003C1.42853 14.8069 1.49917 14.6394 1.64056 14.4981C1.78203 14.3567 1.9493 14.2859 2.14287 14.2859C2.33629 14.2859 2.50364 14.3567 2.64507 14.4981C2.78642 14.6394 2.8571 14.8068 2.8571 15.0003C2.8571 15.1938 2.78638 15.3611 2.64507 15.5025ZM18.1471 9.57669C17.8645 9.85943 17.5293 10.0007 17.1424 10.0007H13.4484C13.5599 10.1272 13.6529 10.304 13.7273 10.5309C13.8018 10.7578 13.839 10.9643 13.839 11.1503C13.839 11.6637 13.6418 12.1062 13.2474 12.4782C13.3815 12.7163 13.4484 12.9731 13.4484 13.2483C13.4484 13.5236 13.3832 13.797 13.2531 14.0686C13.1228 14.34 12.946 14.5353 12.7228 14.6544C12.76 14.8772 12.7787 15.0858 12.7787 15.2794C12.7787 16.5215 12.0756 17.1428 10.6694 17.1428C10.0666 17.1428 9.39884 17.0238 8.66601 16.7859C7.94485 16.5517 7.22497 16.3136 6.50641 16.0716C5.79953 15.8336 5.17834 15.7146 4.64256 15.7146H4.28547V8.57191H4.64256C5.1708 8.57191 5.69156 8.3598 6.20498 7.93555C6.4283 7.7494 6.80404 7.35501 7.33224 6.75243C7.86801 6.14985 8.28472 5.61055 8.58224 5.13423C8.67895 4.97791 8.81663 4.73609 8.99527 4.40875C9.48633 3.37449 9.82114 2.85747 9.99978 2.85747C10.5281 2.85747 10.9577 2.97092 11.2888 3.19776C11.6199 3.42476 11.7854 3.78736 11.7854 4.28585C11.7854 4.60584 11.7296 4.92021 11.6181 5.22895C11.5064 5.53769 11.3837 5.79076 11.2498 5.98786C11.1159 6.18495 10.9931 6.38963 10.8815 6.6017C10.7699 6.81372 10.7142 6.99421 10.7142 7.14295H17.1427C17.5146 7.14295 17.8458 7.28621 18.1361 7.57263C18.4261 7.85924 18.5711 8.19194 18.5711 8.57151C18.5711 8.95875 18.4298 9.29352 18.1471 9.57669Z" />
                      </g>
                    </svg>
                    Analyze client objectives and industry trends to formulate
                    effective and measurable digital strategies.
                  </li>
                  <li>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M19.1517 6.56245C18.5861 5.997 17.9164 5.71426 17.1427 5.71426H12.9686C13.1324 5.26788 13.2142 4.79168 13.2142 4.28569C13.2142 3.37805 12.9109 2.675 12.3045 2.17636C11.698 1.67791 10.9299 1.42871 9.99986 1.42871C9.71716 1.42871 9.4585 1.4938 9.22411 1.62409C8.98972 1.75418 8.78508 1.93845 8.61027 2.17636C8.43549 2.41446 8.2848 2.64885 8.15838 2.87956C8.03176 3.11024 7.89409 3.37805 7.74535 3.68307C7.59657 3.98829 7.47386 4.21885 7.37715 4.37517C7.11677 4.78445 6.74467 5.26417 6.26115 5.81484C6.24622 5.83716 6.19411 5.90045 6.10483 6.00459C6.01555 6.1088 5.94483 6.18878 5.8928 6.24456C5.81719 6.32516 5.74093 6.40516 5.66404 6.48454C5.56342 6.58876 5.47414 6.67237 5.39612 6.73566C5.31277 6.80309 5.22906 6.87006 5.145 6.93659C5.05571 7.0073 4.96827 7.05933 4.8827 7.09291C4.79721 7.12633 4.71723 7.14306 4.64284 7.14306H1.42865C1.03422 7.14306 0.697495 7.28281 0.418505 7.56172C0.139593 7.84052 0 8.17725 0 8.57159V15.7144C0 16.1088 0.139436 16.4455 0.418505 16.7245C0.697651 17.0035 1.03418 17.1431 1.42865 17.1431H4.64284C5.08175 17.1431 5.91129 17.3628 7.13158 17.8017C8.53775 18.3151 9.73565 18.5716 10.7253 18.5716C11.7743 18.5716 12.6188 18.2721 13.2587 17.6732C13.8985 17.0744 14.2149 16.2578 14.2073 15.2233C14.654 14.6504 14.8771 13.9882 14.8771 13.2368C14.8771 13.0732 14.8659 12.9132 14.8437 12.757C15.0893 12.3329 15.2269 11.8901 15.2568 11.4288H17.143C17.9242 11.4288 18.5958 11.1462 19.1576 10.5807C19.7192 10.0153 20 9.34203 20 8.56088C19.9998 7.79435 19.717 7.12837 19.1517 6.56245ZM2.64507 15.5025C2.50364 15.6439 2.33629 15.7146 2.14287 15.7146C1.9493 15.7146 1.78187 15.6439 1.64056 15.5025C1.49913 15.3611 1.42853 15.1938 1.42853 15.0003C1.42853 14.8069 1.49917 14.6394 1.64056 14.4981C1.78203 14.3567 1.9493 14.2859 2.14287 14.2859C2.33629 14.2859 2.50364 14.3567 2.64507 14.4981C2.78642 14.6394 2.8571 14.8068 2.8571 15.0003C2.8571 15.1938 2.78638 15.3611 2.64507 15.5025ZM18.1471 9.57669C17.8645 9.85943 17.5293 10.0007 17.1424 10.0007H13.4484C13.5599 10.1272 13.6529 10.304 13.7273 10.5309C13.8018 10.7578 13.839 10.9643 13.839 11.1503C13.839 11.6637 13.6418 12.1062 13.2474 12.4782C13.3815 12.7163 13.4484 12.9731 13.4484 13.2483C13.4484 13.5236 13.3832 13.797 13.2531 14.0686C13.1228 14.34 12.946 14.5353 12.7228 14.6544C12.76 14.8772 12.7787 15.0858 12.7787 15.2794C12.7787 16.5215 12.0756 17.1428 10.6694 17.1428C10.0666 17.1428 9.39884 17.0238 8.66601 16.7859C7.94485 16.5517 7.22497 16.3136 6.50641 16.0716C5.79953 15.8336 5.17834 15.7146 4.64256 15.7146H4.28547V8.57191H4.64256C5.1708 8.57191 5.69156 8.3598 6.20498 7.93555C6.4283 7.7494 6.80404 7.35501 7.33224 6.75243C7.86801 6.14985 8.28472 5.61055 8.58224 5.13423C8.67895 4.97791 8.81663 4.73609 8.99527 4.40875C9.48633 3.37449 9.82114 2.85747 9.99978 2.85747C10.5281 2.85747 10.9577 2.97092 11.2888 3.19776C11.6199 3.42476 11.7854 3.78736 11.7854 4.28585C11.7854 4.60584 11.7296 4.92021 11.6181 5.22895C11.5064 5.53769 11.3837 5.79076 11.2498 5.98786C11.1159 6.18495 10.9931 6.38963 10.8815 6.6017C10.7699 6.81372 10.7142 6.99421 10.7142 7.14295H17.1427C17.5146 7.14295 17.8458 7.28621 18.1361 7.57263C18.4261 7.85924 18.5711 8.19194 18.5711 8.57151C18.5711 8.95875 18.4298 9.29352 18.1471 9.57669Z" />
                      </g>
                    </svg>
                    Create compelling and engaging content across various
                    digital platforms to enhance brand visibility and
                    engagement.
                  </li>
                  <li>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M19.1517 6.56245C18.5861 5.997 17.9164 5.71426 17.1427 5.71426H12.9686C13.1324 5.26788 13.2142 4.79168 13.2142 4.28569C13.2142 3.37805 12.9109 2.675 12.3045 2.17636C11.698 1.67791 10.9299 1.42871 9.99986 1.42871C9.71716 1.42871 9.4585 1.4938 9.22411 1.62409C8.98972 1.75418 8.78508 1.93845 8.61027 2.17636C8.43549 2.41446 8.2848 2.64885 8.15838 2.87956C8.03176 3.11024 7.89409 3.37805 7.74535 3.68307C7.59657 3.98829 7.47386 4.21885 7.37715 4.37517C7.11677 4.78445 6.74467 5.26417 6.26115 5.81484C6.24622 5.83716 6.19411 5.90045 6.10483 6.00459C6.01555 6.1088 5.94483 6.18878 5.8928 6.24456C5.81719 6.32516 5.74093 6.40516 5.66404 6.48454C5.56342 6.58876 5.47414 6.67237 5.39612 6.73566C5.31277 6.80309 5.22906 6.87006 5.145 6.93659C5.05571 7.0073 4.96827 7.05933 4.8827 7.09291C4.79721 7.12633 4.71723 7.14306 4.64284 7.14306H1.42865C1.03422 7.14306 0.697495 7.28281 0.418505 7.56172C0.139593 7.84052 0 8.17725 0 8.57159V15.7144C0 16.1088 0.139436 16.4455 0.418505 16.7245C0.697651 17.0035 1.03418 17.1431 1.42865 17.1431H4.64284C5.08175 17.1431 5.91129 17.3628 7.13158 17.8017C8.53775 18.3151 9.73565 18.5716 10.7253 18.5716C11.7743 18.5716 12.6188 18.2721 13.2587 17.6732C13.8985 17.0744 14.2149 16.2578 14.2073 15.2233C14.654 14.6504 14.8771 13.9882 14.8771 13.2368C14.8771 13.0732 14.8659 12.9132 14.8437 12.757C15.0893 12.3329 15.2269 11.8901 15.2568 11.4288H17.143C17.9242 11.4288 18.5958 11.1462 19.1576 10.5807C19.7192 10.0153 20 9.34203 20 8.56088C19.9998 7.79435 19.717 7.12837 19.1517 6.56245ZM2.64507 15.5025C2.50364 15.6439 2.33629 15.7146 2.14287 15.7146C1.9493 15.7146 1.78187 15.6439 1.64056 15.5025C1.49913 15.3611 1.42853 15.1938 1.42853 15.0003C1.42853 14.8069 1.49917 14.6394 1.64056 14.4981C1.78203 14.3567 1.9493 14.2859 2.14287 14.2859C2.33629 14.2859 2.50364 14.3567 2.64507 14.4981C2.78642 14.6394 2.8571 14.8068 2.8571 15.0003C2.8571 15.1938 2.78638 15.3611 2.64507 15.5025ZM18.1471 9.57669C17.8645 9.85943 17.5293 10.0007 17.1424 10.0007H13.4484C13.5599 10.1272 13.6529 10.304 13.7273 10.5309C13.8018 10.7578 13.839 10.9643 13.839 11.1503C13.839 11.6637 13.6418 12.1062 13.2474 12.4782C13.3815 12.7163 13.4484 12.9731 13.4484 13.2483C13.4484 13.5236 13.3832 13.797 13.2531 14.0686C13.1228 14.34 12.946 14.5353 12.7228 14.6544C12.76 14.8772 12.7787 15.0858 12.7787 15.2794C12.7787 16.5215 12.0756 17.1428 10.6694 17.1428C10.0666 17.1428 9.39884 17.0238 8.66601 16.7859C7.94485 16.5517 7.22497 16.3136 6.50641 16.0716C5.79953 15.8336 5.17834 15.7146 4.64256 15.7146H4.28547V8.57191H4.64256C5.1708 8.57191 5.69156 8.3598 6.20498 7.93555C6.4283 7.7494 6.80404 7.35501 7.33224 6.75243C7.86801 6.14985 8.28472 5.61055 8.58224 5.13423C8.67895 4.97791 8.81663 4.73609 8.99527 4.40875C9.48633 3.37449 9.82114 2.85747 9.99978 2.85747C10.5281 2.85747 10.9577 2.97092 11.2888 3.19776C11.6199 3.42476 11.7854 3.78736 11.7854 4.28585C11.7854 4.60584 11.7296 4.92021 11.6181 5.22895C11.5064 5.53769 11.3837 5.79076 11.2498 5.98786C11.1159 6.18495 10.9931 6.38963 10.8815 6.6017C10.7699 6.81372 10.7142 6.99421 10.7142 7.14295H17.1427C17.5146 7.14295 17.8458 7.28621 18.1361 7.57263C18.4261 7.85924 18.5711 8.19194 18.5711 8.57151C18.5711 8.95875 18.4298 9.29352 18.1471 9.57669Z" />
                      </g>
                    </svg>
                    Collaborate with cross-functional teams, including designers
                    and developers, to ensure seamless execution of campaigns.
                  </li>
                  <li>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M19.1517 6.56245C18.5861 5.997 17.9164 5.71426 17.1427 5.71426H12.9686C13.1324 5.26788 13.2142 4.79168 13.2142 4.28569C13.2142 3.37805 12.9109 2.675 12.3045 2.17636C11.698 1.67791 10.9299 1.42871 9.99986 1.42871C9.71716 1.42871 9.4585 1.4938 9.22411 1.62409C8.98972 1.75418 8.78508 1.93845 8.61027 2.17636C8.43549 2.41446 8.2848 2.64885 8.15838 2.87956C8.03176 3.11024 7.89409 3.37805 7.74535 3.68307C7.59657 3.98829 7.47386 4.21885 7.37715 4.37517C7.11677 4.78445 6.74467 5.26417 6.26115 5.81484C6.24622 5.83716 6.19411 5.90045 6.10483 6.00459C6.01555 6.1088 5.94483 6.18878 5.8928 6.24456C5.81719 6.32516 5.74093 6.40516 5.66404 6.48454C5.56342 6.58876 5.47414 6.67237 5.39612 6.73566C5.31277 6.80309 5.22906 6.87006 5.145 6.93659C5.05571 7.0073 4.96827 7.05933 4.8827 7.09291C4.79721 7.12633 4.71723 7.14306 4.64284 7.14306H1.42865C1.03422 7.14306 0.697495 7.28281 0.418505 7.56172C0.139593 7.84052 0 8.17725 0 8.57159V15.7144C0 16.1088 0.139436 16.4455 0.418505 16.7245C0.697651 17.0035 1.03418 17.1431 1.42865 17.1431H4.64284C5.08175 17.1431 5.91129 17.3628 7.13158 17.8017C8.53775 18.3151 9.73565 18.5716 10.7253 18.5716C11.7743 18.5716 12.6188 18.2721 13.2587 17.6732C13.8985 17.0744 14.2149 16.2578 14.2073 15.2233C14.654 14.6504 14.8771 13.9882 14.8771 13.2368C14.8771 13.0732 14.8659 12.9132 14.8437 12.757C15.0893 12.3329 15.2269 11.8901 15.2568 11.4288H17.143C17.9242 11.4288 18.5958 11.1462 19.1576 10.5807C19.7192 10.0153 20 9.34203 20 8.56088C19.9998 7.79435 19.717 7.12837 19.1517 6.56245ZM2.64507 15.5025C2.50364 15.6439 2.33629 15.7146 2.14287 15.7146C1.9493 15.7146 1.78187 15.6439 1.64056 15.5025C1.49913 15.3611 1.42853 15.1938 1.42853 15.0003C1.42853 14.8069 1.49917 14.6394 1.64056 14.4981C1.78203 14.3567 1.9493 14.2859 2.14287 14.2859C2.33629 14.2859 2.50364 14.3567 2.64507 14.4981C2.78642 14.6394 2.8571 14.8068 2.8571 15.0003C2.8571 15.1938 2.78638 15.3611 2.64507 15.5025ZM18.1471 9.57669C17.8645 9.85943 17.5293 10.0007 17.1424 10.0007H13.4484C13.5599 10.1272 13.6529 10.304 13.7273 10.5309C13.8018 10.7578 13.839 10.9643 13.839 11.1503C13.839 11.6637 13.6418 12.1062 13.2474 12.4782C13.3815 12.7163 13.4484 12.9731 13.4484 13.2483C13.4484 13.5236 13.3832 13.797 13.2531 14.0686C13.1228 14.34 12.946 14.5353 12.7228 14.6544C12.76 14.8772 12.7787 15.0858 12.7787 15.2794C12.7787 16.5215 12.0756 17.1428 10.6694 17.1428C10.0666 17.1428 9.39884 17.0238 8.66601 16.7859C7.94485 16.5517 7.22497 16.3136 6.50641 16.0716C5.79953 15.8336 5.17834 15.7146 4.64256 15.7146H4.28547V8.57191H4.64256C5.1708 8.57191 5.69156 8.3598 6.20498 7.93555C6.4283 7.7494 6.80404 7.35501 7.33224 6.75243C7.86801 6.14985 8.28472 5.61055 8.58224 5.13423C8.67895 4.97791 8.81663 4.73609 8.99527 4.40875C9.48633 3.37449 9.82114 2.85747 9.99978 2.85747C10.5281 2.85747 10.9577 2.97092 11.2888 3.19776C11.6199 3.42476 11.7854 3.78736 11.7854 4.28585C11.7854 4.60584 11.7296 4.92021 11.6181 5.22895C11.5064 5.53769 11.3837 5.79076 11.2498 5.98786C11.1159 6.18495 10.9931 6.38963 10.8815 6.6017C10.7699 6.81372 10.7142 6.99421 10.7142 7.14295H17.1427C17.5146 7.14295 17.8458 7.28621 18.1361 7.57263C18.4261 7.85924 18.5711 8.19194 18.5711 8.57151C18.5711 8.95875 18.4298 9.29352 18.1471 9.57669Z" />
                      </g>
                    </svg>
                    Monitor and analyze campaign performance, providing
                    insightful reports and recommendations for optimization.
                  </li>
                  <li>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M19.1517 6.56245C18.5861 5.997 17.9164 5.71426 17.1427 5.71426H12.9686C13.1324 5.26788 13.2142 4.79168 13.2142 4.28569C13.2142 3.37805 12.9109 2.675 12.3045 2.17636C11.698 1.67791 10.9299 1.42871 9.99986 1.42871C9.71716 1.42871 9.4585 1.4938 9.22411 1.62409C8.98972 1.75418 8.78508 1.93845 8.61027 2.17636C8.43549 2.41446 8.2848 2.64885 8.15838 2.87956C8.03176 3.11024 7.89409 3.37805 7.74535 3.68307C7.59657 3.98829 7.47386 4.21885 7.37715 4.37517C7.11677 4.78445 6.74467 5.26417 6.26115 5.81484C6.24622 5.83716 6.19411 5.90045 6.10483 6.00459C6.01555 6.1088 5.94483 6.18878 5.8928 6.24456C5.81719 6.32516 5.74093 6.40516 5.66404 6.48454C5.56342 6.58876 5.47414 6.67237 5.39612 6.73566C5.31277 6.80309 5.22906 6.87006 5.145 6.93659C5.05571 7.0073 4.96827 7.05933 4.8827 7.09291C4.79721 7.12633 4.71723 7.14306 4.64284 7.14306H1.42865C1.03422 7.14306 0.697495 7.28281 0.418505 7.56172C0.139593 7.84052 0 8.17725 0 8.57159V15.7144C0 16.1088 0.139436 16.4455 0.418505 16.7245C0.697651 17.0035 1.03418 17.1431 1.42865 17.1431H4.64284C5.08175 17.1431 5.91129 17.3628 7.13158 17.8017C8.53775 18.3151 9.73565 18.5716 10.7253 18.5716C11.7743 18.5716 12.6188 18.2721 13.2587 17.6732C13.8985 17.0744 14.2149 16.2578 14.2073 15.2233C14.654 14.6504 14.8771 13.9882 14.8771 13.2368C14.8771 13.0732 14.8659 12.9132 14.8437 12.757C15.0893 12.3329 15.2269 11.8901 15.2568 11.4288H17.143C17.9242 11.4288 18.5958 11.1462 19.1576 10.5807C19.7192 10.0153 20 9.34203 20 8.56088C19.9998 7.79435 19.717 7.12837 19.1517 6.56245ZM2.64507 15.5025C2.50364 15.6439 2.33629 15.7146 2.14287 15.7146C1.9493 15.7146 1.78187 15.6439 1.64056 15.5025C1.49913 15.3611 1.42853 15.1938 1.42853 15.0003C1.42853 14.8069 1.49917 14.6394 1.64056 14.4981C1.78203 14.3567 1.9493 14.2859 2.14287 14.2859C2.33629 14.2859 2.50364 14.3567 2.64507 14.4981C2.78642 14.6394 2.8571 14.8068 2.8571 15.0003C2.8571 15.1938 2.78638 15.3611 2.64507 15.5025ZM18.1471 9.57669C17.8645 9.85943 17.5293 10.0007 17.1424 10.0007H13.4484C13.5599 10.1272 13.6529 10.304 13.7273 10.5309C13.8018 10.7578 13.839 10.9643 13.839 11.1503C13.839 11.6637 13.6418 12.1062 13.2474 12.4782C13.3815 12.7163 13.4484 12.9731 13.4484 13.2483C13.4484 13.5236 13.3832 13.797 13.2531 14.0686C13.1228 14.34 12.946 14.5353 12.7228 14.6544C12.76 14.8772 12.7787 15.0858 12.7787 15.2794C12.7787 16.5215 12.0756 17.1428 10.6694 17.1428C10.0666 17.1428 9.39884 17.0238 8.66601 16.7859C7.94485 16.5517 7.22497 16.3136 6.50641 16.0716C5.79953 15.8336 5.17834 15.7146 4.64256 15.7146H4.28547V8.57191H4.64256C5.1708 8.57191 5.69156 8.3598 6.20498 7.93555C6.4283 7.7494 6.80404 7.35501 7.33224 6.75243C7.86801 6.14985 8.28472 5.61055 8.58224 5.13423C8.67895 4.97791 8.81663 4.73609 8.99527 4.40875C9.48633 3.37449 9.82114 2.85747 9.99978 2.85747C10.5281 2.85747 10.9577 2.97092 11.2888 3.19776C11.6199 3.42476 11.7854 3.78736 11.7854 4.28585C11.7854 4.60584 11.7296 4.92021 11.6181 5.22895C11.5064 5.53769 11.3837 5.79076 11.2498 5.98786C11.1159 6.18495 10.9931 6.38963 10.8815 6.6017C10.7699 6.81372 10.7142 6.99421 10.7142 7.14295H17.1427C17.5146 7.14295 17.8458 7.28621 18.1361 7.57263C18.4261 7.85924 18.5711 8.19194 18.5711 8.57151C18.5711 8.95875 18.4298 9.29352 18.1471 9.57669Z" />
                      </g>
                    </svg>
                    Stay abreast of industry trends, emerging technologies, and
                    digital marketing best practices.
                  </li>
                </ul>
                <span className="line-break" />
                <span className="line-break" />
                <span className="line-break" />
                <p>
                  <span>Qualification: </span>Our dynamic and innovative digital
                  marketing agency dedicated to delivering cutting-edge
                  solutions for our clients.
                </p>
                <span className="line-break" />
                <ul>
                  <li>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M19.1517 6.56245C18.5861 5.997 17.9164 5.71426 17.1427 5.71426H12.9686C13.1324 5.26788 13.2142 4.79168 13.2142 4.28569C13.2142 3.37805 12.9109 2.675 12.3045 2.17636C11.698 1.67791 10.9299 1.42871 9.99986 1.42871C9.71716 1.42871 9.4585 1.4938 9.22411 1.62409C8.98972 1.75418 8.78508 1.93845 8.61027 2.17636C8.43549 2.41446 8.2848 2.64885 8.15838 2.87956C8.03176 3.11024 7.89409 3.37805 7.74535 3.68307C7.59657 3.98829 7.47386 4.21885 7.37715 4.37517C7.11677 4.78445 6.74467 5.26417 6.26115 5.81484C6.24622 5.83716 6.19411 5.90045 6.10483 6.00459C6.01555 6.1088 5.94483 6.18878 5.8928 6.24456C5.81719 6.32516 5.74093 6.40516 5.66404 6.48454C5.56342 6.58876 5.47414 6.67237 5.39612 6.73566C5.31277 6.80309 5.22906 6.87006 5.145 6.93659C5.05571 7.0073 4.96827 7.05933 4.8827 7.09291C4.79721 7.12633 4.71723 7.14306 4.64284 7.14306H1.42865C1.03422 7.14306 0.697495 7.28281 0.418505 7.56172C0.139593 7.84052 0 8.17725 0 8.57159V15.7144C0 16.1088 0.139436 16.4455 0.418505 16.7245C0.697651 17.0035 1.03418 17.1431 1.42865 17.1431H4.64284C5.08175 17.1431 5.91129 17.3628 7.13158 17.8017C8.53775 18.3151 9.73565 18.5716 10.7253 18.5716C11.7743 18.5716 12.6188 18.2721 13.2587 17.6732C13.8985 17.0744 14.2149 16.2578 14.2073 15.2233C14.654 14.6504 14.8771 13.9882 14.8771 13.2368C14.8771 13.0732 14.8659 12.9132 14.8437 12.757C15.0893 12.3329 15.2269 11.8901 15.2568 11.4288H17.143C17.9242 11.4288 18.5958 11.1462 19.1576 10.5807C19.7192 10.0153 20 9.34203 20 8.56088C19.9998 7.79435 19.717 7.12837 19.1517 6.56245ZM2.64507 15.5025C2.50364 15.6439 2.33629 15.7146 2.14287 15.7146C1.9493 15.7146 1.78187 15.6439 1.64056 15.5025C1.49913 15.3611 1.42853 15.1938 1.42853 15.0003C1.42853 14.8069 1.49917 14.6394 1.64056 14.4981C1.78203 14.3567 1.9493 14.2859 2.14287 14.2859C2.33629 14.2859 2.50364 14.3567 2.64507 14.4981C2.78642 14.6394 2.8571 14.8068 2.8571 15.0003C2.8571 15.1938 2.78638 15.3611 2.64507 15.5025ZM18.1471 9.57669C17.8645 9.85943 17.5293 10.0007 17.1424 10.0007H13.4484C13.5599 10.1272 13.6529 10.304 13.7273 10.5309C13.8018 10.7578 13.839 10.9643 13.839 11.1503C13.839 11.6637 13.6418 12.1062 13.2474 12.4782C13.3815 12.7163 13.4484 12.9731 13.4484 13.2483C13.4484 13.5236 13.3832 13.797 13.2531 14.0686C13.1228 14.34 12.946 14.5353 12.7228 14.6544C12.76 14.8772 12.7787 15.0858 12.7787 15.2794C12.7787 16.5215 12.0756 17.1428 10.6694 17.1428C10.0666 17.1428 9.39884 17.0238 8.66601 16.7859C7.94485 16.5517 7.22497 16.3136 6.50641 16.0716C5.79953 15.8336 5.17834 15.7146 4.64256 15.7146H4.28547V8.57191H4.64256C5.1708 8.57191 5.69156 8.3598 6.20498 7.93555C6.4283 7.7494 6.80404 7.35501 7.33224 6.75243C7.86801 6.14985 8.28472 5.61055 8.58224 5.13423C8.67895 4.97791 8.81663 4.73609 8.99527 4.40875C9.48633 3.37449 9.82114 2.85747 9.99978 2.85747C10.5281 2.85747 10.9577 2.97092 11.2888 3.19776C11.6199 3.42476 11.7854 3.78736 11.7854 4.28585C11.7854 4.60584 11.7296 4.92021 11.6181 5.22895C11.5064 5.53769 11.3837 5.79076 11.2498 5.98786C11.1159 6.18495 10.9931 6.38963 10.8815 6.6017C10.7699 6.81372 10.7142 6.99421 10.7142 7.14295H17.1427C17.5146 7.14295 17.8458 7.28621 18.1361 7.57263C18.4261 7.85924 18.5711 8.19194 18.5711 8.57151C18.5711 8.95875 18.4298 9.29352 18.1471 9.57669Z" />
                      </g>
                    </svg>
                    Preferably Business Graduate from a reputed public/private
                    university.
                  </li>
                </ul>
                <span className="line-break" />
                <span className="line-break" />
                <span className="line-break" />
                <h5>Job Loaction:</h5>
                <span className="line-break" />
                <ul className="style-2">
                  <li>New York, USA</li>
                </ul>
                <span className="line-break" />
                <span className="line-break" />
                <span className="line-break" />
                <h5>Salary:</h5>
                <span className="line-break" />
                <ul className="style-2">
                  <li>$2.300-$3000/ monthly.</li>
                </ul>
                <span className="line-break" />
                <span className="line-break" />
                <span className="line-break" />
                <p>
                  <span>What We Offer: </span>Our dynamic and innovative digital
                  marketing agency dedicated to delivering cutting-edge
                  solutions for our clients.
                </p>
                <span className="line-break" />
                <ul className="style-2">
                  <li>
                    Opportunities for professional growth and development.
                  </li>
                  <li>
                    A dynamic and collaborative work environment where
                    creativity is valued.
                  </li>
                  <li>Competitive salary and benefits package.</li>
                  <li>International tour benefits</li>
                </ul>
                <span className="line-break" />
                <span className="line-break" />
                <span className="line-break" />
                <p>
                  <span>Ready to Join Us? </span>If you are excited about the
                  prospect of contributing to innovative digital marketing
                  campaigns and being part of a forward-thinking team, we'd love
                  to hear from you! Apply now and let's embark on this digital
                  journey together.
                </p>
                <span className="line-break" />
                <span className="line-break" />
                <span className="line-break" />
                <div className="job-apply-area">
                  <Link
                    href="/case-study-details"
                    className="primary-btn5 black btn-hover"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Apply Position
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>
                    <span />
                  </Link>
                  <strong>Or</strong>
                  <div className="contact">
                    <span>Apply by Email</span>
                    <a href="mailto:info@examplegmail.com">
                      info@examplegmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="job-summary-area">
                <h5>Job Key Info:</h5>
                <ul>
                  <li>
                    <span>Salary: </span>$2,300- $3,000 monthly
                  </li>
                  <li>
                    <span>Vacancy: </span>07 Person
                  </li>
                  <li>
                    <span>Experiences: </span>2-3 Years.
                  </li>
                  <li>
                    <span>Education: </span>Bachelor Completed.
                  </li>
                  <li>
                    <span>Gender: </span>Male/Female
                  </li>
                  <li>
                    <span>Deadline: </span>02/12/2024
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Home3GallerySection />

      <Footer3 />
    </>
  );
};

export default page;
