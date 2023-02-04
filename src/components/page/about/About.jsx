import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import MainLayout from "../../layout/MainLayout";
import AboutWrap from "./AboutWrap";

function About() {
  return (
    <MainLayout>
      <Breadcrumb pageName="About Us" pageTitle="About Us" />
      <AboutWrap />
      <SubscribArea />
    </MainLayout>
  );
}

export default About;
