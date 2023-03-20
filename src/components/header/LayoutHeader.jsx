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

function LayoutHeader() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function handleMenu(menuName) {
    dispatch({ type: "TOGGLE", payload: menuName });
  }
  const currentRoute = useRouter().pathname;
  useEffect(() => {
    const burger = document.querySelector(".mobile-menu-btn");

    const nav = document.querySelector(".main-menu");
    const menuClose = document.querySelector(".menu-close-btn");
    burger.addEventListener("click", () => {
      nav.classList.add("show-menu");
    });
    menuClose.addEventListener("click", () => {
      nav.classList.remove("show-menu");
    });
  });
  return (
    <header
      ref={headerRef}
      className={
        state.scrollY > 120
          ? "header-area style-2 sticky"
          : "header-area style-2"
      }
    >
      <div className="header-main-logo d-lg-block d-none ">
        <Link legacyBehavior href="/">
          <a>
            <img alt="image" src="/assets/images/header1-logo.svg" />
          </a>
        </Link>
      </div>
      <div className="menu-topbar-area">
        <div className="top-bar">
          <p>
            Welcome Our Job Portal!{" "}
            <Link legacyBehavior href="/bookmark">
              <a>Save Jobs</a>
            </Link>
          </p>
          <div className="top-bar-right">
            <div className="language-select">
              <img src="/assets/images/icon/flag-eng.svg" alt="image" />
              <span>Language</span>
              <ul className="topbar-sublist">
                <li>
                  <img src="/assets/images/icon/flag-germeny.svg" alt="image" />
                  <span>Germeny</span>
                </li>
                <li>
                  <img src="/assets/images/icon/flag-french.svg" alt="image" />
                  <span>French</span>
                </li>
                <li>
                  <img src="/assets/images/icon/flag-bangla.svg" alt="image" />
                  <span>Bengali</span>
                </li>
              </ul>
            </div>
            <div className="social-area">
              <ul>
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <i className="bx bxl-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="menu-area">
          <div className="header-logo">
            <Link legacyBehavior href="/">
              <a>
                <img
                  alt="image"
                  className="img-fluid"
                  src="/assets/images/header1-logo.svg"
                />
              </a>
            </Link>
          </div>
          <div className="main-menu">
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <Link legacyBehavior href="/">
                  <a>
                    <img alt="image" src="/assets/images/header1-logo.svg" />
                  </a>
                </Link>
              </div>
              <div className="menu-close-btn">
                <i className="bi bi-x-lg" />
              </div>
            </div>
            <ul className="menu-list">
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Home
                </a>
                <i className="bi bi-plus dropdown-icon" />
                <ul className="sub-menu">
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
                    <Link legacyBehavior href="/index3">
                      <a>Home Three</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/index4">
                      <a>Home Four</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/index5">
                      <a>Home Five</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/index6">
                      <a className="active">Home Six</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Find Jobs
                </a>
                <i className="bi bi-plus dropdown-icon" />
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="/category">
                      <a
                        className={currentRoute === "/category" ? "active" : ""}
                      >
                        Job Category
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/job-listing1">
                      <a
                        className={
                          currentRoute === "/job-listing1" ? "active" : ""
                        }
                      >
                        Job Listing 01
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="/job-details">
                      <a
                        className={
                          currentRoute === "/job-details" ? "active" : ""
                        }
                      >
                        Job Details
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Pages
                </a>
                <i className="bi bi-plus dropdown-icon" />
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="/candidates-dashboard/dashboard">
                      <a
                        className={
                          currentRoute === "/candidates-dashboard/dashboard"
                            ? "active"
                            : ""
                        }
                      >
                        Candidate Dashboard
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/job-post">
                      <a
                        className={currentRoute === "/job-post" ? "active" : ""}
                      >
                        Post A Jobs
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/pricing-plan">
                      <a
                        className={
                          currentRoute === "/pricing-plan" ? "active" : ""
                        }
                      >
                        Pricing Plan
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/faq">
                      <a className={currentRoute === "/faq" ? "active" : ""}>
                        FAQ
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/error">
                      <a className={currentRoute === "/error" ? "active" : ""}>
                        Error
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/login">
                      <a className={currentRoute === "/login" ? "active" : ""}>
                        Login
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/register">
                      <a
                        className={currentRoute === "/register" ? "active" : ""}
                      >
                        Register
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Employers</a>
                <i className="bi bi-plus dropdown-icon" />
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="/company-listing1">
                      <a
                        className={
                          currentRoute === "/company-listing1" ? "active" : ""
                        }
                      >
                        Company Listing 01
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="/company-details">
                      <a>
                        {" "}
                        className=
                        {currentRoute === "/compnay-details" ? "active" : ""}
                        Company Details
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/company/company-dashboard">
                      <a
                        className={
                          currentRoute === "/company/company-dashboard"
                            ? "active"
                            : ""
                        }
                      >
                        Company Dashboard
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Blog</a>
                <i className="bi bi-plus dropdown-icon" />
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="/blog-grid">
                      <a
                        className={
                          currentRoute === "/bolg-grid" ? "active" : ""
                        }
                      >
                        Blog Grid
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog-right-sidebar">
                      <a
                        className={
                          currentRoute === "/blog-right-sidebar" ? "active" : ""
                        }
                      >
                        Blog Right Sidebar
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog-standard">
                      <a
                        className={
                          currentRoute === "/blog-standard" ? "active" : ""
                        }
                      >
                        Blog Standard
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog-details">
                      <a
                        className={
                          currentRoute === "/blog-details" ? "active" : ""
                        }
                      >
                        Blog Details
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="/contact">
                  <a className={currentRoute === "/contact" ? "active" : ""}>
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
            <div className="for-mobile-menu d-lg-none d-block">
              <div className="sign-in-btn mb-25">
                <Link legacyBehavior href="/login">
                  <a className="primry-btn-1 lg-btn">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.8033 2.19669C11.3868 0.780144 9.50329 0 7.5 0C5.49671 0 3.61324 0.780144 2.19669 2.19669C0.780144 3.61324 0 5.49671 0 7.5C0 9.50329 0.780144 11.3868 2.19669 12.8033C3.61324 14.2199 5.49671 15 7.5 15C9.50329 15 11.3868 14.2199 12.8033 12.8033C14.2199 11.3868 15 9.50329 15 7.5C15 5.49671 14.2199 3.61324 12.8033 2.19669ZM3.25504 12.5771C3.50269 10.4462 5.33478 8.80096 7.5 8.80096C8.64143 8.80096 9.71478 9.24568 10.5222 10.0529C11.2042 10.7351 11.6344 11.6258 11.7451 12.5769C10.5949 13.5402 9.11407 14.1211 7.5 14.1211C5.88593 14.1211 4.40517 13.5403 3.25504 12.5771ZM7.5 7.89574C6.24401 7.89574 5.22205 6.87378 5.22205 5.61779C5.22205 4.36169 6.24401 3.33984 7.5 3.33984C8.75599 3.33984 9.77795 4.36169 9.77795 5.61779C9.77795 6.87378 8.75599 7.89574 7.5 7.89574ZM12.5015 11.834C12.2776 10.9311 11.8105 10.0985 11.1436 9.43153C10.6034 8.89137 9.96437 8.48614 9.26743 8.23219C10.1052 7.66399 10.6569 6.70406 10.6569 5.61779C10.6569 3.87714 9.24065 2.46094 7.5 2.46094C5.75935 2.46094 4.34315 3.87714 4.34315 5.61779C4.34315 6.70464 4.89521 7.66491 5.73372 8.23299C5.09251 8.46668 4.49913 8.82797 3.98861 9.30359C3.24932 9.99207 2.73594 10.8699 2.4979 11.8333C1.48979 10.6712 0.878906 9.15562 0.878906 7.5C0.878906 3.84911 3.84911 0.878906 7.5 0.878906C11.1509 0.878906 14.1211 3.84911 14.1211 7.5C14.1211 9.15596 13.51 10.6718 12.5015 11.834Z" />
                    </svg>
                    Sign In
                  </a>
                </Link>
              </div>
              <div className="post-job-btn mb-30">
                <a className="primry-btn-2 lg-btn" href="#">
                  <svg
                    width={15}
                    height={13}
                    viewBox="0 0 15 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.1367 0H4.86329C4.66914 0 4.51173 0.151188 4.51173 0.337662V1.79366H1.43168C0.642247 1.79363 0 2.41049 0 3.16868V11.6249C0 12.3831 0.642247 13 1.43168 13H13.5683C14.3578 13 15 12.3831 15 11.6249V3.16868C15 2.41049 14.3578 1.79363 13.5683 1.79363H10.4883V0.337662C10.4883 0.15116 10.3309 0 10.1367 0ZM5.21485 0.675325H9.78518V1.79366H5.21485V0.675325ZM13.5683 12.3247H1.43168C1.02996 12.3247 0.703126 12.0108 0.703126 11.625V5.31469L5.6836 7.11899V8.14608C5.6836 8.33255 5.84102 8.48374 6.03517 8.48374H8.96486C9.15901 8.48374 9.31642 8.33255 9.31642 8.14608V7.11899L14.2969 5.31472V11.625C14.2969 12.0108 13.9701 12.3247 13.5683 12.3247ZM6.38673 7.80841V6.79543H8.6133V7.80841H6.38673ZM14.2969 3.16868V4.59294L9.3108 6.39926C9.28191 6.24073 9.13821 6.1201 8.96486 6.1201H6.03517C5.86182 6.1201 5.71812 6.2407 5.68923 6.39926L0.703126 4.59297V3.16868C0.703126 2.78284 1.02993 2.46896 1.43168 2.46896H13.5683C13.9701 2.46896 14.2969 2.78284 14.2969 3.16868ZM13.4071 11.0443C13.4071 11.2308 13.2497 11.382 13.0555 11.382H10.1697C9.97558 11.382 9.81816 11.2308 9.81816 11.0443C9.81816 10.8578 9.97558 10.7067 10.1697 10.7067H13.0555C13.2497 10.7067 13.4071 10.8578 13.4071 11.0443ZM1.89337 3.67202C1.89337 3.48555 2.05079 3.33436 2.24494 3.33436H4.09064C4.28479 3.33436 4.44221 3.48555 4.44221 3.67202C4.44221 3.8585 4.28479 4.00968 4.09064 4.00968H2.24494C2.05079 4.00968 1.89337 3.8585 1.89337 3.67202Z" />
                  </svg>
                  Post Job
                </a>
              </div>
              <div className="social-area">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nav-right d-flex jsutify-content-end align-items-center">
            <ul>
              <li>
                <div className="btn-group dropdown">
                  <div
                    className="notifications-area dropdown-toggle"
                    role="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="notifacation-icon">
                      <svg
                        width={16}
                        height={12}
                        viewBox="0 0 16 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 2C0 1.46957 0.210714 0.960859 0.585787 0.585786C0.960859 0.210714 1.46957 0 2 0H14C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12H2C1.46957 12 0.960859 11.7893 0.585787 11.4142C0.210714 11.0391 0 10.5304 0 10V2ZM2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V2.217L8 6.417L15 2.217V2C15 1.73478 14.8946 1.48043 14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H2ZM15 3.383L10.292 6.208L15 9.105V3.383ZM14.966 10.259L9.326 6.788L8 7.583L6.674 6.788L1.034 10.258C1.09083 10.4708 1.21632 10.6589 1.39099 10.7931C1.56566 10.9272 1.77975 11 2 11H14C14.2201 11 14.4341 10.9274 14.6088 10.7934C14.7834 10.6595 14.909 10.4716 14.966 10.259ZM1 9.105L5.708 6.208L1 3.383V9.105Z" />
                      </svg>
                    </div>
                    <span>3</span>
                  </div>
                  <div
                    className="notifacion-card dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <h6 className="title">3 Massages</h6>
                    <ul>
                      <li>
                        <div className="icon">
                          <img
                            src="/assets/images/bg/company-logo/notifacion-1.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6>
                            <a href="#">
                              Your application has accepted in 5 vacancies.
                            </a>
                          </h6>
                          <span>
                            <img src="/assets/images/icon/clock-1.svg" alt="" />{" "}
                            10 min ago
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img
                            src="/assets/images/bg/company-logo/notifacion-2.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6>
                            <a href="#">
                              Your application has accepted in 5 vacancies.
                            </a>
                          </h6>
                          <span>
                            <img src="/assets/images/icon/clock-1.svg" alt="" />{" "}
                            10 min ago
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img
                            src="/assets/images/bg/company-logo/notifacion-3.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6>
                            <a href="#">
                              Your application has accepted in 5 vacancies.
                            </a>
                          </h6>
                          <span>
                            <img src="/assets/images/icon/clock-1.svg" alt="" />{" "}
                            10 min ago
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="view-all">
                      <a href="#">See All Massages</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="btn-group dropdown">
                  <div
                    className="notifications-area dropdown-toggle"
                    role="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="notifacation-icon">
                      <svg
                        width={16}
                        height={18}
                        viewBox="0 0 16 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.37408 0.0465755C8.67279 0.120485 8.89683 0.247189 9.12442 0.472435C9.4907 0.834944 9.60093 1.15874 9.60093 1.89079V2.33777L9.87831 2.43983C11.5497 3.05223 12.8263 4.40723 13.3028 6.08603C13.47 6.66323 13.4806 6.81809 13.5126 8.47929C13.5446 10.2109 13.5624 10.4326 13.7651 11.2597C13.9856 12.1501 14.3874 13.0546 14.9102 13.836C15.1378 14.1773 15.344 14.4378 15.8739 15.0431C16.0872 15.2895 16.009 15.6872 15.7174 15.835C15.5823 15.9019 15.5147 15.9054 13.093 15.9054H10.6038L10.5824 16.0251C10.49 16.5143 10.0561 17.1478 9.56537 17.5068C9.34845 17.6652 8.95728 17.8517 8.67635 17.9327C8.38831 18.0136 7.68776 18.0242 7.39616 17.9502C6.50002 17.7285 5.7568 17.0528 5.48654 16.2187L5.38696 15.9054H2.90481C0.490226 15.9054 0.419104 15.9019 0.283973 15.835C0.191514 15.7893 0.116836 15.7154 0.0706072 15.6239C-0.0645256 15.3634 -0.0111828 15.1769 0.280416 14.8672C1.18722 13.9063 1.90911 12.5795 2.23627 11.2597C2.43896 10.4432 2.4603 10.2144 2.48875 8.47929C2.52075 6.81457 2.53142 6.66675 2.69856 6.08251C3.17152 4.41075 4.50861 2.99943 6.15864 2.42224L6.40045 2.33777V1.89079C6.40045 1.16226 6.51069 0.834944 6.88052 0.468916C7.27881 0.0712128 7.83711 -0.0871639 8.37408 0.0465755ZM7.75177 1.12354C7.5384 1.23265 7.46728 1.39806 7.46728 1.79929V2.1266H8.00069H8.53411V1.79225C8.53055 1.39806 8.47721 1.26432 8.26384 1.13762C8.09315 1.03555 7.93668 1.03204 7.75177 1.12354ZM7.3606 3.21764C6.84852 3.29507 6.53203 3.39362 6.06262 3.61887C4.80732 4.22774 3.95742 5.30822 3.64448 6.68435C3.59469 6.89903 3.57691 7.25098 3.55558 8.54968C3.53068 9.88708 3.51646 10.225 3.45601 10.6086C3.22842 12.0375 2.74834 13.2799 1.98023 14.4167C1.84154 14.6243 1.71708 14.8073 1.71352 14.8214C1.70641 14.839 4.53706 14.8496 8.00069 14.8496C11.4643 14.8496 14.295 14.839 14.2879 14.8214C14.2808 14.8073 14.1598 14.6243 14.0212 14.4167C13.2566 13.2834 12.7694 12.0234 12.5454 10.6121C12.4849 10.2285 12.4707 9.88357 12.4458 8.54968C12.4245 7.25098 12.4067 6.89903 12.3569 6.68435C12.1578 5.80447 11.7595 5.08297 11.1336 4.46354C10.7389 4.0764 10.3762 3.82299 9.8712 3.58367C9.09241 3.21764 8.20695 3.08742 7.3606 3.21764ZM6.50713 15.9265C6.50713 16.0145 6.76673 16.3982 6.91609 16.5319C7.5384 17.095 8.44876 17.1021 9.07108 16.5495C9.23821 16.3982 9.43024 16.1307 9.47647 15.9829L9.49781 15.9054H8.00425C7.17924 15.9054 6.50713 15.916 6.50713 15.9265Z" />
                        <path d="M13.5626 1.8943C13.6764 1.97173 14.1102 2.4363 14.3485 2.7425C15.2411 3.88986 15.8314 5.3786 15.963 6.82511C16.0199 7.43751 16.0127 7.64868 15.931 7.81057C15.8492 7.96895 15.6465 8.09213 15.4687 8.09213C15.1557 8.09213 14.9352 7.83169 14.9352 7.46214C14.9352 7.14891 14.8712 6.56819 14.7894 6.17401C14.5654 5.07593 13.9787 3.90393 13.2425 3.08389C12.7874 2.5806 12.766 2.54541 12.766 2.34128C12.766 2.14067 12.8407 1.99989 13.0007 1.8943C13.1394 1.8028 13.4239 1.80631 13.5626 1.8943Z" />
                        <path d="M3.00065 1.8943C3.16067 1.99989 3.23535 2.14067 3.23535 2.3448C3.23535 2.54541 3.22824 2.55597 2.74461 3.10149C2.01206 3.92505 1.43241 5.08648 1.21194 6.17401C1.13014 6.56819 1.06614 7.14891 1.06614 7.46214C1.06614 7.83169 0.845657 8.09213 0.532721 8.09213C0.354917 8.09213 0.152219 7.96895 0.0704293 7.81057C-0.0113609 7.6522 -0.0184731 7.43399 0.0348682 6.84271C0.173556 5.36452 0.781648 3.84058 1.6849 2.70731C1.96583 2.35536 2.3001 1.99285 2.42456 1.90486C2.57392 1.8028 2.85129 1.79928 3.00065 1.8943Z" />
                      </svg>
                    </div>
                    <span>5</span>
                  </div>
                  <div
                    className="notifacion-card dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <h6 className="title">5 Notifications</h6>
                    <ul>
                      <li>
                        <div className="icon">
                          <img
                            src="/assets/images/bg/company-logo/notifacion-1.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6>
                            <a href="#">
                              Your application has accepted in 5 vacancies.
                            </a>
                          </h6>
                          <span>
                            <img src="/assets/images/icon/clock-1.svg" alt="" />{" "}
                            10 min ago
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img
                            src="/assets/images/bg/company-logo/notifacion-2.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6>
                            <a href="#">
                              Your application has accepted in 5 vacancies.
                            </a>
                          </h6>
                          <span>
                            <img src="/assets/images/icon/clock-1.svg" alt="" />{" "}
                            10 min ago
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img
                            src="/assets/images/bg/company-logo/notifacion-3.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6>
                            <a href="#">
                              Your application has accepted in 5 vacancies.
                            </a>
                          </h6>
                          <span>
                            <img src="/assets/images/icon/clock-1.svg" alt="" />{" "}
                            10 min ago
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="view-all">
                      <a href="#">See All Notifications</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="btn-group dropdown">
                  <div
                    className="notifications-area dropdown-toggle"
                    role="button"
                    id="dropdownMenuButton3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="user-icon"
                      src="/assets/images/bg/user-img.png"
                      alt=""
                    />
                  </div>
                  <div
                    className="user-card dropdown-menu"
                    aria-labelledby="dropdownMenuButton3"
                  >
                    <ul>
                      <li>
                        <Link
                          legacyBehavior
                          href="/candidates-dashboard/my-profile"
                        >
                          <a>
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M18 9C18 4.02595 13.9747 0 9 0C4.02599 0 0 4.02525 0 9C0 13.8465 3.87552 17.9204 8.85554 17.9982C8.94013 18.002 9.12386 17.9985 9.12741 17.9985C9.12888 17.9985 9.13514 17.9984 9.13679 17.9983C14.0497 17.9256 18 13.922 18 9ZM9 0.527344C13.6826 0.527344 17.4727 4.31677 17.4727 9C17.4727 10.9522 16.8164 12.8032 15.6091 14.3022C15.5881 13.3575 14.9755 12.5368 14.0707 12.2503L12.3649 11.7102C12.2684 11.6276 12.2938 11.6632 10.7234 10.8851V10.1543C11.4081 9.66815 11.8822 8.90072 11.9694 8.01584C12.2945 7.96071 12.5428 7.67707 12.5428 7.33655C12.5428 6.83149 12.5428 5.1711 12.5428 4.65304C12.5428 4.06216 12.0621 3.58147 11.4713 3.58147H11.4441C11.439 3.58147 11.4349 3.57736 11.4349 3.5723C11.4349 2.98143 10.9542 2.50073 10.3633 2.50073H7.57923C6.40856 2.50073 5.45618 3.45312 5.45618 4.62379C5.45618 4.7694 5.57423 4.88746 5.71985 4.88746C5.86547 4.88746 5.98352 4.7694 5.98352 4.62379C5.98352 3.74389 6.69934 3.02808 7.57923 3.02808H10.3633C10.6634 3.02808 10.9075 3.2722 10.9075 3.5723C10.9075 3.86814 11.1482 4.10882 11.4441 4.10882H11.4713C11.7714 4.10882 12.0155 4.35294 12.0155 4.65304V6.15357H11.7209C11.5563 6.15357 11.4224 6.01966 11.4224 5.8551V5.54745C11.4224 4.96266 10.8515 4.5501 10.2963 4.73361C9.46037 5.00991 8.53956 5.00998 7.70252 4.73347C7.14723 4.5501 6.57654 4.96266 6.57654 5.54734V5.8551C6.57654 6.0197 6.44263 6.15361 6.27806 6.15361H5.98349V5.84237C5.98349 5.69675 5.86543 5.5787 5.71982 5.5787C5.5742 5.5787 5.45614 5.69675 5.45614 5.84237V7.33658C5.45614 7.67714 5.70449 7.96075 6.02961 8.01591C6.11677 8.90082 6.59092 9.66821 7.27555 10.1544V10.8854C5.70839 11.662 5.7291 11.6293 5.63428 11.7105L3.92931 12.2503C3.02456 12.5368 2.41196 13.3575 2.39098 14.3023C1.18361 12.8032 0.527344 10.9522 0.527344 9C0.527344 4.3174 4.31677 0.527344 9 0.527344ZM5.97706 13.7489L6.18198 13.5444C6.39587 13.3309 6.44646 13.0069 6.30791 12.7383L5.98282 12.108L7.04827 11.5846C6.93489 12.0588 6.93858 12.58 6.99318 13.0684C6.99321 13.0688 6.99328 13.0692 6.99332 13.0695C7.12969 14.2874 7.62683 15.6689 8.12366 16.7889C7.30547 15.9655 6.21204 14.7544 5.93666 13.9148C5.9175 13.8565 5.933 13.7929 5.97706 13.7489ZM5.98345 6.68092H6.27803C6.73341 6.68092 7.10385 6.31044 7.10385 5.85506V5.5473C7.10385 5.32332 7.32203 5.16322 7.53813 5.23452C8.48081 5.5459 9.51912 5.54586 10.4618 5.23431C10.6754 5.16375 10.8951 5.32238 10.8951 5.54745V5.8551C10.8951 6.31048 11.2655 6.68092 11.7209 6.68092H12.0155V7.33655C12.0155 7.4257 11.943 7.4982 11.8538 7.4982C11.6417 7.4982 11.465 7.6647 11.4516 7.87729C11.3702 9.16734 10.2932 10.1779 8.99947 10.1779C7.70583 10.1779 6.62871 9.16734 6.54736 7.87729C6.53396 7.66473 6.35727 7.4982 6.14514 7.4982C6.05598 7.4982 5.98349 7.4257 5.98349 7.33655V6.68092H5.98345ZM8.99975 17.4124C8.82865 17.0692 8.5976 16.5802 8.36648 16.0129L8.79947 14.31H9.2005L9.6332 16.0124C9.40166 16.5809 9.17033 17.0703 8.99975 17.4124ZM8.65315 12.7027C8.50391 12.8274 8.19777 13.0831 7.95843 13.283C7.90847 13.3247 7.83693 13.3245 7.7875 13.2839L7.50881 12.9393C7.46272 12.4771 7.46729 11.9661 7.61164 11.5286L8.65315 12.7027ZM7.8724 13.8421C7.93962 13.8421 8.0068 13.8312 8.07173 13.8106L8.30679 14.1077L8.04125 15.1521C7.88917 14.7136 7.75206 14.2564 7.65127 13.8032C7.72267 13.8286 7.79737 13.8421 7.8724 13.8421ZM9.27341 13.7827H8.72205L8.5075 13.5115L9.02869 13.0761L9.50013 13.4792L9.27341 13.7827ZM10.0509 13.2563L9.40187 12.7014L10.3909 11.5383C10.5318 11.9728 10.5359 12.4761 10.4916 12.9287L10.2221 13.2589C10.1721 13.2992 10.1005 13.2988 10.0509 13.2563ZM8.99947 10.7052C9.42377 10.7052 9.82874 10.6153 10.1961 10.4538V10.9533L9.02644 12.3288L7.80286 10.9495V10.4537C8.17017 10.6153 8.57514 10.7052 8.99947 10.7052ZM9.95846 15.1513L9.69209 14.1033L9.93157 13.7828C9.99872 13.805 10.0684 13.8166 10.1381 13.8166C10.211 13.8166 10.2835 13.8038 10.3531 13.7798C10.2525 14.2379 10.1146 14.701 9.95846 15.1513ZM2.91727 14.8972V14.3523C2.91727 13.6176 3.38794 12.9748 4.08843 12.7531L5.49415 12.308C5.50821 12.3409 5.49376 12.3092 5.83924 12.9801C5.87211 13.0438 5.86013 13.1206 5.80943 13.1712L5.6045 13.3757C5.41877 13.5611 5.35402 13.8307 5.43558 14.0792C5.77213 15.1051 7.09611 16.5258 8.0048 17.4148C6.07549 17.1904 4.29476 16.3169 2.91727 14.8972ZM9.99461 17.4148C10.4846 16.9354 11.0989 16.2985 11.612 15.6535C11.7026 15.5395 11.6837 15.3737 11.5697 15.283C11.4558 15.1924 11.2899 15.2112 11.1992 15.3252C10.7852 15.8457 10.3012 16.3627 9.87465 16.7913C10.373 15.6684 10.872 14.2823 11.0071 13.0606C11.0071 13.0602 11.0072 13.0597 11.0072 13.0593C11.0608 12.5741 11.064 12.0574 10.9512 11.5846L12.0166 12.1081L11.6915 12.7384C11.553 13.007 11.6036 13.3309 11.8175 13.5444L12.0224 13.7489C12.0664 13.7929 12.0819 13.8565 12.0628 13.9148C12.0215 14.0408 11.9586 14.1822 11.876 14.3352C11.8067 14.4634 11.8545 14.6233 11.9826 14.6925C12.1108 14.7618 12.2707 14.714 12.3399 14.5859C12.4375 14.4053 12.5128 14.2348 12.5639 14.0792C12.6454 13.8306 12.5807 13.5611 12.3949 13.3757L12.19 13.1712C12.1393 13.1206 12.1274 13.0437 12.1602 12.9801C12.5031 12.314 12.4914 12.3403 12.5054 12.3079L13.9115 12.753C14.6121 12.9748 15.0827 13.6175 15.0827 14.3523V14.8972C13.7083 16.3137 11.9287 17.19 9.99461 17.4148Z" />
                            </svg>
                            My Profile
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href="/candidates-dashboard/view-resume"
                        >
                          <a>
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_821_78)">
                                <path d="M9.00001 13.345C10.5399 13.345 11.7931 12.0918 11.7931 10.5519C11.7931 10.3135 11.7615 10.0702 11.6994 9.82879C11.686 9.77667 11.6593 9.72893 11.6219 9.69025C11.5845 9.65158 11.5376 9.62329 11.486 9.60817C11.4344 9.59306 11.3797 9.59163 11.3273 9.60403C11.2749 9.61642 11.2267 9.64222 11.1873 9.67889C11.0152 9.84063 10.7879 9.93083 10.5517 9.9312C10.0384 9.9312 9.6207 9.51348 9.6207 9.00017C9.6207 8.76493 9.71039 8.539 9.8727 8.36427C9.90937 8.32489 9.93517 8.27665 9.94757 8.22429C9.95997 8.17193 9.95854 8.11724 9.94342 8.0656C9.9283 8.01395 9.90002 7.96713 9.86134 7.92972C9.82266 7.89231 9.77492 7.86559 9.72281 7.8522C9.48672 7.79099 9.2439 7.75961 9.00001 7.75879C7.46008 7.75879 6.20691 9.01196 6.20691 10.5519C6.20691 12.0918 7.46008 13.345 9.00001 13.345ZM9.00001 8.37948C9.04253 8.37948 9.08536 8.38072 9.1285 8.38351C9.04371 8.57804 8.99997 8.78797 9.00001 9.00017C9.00001 9.85579 9.69612 10.5519 10.5517 10.5519C10.7659 10.5519 10.9754 10.5075 11.1684 10.4234C11.1855 10.7189 11.1422 11.0148 11.041 11.2929C10.9398 11.5711 10.7829 11.8256 10.5799 12.041C10.3769 12.2564 10.1321 12.4281 9.86045 12.5456C9.58878 12.6631 9.29599 12.7239 9.00001 12.7243C7.80208 12.7243 6.8276 11.7498 6.8276 10.5519C6.8276 9.35396 7.80208 8.37948 9.00001 8.37948Z" />
                                <path d="M17.9423 10.3713C17.8116 10.1886 14.6806 5.89648 9 5.89648C3.31945 5.89648 0.188379 10.1886 0.0577235 10.3713C0.0201608 10.424 -3.05176e-05 10.487 -3.05176e-05 10.5517C-3.05176e-05 10.6163 0.0201608 10.6793 0.0577235 10.732C0.0847235 10.7701 0.737068 11.6745 1.97814 12.6682C2.00997 12.6937 2.0465 12.7126 2.08566 12.724C2.12481 12.7353 2.16582 12.7389 2.20634 12.7344C2.24685 12.7299 2.28609 12.7174 2.3218 12.6978C2.35752 12.6781 2.38901 12.6516 2.41448 12.6198C2.43995 12.588 2.45891 12.5514 2.47026 12.5123C2.48161 12.4731 2.48514 12.4321 2.48065 12.3916C2.47615 12.3511 2.46372 12.3118 2.44406 12.2761C2.4244 12.2404 2.3979 12.2089 2.36607 12.1834C1.51386 11.5013 0.949034 10.8552 0.703241 10.5517C1.20817 9.93097 3.05969 7.87307 6.04055 6.96035C5.00555 7.81504 4.34483 9.10762 4.34483 10.5517C4.34483 13.1185 6.43314 15.2068 9 15.2068C11.5669 15.2068 13.6552 13.1185 13.6552 10.5517C13.6552 9.10886 12.9954 7.81721 11.9616 6.96283C14.9363 7.87679 16.7906 9.93221 17.2964 10.5523C17.0503 10.8561 16.4855 11.5016 15.6336 12.1838C15.5693 12.2352 15.5281 12.3101 15.519 12.3919C15.51 12.4737 15.5338 12.5558 15.5852 12.6201C15.6366 12.6844 15.7115 12.7256 15.7934 12.7347C15.8752 12.7438 15.9573 12.72 16.0216 12.6685C17.2629 11.6748 17.915 10.7701 17.942 10.7323C17.9796 10.6797 17.9999 10.6166 18 10.5519C18 10.4871 17.9799 10.424 17.9423 10.3713ZM13.0345 10.5517C13.0345 12.7762 11.2246 14.5861 9 14.5861C6.77545 14.5861 4.96552 12.7762 4.96552 10.5517C4.96552 8.3271 6.77545 6.51717 9 6.51717C11.2246 6.51717 13.0345 8.32679 13.0345 10.5517Z" />
                                <path d="M2.69564 7.42362C4.0115 6.44386 6.17337 5.27573 8.99999 5.27573C11.8266 5.27573 13.9885 6.44386 15.3043 7.42362C15.3703 7.47276 15.4532 7.49366 15.5346 7.48173C15.616 7.4698 15.6894 7.42601 15.7385 7.36C15.7876 7.29399 15.8085 7.21116 15.7966 7.12974C15.7847 7.04832 15.7409 6.97497 15.6749 6.92583C15.4014 6.72231 15.1193 6.53055 14.8295 6.35107L15.3329 5.47745C15.3532 5.44214 15.3664 5.40316 15.3717 5.36274C15.377 5.32233 15.3743 5.28126 15.3637 5.2419C15.3532 5.20253 15.3349 5.16563 15.3101 5.13331C15.2853 5.10099 15.2543 5.07388 15.219 5.05352C15.1837 5.03316 15.1447 5.01996 15.1043 5.01467C15.0639 5.00937 15.0228 5.01209 14.9834 5.02267C14.9441 5.03325 14.9072 5.05147 14.8748 5.07631C14.8425 5.10114 14.8154 5.1321 14.7951 5.16742L14.2929 6.03886C13.6224 5.669 12.9162 5.36788 12.1851 5.14011L12.4929 3.994C12.5035 3.95463 12.5062 3.91357 12.5009 3.87316C12.4955 3.83275 12.4823 3.79378 12.4619 3.75847C12.4416 3.72317 12.4144 3.69223 12.3821 3.66741C12.3498 3.64259 12.3129 3.62439 12.2735 3.61383C12.2341 3.60327 12.1931 3.60058 12.1527 3.60589C12.1122 3.61121 12.0733 3.62443 12.038 3.6448C12.0027 3.66518 11.9717 3.6923 11.9469 3.72464C11.9221 3.75697 11.9039 3.79388 11.8933 3.83324L11.5876 4.97159C10.8417 4.78755 10.0781 4.68413 9.31002 4.66311V3.10331C9.31002 3.021 9.27732 2.94207 9.21912 2.88387C9.16092 2.82567 9.08198 2.79297 8.99968 2.79297C8.91737 2.79297 8.83843 2.82567 8.78023 2.88387C8.72203 2.94207 8.68933 3.021 8.68933 3.10331V4.66311C7.87468 4.68669 7.11278 4.79718 6.41171 4.97159L6.10602 3.83324C6.08204 3.75678 6.02944 3.69255 5.95921 3.65395C5.88898 3.61536 5.80655 3.6054 5.72915 3.62616C5.65175 3.64691 5.58537 3.69677 5.54386 3.76532C5.50236 3.83387 5.48895 3.9158 5.50643 3.994L5.8143 5.14011C5.0831 5.36767 4.37687 5.6688 3.70643 6.03886L3.2043 5.16742C3.18394 5.1321 3.15683 5.10114 3.1245 5.07631C3.09218 5.05147 3.05529 5.03325 3.01592 5.02267C2.97655 5.01209 2.93549 5.00937 2.89507 5.01467C2.85466 5.01996 2.81568 5.03316 2.78037 5.05352C2.74505 5.07388 2.71409 5.10099 2.68926 5.13331C2.66442 5.16563 2.64619 5.20253 2.63562 5.2419C2.62504 5.28126 2.62232 5.32233 2.62762 5.36274C2.63291 5.40316 2.64611 5.44214 2.66647 5.47745L3.16985 6.35107C2.8595 6.54349 2.57678 6.73807 2.32447 6.92583C2.29178 6.9502 2.26422 6.98077 2.24335 7.0158C2.22248 7.05082 2.20871 7.08961 2.20283 7.12996C2.19695 7.17031 2.19908 7.21141 2.20908 7.25094C2.21909 7.29046 2.23679 7.32763 2.26116 7.36031C2.28553 7.393 2.3161 7.42056 2.35113 7.44143C2.38615 7.46231 2.42494 7.47607 2.46529 7.48195C2.50563 7.48783 2.54674 7.48571 2.58627 7.4757C2.62579 7.46569 2.66296 7.44799 2.69564 7.42362Z" />
                              </g>
                            </svg>
                            View Resume
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href="/candidates-dashboard/bookmark"
                        >
                          <a>
                            <svg
                              width={16}
                              height={18}
                              viewBox="0 0 16 18"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M13.82 1.24621H13.534V0.368701C13.534 0.165086 13.374 0 13.1767 0H8.00178C7.80442 0 7.6444 0.165086 7.6444 0.368701V1.24621H2.18003C1.10788 1.24621 0 1.83613 0 3.49529V15.7509C0 17.4101 1.12575 18 2.18003 18H13.82C14.8921 18 16 17.4101 16 15.7509V3.49898C16.0036 2.41131 15.4282 1.24621 13.82 1.24621ZM8.35916 0.737403H12.8193V7.20811L10.8179 5.47522C10.6848 5.3593 10.49 5.3593 10.3569 5.47522L8.35559 7.20811L8.35916 0.737403ZM13.8235 17.2626H2.18003C1.63323 17.2626 0.714764 17.0672 0.714764 15.7509V3.49898C0.714764 2.18271 1.63323 1.9873 2.18003 1.9873H7.6444V8.00819C7.64408 8.21181 7.80383 8.37717 8.0012 8.37749C8.08496 8.37763 8.16613 8.3474 8.2305 8.29209L10.5892 6.25317L12.9479 8.29209C13.0996 8.42243 13.3249 8.40123 13.4513 8.24476C13.5049 8.17835 13.5342 8.09461 13.534 8.00819V1.98361H13.82C15.0958 1.98361 15.2852 2.93118 15.2852 3.49529L15.2888 15.7509C15.2888 17.0672 14.3703 17.2626 13.8235 17.2626Z" />
                              <path d="M6.3003 4.52417H2.03316C1.8358 4.52417 1.67578 4.68926 1.67578 4.89287C1.67578 5.09649 1.8358 5.26157 2.03316 5.26157H6.3003C6.49767 5.26157 6.65768 5.09649 6.65768 4.89287C6.65768 4.68926 6.49767 4.52417 6.3003 4.52417Z" />
                              <path d="M6.3003 7.04224H2.03316C1.8358 7.04224 1.67578 7.20732 1.67578 7.41094C1.67578 7.61455 1.8358 7.77964 2.03316 7.77964H6.3003C6.49767 7.77964 6.65768 7.61455 6.65768 7.41094C6.65768 7.20732 6.49767 7.04224 6.3003 7.04224Z" />
                              <path d="M13.3336 9.5603H2.03316C1.8358 9.5603 1.67578 9.72539 1.67578 9.929C1.67578 10.1326 1.8358 10.2977 2.03316 10.2977H13.3336C13.5309 10.2977 13.691 10.1326 13.691 9.929C13.691 9.72539 13.5309 9.5603 13.3336 9.5603Z" />
                              <path d="M13.3336 12.0645H2.03316C1.8358 12.0645 1.67578 12.2295 1.67578 12.4332C1.67578 12.6368 1.8358 12.8019 2.03316 12.8019H13.3336C13.5309 12.8019 13.691 12.6368 13.691 12.4332C13.691 12.2295 13.5309 12.0645 13.3336 12.0645Z" />
                              <path d="M13.3336 14.6006H2.03316C1.8358 14.6006 1.67578 14.7657 1.67578 14.9693C1.67578 15.1729 1.8358 15.338 2.03316 15.338H13.3336C13.5309 15.338 13.691 15.1729 13.691 14.9693C13.691 14.7657 13.5309 14.6006 13.3336 14.6006Z" />
                            </svg>
                            Bookmark Jobs
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12.5998 12.3312C12.6886 12.3312 12.7773 12.2972 12.845 12.2297L15.8352 9.24479C15.9708 9.10944 15.9708 8.89067 15.8352 8.75532C15.6996 8.61997 15.4805 8.61997 15.3449 8.75532L12.3546 11.7403C12.219 11.8756 12.219 12.0944 12.3546 12.2297C12.4222 12.2972 12.511 12.3312 12.5998 12.3312Z" />
                              <path d="M4.90684 14.234C5.0986 14.234 5.25361 14.0789 5.25361 13.8878V4.11227C5.25361 3.92119 5.0986 3.76611 4.90684 3.76611C4.71507 3.76611 4.56006 3.92119 4.56006 4.11227V13.8878C4.56006 14.0789 4.71541 14.234 4.90684 14.234Z" />
                              <path d="M15.3449 9.24487C15.4125 9.31237 15.5013 9.34629 15.5901 9.34629C15.6788 9.34629 15.7676 9.31237 15.8352 9.24487C15.9708 9.10952 15.9708 8.89075 15.8352 8.7554L12.845 5.77046C12.7094 5.63511 12.4902 5.63511 12.3546 5.77046C12.219 5.90581 12.219 6.12458 12.3546 6.25993L15.3449 9.24487Z" />
                              <path d="M5.3521 14.6783C5.54387 14.6783 5.69888 14.5232 5.69888 14.3321C5.69888 14.1411 5.54387 13.986 5.3521 13.986C5.298 13.986 5.25361 13.942 5.25361 13.8877C5.25361 13.6966 5.0986 13.5415 4.90684 13.5415C4.71507 13.5415 4.56006 13.6966 4.56006 13.8877C4.55971 14.3238 4.91516 14.6783 5.3521 14.6783Z" />
                              <path d="M4.90684 4.45857C5.0986 4.45857 5.25361 4.30349 5.25361 4.11241C5.25361 4.05841 5.298 4.0141 5.3521 4.0141C5.54387 4.0141 5.69887 3.85902 5.69887 3.66794C5.69887 3.47686 5.54387 3.32178 5.3521 3.32178C4.91516 3.32178 4.56006 3.67625 4.56006 4.11241C4.56006 4.30383 4.71541 4.45857 4.90684 4.45857Z" />
                              <path d="M1.07876 4.70121C-0.476885 7.54976 -0.340602 11.1554 1.42658 13.8866C2.73635 15.9113 4.84684 17.3461 7.21672 17.8231C7.80658 17.9418 8.402 18 8.99499 18C10.9213 18 12.8179 17.3842 14.3853 16.2194C14.5386 16.1051 14.5705 15.8881 14.456 15.7351C14.3419 15.5821 14.1252 15.5502 13.9709 15.6641C12.0792 17.0702 9.66774 17.6099 7.35369 17.1443C5.16622 16.7043 3.21803 15.3799 2.00916 13.511C0.378268 10.9899 0.252041 7.66192 1.6877 5.03248C3.13168 2.38851 5.99988 0.691629 9.01198 0.691629C9.03834 0.691629 9.06504 0.691629 9.09174 0.691975C12.1704 0.722783 15.0528 2.51659 16.4351 5.26199C17.7924 7.95788 17.5503 11.2956 15.8185 13.7647C15.7089 13.9215 15.7467 14.1372 15.9038 14.2469C16.0599 14.3563 16.277 14.3186 16.3869 14.1618C18.263 11.4866 18.5251 7.87134 17.0551 4.95079C15.5584 1.979 12.4392 0.0363469 9.10631 0H8.99326C5.73771 0.00726937 2.6396 1.8433 1.07876 4.70121Z" />
                              <path d="M15.9368 9.00021C15.9368 8.80913 15.7817 8.65405 15.59 8.65405H7.13242C6.94065 8.65405 6.78564 8.80913 6.78564 9.00021C6.78564 9.19129 6.94065 9.34637 7.13242 9.34637H15.59C15.7817 9.34637 15.9368 9.19129 15.9368 9.00021Z" />
                              <path d="M8.46794 13.9858H5.35215C5.16038 13.9858 5.00537 14.1409 5.00537 14.332C5.00537 14.5231 5.16038 14.6782 5.35215 14.6782H8.46794C8.65971 14.6782 8.81472 14.5231 8.81472 14.332C8.81472 14.1409 8.65971 13.9858 8.46794 13.9858Z" />
                              <path d="M5.35215 4.01434H8.46794C8.65971 4.01434 8.81472 3.85926 8.81472 3.66818C8.81472 3.4771 8.65971 3.32202 8.46794 3.32202H5.35215C5.16038 3.32202 5.00537 3.4771 5.00537 3.66818C5.00537 3.85926 5.16038 4.01434 5.35215 4.01434Z" />
                              <path d="M14.9721 14.7846C14.9097 14.8504 14.8716 14.9404 14.8716 15.0304C14.8716 15.1204 14.9097 15.2104 14.9756 15.2727C15.0384 15.3385 15.1282 15.3766 15.2184 15.3766C15.3123 15.3766 15.4022 15.3385 15.4646 15.2762C15.5305 15.2104 15.5651 15.1204 15.5651 15.0304C15.5651 14.9369 15.5305 14.8504 15.4646 14.7846C15.3363 14.6565 15.107 14.6531 14.9721 14.7846Z" />
                            </svg>
                            Log Out
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <div className="sidebar-button mobile-menu-btn ">
              <i className="bi bi-list" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default LayoutHeader;
