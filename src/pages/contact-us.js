import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ContactUs from "../components/contact/ContactUs";
import CopyrightFooter from "../components/copyright/CopyrightFooter";
import Header1 from "../components/header/Header1";

function contactUsPage() {
  return (
    <>
      <Header1 />
      <Breadcrumb pageName="Contact" pageTitle="Contact" />
      <ContactUs />
      <CopyrightFooter />
    </>
  );
}

export default contactUsPage;
