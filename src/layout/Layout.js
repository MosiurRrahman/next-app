// Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Modals from "../components/common/Modals";

function Layout({ children }) {
  return (
    <>
      <Modals />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
