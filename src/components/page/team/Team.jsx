import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import MainLayout from "../../layout/MainLayout";
import TeamWrap from "./TeamWrap";

function Team() {
  return (
    <MainLayout>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageTitle="Meet Our Team" pageName="team" />
        <TeamWrap />
        <SubscribArea />
      </div>
    </MainLayout>
  );
}

export default Team;
