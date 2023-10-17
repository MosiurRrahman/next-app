import Home5Banner from "@/components/view/Banner/Home5Banner";
import Home5About from "@/components/view/about/Home5About";
import Home5ApartmentType from "@/components/view/apartmentType/Home5ApartmentType";
import Home1Blog from "@/components/view/blog/Home1Blog";
import Home5Blog from "@/components/view/blog/Home5Blog";
import Home5FeatureProject from "@/components/view/featuredProperty/Home5FeatureProject";
import Home5FeaturedProperty from "@/components/view/featuredProperty/Home5FeaturedProperty";
import Home5HowItWork from "@/components/view/howItWork/Home5HowItWork";
import Home5Testimonial from "@/components/view/testimonial/Home5Testimonial";
import Home5WhyChoose from "@/components/view/whyChoose/Home5WhyChoose";
import React from "react";

const Page = () => {
  return (
    <>
      <Home5Banner />
      <Home5About />
      <Home5ApartmentType />
      <Home5FeaturedProperty />
      <Home5WhyChoose />
      <Home5FeatureProject />
      <Home5HowItWork />
      <Home5Testimonial />
      <Home5Blog />
    </>
  );
};

export default Page;
