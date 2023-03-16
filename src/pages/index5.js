import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Home5Article from "../components/article/Home5Article";
import Banner5 from "../components/banner/Banner5";
import Home5Category from "../components/category/Home5Category";
import TrandingJobs from "../components/category/TrandingJobs";
import DreamJobs from "../components/common/DreamJobs";
import Home5Counter from "../components/counter/Home5Counter";
import Home5Feedback from "../components/feedback/Home5Feedback";
import Footer from "../components/footer/Footer";
import Header5 from "../components/header/Header5";
import Home5TopRecruiters from "../components/top-recruiters/Home5TopRecruiters";
import Home5TrustedCompany from "../components/trusted-company/Home5TrustedCompany";

function Index5() {
  const currentPage = useRouter().pathname;
  useEffect(() => {
    document.body.className = currentPage === "/index5" ? "bg-wight" : "";
  });
  return (
    <>
      <Header5 />
      <Banner5 />
      <Home5Category />
      <TrandingJobs />
      <Home5Counter />
      <Home5TopRecruiters />
      <Home5TrustedCompany />
      <Home5Feedback />
      <Home5Article />
      <DreamJobs />
      <Footer />
    </>
  );
}

export default Index5;
