import React from "react";
import Layout from "../layout/Layout";
import About2 from "../components/about/About2";
import Banner6 from "../components/banner/Banner6";
import BlogHisory1 from "../components/blog/BlogHisory1";
import Partner1 from "../components/partnar/Partner1";
import Portfolio2 from "../components/portfolio/Portfolio2";
import Service2 from "../components/service/Service2";
import VideoTestimonial from "../components/video/VideoTestimonial";
import BannerIndex2CenterSlider from "../components/banner/BannerIndex2CenterSlider";
function Index2CenterSlider() {
  return (
    <>
      <Layout>
        <BannerIndex2CenterSlider />
        <Partner1 />
        <About2 />
        <Service2 />
        <Portfolio2 />
        <VideoTestimonial />
        <BlogHisory1 />
      </Layout>
    </>
  );
}

export default Index2CenterSlider;
