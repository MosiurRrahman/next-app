import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import NewsLatter from "../common/NewsLatter";
import Topbar from "../common/Topbar";

export default function Layout({ children }) {
  return (
    <>
      <Topbar />
      <Header />
      {children}
      <NewsLatter/>
      <Footer />
    </>
  );
}
