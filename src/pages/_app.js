import { useEffect } from "react";
import { useWow } from "../hooks/useWow";
import "../styles/main.css";
function MyApp({ Component, pageProps }) {
  useWow();
  useEffect(() => {
    import("../../public/assets/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
