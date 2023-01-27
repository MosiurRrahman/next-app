import Head from "next/head";
import React from "react";
import Banner4 from "../components/banner/Banner4";
import CopyrightFooter from "../components/copyright/CopyrightFooter";
import Header1 from "../components/header/Header1";

function indexCarousel() {
  return (
    <>
      <Head>
        <title>PicsZen - Portfolio React Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="assets/images/icons/logo-icon.svg" />
      </Head>
      <Header1 />
      <Banner4 />
      <CopyrightFooter />
    </>
  );
}

export default indexCarousel;
