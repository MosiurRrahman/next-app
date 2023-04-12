import Link from "next/link";
import React from "react";

function LayoutHeader() {
  return (
    <header className="header-area style-2 pl-110 pr-110">
      <div className="container-fluid d-flex justify-content-between align-items-center px-0">
        <div className="main-nav">
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap">
              <Link legacyBehavior href="/">
                <a>
                  <img
                    alt="image"
                    src="assets/images/bg/header-five-logo.svg"
                  />
                </a>
              </Link>
            </div>
            <div className="menu-close-btn">
              <i className="bi bi-x-lg text-dark" />
            </div>
          </div>
          <ul className="menu-list">
            <li className="menu-item-has-children">
              <Link legacyBehavior href="/">
                <a className="drop-down">Home</a>
              </Link>
              <i className="bi bi-chevron-down dropdown-icon" />
              <ul className="sub-menu">
                <li>
                  <Link legacyBehavior href="/">
                    <a>Home Digital Agency</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index-digital-marketing">
                    <a>Home Digital Marketing</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index-technology">
                    <a>Home Technology</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index-seo">
                    <a>Home SEO</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index-business-consult">
                    <a>Home Business Consult</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index-startup">
                    <a>Home StartUp</a>
                  </Link>
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
                  <Link legacyBehavior href="/about">
                    <a>About Us</a>
                  </Link>
                </li>{" "}
                <li>
                  <Link legacyBehavior href="/gallery">
                    <a>Gallery</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/choose-us">
                    <a>Why Choose US</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/pricing">
                    <a>Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/casestudy-one">
                    <a>Case Study</a>
                  </Link>
                  <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                  <i className="d-lg-none d-flex bi bi-chevron-down dropdown-icon" />
                  <ul className="sub-menu">
                    <li>
                      <Link legacyBehavior href="/casestudy-one">
                        <a>Case Study One</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/casestudy-two">
                        <a>Case Study Two</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/casestudy-three">
                        <a>Case Study Three</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/casestudy-four">
                        <a>Case Study Four</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/casestudy-details">
                        <a>Case Study Details</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link legacyBehavior href="/experties">
                    <a>Expertise</a>
                  </Link>
                  <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                  <i className="d-lg-none d-flex bi bi-chevron-down dropdown-icon" />
                  <ul className="sub-menu">
                    <li>
                      <Link legacyBehavior href="/experties">
                        <a>Expertise One</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/expertise-two">
                        <a>Expertise Two</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/expertise-three">
                        <a>Expertise Three</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/expertise-four">
                        <a>Expertise Four</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link legacyBehavior href="/faq">
                    <a>Faq</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link legacyBehavior href="/services" className="drop-down">
                <a>Services</a>
              </Link>
              <i className="bi bi-chevron-down dropdown-icon" />
              <ul className="sub-menu">
                <li>
                  <Link legacyBehavior href="/services">
                    <a>Services One</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services-two">
                    <a>Services Two</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services-three">
                    <a>Services Three</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services-four">
                    <a>Services Fou</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services-five">
                    <a>Services Five</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/service-details">
                    <a>Services Details</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link legacyBehavior href="/portfolio-full">
                <a>Portfolio</a>
              </Link>
              <i className="bi bi-chevron-down dropdown-icon" />
              <ul className="sub-menu">
                <li>
                  <Link legacyBehavior href="/portfolio-masonary">
                    <a>Portfolio Masonary</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/portfolio-full">
                    <a>Portfolio Full Width</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/portfolio-details">
                    <a>Portfolio Details</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link legacyBehavior href="/blog-column-three">
                <a>Blog</a>
              </Link>
              <i className="bi bi-chevron-down dropdown-icon" />
              <ul className="sub-menu">
                <li>
                  <Link legacyBehavior href="/blog-column-three">
                    <a>Blog Column Three</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-column-two">
                    <a>Blog Column Two</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-left-sidebar">
                    <a>Blog Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-right-sidebar">
                    <a>Blog Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-details">
                    <a>Blog Details</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link legacyBehavior href="/contact" className="active">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          {/* mobile-search-area */}
          <div className="phone-call sibling2 d-flex justify-content-start align-items-center flex-row d-lg-none d-block mt-5">
            <div className="header-email">
              <div className="icon">
                <i className="bi bi-envelope" />
              </div>
              <div className="email">
                <span>Email Now</span>
                <h5 className="linear-text-two">
                  <a href="mailto:info@example.com">info@example.com</a>
                </h5>
              </div>
            </div>
          </div>
          <div className="phone-call sibling2 d-flex justify-content-start align-items-center flex-row d-lg-none d-block mt-3">
            <div className="header-email">
              <div className="icon">
                <i className="bi bi-telephone" />
              </div>
              <div className="email">
                <span>Call Now</span>
                <h5 className="linear-text-two">
                  <a href="tel:+998-8776345">+998-8776345</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="header-logo">
          <Link legacyBehavior href="/">
            <a>
              <img
                alt="image"
                className="img-fluid"
                src="assets/images/bg/header-five-logo.svg"
              />
            </a>
          </Link>
        </div>
        <div className="nav-right header-five-right d-flex jsutify-content-end align-items-center gap-5">
          <div className="header-email d-xxl-flex  d-none">
            <div className="icon">
              <i className="bi bi-envelope" />
            </div>
            <div className="email">
              <span>Email Now</span>
              <h5 className="linear-text-two">
                <a href="mailto:info@example.com">info@example.com</a>
              </h5>
            </div>
          </div>
          <div className="mobile-menu-btn d-lg-none d-block">
            <i className="bi bi-list text-dark" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default LayoutHeader;
