import React from 'react'
import Banner4 from '../components/banner/Banner4'
import About1 from "../components/about/About1";
import HomeBooking1 from "../components/booking/HomeBooking1";
import Footer from "../components/footer/Footer";
import HomeGallary1 from "../components/gallary/HomeGallary1";
import Header from "../components/header/Header";
import HomeNews1 from "../components/news/HomeNews1";
import InstagramFeed1 from "../components/nstagramFeed/InstagramFeed1";
import Partner1 from "../components/partnar/Partner1";
import HomePricePlan from "../components/pricing-plan/HomePricePlan";
import HomeTestimonial1 from "../components/testimonial/HomeTestimonial1";
import HomeVideo1 from "../components/video/HomeVideo1";
import Services1 from '../components/services/Services1';


function IndexFullscreenPage() {
  return (
    <>
    <Header style="style-1 header-transparent" />
     <Banner4/>   
     <About1 />
    <Services1 />
    <HomeGallary1/>
    <HomeVideo1/>
    <HomeTestimonial1/>
    <HomePricePlan/>
    <HomeNews1/>
    <HomeBooking1/>
    <Partner1/>
    <InstagramFeed1/>
    <Footer />
    </>
  )
}

export default IndexFullscreenPage