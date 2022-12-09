import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Banner1 from "../components/banner/Banner1";
import About1 from "../components/about/About1";
import HomeBooking1 from "../components/booking/HomeBooking1";
import HomeGallary1 from "../components/gallary/HomeGallary1";
import HomeNews1 from "../components/news/HomeNews1";
import InstagramFeed1 from "../components/nstagramFeed/InstagramFeed1";
import HomePricePlan from "../components/pricing-plan/HomePricePlan";
import HomeTestimonial1 from "../components/testimonial/HomeTestimonial1";
import HomeVideo1 from "../components/video/HomeVideo1";
import Services1 from "../components/services/Services1";
import Head from "next/head";
// import Preloader from "../components/common/preloader";

export default function Home() {
  return (
    <>
     <Head>
        <title>Xoon - Photography Portfolio NextJs Template</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="assets/images/sm-logo.svg"
          type="image/gif"
          sizes="20x20"
        />
      </Head>
      {/* <Preloader/> */}
      <Header />
      <Banner1 />
      <About1 />
      <Services1 />
      <HomeGallary1 />
      <HomeVideo1 />
      <HomeTestimonial1 />
      <HomePricePlan />
      <HomeNews1 />
      <HomeBooking1 />
      <InstagramFeed1 />
      <Footer />
    </>
  );
}
