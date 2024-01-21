import Footer3 from "@/components/footer/Footer3";
import Header4 from "@/components/header/Header4";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Header4 />
      {children}
      <Footer3 />
    </>
  );
};

export default layout;
