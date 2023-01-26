import Link from "next/link";
import React from "react";
import Artical from "../components/blog/Artical";
import SocialLink from "../components/blog/SocialLink";
import TagWidget from "../components/blog/TagWidget";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import blogData from "../data/blog_one_data.json";
import Layout from "../layout/Layout";
function blogStandardOne() {
  return (
    <Layout>
      <Breadcrumb pageName="Blog Standard 01" pageTitle="Blog Standard 01" />
      <div className="blog-grid-section pt-120 pb-120 mb-44 overflow-hidden">
        <div className="container">
          <div className="row justify-content-center gy-5">
            <div className="col-lg-8 pe-lg-4 pe-0">
              {blogData.map((item) => {
                const {
                  id,
                  img_standard,
                  date,
                  title1,
                  author_name,
                  category,
                } = item;
                return (
                  <div key={id} className="blog-standard-single">
                    <div className="blog-image">
                      <img src={img_standard} alt="image" />
                    </div>
                    <div className="blog-content">
                      <ul className="blog-stand-meta">
                        <li>{date}</li>
                        <li>By, {author_name}</li>
                        <li>{category}</li>
                      </ul>
                      <h3>
                        <Link
                          legacyBehavior
                          href="/blog-details"
                          data-cursor="Read Details"
                        >
                          <a> {title1}</a>
                        </Link>
                      </h3>
                      <div className="read-more-btn">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            {" "}
                            Read Article{" "}
                            <img
                              src="assets/images/icons/button-arrow.svg"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}

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
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <Artical />
                <TagWidget />
                <SocialLink />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default blogStandardOne;
