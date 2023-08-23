import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Topbar from "../components/Home5/Topbar";
import Header from "../components/Home5/Header";

function HomePage5() {
  const router = useRouter();
  const currentRoute = router.pathname;
  useEffect(() => {
    // Get the current route
    document.body.classList.add(currentRoute === "/index5" ? "home-5" : "");
  }, []);
  return (
    <>
      <Topbar />
      <Header />
    </>
  );
}

export default HomePage5;
