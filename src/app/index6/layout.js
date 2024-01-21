import Footer from "@/components/footer/Footer";
import Header6 from "@/components/header/Header6";
import Topbar from "@/components/topbar/Topbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Header6 />
      {children}
      <Footer />
    </>
  );
};

export default layout;
