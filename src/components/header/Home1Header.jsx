import React from "react";

function Home1Header() {
  return (
    <header className="header-area style-1">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="header-logo">
          <a href="index.html">
            <img
              alt="image"
              className="img-fluid"
              src="assets/images/bg/header-logo.svg"
            />
          </a>
        </div>
        <div className="sidebar-button mobile-menu-btn">
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
}

export default Home1Header;
