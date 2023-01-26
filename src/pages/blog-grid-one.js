import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import blogData from "../data/blog_one_data.json";
import Layout from "../layout/Layout";
function blogGridOnePage() {
  return (
    <Layout>
      <Breadcrumb pageName="Blog Grid" pageTitle="Blog Grid" />
      <div className="blog-grid-section pt-120 pb-120 mb-44">
        <div className="container">
          <div className="row justify-content-center">
            {blogData.map((item) => {
              const { id, img, title, date, author_name, category } = item;
              return (
                <div key={id} className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
                  <div className="blog-grid-single">
                    <div className="blog-image">
                      <img src={img} alt="image" />
                    </div>
                    <div className="blog-content">
                      <div className="blog-date">{date}</div>
                      <h4>
                        <Link
                          legacyBehavior
                          href="/blog-details"
                          data-cursor="Read Details"
                        >
                          <a> {title}</a>
                        </Link>
                      </h4>
                      <div className="author-readmore-area">
                        <div className="author">
                          <span className="author-name">By, {author_name}</span>
                          <span className="category">{category}</span>
                        </div>
                        <div className="read-more-btn">
                          <Link legacyBehavior href="/blog-details">
                            <a>
                              Read More
                              <img
                                src="assets/images/icons/button-arrow.svg"
                                alt="image"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row mt-40">
            <div className="col-12">
              <div className="pagination-wrap">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#" tabIndex={-1}>
                        Prev
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link active" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default blogGridOnePage;
