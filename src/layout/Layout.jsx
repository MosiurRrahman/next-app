import React from "react";
import Footer from "../components/footer/Footer";
import LayoutHeader from "../components/header/LayoutHeader";

function Layout({ children }) {
  return (
    <>
      <LayoutHeader />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
