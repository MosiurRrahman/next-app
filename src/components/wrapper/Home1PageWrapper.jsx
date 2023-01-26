/* eslint-disable react/no-unescaped-entities */
import React from "react";

function Home1PageWrapper({ children }) {
  return (
    <>
      <div className="main-page-wrapper">
        <div className="left-fixed-image">
          <img src="assets/images/bg/portfolio-image-1.png" alt="image" />
        </div>
        <div className="right-fixed-social">
          <ul className="social-three">
            <li>
              <a href="https://www.instagram.com/">
                <i className="bx bxl-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://www.dribbble.com/">
                <i className="bx bxl-pinterest-alt" />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">
                <i className="bx bxl-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <i className="bx bxl-facebook" />
              </a>
            </li>
          </ul>
        </div>
        <div className="page-content">{children}</div>
      </div>
    </>
  );
}

export default Home1PageWrapper;
