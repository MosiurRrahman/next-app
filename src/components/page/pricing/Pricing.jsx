import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import MainLayout from "../../layout/MainLayout";
import PriceCardWrap from "../service/PriceCardWrap";

function Pricing() {
  return (
    <MainLayout>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageTitle="Pricing Plan" pageName="Pricing" />
        <PriceCardWrap />
        <SubscribArea />
      </div>
    </MainLayout>
  );
}

export default Pricing;
