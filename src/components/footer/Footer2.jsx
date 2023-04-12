import React from "react";

function Footer2() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-4 order-sm-1 order-2">
            <div className="footer-info">
              <a href="index.html" className="footer-logo">
                <img src="assets/images/bg/footer2-logo.svg" alt="image" />
              </a>
              <span>
                <img src="assets/images/icons/title-vector.svg" alt="image" />
              </span>
              <p>
                Nor again is there anyone who loves or pursues or desires to
                obtain pain.
              </p>
              <ul className="footer-social">
                <li>
                  <a href="https://www.linkedin.com/">
                    <i className="bx bxl-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.dribbble.com/">
                    <i className="bx bxl-pinterest-alt" />
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/">
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
                  <ul className="footer-list">
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
                  <ul className="footer-address-list">
                    <li>
                      <div className="icon">
                        <i className="bi bi-envelope" />
                      </div>
                      <div className="address">
                        <a href="mailto:info@example1.com">info@example1.com</a>
                        <a href="mailto:info@example2.com">info@example2.com</a>
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
                    className="eg-btn btn--lg btn--primary-outline"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle2"
                    role="button"
                  >
                    Get SiteMap
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="footer-list-area">
                  <h3 className="footer-list-title">More Info</h3>
                  <ul className="footer-list">
                    <li>
                      <a href="contact.html">Contact Us</a>
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
                <div className="swiper footer-award-slider" data-cursor="Drag">
                  <div className="swiper-wrapper swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <div className="achievement-single">
                        <img
                          src="assets/images/company/foot-award1.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="achievement-single">
                        <img
                          src="assets/images/company/foot-award2.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="achievement-single">
                        <img
                          src="assets/images/company/foot-award3.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="achievement-single">
                        <img
                          src="assets/images/company/foot-award4.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="achievement-single">
                        <img
                          src="assets/images/company/foot-award2.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row copyright-area">
          <div className="col-lg-12 text-center">
            <p>
              ©copyright 2023 TechGen | Design By{" "}
              <a href="#" className="linear-text">
                Egens Lab
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
