import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";
const initialState = {
  activeMenu: "",
  menuOpen: false,
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
function Header5() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const headerRef = useRef(null);
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  const currentRoute = useRouter().pathname;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function handleMenu(menuName) {
    dispatch({ type: "TOGGLE", payload: menuName });
  }

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
      <header
        ref={headerRef}
        className={state.scrollY > 120 ? "style-1 sticky" : "style-1"}
      >
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
                    <Link legacyBehavior href="/">
                      <a>
                        <img
                          alt="image"
                          src="assets/images/bg/header-logo1.svg"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="menu-close-btn">
                    <i className="bi bi-x-lg text-dark" />
                  </div>
                </div>
                {/* mobile-nav */}
                <div className="d-lg-flex justify-content-xxl-between justify-content-xl-center justify-content-lg-end align-items-center px-xl-5 px-0">
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
                      <Link
                        legacyBehavior
                        href="/services"
                        className="drop-down"
                      >
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
