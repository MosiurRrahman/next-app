import React from "react";
import Home2Article from "../components/article/Home2Article";
import Banner2 from "../components/banner/Banner2";
import Home2Category from "../components/category/Home2Category";
import Counter2 from "../components/counter/counter2";
import Home2Feature from "../components/feature/Home2Feature";
import Home2Feedback from "../components/feedback/Home2Feature";
import Footer from "../components/footer/Footer";
import Header2 from "../components/header/Header2";
import Home2LatesJob from "../components/latest-job/Home2LatesJob";
import Home2TopRecruiters from "../components/top-recruiters/Home2TopRecruiters";
import Home2TrustedCompany from "../components/trusted-company/Home2TrustedCompany";
import Home2WorkProcess from "../components/work-process/Home2WorkProcess";

function Index2() {
  return (
    <>
      <Header2 />
      <Banner2 />
      <Counter2 />
      <Home2Category />
      <Home2LatesJob />
      <Home2WorkProcess />
      <Home2Feature />
      <Home2TopRecruiters />
      <Home2Feedback />
      <Home2TrustedCompany />
      <Home2Article />
      <Footer />
    </>
  );
}

export default Index2;
