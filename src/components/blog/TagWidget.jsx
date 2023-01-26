import React from "react";

function TagWidget() {
  return (
    <>
      <div className="blog-widget">
        <h4 className="blog-widget-title">Popular Tag</h4>
        <ul className="tag-list">
          <li>
            {" "}
            <a href="blog-details.html">Artist</a>
          </li>
          <li>
            <img src="assets/images/icons/list-cicle.svg" alt="image" />{" "}
            <a href="blog-details.html">Portfolio</a>
          </li>
          <li>
            <img src="assets/images/icons/list-cicle.svg" alt="image" />{" "}
            <a href="blog-details.html">Crypto</a>
          </li>
          <li>
            <img src="assets/images/icons/list-cicle.svg" alt="image" />{" "}
            <a href="blog-details.html">Digital Token</a>
          </li>
          <li>
            <img src="assets/images/icons/list-cicle.svg" alt="image" />{" "}
            <a href="blog-details.html">Blockchain NFT</a>
          </li>
          <li>
            <img src="assets/images/icons/list-cicle.svg" alt="image" />{" "}
            <a href="blog-details.html">Market Place</a>
          </li>
          <li>
            <img src="assets/images/icons/list-cicle.svg" alt="image" />{" "}
            <a href="blog-details.html">NFT</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TagWidget;
