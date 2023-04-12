import Link from "next/link";
import React from "react";

function TagWidget() {
  return (
    <div className="blog-widget">
      <h4 className="blog-widget-title">Tag:</h4>
      <ul className="tag-list">
        <li>
          <Link legacyBehavior href="/blog-details">
            <a>Business Strategy,</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog-details">
            <a>Marketing,</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog-details">
            <a>Digital,</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog-details">
            <a>SEO Marketing,</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog-dtails">
            <a>Development,</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog-details">
            <a>Design,</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog-details">
            <a>Technology,</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog-details">
            <a>Agency,</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TagWidget;
