import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import ErrorWrapper from "./ErrorWrapper";
function ErrorPage() {
  return (
    <>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageName="Error" pageTitle="Error" />
        <ErrorWrapper />
      </div>
    </>
  );
}

export default ErrorPage;
