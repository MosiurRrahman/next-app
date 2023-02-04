import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import MainLayout from "../../layout/MainLayout";
import BlogDetailsWrap from "./BlogDetailsWrap";

function BlogDetails() {
  return (
    <MainLayout>
      <Breadcrumb pageName="blog Details" pageTitle="blog Details" />
      <BlogDetailsWrap />
      <SubscribArea />
    </MainLayout>
  );
}

export default BlogDetails;
