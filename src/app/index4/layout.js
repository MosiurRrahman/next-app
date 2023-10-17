import Footer from "@/components/common/Footer";
import Home4Header from "@/components/header/Home4Header";
import AdvanceFiler from "@/components/uiModal/AdvanceFiler";
import LoginModal from "@/components/uiModal/LoginModal";
import SignUpModal from "@/components/uiModal/SignUpModal";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <SignUpModal />
      <LoginModal />
      <AdvanceFiler />
      <Home4Header />

      {children}
      <Footer />
    </>
  );
};

export default layout;
