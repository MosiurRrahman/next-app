import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useState } from "react";

export default function Header() {
  const currentRoute = useRouter().pathname;
  const [active, setActive ] = useState(false);
  const [sidebar, setSidebar ] = useState(false);
  const [profile, setProfole ] = useState(false);
  const hanldeSearchFullScreen = () => {
    if (active === false || active === 0) {
      setActive(1);
      
    } else {
      setActive(false);
    }
  };
  const hanldeProfile = () => {
    if (profile === false || profile === 0) {
      setProfole(1);
      
    } else {
      setProfole(false);
    }
  };
  const hanldeSidebar = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
      
    } else {
      setSidebar(false);
    }
  };
  const initialState = { activeMenu: "", props: "" };
  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case "searchbarActive":
        return { props: "searchbarActive" };
      case "sidebarOff":
        return { props: "sidebarOff" };
      case "pages":
        return { activeMenu: "pages" };
      case "news":
        return { activeMenu: "news" };
      case "brows":
        return { activeMenu: "brows" };
      case "itwork":
        return { activeMenu: "itwork" };
      case "about":
        return { activeMenu: "about" };
      case "contact":
        return { activeMenu: "contact" };
      default:
        return { activeMenu: "" };
    }
  }

  /*----------- Method that will fix header after a specific scrollable -----------*/
  const isSticky = (e) => {
    const header = document.querySelector(".header-area");
    const scrollTop = window.scrollY;
    scrollTop >= 20
      ? header.classList.add("sticky")
      : header.classList
      ? header.classList.remove("sticky")
      : header.classList.add("sticky");
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  return (
    <header>
      <div
        className={
          currentRoute === "/"
            ? "header-area"
            : currentRoute === "/index2"
            ? "header-area-2 header-area"
            : "header-area"
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
              <div className="navbar-wrap">
                <div className="logo d-flex justify-content-between">
                  <Link href="/">
                    <a className="navbar-brand">
                      <img src="assets/images/logo.png" alt="logo" />
                    </a>
                  </Link>
                </div>
                <div className="navbar-icons">
                  <div className="searchbar-open">
                    <i className="flaticon-magnifier" />
                  </div>
                  <div className="user-dropdown-icon">
                    <i className="flaticon-user" onClick={hanldeProfile} />
                    <div className={profile===1?"account-dropdown":""}>
                      <ul>
                        <li className="account-el">
                          <i className="bx bx-user-pin" />
                          <Link href="#">
                            <a>Sign in</a>
                          </Link>
                        </li>
                        <li className="account-el">
                          <i className="bx bxs-user-account" />
                          <Link href="#">
                            <a>My Account</a>
                          </Link>
                        </li>
                        <li className="account-el">
                          <i className="bx bx-extension" />
                          <Link href="#">
                            <a>Settings</a>
                          </Link>
                        </li>
                        <li className="account-el">
                          <i className="bx bx-log-in-circle" />
                          <Link href="#">
                            <a>Log out</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mobile-menu d-flex ">
                    <div className="top-search-bar m-0 d-block d-xl-none"></div>
                    <a
                      href="#"
                      onClick={hanldeSidebar}
                      className={
                        sidebar === 1
                          ? "hamburger d-block d-xl-none h-active"
                          : "hamburger d-block d-xl-none"
                      }
                    >
                      <span className="h-top"  />
                      <span className="h-middle" />
                      <span className="h-bottom" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
              <nav className={sidebar === 1 ? "main-nav slidenav" : "main-nav "}>
                <div className="navber-logo-sm">
                  <img
                    src="assets/images/logo-2.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <ul>
                  <li className="has-child-menu">
                    <Link href="#">
                      <a>Home</a>
                    </Link>
                    <i className="fl flaticon-plus">+</i>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">
                          <a className="sub-item">Home Page 1</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/index2">
                          <a className="sub-item">Home Page 2</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destination">
                      <a>Destinations</a>
                    </Link>
                  </li>
                  <li className="has-child-menu">
                    <Link href="#">
                      <a>Tour Package</a>
                    </Link>
                    <i className="fl flaticon-plus">+</i>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/package">
                          <a className="sub-item">package</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/package-sidebar">
                          <a className="sub-item">package sidebar</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/package-standard">
                          <a className="sub-item">package standard</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/package-details">
                          <a className="sub-item">package details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child-menu">
                    <Link href="#">
                      <a>Blogs</a>
                    </Link>
                    <i className="fl flaticon-plus">+</i>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/blog">
                          <a className="sub-item">Blog page</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-sidebar">
                          <a className="sub-item">Blog sidebar</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-standard">
                          <a className="sub-item">Blog standard </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <a className="sub-item">blog-details </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child-menu">
                    <Link href="#">
                      <a>Pages</a>
                    </Link>
                    <i className="fl flaticon-plus">+</i>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/gallary">
                          <a className="sub-item">gallary page</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/guide">
                          <a className="sub-item">guide page</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/destination">
                          <a className="sub-item">destination page</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/404">
                          <a className="sub-item">error page </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq">
                          <a className="sub-item">FAQ page </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact Us </a>
                    </Link>
                  </li>
                </ul>
                <div className="navbar-icons-2">
                  <div
                    className="searchbar-open"
                    onClick={hanldeSearchFullScreen}
                  >
                    <i className="flaticon-magnifier" />
                  </div>
                  <div className="user-dropdown-icon" onClick={hanldeProfile}>
                    <i className="flaticon-user" />
                    <div className={profile === 1? "account-dropdown activeCard":"account-dropdown"}>
                      <ul>
                        <li className="account-el">
                          <i className="bx bx-user-pin" />
                          <Link href="#">
                            <a>Sign in</a>
                          </Link>
                        </li>
                        <li className="account-el">
                          <i className="bx bxs-user-account" />
                          <Link href="#">
                            <a>My Account</a>
                          </Link>
                        </li>
                        <li className="account-el">
                          <i className="bx bx-extension" />
                          <Link href="#">
                            <a>Settings</a>
                          </Link>
                        </li>
                        <li className="account-el">
                          <i className="bx bx-log-in-circle" />
                          <Link href="#">
                            <a>Log out</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="sidebar-contact">
                  <ul>
                    <li className="sidebar-single-contact">
                      <i className="bx bxs-phone" />{" "}
                      <a href="tel:+17632275032">+1 763-227-5032</a>
                    </li>
                    <li className="sidebar-single-contact">
                      <i className="bx bxs-envelope" />
                      <a href="mailto:info@example.com">info@example.com</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <form>
          <div
            className={
              active ===1
                ? "main-searchbar activeSearch"
                : "main-searchbar"
            }
          >
            <div
              className="searchbar-close"
              onClick={hanldeSearchFullScreen}
            >
              <i className="bx bx-x" />
            </div>
            <input type="text" placeholder="Search Here......" />
            <div className="searchbar-icon">
              <i className="bx bx-search" />
            </div>
          </div>
        </form>
      </div>
    </header>
  );
}
