import Link from "next/link";
import React from "react";

function Blog2() {
  return (
    <div className="blog-section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title-six text-center mb-60">
              <span>New Blogs</span>
              <h2>Our Latest Articles</h2>
            </div>
          </div>
        </div>
        <div className="row gy-5 justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
            <div className="blog-six-single">
              <div className="blog-six-image">
                <Link legacyBehavior href="/blog-details">
                  <a className="blog-six-cat">SEO Marketing</a>
                </Link>
                <img src="assets/images/blog/blog6-2.jpg" alt="" />
              </div>
              <ul className="blog-meta">
                <li>
                  <a href="#">
                    <i className="bx bx-user-circle" />
                    By Rakhab
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-calendar" />
                    11 july, 2022
                  </a>
                </li>
              </ul>
              <div className="blog-content">
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>Grow Your Business Strategy With SEO Marketing.</a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
            <div className="blog-six-single">
              <div className="blog-six-image">
                <Link legacyBehavior href="/blog-details">
                  <a className="blog-six-cat">Video Editing</a>
                </Link>
                <img src="assets/images/blog/blog6-3.jpg" alt="" />
              </div>
              <ul className="blog-meta">
                <li>
                  <a href="#">
                    <i className="bx bx-user-circle" />
                    By Rakhab
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-calendar" />
                    12 july, 2022
                  </a>
                </li>
              </ul>
              <div className="blog-content">
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>Actual SEO Method Can Change To Business Policy.</a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
            <div className="blog-six-single">
              <div className="blog-six-image">
                <Link legacyBehavior href="/blog-details">
                  <a className="blog-six-cat">Website Design</a>
                </Link>
                <img src="assets/images/blog/blog6-1.jpg" alt="" />
              </div>
              <ul className="blog-meta">
                <li>
                  <a href="#">
                    <i className="bx bx-user-circle" />
                    By Rakhab
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-calendar" />
                    14 july, 2022
                  </a>
                </li>
              </ul>
              <div className="blog-content">
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>Modern Technoloy To Generate Update.</a>
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

export default Blog2;
