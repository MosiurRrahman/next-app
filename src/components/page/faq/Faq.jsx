import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import MainLayout from "../../layout/MainLayout";
import FaqWrap from "./FaqWrap";

function Faq() {
  return (
    <MainLayout>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageName="FAQ" pageTitle="FAQ" />
        <FaqWrap />
        <SubscribArea />
      </div>
    </MainLayout>
  );
}

export default Faq;
