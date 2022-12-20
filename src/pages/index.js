import About1 from "../components/about/About1";
import Banner1 from "../components/banner/Banner1";
import BestOffer1 from "../components/bestOffer/BestOffer1";
import RecentPost1 from "../components/blog/RecentPost1";
import Experties1 from "../components/cookingExperties/Experties1";
import Footer from "../components/footer/Footer";
import Gallery1 from "../components/gallary/Gallery1";
import Header from "../components/header/Header";
import Topbar from "../components/header/Topbar";
import MenuList1 from "../components/MenuList/MenuList1";
import PopularItem1 from "../components/popularItem/PopularItem1";
import NewItem1 from "../components/tems/NewItem1";
import TesimonialVideo from "../components/testimonial/TesimonialVideo";
import Testimonial1 from "../components/testimonial/Testimonial1";


export default function Home() {
  return (
   <>
   <Topbar/>
    <Header/>
    <Banner1/>
    <About1/>
    <NewItem1/>
    <PopularItem1/>
    <MenuList1/>
    <BestOffer1/>
    <Testimonial1/>
    <TesimonialVideo/>
    <Experties1/>
    <Gallery1/>
    <RecentPost1/>
    <Footer/>
   </>
  )
}
