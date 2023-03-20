import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Header1 from "../components/header/Header1";

export default function Home() {
  const currentPage = useRouter().pathname;
  useEffect(() => {
    document.body.className = currentPage === "/" ? "bg-wight" : "";
  });
  return (
    <>
      <Header1 />
      {/* <Banner1 />
      <Category1 />
      <Feature1 />
      <WorkProcess1 />
      <JobLocation1 />
      <Review1 />
      <TrustedCompany1 />
      <TopRecruiters1 />
      <Article1 /> */}
      <Footer />
    </>
  );
}
