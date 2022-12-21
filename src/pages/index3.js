import React from "react";
import About3 from "../components/about/About3";
import Banner3 from "../components/banner/Banner3";
import SpcialOffer3 from "../components/bestOffer/SpcialOffer3";
import Home3Blog3 from "../components/blog/Home3Blog3";
import Experties3 from "../components/cookingExperties/Experties3";
import Facilities from "../components/facilittes/Facilities";
import Footer from "../components/footer/Footer";
import Header3 from "../components/header/Header3";
import MenuList3 from "../components/MenuList/MenuList3";
import PopularItem3 from "../components/popularItem/PopularItem3";
import Home3Testimonial from "../components/testimonial/Home3Testimonial";

function index3Page() {
  return (
    <div>
      <Header3 />
      <Banner3 />
      <About3 />
      <Facilities />
      <SpcialOffer3 />
      <MenuList3 />
      <PopularItem3 />
      <Home3Testimonial />
      <Experties3 />
      <Home3Blog3 />
      <Footer/>
    </div>
  );
}

export default index3Page;
