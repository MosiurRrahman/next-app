import Link from "next/link";
import React from "react";

const Home5BannerSection = () => {
  return (
    <>
      <div className="home5-banner-area">
        <div className="container-lg container-fluid">
          <div className="banner-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-title text-animation">
                  <h6 className="sub-title">
                    Hi, I’m <span>GABRIEL HARRISON</span>, Based on NewYork,
                  </h6>
                  <h1>Creative Product Designer.</h1>
                </div>
                <div className="row justify-content-end">
                  <div className="col-lg-10">
                    <div className="banner-content-and-img">
                      <div className="banner-content">
                        <div className="arrow-and-paragraph">
                          <svg
                            width={32}
                            height={94}
                            viewBox="0 0 32 94"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M13.3333 3C13.3333 4.47276 14.5272 5.66667 16 5.66667C17.4728 5.66667 18.6667 4.47276 18.6667 3C18.6667 1.52724 17.4728 0.333333 16 0.333333C14.5272 0.333333 13.3333 1.52724 13.3333 3ZM16 92.9999L15.5814 93.2734C15.6728 93.4133 15.8281 93.4983 15.9953 93.4999C16.1624 93.5015 16.3193 93.4194 16.4133 93.2813L16 92.9999ZM15.5 3V92.9999H16.5V3H15.5ZM16.4186 92.7265C16.2128 92.4115 15.9458 91.8741 15.6098 91.1408C15.2766 90.4135 14.8931 89.5332 14.4487 88.5387C13.5644 86.5598 12.4567 84.1692 11.1201 81.8623C9.78549 79.5587 8.20865 77.314 6.37629 75.6401C4.54211 73.9647 2.41681 72.8306 0 72.8306V73.8306C2.08319 73.8306 3.97873 74.8044 5.70184 76.3785C7.42677 77.9542 8.94368 80.1005 10.2549 82.3636C11.5641 84.6232 12.6544 86.9745 13.5357 88.9467C13.9741 89.9278 14.3653 90.8253 14.7007 91.5573C15.0333 92.2833 15.3289 92.8868 15.5814 93.2734L16.4186 92.7265ZM16.4133 93.2813C16.7085 92.8476 17.0354 92.2098 17.3925 91.4545C17.7521 90.6938 18.157 89.7816 18.6042 88.7896C19.5021 86.7981 20.582 84.4598 21.8706 82.2255C23.1611 79.988 24.6463 77.8812 26.3438 76.3406C28.0383 74.8027 29.9127 73.8562 31.9982 73.8639L32.0019 72.8639C29.5873 72.8549 27.4825 73.9567 25.6718 75.6001C23.8642 77.2406 22.3181 79.448 21.0044 81.7259C19.6888 84.0068 18.5916 86.3847 17.6926 88.3786C17.2414 89.3794 16.8429 90.2772 16.4884 91.0272C16.1312 91.7827 15.8332 92.3564 15.5867 92.7186L16.4133 93.2813Z" />
                          </svg>
                          <p>
                            I’m specialize in various areas of design, such as{" "}
                            <span>product design, web design, branding,</span>{" "}
                            &amp; <span>visual elements etc.</span>
                          </p>
                        </div>
                        <Link
                          className="primary-btn4 btn-hover"
                          href="/contact"
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="M12.25 0.875C12.4821 0.875 12.7046 0.967187 12.8687 1.13128C13.0328 1.29538 13.125 1.51794 13.125 1.75V8.75C13.125 8.98206 13.0328 9.20462 12.8687 9.36872C12.7046 9.53281 12.4821 9.625 12.25 9.625H3.86225C3.39816 9.6251 2.95311 9.80954 2.625 10.1378L0.875 11.8878V1.75C0.875 1.51794 0.967187 1.29538 1.13128 1.13128C1.29538 0.967187 1.51794 0.875 1.75 0.875H12.25ZM1.75 0C1.28587 0 0.840752 0.184374 0.512563 0.512563C0.184374 0.840752 0 1.28587 0 1.75L0 12.9439C1.8388e-05 13.0304 0.0257185 13.1151 0.0738476 13.187C0.121977 13.259 0.190371 13.315 0.270374 13.3481C0.350378 13.3812 0.438393 13.3898 0.523282 13.3728C0.60817 13.3558 0.686114 13.314 0.74725 13.2528L3.24362 10.7564C3.40768 10.5923 3.6302 10.5 3.86225 10.5H12.25C12.7141 10.5 13.1592 10.3156 13.4874 9.98744C13.8156 9.65925 14 9.21413 14 8.75V1.75C14 1.28587 13.8156 0.840752 13.4874 0.512563C13.1592 0.184374 12.7141 0 12.25 0L1.75 0Z" />
                              <path d="M2.625 3.0625C2.625 2.94647 2.67109 2.83519 2.75314 2.75314C2.83519 2.67109 2.94647 2.625 3.0625 2.625H10.9375C11.0535 2.625 11.1648 2.67109 11.2469 2.75314C11.3289 2.83519 11.375 2.94647 11.375 3.0625C11.375 3.17853 11.3289 3.28981 11.2469 3.37186C11.1648 3.45391 11.0535 3.5 10.9375 3.5H3.0625C2.94647 3.5 2.83519 3.45391 2.75314 3.37186C2.67109 3.28981 2.625 3.17853 2.625 3.0625ZM2.625 5.25C2.625 5.13397 2.67109 5.02269 2.75314 4.94064C2.83519 4.85859 2.94647 4.8125 3.0625 4.8125H10.9375C11.0535 4.8125 11.1648 4.85859 11.2469 4.94064C11.3289 5.02269 11.375 5.13397 11.375 5.25C11.375 5.36603 11.3289 5.47731 11.2469 5.55936C11.1648 5.64141 11.0535 5.6875 10.9375 5.6875H3.0625C2.94647 5.6875 2.83519 5.64141 2.75314 5.55936C2.67109 5.47731 2.625 5.36603 2.625 5.25ZM2.625 7.4375C2.625 7.32147 2.67109 7.21019 2.75314 7.12814C2.83519 7.04609 2.94647 7 3.0625 7H7.4375C7.55353 7 7.66481 7.04609 7.74686 7.12814C7.82891 7.21019 7.875 7.32147 7.875 7.4375C7.875 7.55353 7.82891 7.66481 7.74686 7.74686C7.66481 7.82891 7.55353 7.875 7.4375 7.875H3.0625C2.94647 7.875 2.83519 7.82891 2.75314 7.74686C2.67109 7.66481 2.625 7.55353 2.625 7.4375Z" />
                            </g>
                          </svg>
                          Let’s Talk
                          <span style={{ top: "50.5px", left: "83.75px" }} />
                        </Link>
                      </div>
                      <div className="banner-img">
                        <img
                          src="assets/img/home5/home5-banner-img.png"
                          alt=""
                        />
                        <svg
                          width={372}
                          height={353}
                          viewBox="0 0 372 353"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path
                              d="M185.588 83.9275L186 84.5272L186.412 83.9275L242.936 1.67876L240.154 101.459L240.133 102.188L240.82 101.944L335.122 68.49L274.062 147.52L273.615 148.1L274.317 148.306L370.227 176.5L274.317 204.694L273.615 204.9L274.062 205.48L335.122 284.51L240.82 251.056L240.133 250.812L240.154 251.541L242.936 351.321L186.412 269.072L186 268.473L185.588 269.072L129.064 351.321L131.846 251.541L131.867 250.812L131.179 251.056L37.0242 284.51L97.938 205.479L98.3842 204.9L97.683 204.694L1.77287 176.5L97.683 148.306L98.3842 148.1L97.938 147.521L37.0243 68.49L131.179 101.944L131.867 102.188L131.846 101.459L129.064 1.67876L185.588 83.9275Z"
                              fill="#181818"
                              stroke="url(#paint0_linear_2186_944)"
                            />
                            <linearGradient
                              id="paint0_linear_2186_944"
                              x1={186}
                              y1={0}
                              x2={186}
                              y2={353}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                stopColor="white"
                                stopOpacity="0.2"
                                offset={0}
                              />
                              <stop
                                offset="0.525"
                                stopColor="#222222"
                                stopOpacity="0.28"
                              />
                              <stop
                                offset={1}
                                stopColor="#222222"
                                stopOpacity="0.81"
                              />
                            </linearGradient>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="social-area-group">
                  <ul className="social-list text-animation">
                    <li>
                      <a href="https://dribbble.com/">Dribbble</a>
                    </li>
                    <li>
                      <a href="https://www.behance.net/">Behance </a>
                    </li>
                  </ul>
                  <ul className="social-list text-animation">
                    <li>
                      <a href="https://www.pinterest.com/">Pinterest</a>
                    </li>
                    <li>
                      <a href="https://99designs.com/">99 Design</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home5BannerSection;
