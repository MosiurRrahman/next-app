import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import Topbar from '../components/Home5/Topbar'
import Header from '../components/Home5/Header'
import Banner from '../components/home5/Banner/index.jsx';
import FeaturedCar from '../components/home5/FeaturedCar/index.jsx';
import Brand from '../components/home5/Brand/index.jsx';
import WhyDrivco from '../components/home5/WhyDrivco/index';
import HowItWork from '../components/home5/HowItWork/index';
import TopUseCar from '../components/home5/TopUseCar/index';
import UpCommingCar from '../components/home5/UpCommingCar/index';
import Partnar from '../components/home5/Partnar/index';
import CompareCar from '../components/home5/ComparingCars/index';
import Testimonial from '../components/home5/Testimonial/index';
import Blogs from '../components/home5/Blog/index';
import Footer from '../components/Home5/Footer';


function HomePage5() {
  const router = useRouter();
  const currentRoute = router.pathname;
  useEffect(() => {
    // Get the current route
    document.body.classList.add(currentRoute==="/index5"?"home-5":"");  
  }, []);
  return (
    <>
     <Topbar/> 
     <Header/>
     <Banner/>
     <FeaturedCar/>
     <Brand/>
     <WhyDrivco/>
     <TopUseCar/>
     <HowItWork/>
     <UpCommingCar/>
     <Partnar/>
     <CompareCar/>
     <Testimonial/>
     <Blogs/>
     <Footer/>
    </>
  )
}

export default HomePage5