import Head from "next/head";
import React from "react";
import Banner5 from "../components/banner/Banner5";
import Header1 from "../components/header/Header1";
import PortfolioFiler from "../components/portfolio/PortfolioFiler";

function indexPortfolio() {
  return (
    <>
      <Head>
        <title>PicsZen - Portfolio React Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="assets/images/icons/logo-icon.svg" />
      </Head>
      <Header1 />
      <Banner5 />
      <PortfolioFiler />
    </>
  );
}

export default indexPortfolio;
