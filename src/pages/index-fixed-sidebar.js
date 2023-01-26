import React from "react";
import About3 from "../components/about/About3";
import Banner8 from "../components/banner/Banner8";
import Blog4 from "../components/blog/Blog4";
import Contact3 from "../components/contact/Contact3";
import CopyrightFooter2 from "../components/copyright/CopyrightFooter2";
import Fixbar from "../components/header/Fixbar";
import Package2 from "../components/package/Package2";
import Portfolio3 from "../components/portfolio/Portfolio3";
import Testimonial3 from "../components/testimonial/Testimonial3";

function indexFixedSidebar() {
  return (
    <>
      <div className="main-page-wrapper">
        <Fixbar />
        {/* <Sidebar /> */}
        <div className="page-content-two">
          <header className="header-area style-1 d-lg-none d-block">
            <div className="container-fluid d-flex justify-content-between align-items-center">
              <div className="header-logo">
                <img src="assets/images/bg/header-logo.svg" alt="image" />
              </div>
              <div className="sidebar-button mobile-menu-btn">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </header>
          <Banner8 />
          <About3 />
          <Portfolio3 />
          <Package2 />
          <Testimonial3 />
          <Blog4 />
          <Contact3 />
          <CopyrightFooter2 />
        </div>
      </div>
    </>
  );
}

export default indexFixedSidebar;
