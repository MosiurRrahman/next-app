import React from "react";
import Newslatter from "../components/common/Newslatter";
import Footer from "../components/footer/Footer";
import LayoutHeader from "../components/header/LayoutHeader";

function MainLayout({ children }) {
  return (
    <>
      <LayoutHeader />
      {children}
      <Newslatter />
      <Footer />
    </>
  );
}

export default MainLayout;
