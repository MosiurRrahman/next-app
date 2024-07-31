"use client";
import { useEffect } from "react";
import useWow from "@/customHooks/useWow";
import { Playfair_Display, DM_Sans } from "next/font/google";
import useHoverEffect from "../customHooks/useHoverEffect";
import ScrollTopBtn from "../components/common/ScrollTopBtn.jsx";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
// import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/style.css";


const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight:["400","500","600","700","800","900"],
  styles:  ['italic','normal'],
});

const dm_mono = DM_Sans({
  subsets: ["latin"],
  weight:["300","400","500","600","700","800","900"],
  variable: "--font-dmsans",
  display: "swap",
  styles:  ['italic','normal'],
});
export default function RootLayout({ children }) {
  // useHoverEffect(".btn-hover");
  useWow();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html
      lang="en" className={`${playfair_display.variable} ${dm_mono.variable}`}
    >
      <body>
        {children} <ScrollTopBtn />
      </body>
    </html>
  );
}
