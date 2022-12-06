import Script from "next/script";
import { useEffect } from "react";
import Preloader from "../components/common/preloader";
import SmoothPageScroll from "../components/common/smoothPageScroll";
import DarkMode from "../components/common/themeMood";
import ScrollToTop from "../components/scrollToTop";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/all.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/magnific-popup.css";
import "../../public/assets/css/odometer.css";
import "../../public/assets/css/custom-video-player.css";
import "../../public/assets/css/style.css";
import Sidebar from "../components/common/sidebar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../public/js/bootstrap.bundle.min.js");
    <Sidebar/>
  });
  return (
    <>
      <DarkMode/>

      <Component {...pageProps} />
      <SmoothPageScroll/>
      {/* <Preloader/> */}
      <ScrollToTop />
      <Script id="simpleParallax" src="js/simpleParallax.min.js"></Script>
      <Script id="isotope" src="js/isotope.pkgd.min.js"></Script>
      <Script id="imageLoad" src="js/Flip.min.js"></Script>
      <Script id="imageLoad" src="js/masonry.pkgd.min.js"></Script>
    </>
  );
}

export default MyApp;
