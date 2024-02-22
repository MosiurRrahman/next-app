"use client";
import { useEffect } from "react";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/bootstrap-datetimepicker.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "../../public/assets/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";
import "../../public/assets/css/style.css";
import ScrollProgress from "@/components/common/ScrollProgress";
import ThemeSwitch from "@/components/common/Theme";
// import useWow from "@/hooks/useWow";

export default function RootLayout({ children }) {
  // useWow(); 

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <ThemeSwitch />
        {children}
      </body>
    </html>
  );
}
