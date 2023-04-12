import Link from "next/link";
import React from "react";

function Breadcrumb({ pageName, pageTitle }) {
  return (
    <div className="inner-banner">
      <a href="#next" className="down-arrow">
        <img src="assets/images/icons/down-arrow.svg" alt="image" />
      </a>
      <div className="bread-shape-left">
        <img src="assets/images/bg/bread-shape-1.svg" alt="" />
      </div>
      <div className="bread-shape-right">
        <img src="assets/images/bg/bread-shape-2.svg" alt="" />
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center text-center">
          <div className="col-md-6">
            <h2
              className="inner-banner-title wow fadeInLeft"
              data-wow-duration="1.5s"
              data-wow-delay=".2s"
            >
              {pageTitle}
            </h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb gap-3">
                <li className="breadcrumb-item">
                  <Link legacyBehavior href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {pageName}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
