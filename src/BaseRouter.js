import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/page/about/About";
import BlogSidebar from "./components/page/blog/BlogSidebar";
import BlogDetails from "./components/page/BlogDetails/BlogDetails";
import BlogStandard from "./components/page/BlogStandard/BlogStandard";
import Contact from "./components/page/contact/Contact";
import ErrorPage from "./components/page/error/ErrorPage";
import Faq from "./components/page/faq/Faq";
import HomePageOne from "./components/page/home/HomePageOne";
import HomePageTwo from "./components/page/homepage2/HomePageTwo";
import Pricing from "./components/page/pricing/Pricing";
import Project from "./components/page/project/Project";
import ProjectDetails from "./components/page/ProjectDetails/ProjectDetails";
import Service from "./components/page/service/Service";
import ServiceDetails from "./components/page/ServiceDetails/ServiceDetails";
import Team from "./components/page/team/Team";
function BaseRouter() {
  return (
    <Routes>
      <Route index element={<HomePageOne />} />
      <Route path="index2" element={<HomePageTwo />} />
      <Route path="about" element={<About />} />
      <Route path="service" element={<Service />} />
      <Route path="service-details" element={<ServiceDetails />} />
      <Route path="project" element={<Project />} />
      <Route path="project-details" element={<ProjectDetails />} />
      <Route path="faq" element={<Faq />} />
      <Route path="blog" element={<BlogSidebar />} />
      <Route path="blog-details" element={<BlogDetails />} />
      <Route path="blog-standard" element={<BlogStandard />} />
      <Route path="team" element={<Team />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default BaseRouter;
