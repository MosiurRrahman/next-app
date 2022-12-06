import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import About1 from "../components/about/About1";
import HomeTestimonial1 from "../components/testimonial/HomeTestimonial1";
import InstagramFeed1 from "../components/nstagramFeed/InstagramFeed1";
import Services1 from "../components/services/Services1";

function AboutMePage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="About Me" pageTitle="About Me" />
        <About1/>
        <Services1/>
        <HomeTestimonial1/>
        <InstagramFeed1/>
      </Layout>
    </>
  );
}

export default AboutMePage;
