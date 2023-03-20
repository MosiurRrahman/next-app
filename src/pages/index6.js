import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Footer3 from "../components/footer/Footer3";
import Header6 from "../components/header/Header6";

function Index6() {
  const currentPage = useRouter().pathname;
  useEffect(() => {
    document.body.className = currentPage === "/index6" ? "bg-dark" : "";
  });
  return (
    <>
      <Header6 />
      {/* <Banner6 />
      <Home6Category />
      <Home6TrandingJob />
      <Home6Counter />
      <Home6Feedback />
      <Home6WorkProcess />
      <Home6TopRecruiters />
      <Home6TrustedCompany />
      <Home6Article /> */}
      <Footer3 />
    </>
  );
}

export default Index6;
