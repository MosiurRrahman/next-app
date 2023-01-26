import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ContactMe from "../components/contact/ContactMe";
import CopyrightFooter from "../components/copyright/CopyrightFooter";
import Header1 from "../components/header/Header1";

function contactMePage() {
  return (
    <>
      <Header1 />
      <Breadcrumb pageName="Contact Me" pageTitle="Contact Me" />
      <ContactMe />
      <CopyrightFooter />
    </>
  );
}

export default contactMePage;
