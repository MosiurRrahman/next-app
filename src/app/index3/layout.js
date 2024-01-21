import Topbar3 from "@/components/common/Topbar3";
import Footer3 from "@/components/footer/Footer3";
import Header3 from "@/components/header/Header3";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Topbar3 />
      <Header3 />
      {children}
      <Footer3 />
    </>
  );
};

export default layout;
