import { useEffect, useState } from "react";
import FilterForm from "../components/common/FilterForm";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import NewsLatter from "../components/common/NewsLatter";
import Preloader from "../components/common/Preloader";
import Topbar from "../components/common/Topbar";
import Home1AchiveMent from "../components/home/Home1AchiveMent";
import Home1Blog from "../components/home/Home1Blog";
import Home1Destination from "../components/home/home1Destination";
import Home1Feature from "../components/home/Home1Feature";
import Home1package from "../components/home/Home1package";
import Mainbarnner1 from "../components/home/Mainbarnner1";
import Review1 from "../components/home/Review1";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <>
      {!loading ? (
        <Preloader />
      ) : (
        <>
          <Topbar />
          <Header />
          <Mainbarnner1 />
          <FilterForm />
          <Home1package />
          <Home1Destination />
          <Home1AchiveMent />
          <Review1 />
          <Home1Feature />
          <Home1Blog />
          <NewsLatter />
          <Footer />
        </>
      )}
    </>
  );
}
