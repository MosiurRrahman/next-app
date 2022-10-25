import { useEffect } from "react";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/swiper-bundle.css";
import "../../public/assets/font/flaticon.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/responsive.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../public/assets/js/bootstrap.bundle.min");
  }, []);
  return <Component {...pageProps} />;
}
export default MyApp;
