import React from "react";
import Layout from "../layout/Layout";
import About2 from "../components/about/About2";
import BlogHisory1 from "../components/blog/BlogHisory1";
import Partner1 from "../components/partnar/Partner1";
import Portfolio2 from "../components/portfolio/Portfolio2";
import VideoTestimonial from "../components/video/VideoTestimonial";
import BannerThumbnil from "../components/banner/BannerThumbnil";
import Services2 from "../components/services/Services2";
function Index2ThumbnailSlider() {
  return (
    <>
      <Layout>
        <BannerThumbnil />
        <Partner1 />
        <About2 />
        <Services2 />
        <Portfolio2 />
        <VideoTestimonial />
        <BlogHisory1 />
      </Layout>
    </>
  );
}

export default Index2ThumbnailSlider;
