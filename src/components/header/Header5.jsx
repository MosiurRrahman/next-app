import React from "react";

function Header5() {
  return (
    <>
      <header className="style-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-2 col-5 px-0">
              <div className="header-logo1">
                <img src="assets/images/bg/header-logo1.svg" alt="image" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-10 col-md-10 col-7 d-flex flex-column justify-content-center">
              <div className="topbar-area d-xl-flex d-none">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <a>Road: 02, House : 122-123, NewYork City</a>
                </div>
                <div className="address">
                  <i className="bi bi-envelope" />
                  <a href="mailto:info@example.com">info@example.com</a>
                </div>
              </div>
              <div className="main-nav text-xl-center text-end">
                {/* mobile-logo */}
                <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
                  <div className="mobile-logo-wrap">
                    <a href="index.html">
                      <img
                        alt="image"
                        src="assets/images/bg/header-logo1.svg"
                      />
                    </a>
                  </div>
                  <div className="menu-close-btn">
                    <i className="bi bi-x-lg text-dark" />
                  </div>
                </div>
                {/* mobile-nav */}
                <div className="d-lg-flex justify-content-xxl-between justify-content-xl-center justify-content-lg-end align-items-center px-xl-5 px-0">
                  <ul className="menu-list">
                    <li className="menu-item-has-children">
                      <a href="index.html" className="drop-down active">
                        Home
                      </a>
                      <i className="bi bi-chevron-down dropdown-icon" />
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">Home Digital Agency</a>
                        </li>
                        <li>
                          <a href="index-digital-marketing.html">
                            Home Digital Marketing
                          </a>
                        </li>
                        <li>
                          <a href="index-technology.html">Home Technology</a>
                        </li>
                        <li>
                          <a href="index-seo.html">Home SEO</a>
                        </li>
                        <li>
                          <a
                            href="index-business-consult.html"
                            className="active"
                          >
                            Home Business Consult
                          </a>
                        </li>
                        <li>
                          <a href="index-startup.html">Home StartUp</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#" className="drop-down">
                        Pages
                      </a>
                      <i className="bi bi-chevron-down dropdown-icon" />
                      <ul className="sub-menu">
                        <li>
                          <a href="about.html">About Us</a>
                        </li>{" "}
                        <li>
                          <a href="gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="choose-us.html">Why Choose US</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing</a>
                        </li>
                        <li>
                          <a href="casestudy-one.html">Case Study</a>
                          <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                          <i className="d-lg-none d-flex bi bi-chevron-down dropdown-icon" />
                          <ul className="sub-menu">
                            <li>
                              <a href="casestudy-one.html">Case Study One</a>
                            </li>
                            <li>
                              <a href="casestudy-two.html">Case Study Two</a>
                            </li>
                            <li>
                              <a href="casestudy-three.html">
                                Case Study Three
                              </a>
                            </li>
                            <li>
                              <a href="casestudy-four.html">Case Study Four</a>
                            </li>
                            <li>
                              <a href="casestudy-details.html">
                                Case Study Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="experties.html">Expertise</a>
                          <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                          <i className="d-lg-none d-flex bi bi-chevron-down dropdown-icon" />
                          <ul className="sub-menu">
                            <li>
                              <a href="experties.html">Expertise One</a>
                            </li>
                            <li>
                              <a href="expertise-two.html">Expertise Two</a>
                            </li>
                            <li>
                              <a href="expertise-three.html">Expertise Three</a>
                            </li>
                            <li>
                              <a href="expertise-four.html">Expertise Four</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="faq.html">Faq</a>
                        </li>
                        <li>
                          <a href="error.html">Error</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="services.html" className="drop-down">
                        Services
                      </a>
                      <i className="bi bi-chevron-down dropdown-icon" />
                      <ul className="sub-menu">
                        <li>
                          <a href="services.html">Services One</a>
                        </li>
                        <li>
                          <a href="services-two.html">Services Two</a>
                        </li>
                        <li>
                          <a href="services-three.html">Services Three</a>
                        </li>
                        <li>
                          <a href="services-four.html">Services Four</a>
                        </li>
                        <li>
                          <a href="services-five.html">Services Five</a>
                        </li>
                        <li>
                          <a href="service-details.html">Services Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="portfolio-full.html">Portfolio</a>
                      <i className="bi bi-chevron-down dropdown-icon" />
                      <ul className="sub-menu">
                        <li>
                          <a href="portfolio-masonary.html">
                            Portfolio Masonary
                          </a>
                        </li>
                        <li>
                          <a href="portfolio-full.html">Portfolio Full Width</a>
                        </li>
                        <li>
                          <a href="gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="portfolio-details.html">Portfolio Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="blog-column-three.html">Blog</a>
                      <i className="bi bi-chevron-down dropdown-icon" />
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-column-three.html">Blog Column Three</a>
                        </li>
                        <li>
                          <a href="blog-column-two.html">Blog Column Two</a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-right-sidebar.html">
                            Blog Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                  <a
                    href="#about"
                    className="eg-btn btn--primary btn--lg d-xxl-flex d-none"
                  >
                    Get Started
                  </a>
                </div>
                <div className="d-flex justify-content-start align-items-center flex-row d-lg-none d-block mt-5">
                  <div className="header-email">
                    <div className="icon">
                      <i className="bi bi-envelope" />
                    </div>
                    <div className="email text-start">
                      <span>Email Now</span>
                      <h5 className="linear-text-two">
                        <a href="mailto:info@example.com">info@example.com</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center flex-row d-lg-none d-block mt-3">
                  <div className="header-email">
                    <div className="icon">
                      <i className="bi bi-telephone" />
                    </div>
                    <div className="email text-start">
                      <span>Call Now</span>
                      <h5 className="linear-text-two">
                        <a href="tel:+998-8776345">+998-8776345</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-menu-btn d-lg-none d-block text-end">
                <i className="bi bi-list text-dark" />
              </div>
            </div>
            <div className="col-xl-2 px-0 d-xl-flex d-none align-items-center justify-content-end">
              <div className="header-call d-xl-flex d-none">
                <div className="icon">
                  <i className="bx bx-phone-call" />
                </div>
                <div className="number">
                  <span>Call Now</span>
                  <a href="tel:+998-8776345" className="linear-text">
                    +998-8776345
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header5;
