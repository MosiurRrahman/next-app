import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";
const initialState = {
  activeMenu: "",
  menuOpen: false,
  modalOpen: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      if (state.activeMenu === action.payload) {
        return { ...state, activeMenu: "", menuOpen: !state.menuOpen };
      } else {
        return {
          ...state,
          activeMenu: action.payload,
          menuOpen: !state.menuOpen,
        };
      }
    case "TOGGLE_MODAL":
      return { ...state, modalOpen: !state.modalOpen };
    case "HOME_ONE":
      return { ...state, activeMenu: "home-one", menuOpen: !state.menuOpen };
    case "JOB_CATEGORY":
      return {
        ...state,
        activeMenu: "job-category",
        menuOpen: !state.menuOpen,
      };
    case "COMPANY":
      return { ...state, activeMenu: "company", menuOpen: !state.menuOpen };
    case "BLOG":
      return { ...state, activeMenu: "blog", menuOpen: !state.menuOpen };
    case "PAGES":
      return { ...state, activeMenu: "pages", menuOpen: !state.menuOpen };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    default:
      return { ...state };
  }
}
function Header3() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const headerRef = useRef(null);
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  function handleMenu(menuName) {
    dispatch({ type: "TOGGLE", payload: menuName });
  }

  function toggleModal() {
    dispatch({ type: "TOGGLE_MODAL" });
  }
  const currentRoute = useRouter().pathname;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const mobileBtn = document.querySelector(".mobile-menu-btn");

    const nav = document.querySelector(".main-nav");
    const menuClose = document.querySelector(".menu-close-btn");
    mobileBtn.addEventListener("click", () => {
      nav.classList.add("show-menu");
    });
    menuClose.addEventListener("click", () => {
      nav.classList.remove("show-menu");
    });
  });
  return (
    <>
      <div className="topbar-three d-md-flex d-none">
        <div className="topbar-left">
          <h6>
            Welcome Our IT Company, Subscribe Our{" "}
            <Link legacyBehavior href="/faq">
              <a>Newsletter</a>
            </Link>
          </h6>
        </div>
        <div className="topbar-right">
          <div className="social-list">
            <ul className="social-style-two">
              <li>
                <a href="https://www.linkedin.com/">
                  <i className="bx bxl-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/">
                  <i className="bx bxl-pinterest-alt" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.32809515636!2d90.3665091154322!3d23.806929392530332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1671510521035!5m2!1sen!2sbd"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-search ${state.modalOpen ? "slide" : ""}`}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center gy-4">
            <div className="col-10">
              <label>Get StartWhat are you looking for?</label>
              <input
                type="text"
                placeholder="Search Products, Category, Services"
              />
            </div>
            <div className="col-2 d-flex justify-content-end align-items-center gap-2">
              <div className="search-cross-btn ">
                <i className="bi bi-search" />
              </div>
              <div className="search-cross-btn " onClick={toggleModal}>
                <i className="bi bi-x-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <header
        ref={headerRef}
        className={
          state.scrollY > 120
            ? "header-area style-3 pl-110 pr-110 sticky"
            : "header-area style-3 pl-110 pr-110"
        }
      >
        <div className="container-fluid d-flex justify-content-between align-items-center px-0">
          <div className="header-logo">
            <Link legacyBehavior href="/">
              <a>
                <img
                  alt="image"
                  className="img-fluid"
                  src="assets/images/bg/header3-logo.svg"
                />
              </a>
            </Link>
          </div>
          <div className="main-nav">
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      alt="image"
                      className="img-fluid"
                      src="assets/images/bg/header3-logo.svg"
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
                  <a className="drop-down active">Home</a>
                </Link>

                <i
                  className="bi bi-chevron-down dropdown-icon"
                  onClick={() => handleMenu("home-one")}
                />
                <ul
                  className={
                    state.activeMenu === "home-one"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }
                >
                  <li>
                    <Link legacyBehavior href="/">
                      <a className="active">Home Digital Agency</a>
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
                <i
                  className="bi bi-chevron-down dropdown-icon"
                  onClick={() => handleMenu("pages")}
                />
                <ul
                  className={
                    state.activeMenu === "pages"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }
                >
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
                  <li>
                    <Link legacyBehavior href="/error">
                      <a>Error</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link legacyBehavior href="/services" className="drop-down">
                  <a>Services</a>
                </Link>
                <i
                  className="bi bi-chevron-down dropdown-icon"
                  onClick={() => handleMenu("service")}
                />
                <ul
                  className={
                    state.activeMenu === "service"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }
                >
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
                      <a>Services Four</a>
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
                <i
                  className="bi bi-chevron-down dropdown-icon"
                  onClick={() => handleMenu("portfolio")}
                />
                <ul
                  className={
                    state.activeMenu === "portfolio"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }
                >
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
                <i
                  className="bi bi-chevron-down dropdown-icon"
                  onClick={() => handleMenu("blog")}
                />
                <ul
                  className={
                    state.activeMenu === "blog"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }
                >
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
                <Link legacyBehavior href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
            {/* mobile-search-area */}
            <div className="d-flex justify-content-start align-items-center flex-row d-lg-none d-block mt-5">
              <Link legacyBehavior href="/service-details">
                <a className="eg-btn btn--md btn--primary-three d-flex d-lg-none">
                  Request a Quote
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-right header-five-right d-flex jsutify-content-end align-items-center gap-sm-5 gap-4">
            <div className="header-icons">
              <a href="#" className="search-btn" onClick={toggleModal}>
                <i className="bi bi-search" />
              </a>
              <a href="#" className="cart-icon">
                <i className="bi bi-bag-check" />
              </a>
            </div>
            <Link legacyBehavior href="/service-details">
              <a className="eg-btn btn--md btn--primary-three d-xl-flex d-none">
                Request a Quote
              </a>
            </Link>
            <div className="header-phone">
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

export default Header3;
