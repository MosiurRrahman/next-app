import Home3About from "@/components/about/Home3About";
import Home3Accordion from "@/components/accordion/Home3Accordion";
import Home3Activities from "@/components/activities/Home3Activities";
import Home3Banenr2 from "@/components/banner/Home3Banenr2";
import Home3Banner from "@/components/banner/Home3Banner";
import Home3Banner3 from "@/components/banner/Home3Banner3";
import Home3Blog from "@/components/blog/Home3Blog";
import Home3Destination from "@/components/destination/Home3Destination";
import Home3DestinationSlide from "@/components/destinationSlider/Home3DestinationSlide";
import Home3Facilities from "@/components/facilites/Home3Facilities";
import Home3Features from "@/components/feature/Home3Features";
import Home3Team from "@/components/team/Home3Team";
import Home3Testimonial from "@/components/testimonial/Home3Testimonial";
import React from "react";
export const metadata = {
  title: "TripRex - Tour & Travel Agency  NextJs Template",
  description: "TripRex is a NextJs Template for Tour and Travel Agency purpose",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const page = () => {
  return (
    <>
      <Home3Banner />
      <Home3Banenr2 />
      <Home3About />
      <Home3Facilities />
      <Home3Destination />
      <Home3Banner3 />
      <Home3Accordion />
      <Home3Activities />
      <Home3Features />
      <Home3DestinationSlide />
      <Home3Testimonial />
      <Home3Team />
      <Home3Blog />
    </>
  );
};

export default page;
