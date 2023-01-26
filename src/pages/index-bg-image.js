import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Home2About from "../components/about/Home2About";
import Home2Award from "../components/award/Home2Award";
import Banner7 from "../components/banner/Banner7";
import Home2Blog from "../components/blog/Home2Blog";
import Home2Contact from "../components/contact/Home2Contact";
import Home2Footer from "../components/footer/Home2Footer";
import HeaderTransparent from "../components/header/HeaderTransparent";
import HomePortfolio2 from "../components/portfolio/HomePortfolio2";
import Home2Testimonial from "../components/testimonial/Home2Testimonial";

function IndexBgImagePage() {
  const router = useRouter().pathname;

  useEffect(() => {
    if (router === "/index-bg-image") {
      document.body.classList.add("bg-image-overlay");
    }
    return () => {
      document.body.classList.remove("bg-image-overlay");
    };
  });
  return (
    <>
      <HeaderTransparent />
      <Banner7 />
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

export default IndexBgImagePage;
