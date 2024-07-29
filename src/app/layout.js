"use client";

import { useEffect } from "react";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
// import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/bootstrap.min.css";
// import "yet-another-react-lightbox/styles.css";
import "../../public/assets/css/style.css";

import { Playfair_Display, DM_Sans } from "next/font/google";
import useHoverEffect from "../customHooks/useHoverEffect";
import ScrollTopBtn from "../components/common/ScrollTopBtn.jsx";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  styles: ["normal", "italic"],
  weights: ["400", "500", "600", "700"],
});

const dm_mono = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
  weights: ["400", "500", "600", "700", "800"],
});
export default function RootLayout({ children }) {
  useHoverEffect(".btn-hover");
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html
      lang="en" /* className={`${playfair_display.variable} ${dm_mono.variable}`}*/
    >
      <body>
        {children} <ScrollTopBtn />
      </body>
    </html>
  );
}
