import React from "react";
import About2 from "../components/about/About2";
import Banner6 from "../components/banner/Banner6";
import BlogHisory1 from "../components/blog/BlogHisory1";
import Partner1 from "../components/partnar/Partner1";
import Portfolio2 from "../components/portfolio/Portfolio2";
import Services2 from "../components/services/Services2";
import VideoTestimonial from "../components/video/VideoTestimonial";
import Layout from "../layout/Layout";

function Index2Pagination() {
  return (
    <>
      <Layout>
        <Banner6 />
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

export default Index2Pagination;
