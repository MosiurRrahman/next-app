"use client";
import "./globals.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/fontawesome.min.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/style.css";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap");
    }
  });
  return (
    <html lang="en">
      <body className={`${pathname === "/index5" ? "home-5" : ""}`}>
        {children}
        <Script src="../../public/assets/js/bootstrap.min.js" />
      </body>
    </html>
  );
}
