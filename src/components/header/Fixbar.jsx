import Link from "next/link";
import React, { useEffect, useReducer } from "react";
const initialState = {
  activeMenu: "",
  sticky: true,
  sidebar: false,
  showSearch: false,
  showMenu: false,
  showMobileSubMenu: false,
  menuOpen: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      console.log(state, action);
      if (state.activeMenu === action.payload) {
        return { ...state, activeMenu: "", menuOpen: !state.menuOpen };
      } else {
        return {
          ...state,
          activeMenu: action.payload,
          menuOpen: !state.menuOpen,
        };
      }
    case "HOME_ONE":
      return { ...state, activeMenu: "home-one", menuOpen: !state.menuOpen };
    case "ABOUT":
      return { ...state, activeMenu: "about", menuOpen: !state.menuOpen };
    case "PORTFOLIO":
      return { ...state, activeMenu: "portfolio", menuOpen: !state.menuOpen };
    case "BLOG":
      return { ...state, activeMenu: "blog", menuOpen: !state.menuOpen };
    case "PAGES":
      return { ...state, activeMenu: "page", menuOpen: !state.menuOpen };
    case "CONTACT":
      return { ...state, activeMenu: "contact", menuOpen: !state.menuOpen };
    // ...
    default:
      return { activeMenu: "" };
  }
}
function Fixbar() {
  const [state, dispatch] = useReducer(reducer, initialState);
  function handleMenu(menuName) {
    dispatch({ type: "TOGGLE", payload: menuName });
  }
  useEffect(() => {
    const burger = document.querySelector(".mobile-menu-btn");
    const nav = document.querySelector(".main-nav-js");
    const menuClose = document.querySelector(".menu-close-btn");
    burger.addEventListener("click", () => {
      nav.classList.add("show-menu");
    });
    menuClose.addEventListener("click", () => {
      nav.classList.remove("show-menu");
    });
  });
  const stylses = {
    animation: "0.8s  navLinkFade",
  };

  return (
    <div className=" fixed-sidebar main-nav-js">
      <div className="menu-close-btn d-lg-none d-flex">
        <i className="bi bi-x-lg" />
      </div>
      <div className="mobile-logo-area d-flex justify-content-start align-items-center">
        <div className="header-logo">
          <a href="index.html">
            <img
              alt="image"
              className="img-fluid"
              src="assets/images/bg/header-logo.svg"
            />
          </a>
        </div>
      </div>
      <div className="sidebar-menu-area">
        <ul className="menu-list">
          <li className="menu-item-has-children menu-item">
            <a href="#" className="drop-down">
              {" "}
              Home
            </a>
            <i className="bi bi-plus" onClick={() => handleMenu("home-one")} />
            <ul
              style={state.activeMenu === "home-one" ? stylses : {}}
              className={
                state.activeMenu === "home-one"
                  ? "sub-menu d-block"
                  : "sub-menu"
              }
            >
              <li>
                <Link legacyBehavior href="">
                  Home One
                </Link>
              </li>
              <li>
                <a href="index2.html">Home Two</a>
              </li>
              <li>
                <a href="index-pagination-slider.html">
                  Home Pagination Slider
                </a>
              </li>
              <li>
                <a href="index-masonary.html">Home Masonary</a>
              </li>
              <li>
                <a href="index-carousel.html">Home Carousel</a>
              </li>
              <li>
                <a href="index-portfolio.html">Home Portfolio</a>
              </li>
              <li>
                <a href="index-video.html">Home Video</a>
              </li>
              <li>
                <a href="index-center-slider.html">Home Center Slide</a>
              </li>
              <li>
                <a href="index-bg-image.html">Home Image Background</a>
              </li>
              <li>
                <a href="index-fixed-sidebar.html">Home Fixed Sidebar</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children menu-item">
            <a href="#" className="drop-down">
              {" "}
              About
            </a>
            <i className="bi bi-plus" onClick={() => handleMenu("about")} />
            <ul
              style={state.activeMenu === "about" ? stylses : {}}
              className={
                state.activeMenu === "about" ? "sub-menu d-block" : "sub-menu"
              }
            >
              <li>
                <a href="about-me.html">About Me</a>
              </li>
              <li>
                <a href="about-us.html">About Us</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children menu-item">
            <a href="portfolio-column-four.html"> Portfolio</a>
            <i className="bi bi-plus" onClick={() => handleMenu("portfolio")} />
            <ul
              style={state.activeMenu === "portfolio" ? stylses : {}}
              className={
                state.activeMenu === "portfolio"
                  ? "sub-menu d-block"
                  : "sub-menu"
              }
            >
              <li>
                <Link legacyBehavior href="/portfolio-column-two">
                  <a>Portfolio Grid 02</a>
                </Link>
              </li>
              <li>
                <a href="portfolio-column-three.html">Portfolio Grid 03</a>
              </li>
              <li>
                <a href="portfolio-column-four.html">Portfolio Grid 04</a>
              </li>
              <li>
                <a href="portfolio-text-down.html">Portfolio Text Down</a>
              </li>
              <li>
                <a href="portfolio-details.html">Portfolio Details</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children menu-item">
            <a href="#" className="drop-down">
              {" "}
              Pages
            </a>
            <i className="bi bi-plus" onClick={() => handleMenu("page")} />
            <ul
              style={state.activeMenu === "page" ? stylses : {}}
              className={
                state.activeMenu === "page" ? "sub-menu d-block" : "sub-menu"
              }
            >
              <li>
                <a href="gallery-column-four.html">Gallery Column Four</a>
              </li>
              <li>
                <a href="gallery-fullwidth.html">Gallery Full Width</a>
              </li>
              <li>
                <a href="gallery-parallax.html">Gallery Parallax</a>
              </li>
              <li>
                <a href="pricing.html">Pricing</a>
              </li>
              <li>
                <a href="client.html">Client</a>
              </li>
              <li>
                <a href="service-one.html">Services</a>
              </li>
              <li>
                <a href="team-one.html">Team One</a>
              </li>
              <li>
                <a href="team-two.html">Team Two</a>
              </li>
              <li>
                <a href="faq.html">Faq</a>
              </li>
              <li>
                <a href="testimonial.html">Testimonial</a>
              </li>
              <li>
                <a href="booking.html">Booking</a>
              </li>
              <li>
                <a href="error.html">Error</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children menu-item">
            <a href="blog-grid-one.html">Blog</a>
            <i className="bi bi-plus" onClick={() => handleMenu("blog")} />
            <ul
              className={state.activeMenu === "blog" ? "sub-menus" : "sub-menu"}
            >
              <li>
                <a href="blog-grid-one.html">Blog Grid One</a>
              </li>
              <li>
                <a href="blog-standard-one.html">Blog Standard 01</a>
              </li>
              <li>
                <a href="blog-standard-two.html">Blog Standard 02</a>
              </li>
              <li>
                <a href="blog-standard-three.html">Blog Standard 03</a>
              </li>
              <li>
                <a href="blog-details.html">Blog Details</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children menu-item">
            <a href="#" className="drop-down">
              {" "}
              Contact
            </a>
            <i className="bi bi-plus" onClick={() => handleMenu("contact")} />
            <ul
              className={
                state.activeMenu === "contact" ? "sub-menu d-block" : "sub-menu"
              }
            >
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
      </div>
      <div className="sidebar-address">
        <div className="sidebar-address-block">
          <h6>Email :</h6>
          <a href="mailto:support@example.com" className="mb-4">
            support@example.com
          </a>
          <h6>Phone :</h6>
          <a href="tel:+012-3456-789102">+012-3456-789102</a>
        </div>
        <div className="sidebar-social d-flex justify-content-start gap-5 pt-3">
          <a href="https://www.instagram.com/">
            <img src="assets/images/icons/instagram.svg" alt="image" />
          </a>
          <a href="https://www.dribbble.com/">
            <img src="assets/images/icons/dribbble.svg" alt="image" />
          </a>
          <a href="https://www.pinterest.com/">
            <img src="assets/images/icons/pinterest.svg" alt="image" />
          </a>
          <a href="https://www.twitter.com/">
            <img src="assets/images/icons/Twitter.svg" alt="image" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Fixbar;
