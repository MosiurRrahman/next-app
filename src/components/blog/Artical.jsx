import Link from "next/link";
import React from "react";

function Artical() {
  return (
    <div className="blog-widget">
      <h4 className="blog-widget-title">New Article</h4>
      <ul className="new-post-list">
        <li className="new-post-single">
          <div className="blog-image">
            <img src="assets/images/blog/new-post1.png" alt="image" />
          </div>
          <div className="blog-content">
            <div className="blog-date">30.05.2022</div>
            <h5>
              <Link legacyBehavior href="/blog-details">
                <a>Quisque laoreet Ma ecento thougr facilisis tristique.</a>
              </Link>
            </h5>
          </div>
        </li>
        <li className="new-post-single">
          <div className="blog-image">
            <img src="assets/images/blog/new-post2.png" alt="image" />
          </div>
          <div className="blog-content">
            <div className="blog-date">20.05.2022</div>
            <h5>
              <Link legacyBehavior href="/blog-details">
                <a>Laudantium exercitationem harum soluta. pellentesque.</a>
              </Link>
            </h5>
          </div>
        </li>
        <li className="new-post-single">
          <div className="blog-image">
            <img src="assets/images/blog/new-post3.png" alt="image" />
          </div>
          <div className="blog-content">
            <div className="blog-date">20.05.2022</div>
            <h5>
              <Link legacyBehavior href="/blog-details">
                <a>
                  Quos doloribus ipsa illum cumque voluptatibus. pellentesque.
                </a>
              </Link>
            </h5>
          </div>
        </li>
        <li className="new-post-single">
          <div className="blog-image">
            <img src="assets/images/blog/new-post4.png" alt="image" />
          </div>
          <div className="blog-content">
            <div className="blog-date">20.05.2022</div>
            <h5>
              <Link legacyBehavior href="/blog-details">
                <a>Aspernatur nam blanditiis earum facilis. pellentesque.</a>
              </Link>
            </h5>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Artical;
