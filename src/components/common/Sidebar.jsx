import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer } from "react";

function Sidebar() {
  /*---------Using reducer mange the active or inactive menu----------*/
  const initialState = { activeMenu: "" };
  function reducer(state, action) {
    switch (action.type) {
      case "home":
        return { activeMenu: "home" };
      case "about":
        return { activeMenu: "about" };
      case "blog":
        return { activeMenu: "blog" };
      case "pages":
        return { activeMenu: "pages" };
      case "portfolio":
        return { activeMenu: "portfolio" };
      case "contact":
        return { activeMenu: "contact" };
      default:
        return { activeMenu: "" };
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentRoute = useRouter().pathname;
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
  return (
    <>
      <div className="main-nav-wrapper">
        <div className="main-nav-js">
          <div className="menu-close-btn">
            <i className="bi bi-x-lg" />
          </div>
          <div className="mobile-logo-area d-flex justify-content-start align-items-center">
            <div className="header-logo">
              <Link legacyBehavior href="/">
                <a>
                  {" "}
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
                <a href="#" className="drop-down" data-hover="Home">
                  {" "}
                  Home
                </a>
                <i
                  className="bi bi-plus dropdown-icon"
                  onClick={() => dispatch({ type: "home" })}
                />
                <ul
                  className={
                    state.activeMenu === "home"
                      ? "sub-menu  d-block"
                      : "sub-menu d-none"
                  }
                >
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
              <li className="menu-item-has-children menu-item">
                <Link legacyBehavior href="#" data-hover="About">
                  <a className="drop-down">About</a>
                </Link>
                <i
                  className="bi bi-plus dropdown-icon"
                  onClick={() => dispatch({ type: "about" })}
                />
                <ul
                  className={
                    state.activeMenu === "about"
                      ? "sub-menu  d-block"
                      : "sub-menu  d-none"
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
                <Link
                  legacyBehavior
                  href="/portfolio-column-four"
                  data-hover="Portfolio"
                >
                  <a>Portfolio</a>
                </Link>
                <i
                  className="bi bi-plus dropdown-icon"
                  onClick={() => dispatch({ type: "portfolio" })}
                />
                <ul
                  className={
                    state.activeMenu === "portfolio"
                      ? "sub-menu  d-block"
                      : "sub-menu  d-none"
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
                    <Link legacyBehavior href="/portfolio-details">
                      <a>Portfolio Details</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children menu-item">
                <Link legacyBehavior href="#" data-hover="Pages">
                  <a className="drop-down">Pages</a>
                </Link>
                <i
                  className="bi bi-plus dropdown-icon"
                  onClick={() => dispatch({ type: "pages" })}
                />
                <ul
                  className={
                    state.activeMenu === "pages"
                      ? "sub-menu  d-block"
                      : "sub-menu  d-none"
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
                <Link legacyBehavior href="/blog-grid-one" data-hover="Blog">
                  Blog
                </Link>
                <i
                  className="bi bi-plus dropdown-icon"
                  onClick={() => dispatch({ type: "blog" })}
                />
                <ul
                  className={
                    state.activeMenu === "blog"
                      ? "sub-menu  d-block"
                      : "sub-menu  d-none"
                  }
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
                <Link legacyBehavior href="#" data-hover="Contact">
                  <a className="drop-down">Contact</a>
                </Link>
                <i
                  className="bi bi-plus dropdown-icon"
                  onClick={() => dispatch({ type: "contact" })}
                />
                <ul
                  className={
                    state.activeMenu === "contact"
                      ? "sub-menu  d-block"
                      : "sub-menu  d-none"
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
          <div className="sidebar-social d-flex justify-content-center gap-5">
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
    </>
  );
}

export default Sidebar;
