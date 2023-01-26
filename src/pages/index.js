/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Home1aboutMe from "../components/about/Home1aboutMe";
import Home1Banner from "../components/banner/Home1Banner";
import Home1Blog from "../components/blog/Home1Blog";
import Sidebar from "../components/common/Sidebar";
import Home1Contact from "../components/contact/Home1Contact";
import Home1Footer from "../components/footer/Home1Footer";
import Home1Header from "../components/header/Home1Header";
import Home1Package from "../components/package/Home1Package";
import Home1Portfolio from "../components/portfolio/Home1Portfolio";
import Testimonial1 from "../components/testimonial/Testimonial1";
import Home1PageWrapper from "../components/wrapper/Home1PageWrapper";
function Home() {
  return (
    <>
      <Home1PageWrapper>
        <Home1Header />
        <Sidebar />
        <Home1Banner />
        <Home1aboutMe />
        <Home1Portfolio />
        <Home1Package />
        <Testimonial1 />
        <Home1Blog />
        <Home1Contact />
        <Home1Footer />
      </Home1PageWrapper>
    </>
  );
}

export default Home;
