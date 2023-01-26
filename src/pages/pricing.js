import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import PriceTab from "../components/price/PriceTab";
import Layout from "../layout/Layout";

function pricingPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Pricing Plan" pageTitle="Pricing Plan" />
      <PriceTab />
    </Layout>
  );
}

export default pricingPage;
