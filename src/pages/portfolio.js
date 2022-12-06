import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Test from "../components/common/test";
import Layout from "../layout/Layout";

function PortfolioPage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Our Portfolio" pageTitle="Our Portfolio" />
        <Test/>
        </Layout>
    </>
  );
}

export default PortfolioPage;
