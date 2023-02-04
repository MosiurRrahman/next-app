import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./BaseRouter";
// import Layout from "./components/App";
// import MainLayout from "./components/layout/MainLayout";
// import About from "./components/page/about/About";
// import BlogSidebar from "./components/page/blog/BlogSidebar";
// import BlogDetails from "./components/page/BlogDetails/BlogDetails";
// import BlogStandard from "./components/page/BlogStandard/BlogStandard";
// import Contact from "./components/page/contact/Contact";
// import ErrorPage from "./components/page/error/ErrorPage";
// import Faq from "./components/page/faq/Faq";
// import HomePageTwo from "./components/page/homepage2/HomePageTwo";
// import Pricing from "./components/page/pricing/Pricing";
// import Project from "./components/page/project/Project";
// import ProjectDetails from "./components/page/ProjectDetails/ProjectDetails";
// import Service from "./components/page/service/Service";
// import ServiceDetails from "./components/page/ServiceDetails/ServiceDetails";
// import Team from "./components/page/team/Team";
import "./index.css";

//Default Warniing Error Hide
console.log = console.warn = console.error = () => {};

/*
=>version : 0.1
=>Event : Rendering al content to web
=>Action: define all routes and page
@return HTML
*/

function Root() {
  return (
    <>
      <Router>
        <BaseRouter />
      </Router>
    </>
  );
}

export default Root;

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
