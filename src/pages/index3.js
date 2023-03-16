import React from "react";
import Home3About from "../components/about/Home3About";
import Home3Article from "../components/article/Home3Article";
import Banner3 from "../components/banner/Banner3";
import Home3Category from "../components/category/Home3Category";
import Home3topCompany from "../components/company/Home3topCompany";
import Home3Feature from "../components/feature/Home3Feature";
import Home3Feedback from "../components/feedback/Home3Feedback";
import Footer from "../components/footer/Footer";
import Header3 from "../components/header/Header3";
import Home2TrustedCompany from "../components/trusted-company/Home2TrustedCompany";
import Home3WorkProcess from "../components/work-process/Home3WorkProcess";

function Index3() {
  return (
    <>
      <Header3 />
      <Banner3 />
      <Home2TrustedCompany />
      <Home3Category />
      <Home3Feature />
      <Home3WorkProcess />
      <Home3Feedback />
      <Home3About />
      <Home3topCompany />
      <Home3Article />
      <Footer />
    </>
  );
}

export default Index3;
