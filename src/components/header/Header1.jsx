import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";
const initialState = {
  activeMenu: "",
  menuOpen: false,
  scrollY: 0,
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
function Header1() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentRoute = useRouter().pathname;
  const headerRef = useRef(null);
  function handleMenu(menuName) {
    dispatch({ type: "TOGGLE", payload: menuName });
  }

  useEffect(() => {
    const burger = document.querySelector(".mobile-menu");

    const nav = document.querySelector(".main-nav");
    const menuClose = document.querySelector(".remove");
    burger.addEventListener("click", () => {
      nav.classList.add("slidenav");
    });
    menuClose.addEventListener("click", () => {
      nav.classList.remove("slidenav");
    });
  });
  useEffect(() => {
    const header = headerRef.current;

    function handleScroll() {
      if (window.pageYOffset > 0) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      ref={headerRef}
      className={
        currentRoute === "/"
          ? "header-1 sticky_top"
          : currentRoute === "/index2"
          ? "header-2 sticky_top"
          : currentRoute === "/index3"
          ? "header-3 sticky_top"
          : "header-2 sticky_top"
      }
    >
      <div className="header-logo">
        <a href="index.html">
          <img
            src={
              currentRoute === "/"
                ? "assets/images/logo.svg"
                : currentRoute === "/index2"
                ? "assets/images/home2/logo.svg"
                : currentRoute === "/index3"
                ? "assets/images/home3/logo.svg"
                : "assets/images/home2/logo.svg"
            }
            alt=""
          />
        </a>
      </div>
      <div className="main-menu">
        <nav className="main-nav">
          <div className="mobile-menu-logo">
            <a href="index.html">
              <img src="assets/images/logo.svg" alt="" />
            </a>
            <div className="remove">
              <i className="bi bi-plus-lg" />
            </div>
          </div>
          <ul>
            <li className="has-child active">
              <a href="index.html">Home</a>
              <i
                className="bi bi-chevron-down"
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
                    <a>Home 01</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index2">
                    <a>Home 02</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index3">
                    <a>Home 03</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li className="has-child">
              <Link legacyBehavior href="/service">
                <a>Services</a>
              </Link>
              <i className="bi bi-chevron-down" />
              <ul className="sub-menu">
                <li>
                  <Link legacyBehavior href="/service">
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/service-details">
                    <a>Service Details</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="has-child">
              <Link legacyBehavior href="/blog">
                <a>Blogs</a>
              </Link>
              <i className="bi bi-chevron-down" />
              <ul className="sub-menu">
                <li>
                  <Link legacyBehavior href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-sidebar">
                    <a>Blog Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-standard">
                    <a>Blog Standard</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-details">
                    <a>Blog Details</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="has-child">
              <a href="#">Pages</a>
              <i className="bi bi-chevron-down" />
              <ul className="sub-menu">
                <li>
                  <Link legacyBehavior href="/login">
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/sign-up">
                    <a>Sign Up</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/error">
                    <a>Error 404</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/faq">
                    <a>FAQs</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/account">
                    <a>My Account</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
          <div className="my-account">
            <Link legacyBehavior href="/account">
              <a>My Account</a>
            </Link>
          </div>
        </nav>
      </div>
      <div className="header-right">
        <div className="phone">
          <div className="icon">
            <img src="assets/images/icons/phone.svg" alt="" />
          </div>
          <div className="phn-info">
            <span>Call Us Now</span>
            <a href="tel:01701111000">+880 170 1111 000</a>
          </div>
        </div>
        <div className="wishlist">
          <Link legacyBehavior href="/account">
            <a>
              <i className="bi bi-suit-heart" />
            </a>
          </Link>
        </div>
        <div className="account-btn">
          <Link legacyBehavior href="/account">
            <a>My Account</a>
          </Link>
        </div>
        <div className="mobile-menu">
          <a href="#" className="cross-btn">
            <span className="cross-top" />
            <span className="cross-middle" />
            <span className="cross-bottom" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header1;
