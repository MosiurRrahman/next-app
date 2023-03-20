import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Header5 from "../components/header/Header5";

function Index5() {
  const currentPage = useRouter().pathname;
  useEffect(() => {
    document.body.className = currentPage === "/index5" ? "bg-wight" : "";
  });
  return (
    <>
      <Header5 />
      {/* <Banner5 />
      <Home5Category />
      <TrandingJobs />
      <Home5Counter />
      <Home5TopRecruiters />
      <Home5TrustedCompany />
      <Home5Feedback />
      <Home5Article />
      <DreamJobs /> */}
      <Footer />
    </>
  );
}

export default Index5;
