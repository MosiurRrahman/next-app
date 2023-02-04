import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
