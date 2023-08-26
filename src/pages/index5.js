import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Topbar from "../components/Home5/Topbar";
import Header from "../components/Home5/Header";
import Banner from '../components/Home5/Banner/index'
import CarFeature from '../components/Home5/FeaturedCar/index'
import BrandCategory from '../components/Home5/Brand/index'
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
      {/* <Whychoose/> */}
      {/* <RecentCar/>
      <HowItWork/> */}
    </>
  );
}

export default HomePage5;
