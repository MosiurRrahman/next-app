import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import MainLayout from "../../layout/MainLayout";
import ContactWrapper from "./ContactWrapper";

function Contact() {
  return (
    <MainLayout>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageTitle="Contact us" pageName="Contact us" />
        <ContactWrapper />
        <SubscribArea />
      </div>
    </MainLayout>
  );
}

export default Contact;
