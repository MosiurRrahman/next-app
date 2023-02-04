import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import MainLayout from "../../layout/MainLayout";
import ServiceDetailsWrap from "./ServiceDetailsWrap";

function ServiceDetails() {
  return (
    <MainLayout>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageName="Service Details" pageTitle="Service Details" />
        <ServiceDetailsWrap />
        <SubscribArea />
      </div>
    </MainLayout>
  );
}

export default ServiceDetails;
