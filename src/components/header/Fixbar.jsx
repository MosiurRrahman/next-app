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
          <Link legacyBehavior href="/">
            <a>
              <img
                alt="image"
                className="img-fluid"
                src="assets/images/bg/header-logo.svg"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="sidebar-menu-area">
        <ul className="menu-list">
          <li className="menu-item-has-children menu-item">
            <a href="#" className="drop-down">
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
          <li className="menu-item-has-children menu-item">
            <a href="#" className="drop-down">
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
          <li className="menu-item-has-children menu-item">
            <Link legacyBehavior href="/portfolio-column-four">
              <a>Portfolio</a>
            </Link>
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
                <Link legacyBehavior href="/portfolio-column-three">
                  <a>Portfolio Grid 03</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/portfolio-column-four">
                  <a>Portfolio Grid 04</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/portfolio-text-down">
                  <a>Portfolio Text Down</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/portfolio-details">
                  <a>Portfolio Details</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children menu-item">
            <a href="#" className="drop-down">
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
          <li className="menu-item-has-children menu-item">
            <Link legacyBehavior href="/blog-grid-one">
              <a>Blog</a>
            </Link>
            <i className="bi bi-plus" onClick={() => handleMenu("blog")} />
            <ul
              className={state.activeMenu === "blog" ? "sub-menus" : "sub-menu"}
            >
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
          <li className="menu-item-has-children menu-item">
            <a href="#" className="drop-down">
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
