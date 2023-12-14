import React from "react";
import Layout from "../layout/Layout";
import Banner from "../components/banner/Banner";
import QuickLink from "../components/quicklink/QuickLink";
import BreandCaregory from "../components/category/BreandCaregory";
import MostSeachCar from "../components/mostSearchCar/MostSeachCar";
import RecentProducts from "../components/recentProduct/RecentProducts";
import WhyChoose from "../components/whyChoose/WhyChoose";
import UpcomingCar from "../components/upcomingCar/UpcomingCar";
import RecommendedCar from "../components/RecommendedCar/RecommendedCar";
import TopRateUsedCar from "../components/topRateUsedCar/TopRateUsedCar";
import HomeBlog from "../components/blog/HomeBlog";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <QuickLink />
      <BreandCaregory />
      <MostSeachCar />
      <RecentProducts />
      <WhyChoose/>
      <UpcomingCar/>
      <RecommendedCar/>
      <TopRateUsedCar/>
      <HomeBlog/>
    </Layout>
  );
};

export default Home;
