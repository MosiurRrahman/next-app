/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CopyrightFooter from "../components/copyright/CopyrightFooter";
import Header1 from "../components/header/Header1";

function CustomError() {
  return (
    <>
      <Header1 />
      <Breadcrumb pageName="Error" pageTitle="Error" />
      <div className="erro-section pt-120 pb-120 mb-44">
        <div className="container">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-6 col-md-10">
              <div className="error-content">
                <h2>
                  404 <span>Error</span>
                </h2>
                <h3>Sorry, couldn't find that page.</h3>
                <p>
                  Donec bibendum enim ut elit porta ullamcorper. Vestibulum Nai
                  quam nulla gonr venenatis eget dapibus ac, catali topuny
                  wekemdini iaculis vitae nulla.
                </p>
                <Link legacyBehavior href="/">
                  <a className="eg-btn btn--primary btn--lg">Back To Home</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="error-image">
                <img src="assets/images/bg/error-bg.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyrightFooter />
    </>
  );
}

export default CustomError;
