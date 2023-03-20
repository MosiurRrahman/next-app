import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Home6Article from "../components/article/Home6Article";
import Banner6 from "../components/banner/Banner6";
import Home6Category from "../components/category/Home6Category";
import Home6TrandingJob from "../components/category/Home6TrandingJob";
import Home6Counter from "../components/counter/Home6Counter";
import Home6Feedback from "../components/feedback/Home6Feedback";
import Footer3 from "../components/footer/Footer3";
import Header6 from "../components/header/Header6";
import Home6TopRecruiters from "../components/top-recruiters/Home6TopRecruiters";
import Home6TrustedCompany from "../components/trusted-company/Home6TrustedCompany";
import Home6WorkProcess from "../components/work-process/Home6WorkProcess";

function Index6() {
  const currentPage = useRouter().pathname;
  useEffect(() => {
    document.body.className = currentPage === "/index6" ? "bg-dark" : "";
  });
  return (
    <>
      <Header6 />
      <Banner6 />
      <Home6Category />
      <Home6TrandingJob />
      <Home6Counter />
      <Home6Feedback />
      <Home6WorkProcess />
      <Home6TopRecruiters />
      <Home6TrustedCompany />
      <Home6Article />
      <Footer3 />
    </>
  );
}

export default Index6;
