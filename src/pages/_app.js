import { useEffect } from "react";
import "../../style/style.css";
import "../../public/assets/css/style.css";
import useMagneticHover from "../hooks/useMagneticHover";
import Script from "next/script";
import useButtonHover from "../hooks/useButtonHover";
import SmoothPageScroll from "../utils/SmoothPageScroll";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import AnimatedCursor from "react-animated-cursor"
import MagicCursor from "../utils/CustomCursor";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  
  useButtonHover();
  useMagneticHover();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
 <Head>
        <title>Aploxn- Business Consulting Next Js Template</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="assets/img/sm-logo.svg"
          type="image/gif"
          sizes="20x20"
        />
      </Head>
      <Component {...pageProps} />
      <ScrollTopBtn />
      <SmoothPageScroll />
    </>
  );
}
