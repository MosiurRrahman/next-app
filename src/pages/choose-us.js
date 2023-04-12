import React from "react";
import ChooseUs1 from "../components/chooseUs/ChooseUs1";
import ChooseUs2 from "../components/chooseUs/ChooseUs2";
import Breadcrumb from "../components/common/Breadcrumb";
import Counter1 from "../components/counter/Counter1";
import MainLayout from "../layout/MainLayout";

function ChooseUsPage() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Why Choose Us" pageTitle="Why Choose Us" />
      <Counter1 />
      <ChooseUs1 />
      <ChooseUs2 />
    </MainLayout>
  );
}

export default ChooseUsPage;
