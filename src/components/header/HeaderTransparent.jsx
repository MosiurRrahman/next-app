import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function HeaderTransparent() {
  const currentRoute = useRouter().pathname;
  return (
    <header
      className={
        currentRoute === "/index-bg-image"
          ? "header-area style-2 bg-transparent"
          : "header-area style-2"
      }
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="header-logo">
          <a href="index.html">
            <img
              alt="image"
              className="img-fluid"
              src="assets/images/bg/header-logo.svg"
            />
          </a>
        </div>
        <ul className="menu-list">
          <li className="menu-item-has-children">
            <Link legacyBehavior href="/">
              <a>Home</a>
            </Link>
            <i className="bx bxs-circle dropdown-icon" />
            <ul className="submenu">
              <li>
                <Link legacyBehavior href="/">
                  <a>Home One</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/index2">
                  <a>Home Two</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/index-pagination-slider">
                  <a>Home Pagination Slider</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/index-masonary">
                  <a>Home Masonary</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/index-carousel">
                  <a>Home Carousel</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/index-portfolio">
                  <a>Home Portfolio</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/index-video">
                  <a>Home Video</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/index-center-slider">
                  <a>Home Center Slide</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/index-bg-image">
                  <a>Home Image Background</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/index-fixed-sidebar">
                  <a>Home Fixed Sidebar</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <Link legacyBehavior href="/about-me">
              <a>About</a>
            </Link>
            <i className="bx bxs-circle dropdown-icon" />
            <ul className="submenu">
              <li>
                <Link legacyBehavior href="/about-me">
                  <a>About Me</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/about-us">
                  <a>About Us</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <Link legacyBehavior href="/portfolio-column-four">
              <a>Portfolio Details</a>
            </Link>
            <i className="bx bxs-circle dropdown-icon" />
            <ul className="submenu">
              <li>
                <Link legacyBehavior href="/portfolio-column-two">
                  <a>Portfolio Grid 02</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/portfolio-column-three">
                  <a>Portfolio Grid 03</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/portfolio-column-four">
                  <a>Portfolio Grid 04</a>
                </Link>
              </li>
              {/* <li>
                <Link legacyBehavior href="/portfolio-into-flow">
                  <a>Portfolio Info Flow</a>
                </Link>
              </li> */}
              {/* <li>
                <Link legacyBehavior href="/portfolio-masonary">
                  <a>Portfolio Masonary</a>
                </Link>
              </li> */}
              <li>
                <Link legacyBehavior href="/portfolio-slider">
                  <a>Portfolio Slider</a>
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
            <Link legacyBehavior href="/blog-grid-one">
              <a>Blog</a>
            </Link>
            <i className="bx bxs-circle dropdown-icon" />
            <ul className="submenu">
              <li>
                <Link legacyBehavior href="/blog-grid-one">
                  <a>Blog Grid One</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/blog-standard-one">
                  <a>Blog Standard 01</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/blog-standard-two">
                  <a>Blog Standard 02</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/blog-standard-three">
                  <a>Blog Standard 03</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/blog-details">
                  <a>Blog Details</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <Link legacyBehavior href="#">
              <a>Pages</a>
            </Link>
            <i className="bx bxs-circle dropdown-icon" />
            <ul className="submenu">
              <li>
                <Link legacyBehavior href="/gallery-column-four">
                  <a>Gallery Column Four</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/gallery-fullwidth">
                  <a>Gallery Full Width</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/gallery-parallax">
                  <a>Gallery Parallax</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/pricing">
                  <a>Pricing</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/client">
                  <a>Client</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/service-one">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/team-one">
                  <a>Team One</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/team-two">
                  <a>Team Two</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/faq">
                  <a>Faq</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/testimonial">
                  <a>Testimonial</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/booking">
                  <a>Booking</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/error">
                  <a>Error</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <Link legacyBehavior href="/contact-me">
              <a>Contact</a>
            </Link>
            <i className="bx bxs-circle dropdown-icon" />
            <ul className="submenu">
              <li>
                <Link legacyBehavior href="/contact-me">
                  <a>Contact Me</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/contact-us">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="sidebar-button mobile-menu-btn">
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
}

export default HeaderTransparent;
