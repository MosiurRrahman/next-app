import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Home4Articel from "../components/article/Home4Articel";
import Banner4 from "../components/banner/Banner4";
import Home4Category from "../components/category/Home4Category";
import Home4Counter from "../components/counter/Home4Counter";
import Home4Feature from "../components/feature/Home4Feature";
import Home4Feedback from "../components/feedback/Home4Feedback";
import Footer from "../components/footer/Footer";
import Header4 from "../components/header/Header4";
import Home4JonLocation from "../components/job-loaction/Home4JonLocation";
import Home4Recruiters from "../components/top-recruiters/Home4Recruiters";
import Home4TrustedCompany from "../components/trusted-company/Home4TrustedCompany";

function Index4() {
  const currentPage = useRouter().pathname;
  useEffect(() => {
    document.body.className = currentPage === "/index4" ? "bg-wight" : "";
  });
  return (
    <>
      <Header4 />
      <Banner4 />
      <Home4Category />
      <Home4Feature />
      <Home4Counter />
      <Home4JonLocation />
      <Home4Feedback />
      <Home4TrustedCompany />
      <Home4Recruiters />
      <Home4Articel />
      <Footer />
    </>
  );
}

export default Index4;
