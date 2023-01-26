import React from "react";
import CopyrightFooter from "../components/copyright/CopyrightFooter";
import Header1 from "../components/header/Header1";

function Layout({ children }) {
  return (
    <>
      <Header1 />
      {children}
      <CopyrightFooter />
    </>
  );
}

export default Layout;
