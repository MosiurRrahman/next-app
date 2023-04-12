import Link from "next/link";
import React from "react";

function CategoryWidget() {
  return (
    <>
      <div className="input-with-search">
        <input type="text" placeholder="Search..." />
        <div className="icon">
          <i className="bi bi-search" />
        </div>
      </div>
      <div className="blog-widget">
        <h4 className="blog-widget-title">Category:</h4>
        <ul className="category-list">
          <li>
            <Link legacyBehavior href="/blog-details">
              <a>
                <span>Digital Marketing</span>
                <span>(02)</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-details">
              <a>
                <span>Business Consult</span>
                <span>(08)</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-details">
              <a>
                <span>Technology</span>
                <span>(01)</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-details">
              <a>
                <span>SEO Marketing</span>
                <span>(04)</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-dtails">
              <a>
                <span>Business Strategy</span>
                <span>(02)</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-details">
              <a>
                <span>UI/UX Design</span>
                <span>(05)</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-details">
              <a>
                <span>Uncategorized</span>
                <span>(09)</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CategoryWidget;
