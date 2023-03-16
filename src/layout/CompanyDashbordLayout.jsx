import React from "react";
import CompanyDashbordMenu from "../components/company/CompanyDashbordMenu";
import Footer from "../components/footer/Footer";
import LayoutHeader from "../components/header/LayoutHeader";

function CompanyDashbordLayout({ children }) {
  return (
    <>
      <LayoutHeader />
      <div className="dashboard-area company-dashboard pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4">
            <CompanyDashbordMenu />
            {children}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CompanyDashbordLayout;
