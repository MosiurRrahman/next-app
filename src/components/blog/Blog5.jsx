import Link from "next/link";
import React from "react";

function Blog5() {
  return (
    <div className="blog-section pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="section-title-seven mb-50 text-lg-start text-center">
              <span>Recent Event</span>
              <h2>Recent TechGen Article</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center gy-5">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="blog-seven-single">
              <div className="blog-seven-image">
                <div className="date">
                  20 January, <span>2022</span>
                </div>
                <img src="assets/images/blog/blog7-1.jpg" alt="" />
              </div>
              <div className="blog-seven-content">
                <ul className="blog-meta">
                  <li>
                    <a href="#">By Mokarram</a>
                  </li>
                  <li>
                    <a href="#">Comments (05)</a>
                  </li>
                </ul>
                <h4>
                  <Link
                    legacyBehavior
                    href="/blog-details"
                    data-cursor="Blog Details"
                  >
                    <a>How To Learn Modern Language &amp; Improve Skills.</a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="blog-seven-single">
              <div className="blog-seven-image">
                <div className="date">
                  20 January, <span>2022</span>
                </div>
                <img src="assets/images/blog/blog7-2.jpg" alt="" />
              </div>
              <div className="blog-seven-content">
                <ul className="blog-meta">
                  <li>
                    <a href="#">By Azad</a>
                  </li>
                  <li>
                    <a href="#">Comments (05)</a>
                  </li>
                </ul>
                <h4>
                  <Link
                    legacyBehavior
                    href="/blog-details"
                    data-cursor="Blog Details"
                  >
                    <a>Bootcamp: Web Application Masive Change To Company.</a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="blog-seven-single">
              <div className="blog-seven-image">
                <div className="date">
                  20 January, <span>2022</span>
                </div>
                <img src="assets/images/blog/blog7-3.jpg" alt="" />
              </div>
              <div className="blog-seven-content">
                <ul className="blog-meta">
                  <li>
                    <a href="#">By Anderson</a>
                  </li>
                  <li>
                    <a href="#">Comments (05)</a>
                  </li>
                </ul>
                <h4>
                  <Link
                    legacyBehavior
                    href="/blog-details"
                    data-cursor="Blog Details"
                  >
                    <a>
                      To Achieve More Funtionality &amp; Create Your Strong
                      Site.
                    </a>
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

export default Blog5;
