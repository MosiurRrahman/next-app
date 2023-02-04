import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import MainLayout from "../../layout/MainLayout";
import BlogStandardWrap from "./BlogStandardWrap";

function BlogStandard() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Blog Standard" pageTitle="Blog Standard" />
      <BlogStandardWrap />
      <SubscribArea />
    </MainLayout>
  );
}

export default BlogStandard;
