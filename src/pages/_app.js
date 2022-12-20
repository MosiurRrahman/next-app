// import all css
import { useEffect } from "react";
import "../styles/main.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../public/js/bootstrap.bundle.min.js");
  });
  return <Component {...pageProps} />
}

export default MyApp
