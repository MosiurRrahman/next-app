import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import MainLayout from "../layout/MainLayout";

function blogDetails() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Blog Details" pageTitle="Blog Details" />
      <div className="blog-section pt-120 pb-120" id="next">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-8">
              <div className="blog-two-single sibling-two blog-details">
                <div className="blog-image">
                  <img src="assets/images/blog/blog-left1.jpg" alt="image" />
                  <div className="blog-date">
                    <span>20 July</span> 2022
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
                  <h3>
                    Business Growing Policy-SEO Most Popular System To Grow
                    Site.
                  </h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters.Nor again is
                    there anyone who loves or pursues or desires to obtain pain
                    of itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure.
                  </p>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness.
                  </p>
                </div>
                <blockquote>
                  <div className="quote-shape">
                    <img src="assets/images/blog/quote-shape.svg" alt="" />
                  </div>
                  <div className="quote-icon">
                    <img
                      src="assets/images/icons/blockquote-comma.svg"
                      alt=""
                    />
                  </div>
                  We denounce with righteous indignation and dislike men who are
                  so great demoralized by the charms of pleasure of the moment,
                  so blinded by desire, that they cannot .
                  <i className="bx bxs-quote-alt-right" />{" "}
                  <span className="quote-author">Robert Mhicole.</span>
                </blockquote>
                <div className="row mb-50">
                  <div className="col-6">
                    <img src="assets/images/blog/blog-d1.jpg" alt="" />
                  </div>
                  <div className="col-6">
                    <img src="assets/images/blog/blog-d2.jpg" alt="" />
                  </div>
                </div>
                <h3 className="blog-subtitle">
                  To Better Result After Discussion:
                </h3>
                <p>
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain, but because
                  occasionally circumstances.
                </p>
                <div className="row gy-5">
                  <div className="col-xl-6">
                    <ul className="blog-details-list">
                      <li>
                        <i className="bi bi-check2-circle" />
                        Pursues or desires to obtain pain of itself.
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" />
                        Repudiated and annoyances accepted.
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" />
                        Claims of duty or the obligations of business.
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" />
                        Claims of duty or the obligations of business.
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-6 d-flex align-items-center">
                    <div className="circle-progressbar">
                      <div
                        className="progress-bar"
                        data-percent={90}
                        data-duration={1000}
                        data-color="#ccc,yellow"
                      />
                      <h5>Business Strategy</h5>
                    </div>
                    <div className="circle-progressbar">
                      <div
                        className="progress-bar"
                        data-percent={85}
                        data-duration={1000}
                        data-color="#ccc,yellow"
                      />
                      <h5>Marketing Policy</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-share-area">
                <div className="row align-items-center justify-content-start">
                  <div className="col-md-8">
                    <div className="blog-tag-area">
                      <h6>Tags:</h6>
                      <ul className="tag-list justify-content-md-start justify-content-center mt-0">
                        <li>
                          <a href="blog-details.html">Business,</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Consulting,</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Marketing,</a>
                        </li>
                        <li>
                          <a href="blog-details.html">SEO,</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Development,</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="blog-share">
                      <h6 className="d-sm-flex d-none">Share:</h6>
                      <ul className="share-list d-flex justify-content-end flex-row align-items-center gap-3">
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/">
                            <i className="bx bxl-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center mt-35">
                <div className="col-6 text-start">
                  <div className="blog-arrow">
                    <img src="assets/images/icons/arrow-prev-one.svg" alt="" />
                    <span>Previous Post</span>
                  </div>
                </div>
                <div className="col-6 text-end">
                  <div className="blog-arrow">
                    <span>Next Post</span>
                    <img src="assets/images/icons/arrow-next-one.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="blog-comment pt-100">
                <h3 className="mb-4">Comments(03):</h3>
                <ul className="comment-list">
                  <li>
                    <div className="comment-single">
                      <div className="image">
                        <img
                          src="assets/images/blog/blog-comment1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <div className="comment-header">
                          <h5>Willium Karle</h5>
                          <div>
                            <span>06 Jan, 2023</span>
                            <button className="comment-btn">
                              <img
                                src="assets/images/icons/com-reply.svg"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                        <div className="comment-text">
                          <p>
                            I must explain to you how all this mistaken idea of
                            denouncing pleasure and praising pain was born and I
                            will give you a complete account of the system
                          </p>
                        </div>
                      </div>
                    </div>
                    <ul className="comment-reply">
                      <li>
                        <div className="comment-single">
                          <div className="image">
                            <img
                              src="assets/images/blog/blog-comment2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <div className="comment-header">
                              <h5>Ellay Frangly</h5>
                              <div>
                                <span>06 Jan, 2023</span>
                                <button className="comment-btn">
                                  <img
                                    src="assets/images/icons/com-reply.svg"
                                    alt=""
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="comment-text">
                              <p>
                                I must explain to you how all this mistaken idea
                                of denouncing pleasure and praising pain was
                                born and I will give you a complete account of
                                the system
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="comment-single">
                      <div className="image">
                        <img
                          src="assets/images/blog/blog-comment3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <div className="comment-header">
                          <h5>Morris Pathan</h5>
                          <div>
                            <span>07 Jan, 2023</span>
                            <button className="comment-btn">
                              <img
                                src="assets/images/icons/com-reply.svg"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                        <div className="comment-text">
                          <p>
                            I must explain to you how all this mistaken idea of
                            denouncing pleasure and praising pain was born and I
                            will give you a complete account of the system
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="blog-form pt-120">
                <h3>Leave Your Comment:</h3>
                <form className="comment-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <label>Your Name* :</label>
                        <input type="text" placeholder="Full Name*" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <label>Your Email* :</label>
                        <input type="text" placeholder="Email*" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="checkbox-container">
                        <input
                          className="styled-checkbox style-two"
                          id="styled-checkbox-1"
                          type="checkbox"
                          defaultValue="value1"
                        />
                        <label htmlFor="styled-checkbox-1">
                          Please save my name, email address for the next time I
                          comment.{" "}
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Your Message :</label>
                        <textarea
                          rows={5}
                          placeholder="Write Message..."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <button className="eg-btn btn--primary-five btn--lg">
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
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
                    <a href="blog-details.html">
                      <span>Digital Marketing</span>
                      <span>(02)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-details.html">
                      <span>Business Consult</span>
                      <span>(08)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-details.html">
                      <span>Technology</span>
                      <span>(01)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-details.html">
                      <span>SEO Marketing</span>
                      <span>(04)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-dtails.html">
                      <span>Business Strategy</span>
                      <span>(02)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-details.html">
                      <span>UI/UX Design</span>
                      <span>(05)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-details.html">
                      <span>Uncategorized</span>
                      <span>(09)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="blog-widget">
                <h4 className="blog-widget-title">Recent Article:</h4>
                <ul className="recent-post-list">
                  <li className="recent-post-single">
                    <a href="blog-detials.html" className="post-image">
                      <img src="assets/images/blog/recent-blog1.jpg" alt="" />
                    </a>
                    <div className="post-content">
                      <a href="blog-details.html" className="date">
                        07 January, 2022
                      </a>
                      <h5>
                        <a href="blog-details.html" data-cursor="Blog Details">
                          Bootcamp; Change To Impressive Marketing Policy.
                        </a>
                      </h5>
                    </div>
                  </li>
                  <li className="recent-post-single">
                    <a href="blog-detials.html" className="post-image">
                      <img src="assets/images/blog/recent-blog2.jpg" alt="" />
                    </a>
                    <div className="post-content">
                      <a href="blog-detials.html" className="date">
                        02 March, 2022
                      </a>
                      <h5>
                        <a href="blog-details.html" data-cursor="Blog Details">
                          Become A Expert Any Business Field.
                        </a>
                      </h5>
                    </div>
                  </li>
                  <li className="recent-post-single">
                    <a href="blog-detials.html" className="post-image">
                      <img src="assets/images/blog/recent-blog3.jpg" alt="" />
                    </a>
                    <div className="post-content">
                      <a href="blog-detials.html" className="date">
                        06 March, 2022
                      </a>
                      <h5>
                        <a href="blog-details.html" data-cursor="Blog Details">
                          Discussion Always Be Fast To Change Marketing
                          Strategy.
                        </a>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="blog-widget">
                <h4 className="blog-widget-title">Tag:</h4>
                <ul className="tag-list">
                  <li>
                    <a href="blog-details.html">Business Strategy,</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Marketing,</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Digital,</a>
                  </li>
                  <li>
                    <a href="blog-details.html">SEO Marketing,</a>
                  </li>
                  <li>
                    <a href="blog-dtails.html">Development,</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Design,</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Technology,</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Agency,</a>
                  </li>
                </ul>
              </div>
              <div className="booking-form mt-120">
                <h4 className="blog-widget-title">Fell Free To Contact :</h4>
                <form className="form-style-one sibling-two">
                  <div className="form-inner">
                    <div className="input-icon">
                      <i className="bx bx-user-circle" />
                    </div>
                    <input type="text" placeholder="Name*" />
                  </div>
                  <div className="form-inner">
                    <div className="input-icon">
                      <i className="bx bx-phone-call" />
                    </div>
                    <input type="text" placeholder="Phone*" />
                  </div>
                  <div className="form-inner">
                    <div className="input-icon">
                      <i className="bx bx-envelope" />
                    </div>
                    <input type="text" placeholder="Email*" />
                  </div>
                  <div className="form-inner">
                    <textarea placeholder="Message..." defaultValue={""} />
                  </div>
                  <button className="eg-btn btn--primary-five btn--lg w-100 rounded-0">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default blogDetails;
