import Link from "next/link";
import React from "react";
import Header1 from "../components/Header/Header1";
import Footer from "../components/footer/Footer";
import Topbar1 from "../components/topbar/Topbar1";

function CustomError() {
  return (
    <>
      <Topbar1 />
      <Header1 />
      <div className="error-section">
        <div className="error-image">
          <img src="assets/images/bg/error-bg.png" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="error-content">
                <h3>PAGE NOT FOUND!</h3>
                <h1>404</h1>
                <div className="explore-button style-two text-center pt-120">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        src="assets/images/icons/button-arro-linear-big.svg"
                        alt="image"
                      />
                      Back to Home
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CustomError;
