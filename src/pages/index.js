import React, { useState } from "react";
import About5 from "../components/about/About5";
import Banner5 from "../components/banner/Banner5";
import Index5Blog from "../components/blog/Index5Blog";
import CaseStudy5 from "../components/caseStudy/CaseStudy5";
import Customar from "../components/clientSection/Customar";
import Sidebar from "../components/common/Sidebar";
import Contact5 from "../components/contact/Contact5";
import Footer from "../components/footer/Footer";
import Header1 from "../components/header/Header1";
import Service5 from "../components/service/Service5";
import Team5 from "../components/team/Team5";
import Testimonial5 from "../components/testimonial/Testimonial5";
import Topbar1 from "../components/topbar/Topbar1";
import Video5 from "../components/video/Video5";
import WorkProcess5 from "../components/workprocess/WorkProcess5";

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Topbar1 />
      <Header1 />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Banner5 setSidebarOpen={setSidebarOpen} />
      <About5 />
      <Service5 />
      <CaseStudy5 />
      <Video5 />
      <WorkProcess5 />
      <Testimonial5 />
      <Customar />
      <Team5 />
      <Contact5 />
      <Index5Blog />
      <Footer />
    </>
  );
}

export default Home;
