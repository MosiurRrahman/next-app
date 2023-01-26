import { useEffect } from "react";
import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../public/assets/js/bootstrap.bundle.min.js");
  });
  return (
    <>
      <Component {...pageProps} />
      {/* <Script id="simpleParallax" src="js/simpleParallax.min.js"></Script>
      <Script id="isotope" src="js/isotope.pkgd.min.js"></Script>
      <Script id="imageLoad" src="js/masonry.pkgd.min.js"></Script> */}
    </>
  );
}

export default MyApp;
