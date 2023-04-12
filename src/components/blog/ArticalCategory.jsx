import Link from "next/link";
import React from "react";

function ArticalCategory() {
  return (
    <div className="blog-widget">
      <h4 className="blog-widget-title">Recent Article:</h4>
      <ul className="recent-post-list">
        <li className="recent-post-single">
          <Link legacyBehavior href="/blog-detials">
            <a className="post-image">
              <img src="assets/images/blog/recent-blog1.jpg" alt="" />
            </a>
          </Link>
          <div className="post-content">
            <Link legacyBehavior href="/blog-details">
              <a className="date">07 January, 2022</a>
            </Link>
            <h5>
              <Link
                legacyBehavior
                href="/blog-details"
                data-cursor="Blog Details"
              >
                <a>Bootcamp; Change To Impressive Marketing Policy.</a>
              </Link>
            </h5>
          </div>
        </li>
        <li className="recent-post-single">
          <Link legacyBehavior href="/blog-detials">
            <a className="post-image">
              <img src="assets/images/blog/recent-blog2.jpg" alt="" />
            </a>
          </Link>
          <div className="post-content">
            <Link legacyBehavior href="/blog-detials">
              <a className="date">02 March, 2022</a>
            </Link>
            <h5>
              <Link
                legacyBehavior
                href="/blog-details"
                data-cursor="Blog Details"
              >
                <a>Become A Expert Any Business Field.</a>
              </Link>
            </h5>
          </div>
        </li>
        <li className="recent-post-single">
          <Link legacyBehavior href="/blog-detials">
            <a className="post-image">
              <img src="assets/images/blog/recent-blog3.jpg" alt="" />
            </a>
          </Link>
          <div className="post-content">
            <Link legacyBehavior href="/blog-detials">
              <a className="date">06 March, 2022</a>
            </Link>
            <h5>
              <Link
                legacyBehavior
                href="/blog-details"
                data-cursor="Blog Details"
              >
                <a>Discussion Always Be Fast To Change Marketing Strategy.</a>
              </Link>
            </h5>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ArticalCategory;
