import Footer from "@/components/footer/Footer";
import Header5 from "@/components/header/Header5";
import Topbar6 from "@/components/topbar/Topbar6";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Topbar6 />
      <Header5 />
      {children}
      <Footer />
    </>
  );
};

export default layout;
