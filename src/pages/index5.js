import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Topbar from "../components/Home5/Topbar";
import Header from "../components/Home5/Header";
import Banner from '../components/Home5/Banner/index'
import CarFeature from '../components/Home5/FeaturedCar/index'
import BrandCategory from '../components/Home5/Brand/index'
import RecentCar from '../components/Home5/RecentCar/index'
import HowItWork from '../components/Home5/HowItWork/index'
import WhyDrivco from '../components/Home5/WhyDrivco/WhyChooseUs'
function HomePage5() {
  const router = useRouter();
  const currentRoute = router.pathname;
  useEffect(() => {
    // Get the current route
    document.body.classList.add(currentRoute === "/index5" ? "home-5" : "");
  }, []);
  return (
    <>
      <Topbar />
      <Header />
      <Banner/>
      <CarFeature/>
      <BrandCategory/>
      <WhyDrivco/>
      <RecentCar/>
      <HowItWork/>
    </>
  );
}

export default HomePage5;
