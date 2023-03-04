import React from "react";
import Footer2 from "../footer/Footer2";
import Header1 from "../header/Header1";

function Layout({ children }) {
  return (
    <>
      <Header1 />
      {children}
      <Footer2 />
    </>
  );
}

export default Layout;
