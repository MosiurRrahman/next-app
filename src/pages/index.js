import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
// import Sidebar from "../components/com+mon/sidebar";
// import Service1 from "../components/service/Service1";
import Banner1 from "../components/banner/Banner1";
import About1 from "../components/about/About1";
import HomeBooking1 from "../components/booking/HomeBooking1";
import HomeGallary1 from "../components/gallary/HomeGallary1";
import HomeNews1 from "../components/news/HomeNews1";
import InstagramFeed1 from "../components/nstagramFeed/InstagramFeed1";
import HomePricePlan from "../components/pricing-plan/HomePricePlan";
import HomeTestimonial1 from "../components/testimonial/HomeTestimonial1";
import HomeVideo1 from "../components/video/HomeVideo1";





export default function Home() {
  return (
    <>
    <h1>hello</h1>
 
     <Header />
    {/* <Sidebar/> */}
    <Banner1 />
    <About1 />
    {/* <Service1 /> */}
    <HomeGallary1/>
    <HomeVideo1/>
    <HomeTestimonial1/>
    <HomePricePlan/>
    <HomeNews1/>
    <HomeBooking1/>
    <InstagramFeed1/>
    <Footer /> 
  </>
  )
}
