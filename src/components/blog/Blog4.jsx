import Link from "next/link";
import React from "react";

function Blog4() {
  return (
    <div className="blog-section-four pt-120 pb-120 overflow-hidden">
      <div className="container">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10">
            <div className="section-title-four sibling-three text-center">
              <span>Our Recent News</span>
              <h2>Agency New Article</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center gy-4">
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-8">
            <div className="blog-five-single">
              <div className="blog-image">
                <img src="assets/images/blog/blog44-1.jpg" alt="image" />
                <div className="blog-date">20 July,2022</div>
              </div>
              <ul className="blog-meta">
                <li>
                  <a href="#">By Rakhab</a>
                </li>
                <li>
                  <a href="#">Comments (05)</a>
                </li>
              </ul>
              <div className="blog-content">
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      Business Growing Policy-SEO Most Popular System To Grow
                      Site.
                    </a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-8">
            <div className="blog-five-single">
              <div className="blog-image">
                <img src="assets/images/blog/blog44-2.jpg" alt="image" />
                <div className="blog-date">24 July,2022</div>
              </div>
              <ul className="blog-meta">
                <li>
                  <a href="#">By Galib</a>
                </li>
                <li>
                  <a href="#">Comments (05)</a>
                </li>
              </ul>
              <div className="blog-content">
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>Grow Your Business Stretegy With Business Consulting.</a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-8">
            <div className="blog-five-single">
              <div className="blog-image">
                <img src="assets/images/blog/blog44-3.jpg" alt="image" />
                <div className="blog-date">28 July,2022</div>
              </div>
              <ul className="blog-meta">
                <li>
                  <a href="#">By Johnson</a>
                </li>
                <li>
                  <a href="#">Comments (05)</a>
                </li>
              </ul>
              <div className="blog-content">
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>How To Learn Modern Language &amp; Improve Skills.</a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog4;
