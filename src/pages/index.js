import Banner1 from "../components/banner/Banner1";
import Home1Blog from "../components/blog/Home1Blog";
import Footer from "../components/footer/Footer";
import Header1 from "../components/header/Header1";
import HowItwork1 from "../components/howItWork/HowItwork1";
import CreativeService from "../components/service/CreativeService";
import HomeService from "../components/service/HomeService";
import OfferService from "../components/service/OfferService";
import PopularService from "../components/service/PopularService";
import FeaturesShop from "../components/shop/FeaturesShop";
import Testimonial1 from "../components/testimonial/Testimonial1";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header1 />
      <Banner1 />
      <CreativeService />
      <PopularService />
      <HomeService />
      <FeaturesShop />
      <OfferService />
      <WhyChooseUs />
      <Testimonial1 />
      <HowItwork1 />
      <Home1Blog />
      <Footer />
    </>
  );
}
