import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Header4 from "../components/header/Header4";

function Index4() {
  const currentPage = useRouter().pathname;
  useEffect(() => {
    document.body.className = currentPage === "/index4" ? "bg-wight" : "";
  });
  return (
    <>
      <Header4 />
      {/* <Banner4 />
      <Home4Category />
      <Home4Feature />
      <Home4Counter />
      <Home4JonLocation />
      <Home4Feedback />
      <Home4TrustedCompany />
      <Home4Recruiters />
      <Home4Articel /> */}
      <Footer />
    </>
  );
}

export default Index4;
