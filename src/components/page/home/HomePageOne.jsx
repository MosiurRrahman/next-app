import React, { useEffect, useState } from "react";
import AnimateLine from "../../common/AnimateLine";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import SubscribArea from "../../common/SubscribArea";
import Preloader from "../../layout/Preloader";
import ProjectWrap from "../project/ProjectWrap";
import PriceCardWrap from "../service/PriceCardWrap";
import TeamWrap from "../team/TeamWrap";
import AboutArea from "./AboutArea";
import FeaturesArea from "./FeaturesArea";
import HeroArea from "./HeroArea";
import LatesPost from "./LatesPost";
import PartnarArea from "./PartnarArea";
import ServiceArea from "./ServiceArea";
import Testimonial from "./Testimonial";

function HomePageOne() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <div className="creasoft-wrap">
            <AnimateLine />
            <HeroArea />
            <ServiceArea />
            <AboutArea image="/img/logo-dark.svg" />
            <FeaturesArea />
            <ProjectWrap />
            <PartnarArea />
            <PriceCardWrap />
            <Testimonial />
            <TeamWrap />
            <LatesPost />
            <SubscribArea />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default HomePageOne;
