import React from "react";

function Header6() {
  return (
    <>
      <div className="mobile-search">
        <div className="container">
          <div className="row d-flex justify-content-center gy-4">
            <div className="col-md-10">
              <label>Get StartWhat are you looking for?ed</label>
              <input
                type="text"
                placeholder="Search Products, Category, Services"
              />
            </div>
            <div className="col-2 d-flex justify-content-end align-items-end gap-2">
              <div className="search-cross-btn style-two">
                <i className="bi bi-search" />
              </div>
              <div className="search-cross-btn style-two">
                <i className="bi bi-x-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area style-6 pl-110 pr-110">
        <div className="container-fluid d-flex justify-content-between align-items-center px-0">
          <div className="header-logo">
            <a href="index.html">
              <img
                alt="image"
                className="img-fluid"
                src="assets/images/bg/header6-logo.svg"
              />
            </a>
          </div>
          <div className="main-nav">
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <a href="index.html">
                  <img
                    alt="image"
                    className="img-fluid"
                    src="assets/images/bg/header6-logo.svg"
                  />
                </a>
              </div>
              <div className="menu-close-btn">
                <i className="bi bi-x-lg text-dark" />
              </div>
            </div>
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
                    <a href="index-business-consult.html">
                      Home Business Consult
                    </a>
                  </li>
                  <li>
                    <a href="index-startup.html" className="active">
                      Home StartUp
                    </a>
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
                        <a href="casestudy-three.html">Case Study Three</a>
                      </li>
                      <li>
                        <a href="casestudy-four.html">Case Study Four</a>
                      </li>
                      <li>
                        <a href="casestudy-details.html">Case Study Details</a>
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
                    <a href="portfolio-masonary.html">Portfolio Masonary</a>
                  </li>
                  <li>
                    <a href="portfolio-full.html">Portfolio Full Width</a>
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
                    <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
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
            {/* mobile-search-area */}
            <div className="d-flex justify-content-start align-items-center flex-row d-lg-none d-block mt-5">
              <a
                href="service-details.html"
                className="eg-btn btn--md btn--primary-four d-flex d-lg-none"
              >
                Request a Quote
              </a>
            </div>
          </div>
          <div className="nav-right header-five-right d-flex jsutify-content-end align-items-center gap-sm-5 gap-4">
            <div className="header-icons">
              <a href="#" className="search-btn">
                <i className="bi bi-search" />
              </a>
              <a href="#" className="cart-icon">
                <i className="bi bi-bag-check" />
              </a>
            </div>
            <a
              href="service-details.html"
              className="eg-btn btn--md btn--primary-four d-xl-flex d-none"
            >
              Request a Quote
            </a>
            <div className="header-phone style-six">
              <div className="icon">
                <i className="bx bx-phone-call" />
              </div>
              <div className="email">
                <span>Call Now</span>
                <h5>
                  <a href="tel:+998-8776345">+998-8776345</a>
                </h5>
              </div>
            </div>
            <div className="mobile-menu-btn d-lg-none d-block">
              <i className="bi bi-list text-dark" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header6;
