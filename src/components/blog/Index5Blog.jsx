import Link from "next/link";
import React from "react";

function Index5Blog() {
  return (
    <div className="blog-section-five pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10">
            <div className="section-title-four text-center ">
              <span className="linear-text-two">Recent News</span>
              <h2>
                Our New<span className="linear-text-two"> Article</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="eg-row">
          <div className="eg-col-40">
            <div className="blog-two-single">
              <div className="blog-image">
                <img src="assets/images/blog/blog2-1.jpg" alt="image" />
                <div className="blog-date">
                  <span>20 July</span> 2022
                </div>
              </div>
              <ul className="blog-meta">
                <li>
                  <a href="#" className="linear-text-two">
                    <i className="bi bi-person-bounding-box" />
                    By Mokarram
                  </a>
                </li>
                <li>
                  <a href="#" className="linear-text-two">
                    <i className="bi bi-chat-dots-fill" />
                    (12) Comments
                  </a>
                </li>
              </ul>
              <div className="blog-content">
                <h4>
                  <Link
                    legacyBehavior
                    href="/blog-details"
                    data-cursor="View Details"
                  >
                    <a>
                      Business Growing Policy-SEO Most Popular System To Grow
                      Site.
                    </a>
                  </Link>
                </h4>
                <div className="explore-button with-border">
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      <img
                        src="assets/images/icons/button-arrow-linear.svg"
                        alt="image"
                      />
                      Explore More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="eg-col-35">
            <div className="blog-two-single">
              <div className="blog-image">
                <img src="assets/images/blog/blog2-2.jpg" alt="image" />
                <div className="blog-date">
                  <span>20 July</span> 2022
                </div>
              </div>
              <ul className="blog-meta">
                <li>
                  <a href="#" className="linear-text-two">
                    <i className="bi bi-person-bounding-box" />
                    By Rakhab
                  </a>
                </li>
                <li>
                  <a href="#" className="linear-text-two">
                    <i className="bi bi-chat-dots-fill" />
                    (12) Comments
                  </a>
                </li>
              </ul>
              <div className="blog-content">
                <h4>
                  <Link
                    legacyBehavior
                    href="/blog-details"
                    data-cursor="View Details"
                  >
                    <a>
                      Facilis doloremque ab ut unde officia necessitatibus,
                      praesentium.
                    </a>
                  </Link>
                </h4>
                <div className="explore-button with-border">
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      <img
                        src="assets/images/icons/button-arrow-linear.svg"
                        alt="image"
                      />
                      Explore More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="eg-col-25">
            <div className="blog-three-single">
              <div className="blog-date linear-text-two">
                10 July 2023 / By Anderson
              </div>
              <div className="blog-three-content">
                <h5>
                  <Link
                    legacyBehavior
                    href="/blog-details"
                    data-cursor="View Details"
                  >
                    <a>Grow Your Business Stretegy With Business Consulting.</a>
                  </Link>
                </h5>
                <div className="explore-button with-border">
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      <img
                        src="assets/images/icons/button-arrow-linear.svg"
                        alt="image"
                      />
                      Explore More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-three-single">
              <div className="blog-date linear-text-two">
                14 Jan 2023 / By Williamson
              </div>
              <div className="blog-three-content">
                <h5>
                  <Link
                    legacyBehavior
                    href="/blog-details.htm"
                    data-cursor="View Details"
                  >
                    <a>Facilis doloremque ab ut unde officia, praesentium.</a>
                  </Link>
                </h5>
                <div className="explore-button with-border">
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      <img
                        src="assets/images/icons/button-arrow-linear.svg"
                        alt="image"
                      />
                      Explore More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-three-single">
              <div className="blog-date linear-text-two">
                05 Feb, 2022 / By Mokarram
              </div>
              <div className="blog-three-content">
                <h5>
                  <Link
                    legacyBehavior
                    href="/blog-details"
                    data-cursor="View Details"
                  >
                    <a> Dolorem ullam, dolor laborum illo ! Nobis, nam!</a>
                  </Link>
                </h5>
                <div className="explore-button with-border">
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      <img
                        src="assets/images/icons/button-arrow-linear.svg"
                        alt="image"
                      />
                      Explore More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index5Blog;
