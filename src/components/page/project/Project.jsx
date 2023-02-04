import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import MainLayout from "../../layout/MainLayout";
import ProjectWrap from "./ProjectWrap";

function Project() {
  return (
    <MainLayout>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageName="Project " pageTitle="Project" />
        <ProjectWrap />
        <SubscribArea />
      </div>
    </MainLayout>
  );
}

export default Project;
