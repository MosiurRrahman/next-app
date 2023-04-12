import Link from "next/link";
import React from "react";

function Stratgy2() {
  return (
    <div className="strategy-section pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-10">
            <div className="strategy-image">
              <img src="assets/images/bg/strategy-bg.png" alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="section-title-six sibling-two text-sm-start text-center">
              <span>Techio Marekting</span>
              <h2>
                Better Business <span>Strategy. </span>
              </h2>
            </div>
            <div className="strategy-content">
              <h3>
                ‘‘On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized.’’
              </h3>
              <ul className="strategy-list">
                <li>
                  {" "}
                  <img src="assets/images/icons/list-icon.svg" alt="" />{" "}
                  Friendly Organized Marketing
                </li>
                <li>
                  <img src="assets/images/icons/list-icon.svg" alt="" />
                  Creative Solution{" "}
                </li>
                <li>
                  <img src="assets/images/icons/list-icon.svg" alt="" />
                  Always Support Team
                </li>
                <li>
                  <img src="assets/images/icons/list-icon.svg" alt="" />
                  Claims of duty or the obligations
                </li>
              </ul>
              <div className="ranking-block">
                <img src="assets/images/icons/badge-icon.svg" alt="" />
                <h5>Top Ranking Digital Marketing Worldwide.</h5>
                <Link legacyBehavior href="/service-details">
                  <a className="explore-btn">Visit Here</a>
                </Link>
              </div>
              <Link legacyBehavior href="/about">
                <a className="eg-btn btn--primary-outline2 btn--lg">
                  Explore More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stratgy2;
