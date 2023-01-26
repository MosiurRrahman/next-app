import React from "react";

function SocialLink() {
  return (
    <>
      <div className="blog-widget">
        <h4 className="blog-widget-title">Social Media</h4>
        <ul className="social-three">
          <li>
            <a href="https://www.instagram.com/">
              <i className="bx bxl-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.dribbble.com/">
              <i className="bx bxl-pinterest-alt" />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <i className="bx bxl-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <i className="bx bxl-facebook" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SocialLink;
