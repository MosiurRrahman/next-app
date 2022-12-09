import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Filter from "../components/common/filter";
// import Test from "../components/common/test";
import Layout from "../layout/Layout";

function PortfolioPage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Our Portfolio" pageTitle="Our Portfolio" />
        <Filter/>
        </Layout>
    </>
  );
}

export default PortfolioPage;
