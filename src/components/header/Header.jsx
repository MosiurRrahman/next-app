import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import Sidebar from "../common/sidebar";
function Header() {
  const logo = useRef();
  const currentRoute = useRouter().pathname;
  // useEffect(()=>{
  //   <Sidebar/>
  // })
  return (
    <>
      <header
        className={
          /*using routing for indivisil style*/
          currentRoute === "/"
            ? "header-area style-1"
            : currentRoute === "/index2-pagination" ||
              currentRoute === "/index2" ||
              currentRoute === "/index2-center-slider" ||
              currentRoute === "/index2-video" ||
              currentRoute === "/index2-thumbnail-slider"
            ? "header-area style-2"
            : currentRoute === "/contact-us" ||
              currentRoute === "/contact-me" ||
              currentRoute === "/services" ||
              currentRoute === "/services-2" ||
              currentRoute === "/services-details" ||
              currentRoute === "/team" ||
              currentRoute === "/gallery" ||
              currentRoute === "/error" ||
              currentRoute === "/blog-grid1" ||
              currentRoute === "/blog-grid2" ||
              currentRoute === "/blog-standard" ||
              currentRoute === "/blog-details" ||
              currentRoute === "/portfolio" ||
              currentRoute === "/portfolio-02" ||
              currentRoute === "/portfolio-03" ||
              currentRoute === "/portfolio-details" ||
              currentRoute === "/about-me" ||
              currentRoute === "/about-us" ||
              currentRoute === "/faq"
            ? "header-area style-3"
            : currentRoute === "/index-fullscreen"
            ? "header-area style-1 header-transparent"
            : "header-area style-1"
        }
      >
        <div className="header-logo">
          <Link href="/" legacyBehavior>
            <a>
              {currentRoute === "/index2-pagination" ||
              currentRoute === "/index2-thumbnail-slider" ||
              currentRoute === "/index2" ||
              currentRoute === "/index2-video" ||
              currentRoute === "/index2-center-slider" ? (
                <img
                  ref={logo}
                  alt="image"
                  src="assets/images/header-logo2.svg"
                />
              ) : (
                <img
                  ref={logo}
                  alt="image"
                  src="assets/images/header-logo.svg"
                />
              )}
            </a>
          </Link>
        </div>
        <div className="main-menu">
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap ">
              <Link legacyBehavior href="/">
                <a>
                  {currentRoute === "/" ? (
                    <img alt="image" src="assets/images/header-logo.svg" />
                  ) : currentRoute === "/index2-pagination" ? (
                    <img alt="image" src="assets/images/header-logo2.svg" />
                  ) : (
                    ""
                  )}
                </a>
              </Link>
            </div>
            <div className="menu-close-btn">
              <i className="bi bi-x-lg" />
            </div>
          </div>
          <ul className="menu-list">
            <li className="menu-item-has-children">
              <a href="#" className={
              currentRoute === "/"||
              currentRoute === "/index-video"||
              currentRoute === "/index2-pagination" ||
              currentRoute === "/index-personal-showcase"||
              currentRoute === "/index-fullscreen"||
              currentRoute === "/index-portfolio"||
              currentRoute === "/index2" ||
              currentRoute === "/index2-center-slider" ||
              currentRoute === "/index2-video" ||
              currentRoute === "/index2-thumbnail-slider"?"btn--primary1 active":""}>
                Home
              </a>
              <i className="bx bxs-circle dropdown-icon" />
              <ul className="submenu">
                <li>
                  <Link legacyBehavior href="/">
                    <a className={currentRoute === "/"? "active":"disable"}>Personal Home</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="index-video">
                    <a className={currentRoute === "/index-video"? "active":"disable"}>Personal Home Video</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="index-personal-showcase">
                    <a className={currentRoute === "/index-personal-showcase"? "active":"disable"}>Personal Home showcase</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="index-fullscreen">
                    <a className={currentRoute === "/index-fullscreen"? "active":"disable"}>Personal Home Fullscreen</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="index-portfolio">
                    <a className={currentRoute === "/index-portfolio"? "active":"disable"}>Personal Home Portfolio</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="index2">
                    <a className={currentRoute === "/index2"? "active":"disable"}>Agency Home</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="index2-video">
                    <a className={currentRoute === "/index2-video"? "active":"disable"}>Agency Home Video</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="index2-thumbnail-slider">
                    <a className={currentRoute === "/index2-thumbnail-slider"? "active":"disable"}>Agency Home Thumbnail</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="index2-pagination">
                    <a className={currentRoute === "/index2-pagination"? "active":"disable"}>Agency Home Pagination</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="index2-center-slider">
                    <a className={currentRoute === "/index2-center-slider"? "active":"disable"}>Agency Home Center Slider</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#" className={currentRoute === "/about-me"|| currentRoute === "/about-us"?"btn--primary1 active":"btn--primary1"}>
                About
              </a>
              <i className="bx bxs-circle dropdown-icon" />
              <ul className="submenu">
                <li>
                  <Link legacyBehavior href="/about-me">
                    <a  className={currentRoute === "/about-me"? "active":"disable"}>About Me</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/about-us">
                    <a  className={currentRoute === "/about-us"? "active":"disable"} >About Us</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#" className={
                currentRoute === "/protfolio"||
                currentRoute === "/portfolio-02"||
                currentRoute === "/protfolio-03"||
                currentRoute === "/protfolio-details"
                ?"btn--primary1 active":"btn--primary1"}>
                Portfolio
              </a>
              <i className="bx bxs-circle dropdown-icon" />
              <ul className="submenu">
                <li>
                  <Link legacyBehavior href="/portfolio">
                    <a  className={currentRoute === "/protfolio"? "active":"disable"}>Portfolio 01</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/portfolio-02">
                    <a  className={currentRoute === "/portfolio-02"? "active":"disable"}>Portfolio 02</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/portfolio-03">
                    <a  className={currentRoute === "/portfolio-03"? "active":"disable"}>Portfolio 03</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/portfolio-details">
                    <a  className={currentRoute === "/portfolio-details"? "active":"disable"}>Portfolio Details</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#" className={
                currentRoute === "/blog-grid1"||
                currentRoute === "/blog-grid2"||
                currentRoute === "/blog-standard"||
                currentRoute === "/blog-details"
                ?"btn--primary1 active":"btn--primary1"}>
                Blog
              </a>
              <i className="bx bxs-circle dropdown-icon" />
              <ul className="submenu">
                <li>
                  <Link legacyBehavior href="/blog-grid1">
                    <a  className={currentRoute === "/blog-grid1"? "active":"disable"}>Blog Grid 01</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-grid2">
                    <a  className={currentRoute === "/blog-grid2"? "active":"disable"}>Blog Grid 02</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-standard">
                    <a className={currentRoute === "/blog-standard"? "active":"disable"}>Blog Standard</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-details">
                    <a className={currentRoute === "/blog-details"? "active":"disable"}>Blog Details</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#" className={
                currentRoute === "/services"||
                currentRoute === "/services-2"||
                currentRoute === "/services-details"||
                currentRoute === "/team"||
                currentRoute === "/faq"||
                currentRoute === "/gallary"
                ?"btn--primary1 active":"btn--primary1"}>
                Pages
              </a>
              <i className="bx bxs-circle dropdown-icon" />
              <ul className="submenu">
                <li>
                  <Link legacyBehavior href="/services">
                    <a className={currentRoute === "/services"? "active":"disable"}>Services 01</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services-2">
                    <a  className={currentRoute === "/services-2"? "active":"disable"}>Services 02</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services-details">
                    <a  className={currentRoute === "/services-details"? "active":"disable"}>Services Details</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/team">
                    <a  className={currentRoute === "/team"? "active":"disable"}>Our Team</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/gallery">
                    <a className={currentRoute === "/gallary"? "active":"disable"}>Gallery</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/faq">
                    <a className={currentRoute === "/faq"? "active":"disable"}>Faq</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/error">
                    <a className={currentRoute === "/error"? "active":"disable"}>Error</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#" className={
                currentRoute === "/contact-us"||
                currentRoute === "/contact-me"
                ?"btn--primary1 active":"btn--primary1"}>
                Contact
              </a>
              <i className="bx bxs-circle dropdown-icon" />
              <ul className="submenu">
                <li>
                  <Link legacyBehavior href="/contact-us">
                    <a className={currentRoute === "/contact-us"? "active":"disable"}>Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/contact-me">
                    <a className={currentRoute === "/contact-me"? "active":"disable"}>Contact Me</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="nav-right d-flex align-items-center">
          <div
            className={
              currentRoute === "/contact-us" ||
              currentRoute === "/contact-me" ||
              currentRoute === "/about-us" ||
              currentRoute === "/portfolio" ||
              currentRoute === "/portfolio-02" ||
              currentRoute === "/portfolio-03" ||
              currentRoute === "/portfolio-details" ||
              currentRoute === "/blog-grid1" ||
              currentRoute === "/blog-grid2" ||
              currentRoute === "/blog-standard" ||
              currentRoute === "/blog-details" ||
              currentRoute === "/services" ||
              currentRoute === "/services-2" ||
              currentRoute === "/services-details" ||
              currentRoute === "/team" ||
              currentRoute === "/gallary" ||
              currentRoute === "/faq" ||
              currentRoute === "/404" ||
              currentRoute === "/about-me"
                ? "header-btn"
                : currentRoute === "/index2" ||
                 currentRoute === "/index2-video" ||
                  currentRoute === "/index2-thumbnail-slider" ||
                  currentRoute === "/index2-pagination" ||
                  currentRoute === "/index2-center-slider"
                ? "header-btn d-xl-block d-none"
                : "header-btn d-none"
            }
          >
            <Link href="/contact-us" className="button-hover-two">
              Hire Us Now
            </Link>
          </div>
          <div className="side-icon style-two">
            <svg
              width={30}
              height={30}
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.421875 5.12308C0.134766 5.30769 0 5.58462 0 5.99077C0 6.39692 0.146484 6.67385 0.46875 6.87077L0.673828 7H15H29.3262L29.5312 6.87077C29.8535 6.67385 30 6.39692 30 5.99077C30 5.58462 29.8652 5.30769 29.5781 5.12308C29.3848 5 29.25 5 15 5C0.75 5 0.615234 5 0.421875 5.12308Z" />
              <path d="M0.421875 14.125C0.140625 14.3125 0 14.5938 0 15C0 15.4062 0.140625 15.6875 0.421875 15.875C0.615234 16 0.75 16 15 16C29.25 16 29.3848 16 29.5781 15.875C29.8594 15.6875 30 15.4062 30 15C30 14.5938 29.8594 14.3125 29.5781 14.125C29.3848 14 29.25 14 15 14C0.75 14 0.615234 14 0.421875 14.125Z" />
              <path d="M0.723529 23.0428C0.252941 23.159 0 23.5015 0 24.0214C0 24.419 0.141176 24.6942 0.423529 24.8777C0.611765 25 0.735294 25 8 25C15.2647 25 15.3882 25 15.5765 24.8777C15.8647 24.6942 16 24.419 16 24.0153C16 23.6116 15.8529 23.3364 15.5294 23.1407C15.3235 23.0122 15.2706 23.0122 8.11765 23C4.15294 23 0.823529 23.0122 0.723529 23.0428Z" />
            </svg>
          </div>
        </div>
      </header>
      <Sidebar />
    </>
  );
}

export default Header;
