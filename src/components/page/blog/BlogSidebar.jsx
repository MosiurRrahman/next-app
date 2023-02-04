import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import MainLayout from "../../layout/MainLayout";
import BlogSidebarWrapper from "./BlogSidebarWrapper";

function BlogSidebar() {
  return (
    <MainLayout>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageName="Blog Sidebar" pageTitle="Blog Sidebar" />
        <BlogSidebarWrapper />
        <SubscribArea />
      </div>
    </MainLayout>
  );
}

export default BlogSidebar;
