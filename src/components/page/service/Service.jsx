import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import MainLayout from "../../layout/MainLayout";
import ServiceWrap from "./ServiceWrap";

function Service() {
  return (
    <MainLayout>
      <div className="creasoft-wrap">
        <Breadcrumb pageName="Service" pageTitle="Service" />
        <ServiceWrap />
        <SubscribArea />
      </div>
    </MainLayout>
  );
}

export default Service;
