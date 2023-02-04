import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import MainLayout from "../../layout/MainLayout";
import ProjectDetailsWrap from "./ProjectDetailsWrap";

function ProjectDetails() {
  return (
    <MainLayout>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageName="Project Details" pageTitle="Project Details" />
        <ProjectDetailsWrap />
        <SubscribArea />
      </div>
    </MainLayout>
  );
}

export default ProjectDetails;
