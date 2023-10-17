import Footer from "@/components/common/Footer";
import Home5Header from "@/components/header/Home5Header";
import AdvanceFiler from "@/components/uiModal/AdvanceFiler";
import LoginModal from "@/components/uiModal/LoginModal";
import SignUpModal from "@/components/uiModal/SignUpModal";
import Home5Tobbar from "@/components/view/topbar/Home5Tobbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <SignUpModal />
      <LoginModal />
      <AdvanceFiler />
      <Home5Tobbar />
      <Home5Header />

      {children}
      <Footer />
    </>
  );
};

export default layout;
