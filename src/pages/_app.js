import Head from 'next/head';
import "../../public/assets/css/bootstrap-icons.css"
import "../../public/assets/css/boxicons.min.css"
import "../../public/assets/css/fontawesome.min.css"
import "../../public/assets/css/bootstrap.min.css"
import "../../public/assets/css/swiper-bundle.min.css"
import "../../public/assets/css/nice-select.css"
import "../../styles/custom.css"
import "../../public/assets/css/style.css"
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
