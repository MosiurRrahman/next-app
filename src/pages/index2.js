import React from "react";
import Home2About from "../components/about/Home2About";
import Home2Award from "../components/award/Home2Award";
import Home2banner from "../components/banner/Home2banner";
import Home2Blog from "../components/blog/Home2Blog";
import Sidebar from "../components/common/Sidebar";
import Home2Contact from "../components/contact/Home2Contact";
import Home2Footer from "../components/footer/Home2Footer";
import Header1 from "../components/header/Header1";
import LeftSocial from "../components/home2/LeftSocial";
import HomePortfolio2 from "../components/portfolio/HomePortfolio2";
import Home2Testimonial from "../components/testimonial/Home2Testimonial";

function HomeTwo() {
  return (
    <>
      <Header1 />
      <Sidebar />
      <LeftSocial />
      <Home2banner />
      <Home2About />
      <HomePortfolio2 />
      <Home2Award />
      <Home2Testimonial />
      <Home2Blog />
      <Home2Contact />
      <Home2Footer />
    </>
  );
}

export default HomeTwo;
