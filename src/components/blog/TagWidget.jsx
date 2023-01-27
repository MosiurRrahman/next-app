import Link from "next/link";
import React from "react";

function TagWidget() {
  return (
    <>
      <div className="blog-widget">
        <h4 className="blog-widget-title">Popular Tag</h4>
        <ul className="tag-list">
          <li>
            <Link legacyBehavior href="/blog-details">
              <a>Artist</a>
            </Link>
          </li>
          <li>
            <img src="assets/images/icons/list-cicle.svg" alt="image" />
            <Link legacyBehavior href="/blog-details">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <img src="assets/images/icons/list-cicle.svg" alt="image" />
            <Link legacyBehavior href="/blog-details">
              <a>Crypto</a>
            </Link>
          </li>
          <li>
            <img src="assets/images/icons/list-cicle.svg" alt="image" />
            <Link legacyBehavior href="/blog-details">
              <a>Digita Tokenl</a>
            </Link>
          </li>
          <li>
            <img src="assets/images/icons/list-cicle.svg" alt="image" />
            <Link legacyBehavior href="/blog-details">
              <a>Blockchain NFT</a>
            </Link>
          </li>
          <li>
            <img src="assets/images/icons/list-cicle.svg" alt="image" />
            <Link legacyBehavior href="/blog-details">
              <a>Market Place</a>
            </Link>
          </li>
          <li>
            <img src="assets/images/icons/list-cicle.svg" alt="image" />
            <Link legacyBehavior href="/blog-details">
              <a>NFT</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TagWidget;
