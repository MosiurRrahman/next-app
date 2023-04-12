import Link from "next/link";
import React from "react";
import ArticalCategory from "../components/blog/ArticalCategory";
import CategoryWidget from "../components/blog/CategoryWidget";
import FormWidget from "../components/blog/FormWidget";
import TagWidget from "../components/blog/TagWidget";
import Breadcrumb from "../components/common/Breadcrumb";
import MainLayout from "../layout/MainLayout";

function blogRightSidebar() {
  return (
    <MainLayout>
      <Breadcrumb />
      <div className="blog-section pt-120 pb-120" id="next">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-8">
              <div className="blog-two-single sibling-two">
                <div className="blog-image">
                  <img src="assets/images/blog/blog-left1.jpg" alt="image" />
                  <div className="blog-date">
                    <span>20 Jan</span> 2023
                  </div>
                </div>
                <ul className="blog-meta">
                  <li>
                    <a href="#" className="linear-text-two">
                      <i className="bx bx-user-circle" />
                      By Robert
                    </a>
                  </li>
                  <li>
                    <a href="#" className="linear-text-two">
                      <i className="bx bx-message-rounded-dots" />
                      (12) Comments
                    </a>
                  </li>
                </ul>
                <div className="blog-content">
                  <h4>
                    <Link
                      legacyBehavior
                      href="/blog-details"
                      data-cursor="Blog Details"
                    >
                      <a>
                        {" "}
                        Discussion Always Be Fast To Change Any Marketing
                        Strategy.
                      </a>
                    </Link>
                  </h4>
                  <div className="explore-button with-border">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        <img
                          src="assets/images/icons/button-arrow-linear.svg"
                          alt="image"
                        />{" "}
                        Explore More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="blog-two-single sibling-two">
                <div className="blog-image">
                  <img src="assets/images/blog/blog-left2.jpg" alt="image" />
                  <div className="blog-date">
                    <span>22 Jan</span> 2023
                  </div>
                </div>
                <ul className="blog-meta">
                  <li>
                    <a href="#" className="linear-text-two">
                      <i className="bx bx-user-circle" />
                      By Karlow
                    </a>
                  </li>
                  <li>
                    <a href="#" className="linear-text-two">
                      <i className="bx bx-message-rounded-dots" />
                      (12) Comments
                    </a>
                  </li>
                </ul>
                <div className="blog-content">
                  <h4>
                    <Link
                      legacyBehavior
                      href="/blog-details"
                      data-cursor="Blog Details"
                    >
                      <a>
                        Marketing Strategy Is A Interesting Part On Going
                        Business Change.
                      </a>
                    </Link>
                  </h4>
                  <div className="explore-button with-border">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        <img
                          src="assets/images/icons/button-arrow-linear.svg"
                          alt="image"
                        />{" "}
                        Explore More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="blog-two-single sibling-two">
                <div className="blog-image">
                  <img src="assets/images/blog/blog-left3.jpg" alt="image" />
                  <div className="blog-date">
                    <span>03 Feb</span> 2023
                  </div>
                </div>
                <ul className="blog-meta">
                  <li>
                    <a href="#" className="linear-text-two">
                      <i className="bx bx-user-circle" />
                      By Mokarram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="linear-text-two">
                      <i className="bx bx-message-rounded-dots" />
                      (12) Comments
                    </a>
                  </li>
                </ul>
                <div className="blog-content">
                  <h4>
                    <Link
                      legacyBehavior
                      href="/blog-details"
                      data-cursor="Blog Details"
                    >
                      <a>
                        Bootcamp-01: Change To Impressive Marketing Policy &amp;
                        Goahead Fast.
                      </a>
                    </Link>
                  </h4>
                  <div className="explore-button with-border">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        <img
                          src="assets/images/icons/button-arrow-linear.svg"
                          alt="image"
                        />{" "}
                        Explore More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="blog-two-single sibling-two">
                <div className="blog-image">
                  <img src="assets/images/blog/blog-left4.jpg" alt="image" />
                  <div className="blog-date">
                    <span>10 Feb</span> 2023
                  </div>
                </div>
                <ul className="blog-meta">
                  <li>
                    <a href="#" className="linear-text-two">
                      <i className="bx bx-user-circle" />
                      By Adam
                    </a>
                  </li>
                  <li>
                    <a href="#" className="linear-text-two">
                      <i className="bx bx-message-rounded-dots" />
                      (12) Comments
                    </a>
                  </li>
                </ul>
                <div className="blog-content">
                  <h4>
                    <Link
                      legacyBehavior
                      href="/blog-details"
                      data-cursor="Blog Details"
                    >
                      <a>
                        Business Growing Policy-SEO Most Popular System To Grow
                        Site.
                      </a>
                    </Link>
                  </h4>
                  <div className="explore-button with-border">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        <img
                          src="assets/images/icons/button-arrow-linear.svg"
                          alt="image"
                        />{" "}
                        Explore More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <nav className="pagination-wrap">
                <ul className="pagination d-flex justify-content-center align-items-center gap-md-3 gap-2">
                  <li className="page-item">
                    <a className="page-link" href="#" tabIndex={-1}>
                      <svg
                        width={57}
                        height={40}
                        viewBox="0 0 57 40"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.5 20C17.5 30.7696 26.2304 39.5 37 39.5C47.7696 39.5 56.5 30.7696 56.5 20C56.5 9.23045 47.7696 0.5 37 0.5C26.2304 0.5 17.5 9.23045 17.5 20Z" />
                        <path d="M37 19.5C37.2761 19.5 37.5 19.7239 37.5 20C37.5 20.2761 37.2761 20.5 37 20.5V19.5ZM0.646446 20.3536C0.451183 20.1583 0.451183 19.8417 0.646446 19.6464L3.82843 16.4645C4.02369 16.2692 4.34027 16.2692 4.53553 16.4645C4.7308 16.6597 4.7308 16.9763 4.53553 17.1716L1.70711 20L4.53553 22.8284C4.7308 23.0237 4.7308 23.3403 4.53553 23.5355C4.34027 23.7308 4.02369 23.7308 3.82843 23.5355L0.646446 20.3536ZM37 20.5L1 20.5V19.5L37 19.5V20.5Z" />
                      </svg>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      01
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <svg
                        width={57}
                        height={40}
                        viewBox="0 0 57 40"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20Z" />
                        <path d="M20 19.5C19.7239 19.5 19.5 19.7239 19.5 20C19.5 20.2761 19.7239 20.5 20 20.5V19.5ZM56.3536 20.3536C56.5488 20.1583 56.5488 19.8417 56.3536 19.6464L53.1716 16.4645C52.9763 16.2692 52.6597 16.2692 52.4645 16.4645C52.2692 16.6597 52.2692 16.9763 52.4645 17.1716L55.2929 20L52.4645 22.8284C52.2692 23.0237 52.2692 23.3403 52.4645 23.5355C52.6597 23.7308 52.9763 23.7308 53.1716 23.5355L56.3536 20.3536ZM20 20.5L56 20.5V19.5L20 19.5V20.5Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-4">
              <CategoryWidget />
              <ArticalCategory />
              <TagWidget />
              <FormWidget />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default blogRightSidebar;
