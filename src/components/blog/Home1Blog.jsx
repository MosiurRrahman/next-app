import Link from "next/link";
import React from "react";

function Home1Blog() {
  return (
    <div className="section-common blog-section pt-120">
      <div className="row">
        <div className="section-title-three text-center">
          <div className="water-text">Blog Article</div>
          <h2>Blog Article</h2>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-12">
          <div className="blog-one magnetic-item">
            <div className="blog-one-image">
              <img src="assets/images/blog/home1-blog1.png" alt="image" />
            </div>
            <div className="blog-one-content">
              <ul className="blog-one-meta">
                <li>June 21, 2022</li>
                <li>By, Admin</li>
                <li>Photo</li>
              </ul>
              <h3>
                <Link
                  legacyBehavior
                  href="/blog-details"
                  data-cursor="View<br>Details"
                >
                  <a> Ullamcorper viverrani arcu. Proin cursus volutpat.</a>
                </Link>
              </h3>
              <p>
                I started getting on into photography when my family moved from
                Nevada to Ohio gong toubleta.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="blog-one magnetic-item">
            <div className="blog-one-image">
              <img src="assets/images/blog/home1-blog2.png" alt="image" />
            </div>
            <div className="blog-one-content">
              <ul className="blog-one-meta">
                <li>June 21, 2022</li>
                <li>By, Admin</li>
                <li>Photo</li>
              </ul>
              <h3>
                <Link
                  legacyBehavior
                  href="/blog-details"
                  data-cursor="View<br>Details"
                >
                  <a>Cras lobortis, nisi nec rutrumni facilisis, lorem orci.</a>
                </Link>
              </h3>
              <p>
                I started getting on into photography when my family moved from
                Nevada to Ohio gong toubleta.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="blog-one magnetic-item">
            <div className="blog-one-image">
              <img src="assets/images/blog/home1-blog3.png" alt="image" />
            </div>
            <div className="blog-one-content">
              <ul className="blog-one-meta">
                <li>June 21, 2022</li>
                <li>By, Admin</li>
                <li>Photo</li>
              </ul>
              <h3>
                <Link
                  legacyBehavior
                  href="/blog-details"
                  data-cursor="View<br>Details"
                >
                  <a>Mauris in enim et velit commodo tempus eu eget.</a>
                </Link>
              </h3>
              <p>
                I started getting on into photography when my family moved from
                Nevada to Ohio gong toubleta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1Blog;
