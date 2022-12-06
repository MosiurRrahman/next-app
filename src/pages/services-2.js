import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Partner1 from "../components/partnar/Partner1";
import Services2 from "../components/services/Services2";
import Layout from "../layout/Layout";

function ServicePageTwo() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Our Services 02" pageTitle="Our Services 02" />
        <Services2/>
        <Partner1/>
      </Layout>
    </>
  );
}

export default ServicePageTwo;
