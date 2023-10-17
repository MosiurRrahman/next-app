import Home3Banner from "@/components/view/Banner/Home3Banner";
import Home3InnerBanner from "@/components/view/Banner/Home3InnerBanner";
import Home3About from "@/components/view/about/Home3About";
import Home3ApartmentType from "@/components/view/apartmentType/Home3ApartmentType";
import Home1Blog from "@/components/view/blog/Home1Blog";
import Home3FeaturedProperty from "@/components/view/featuredProperty/Home3FeaturedProperty";
import Home3HowItWork from "@/components/view/howItWork/Home3HowItWork";
import Home3RecentProperty from "@/components/view/recentProperty/Home3RecentProperty";
import Home3RecentPropertyTab from "@/components/view/recentProperty/Home3RecentPropertyTab";
import Home3team from "@/components/view/team/Home3team";
import Home3Testimonial from "@/components/view/testimonial/Home3Testimonial";
import React from "react";

const Page = () => {
  return (
    <>
      <Home3Banner />
      <Home3RecentProperty />
      <Home3About />
      <Home3ApartmentType />
      <Home3FeaturedProperty />
      <Home3HowItWork />
      <Home3RecentPropertyTab />
      <Home3InnerBanner />
      <Home3team />
      <Home3Testimonial />
      <Home1Blog />
    </>
  );
};

export default page;
