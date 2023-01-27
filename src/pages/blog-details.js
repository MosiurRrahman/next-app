/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import Artical from "../components/blog/Artical";
import SocialLink from "../components/blog/SocialLink";
import TagWidget from "../components/blog/TagWidget";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function blogDetailsPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Blog Details" pageTitle="Blog Details" />
      <div className="blog-grid-section pt-120 pb-120 mb-44">
        <div className="container">
          <div className="row">
            <div className="blog-details-image">
              <img src="assets/images/blog/blog-details-bg.png" alt="image" />
            </div>
          </div>
          <div className="row justify-content-center gy-5">
            <div className="col-lg-8">
              <div className="blog-details-content">
                <ul className="blog-meta">
                  <li>June 21, 2022</li>
                  <li>By, Admin</li>
                  <li>Photo</li>
                </ul>
                <h3 className="blog-details-title">
                  Veryes elementum sesuren thei aucan vestibu Toldan Aboura
                  Bille khulema.
                </h3>
                <p className="mb-40">
                  Aliquam elementum augue ut est commodo molestie. Suspendisse
                  volutpat elementum aliquam. Pellentesque bout consequat
                  gravida neque ut gravida. Nulla non odio nibh. Nulla facilisi.
                  Interdum et malesuada fames ac antebotar ipsum primis in
                  faucibus. Cras posuere nulla augue, ultricies varius orci
                  laoreet at. Donec eu nisi ornare, egestasoldr risus quis,
                  ultricies neque. Nulla iaculis arcu sem, quis volutpat nunc
                  tempor eget. Nulla egestas pharetra ipsum, sitai amet
                  scelerisque odio mattis pretium. Curabitur ultricies sagittis
                  feugiat. Curabitur porttitor risus in lectus oldest the
                  imperdiet, in viverra tellus pretium. Duis nec molestie
                  ligula.
                </p>
                <h3 className="blog-subtitle">Creative approach.</h3>
                <p>
                  Aliquam elementum augue ut est commodo molestie. Suspendisse
                  volutpat elementum aliquam. Pellentesque bout consequat
                  gravida neque ut gravida. Nulla non odio nibh. Nulla facilisi.
                  Interdum et malesuada fames ac antebotar ipsum primis in
                  faucibus. Cras posuere nulla augue.
                </p>
                <div className="quote-area">
                  <div className="quote-icon">
                    <img src="assets/images/icons/quote-big.svg" alt="image" />
                  </div>
                  <blockquote>
                    "I work with Alguneb Johnl on many projects, he always
                    toldagona exceeds my expectations with his quality work and
                    fastestopa tope service, very smooth and simple
                    communication."
                  </blockquote>
                  <h3>Leslie Alexander</h3>
                </div>
                <div className="row mb-30">
                  <div className="col-6">
                    <img
                      src="assets/images/blog/blog-details1.png"
                      alt="image"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="assets/images/blog/blog-details2.png"
                      alt="image"
                    />
                  </div>
                </div>
                <p>
                  Aliquam elementum augue ut est commodo molestie. Suspendisse
                  volutpat elementum aliquam. Pellentesque bout consequat
                  gravida neque ut gravida. Nulla non odio nibh. Nulla facilisi.
                  Interdum et malesuada fames ac antebotar risus quis, ultricies
                  neque. Nulla iaculis arcu sem, quis volutpat nunc tempor eget.
                  Nulla egestas pharetra ipsum, sitai amet scelerisque odio
                  mattis pretium. Curabitur ultricies sagittis feugiat.
                  Curabitur porttitor risus in lectus oldest the ipsum primis in
                  faucibus. Cras posuere nulla augue.
                </p>
                <div className="blog-share">
                  <div className="row gy-5">
                    <div className="col-md-6 d-flex justify-content-md-start justify-content-center">
                      <ul className="tag-list">
                        <li>
                          <img
                            src="assets/images/icons/list-cicle.svg"
                            alt="image"
                          />
                          <Link legacyBehavior href="/blog-details">
                            <a>Portfolio</a>
                          </Link>
                        </li>
                        <li>
                          <img
                            src="assets/images/icons/list-cicle.svg"
                            alt="image"
                          />
                          <Link legacyBehavior href="/blog-details">
                            <a>Crypto</a>
                          </Link>
                        </li>
                        <li>
                          <img
                            src="assets/images/icons/list-cicle.svg"
                            alt="image"
                          />
                          <Link legacyBehavior href="/blog-details">
                            <a>Digital Token</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 d-flex justify-content-md-end justify-content-center">
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
        <div className="container-fluid px-0">
          <div className="portfolio-navigation mb-0">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <div className="arrow-prev text-center">
                  <span>Previous</span>
                  <svg
                    width={171}
                    height={10}
                    viewBox="0 0 171 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 5L171 4.99999" />
                    <path d="M6 1L1 5L6 9" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-4 d-sm-block d-none text-center">
                <h4>veryes elementum sesuren thei aucan vestibu bounati.</h4>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <div className="arrow-prev text-center">
                  <span>Next</span>
                  <svg
                    width={171}
                    height={10}
                    viewBox="0 0 171 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 5L170 4.99999" />
                    <path d="M165 9L170 5L165 1" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-120">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="blog-subtitle-2">02 Comment</h2>
              <div className="comment-block pb-120">
                <ul>
                  <li>
                    <div className="author-img">
                      <img src="assets/images/bg/comment-1.png" alt="image" />
                    </div>
                    <div className="comment-content">
                      <div className="comment-top d-flex align-items-center justify-content-between flex-nowrap">
                        <div className="comment-meta flex-wrap">
                          <h5>Polard Girdet</h5>{" "}
                          <img
                            src="assets/images/icons/list-cicle.svg"
                            alt="image"
                          />
                          <span>16/03/2022</span>
                        </div>
                        <div className="replay-btn">
                          <a href="#">Reply</a>
                        </div>
                      </div>
                      <p>
                        Vestibulum eget mauris dui. Proin luctus est lacus, eu
                        lobortis orchivaone dignissimona atei. Ut nec
                        vulputateri nisl. Mauris vel dolor augue toidan.
                        dolorcoul maximus a finibus eget.
                      </p>
                    </div>
                  </li>
                  <li>
                    <ul className="coment-reply ps--md-5 ps-3">
                      <li>
                        <div className="author-img">
                          <img
                            src="assets/images/bg/comment-2.png"
                            alt="image"
                          />
                        </div>
                        <div className="comment-content">
                          <div className="comment-top d-flex align-items-center justify-content-between flex-nowrap">
                            <div className="comment-meta flex-wrap">
                              <h5>Jordan Josef</h5>
                              <img
                                src="assets/images/icons/list-cicle.svg"
                                alt="image"
                              />
                              <span>15/03/2022</span>
                            </div>
                            <div className="replay-btn">
                              <a href="#">Reply</a>
                            </div>
                          </div>
                          <p>
                            Vestibulum eget mauris dui. Proin luctus est lacus,
                            eu lobortis orchivaone dignissimona atei. Ut nec
                            vulputateri nisl. Mauris vel dolor augue toidan.
                            dolorcoul maximus a finibus eget.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <h2 className="blog-subtitle-2">Have Any Questions</h2>
              <form className="contact-me-form">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <input type="text" placeholder="Enter your name" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <input type="text" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <textarea
                        rows={6}
                        placeholder="Your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="eg-btn btn--primary btn--lg"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default blogDetailsPage;
