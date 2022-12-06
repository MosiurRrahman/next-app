import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function BlogDetailspage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Blog Details" pageTitle="Blog Details" />
        <div className="inner-blog pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-5 g-4 justify-content-center">
            <div className="col-lg-8">
              <div className="blog-details-area">
                <div className="post-thumbnail">
                  <img className="img-fluid" src="assets/images/blog/blog-dt-1.png" alt="image" />
                </div>
                <div className="blog-publisher-meta-title d-flex align-items-center">
                  <div className="publish-date">
                    <span>Jan</span>
                    <p>31</p>
                    <span>2022</span>
                  </div>
                  <div className="title-meta">
                    <div className="blog-meta">
                      <Link href="/blog">Photography,  Art</Link>
                    </div>
                    <div className="post-title">
                      <h3>How to take amazing photos in not so very good lighting?</h3>
                    </div>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri intellegam cu. Cu ius nonumes prodesset. Splendide concludaturque nam ad, est labore philosophia et, et his quem ornatus accusamus. Cibo idque molestie an has, qui graecis explicari cu, ut has verear feugiat vituperatoribus. At adhuc dicant elaboraret eum, per ad corpora explicari, ubique nostro volutpat per ea. Saepe doming an mei</p>
                <blockquote className="wp-block-quote">
                  <div className="quage-icon">
                    <img src="assets/images/icons/quote-1.svg" alt="image" />
                  </div>
                  <p>Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Quis eleifend quam adipiscing. </p>
                  <cite>
                    Leslie Alexander
                  </cite>
                </blockquote>
                <div className="post-thumbnail2 pt-40">
                  <img className="img-fluid" src="assets/images/blog/blog-dt-2.png" alt="blog-dt-2" />
                </div>
                <h3 className="title2">Sustainable farmhouse</h3>
                <p>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri intellegam cu. Cu ius nonumes prodesset. Splendide concludaturque nam ad, est labore philosophia et, et his quem ornatus accusamus.</p>
                <div className="tag-social-area d-flex align-items-center justify-content-between flex-wrap">
                  <div className="tags">
                    <p>Tags:
                      <Link href="/blog">Art-</Link>
                      <Link href="/blog">Photography</Link>
                      <Link href="/blog">- Science</Link>
                    </p>
                  </div>
                  <div className="social-area">
                    <ul className="d-flex">
                      <li><Link href="https://www.facebook.com/">FB.</Link></li>
                      <li><Link href="https://www.linkedin.com/">LI.</Link></li>
                      <li><Link href="https://www.instagram.com/">IN.</Link></li>
                      <li><Link href="https://twitter.com/">TW.</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="post-author-area d-flex align-items-center">
                  <div className="author-img">
                    <img src="assets/images/blog/post-author.png" alt="image" />
                  </div>
                  <div className="author-content">
                    <div className="author-name">
                      <h4>Victor Thornton</h4>
                    </div>
                    <p>Orem ipsum dolor sit &amp;, sdt consectetu adipiscing elit. Aenean commodo ligula eget dolor. Cum socis Theme sed natoque ut penatibus Etiam ultricies nisi vel augue.</p>
                  </div>
                </div>
                <div className="comments-area">
                  <div className="number-of-comment">
                    <h5>02 Comments</h5>
                  </div>
                  <div className="comment-list-area mb-70">
                    <ul className="comment-list">
                      <li>
                        <div className="single-comment d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap">
                          <div className="comment-image">
                            <img src="assets/images/blog/com-1.png" alt="image" />
                          </div>
                          <div className="comment-content">
                            <div className="c-header d-flex align-items-center">
                              <h5 className="mb-0"><Link href="#">Gojesin jormeny -</Link></h5>
                              <div className="c-date">February 21, 2022</div>
                            </div>
                            <div className="c-body">
                              <p>Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id.</p>
                            </div>
                          </div>
                          <div className="replay-btn">
                            <Link href="#">Reply</Link>
                          </div>
                        </div>
                        <ul className="comment-reply">
                          <li>
                            <div className="single-comment d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap">
                              <div className="comment-image">
                                <img src="assets/images/blog/com-2.png" alt="image" />
                              </div>
                              <div className="comment-content">
                                <div className="c-header d-flex align-items-center">
                                  <h5 className="mb-0"><Link href="#">Leslie Alexander - </Link></h5>
                                  <div className="c-date">February 21, 2022</div>
                                </div>
                                <div className="c-body">
                                  <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin.</p>
                                </div>
                              </div>
                              <div className="replay-btn">
                                <Link href="#">Reply</Link>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="single-comment d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap">
                          <div className="comment-image">
                            <img src="assets/images/blog/com-3.png" alt="image" />
                          </div>
                          <div className="comment-content">
                            <div className="c-header d-flex align-items-center">
                              <h5 className="mb-0"><Link href="#">Wade Warren -</Link></h5>
                              <div className="c-date">February 21, 2022</div>
                            </div>
                            <div className="c-body">
                              <p>Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id.</p>
                            </div>
                          </div>
                          <div className="replay-btn">
                            <Link href="#">Reply</Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="comment-form">
                    <div className="number-of-comment">
                      <h5>Leave a Reply</h5>
                    </div>
                    <form>
                      <div className="form-inner">
                        <label>Your Full Name (required)</label>
                        <input type="text" required />
                      </div>
                      <div className="form-inner">
                        <label>Your E-mail (required)</label>
                        <input type="text" required />
                      </div>
                      <div className="form-inner">
                        <label>Type Your Question</label>
                        <textarea defaultValue={""} />
                      </div>
                      <div className="form-inner two">
                        <button className="primary-btn3 button-hover-two" type="submit">Post Comment</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="widget-area">
                <div className="single-widgets widget_search">
                  <form>
                    <div className="wp-block-search__inside-wrapper ">
                      <input type="search" id="wp-block-search__input-1" className="wp-block-search__input " name="s" defaultValue placeholder="Search Here" required />
                      <button type="submit" className="wp-block-search__button">
                        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.10227 0.0713005C1.983 0.760967 -1.22002 5.91264 0.44166 10.7773C1.13596 12.8 2.60323 14.471 4.55652 15.4476C6.38483 16.3595 8.59269 16.5354 10.5737 15.9151C11.4023 15.6559 12.6011 15.0218 13.2121 14.5126L13.3509 14.3969L16.1281 17.1695C19.1413 20.1735 18.9932 20.0531 19.4237 19.9698C19.6505 19.9281 19.9282 19.6504 19.9699 19.4236C20.0532 18.9932 20.1735 19.1413 17.1695 16.128L14.397 13.3509L14.5127 13.212C14.7858 12.8834 15.2394 12.152 15.4755 11.6614C17.0029 8.48153 16.3271 4.74159 13.7814 2.28379C11.9994 0.561935 9.52304 -0.257332 7.10227 0.0713005ZM9.38418 1.59412C11.0135 1.9135 12.4669 2.82534 13.4666 4.15376C14.0591 4.94062 14.4572 5.82469 14.6793 6.83836C14.8136 7.44471 14.8228 8.75925 14.7025 9.34708C14.3507 11.055 13.4713 12.4622 12.1336 13.4666C11.3467 14.059 10.4627 14.4571 9.44898 14.6793C8.80097 14.8228 7.48644 14.8228 6.83843 14.6793C4.78332 14.2303 3.0985 12.9389 2.20054 11.1337C1.75156 10.2312 1.54328 9.43503 1.49699 8.4445C1.36276 5.62566 3.01055 3.05677 5.6535 1.96904C6.10248 1.7839 6.8014 1.59412 7.28741 1.52932C7.74102 1.46452 8.92595 1.50155 9.38418 1.59412Z" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="single-widgets widget_sidebar-author text-center">
                  <div className="author-img">
                    <img src="assets/images/blog/blog-sidebar-author.png" alt="blog-sidebar-author" />
                  </div>
                  <div className="author-name">
                    <h4>Mr. Johan Lea</h4>
                  </div>
                  <div className="author-content">
                    <p>Hi Guys! I started this online diary as a way to share my favorite sales, buys and fashion finds.</p>
                  </div>
                </div>
                <div className="single-widgets widget_egns_categoris">
                  <div className="widget-title">
                    <h3>Categories</h3>
                  </div>
                  <ul className="wp-block-categoris-cloud">
                    <li><Link href="/blog">Fashion - 03</Link></li>
                    <li><Link href="/blog">Photography - 05</Link></li>
                    <li><Link href="/blog">Popular - 04</Link></li>
                    <li><Link href="/blog">DSLR Photo  - 00</Link></li>
                    <li><Link href="/blog">Fashion - 03</Link></li>
                    <li><Link href="/blog">Print - 00</Link></li>
                  </ul>
                </div>
                <div className="single-widgets widget_egns_recent_post">
                  <div className="widget-title">
                    <h3>Newest Posts</h3>
                  </div>
                  <div className="recent-post-wraper">
                    <div className="widget-cnt">
                      <div className="wi">
                        <Link href="/blog-details"><img src="assets/images/blog/blog-sidebar-1.png" alt="image" /></Link>
                      </div>
                      <div className="wc">
                        <h6><Link href="/blog-details">Quisque laoreet Maecento facilisis tristique.</Link></h6>
                        <span>July 18, 2022</span>
                      </div>
                    </div>
                    <div className="widget-cnt">
                      <div className="wi">
                        <Link href="/blog-details"><img src="assets/images/blog/blog-sidebar-2.png" alt="image" /></Link>
                      </div>
                      <div className="wc">
                        <h6><Link href="/blog-details">Etiam vel diam volutpatha pellentesque.</Link></h6>
                        <span>July 15, 2022</span>
                      </div>
                    </div>
                    <div className="widget-cnt">
                      <div className="wi">
                        <Link href="/blog-details"><img src="assets/images/blog/blog-sidebar-3.png" alt="image" /></Link>
                      </div>
                      <div className="wc">
                        <h6><Link href="/blog-details">Nunc finibus gravidato on porta. Nulla vitae.</Link></h6>
                        <span>July 14, 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-widgets widget_egns_social">
                  <div className="widget-title">
                    <h3>Instagram feed</h3>
                  </div>
                  <ul className="social-link d-flex align-items-center flex-wrap justify-content-lg-start justify-content-center">
                    <li className="instragram-wrap">
                      <div className="instra-img">
                        <img className="img-fluid" src="assets/images/bg/ins1.png" alt="image" />
                        <div className="instragram-icon">
                          <Link href="https://www.instagram.com/"><i className="bi bi-instagram" /></Link>
                        </div>
                      </div>
                    </li>
                    <li className="instragram-wrap">
                      <div className="instra-img">
                        <img className="img-fluid" src="assets/images/bg/ins2.png" alt="image" />
                        <div className="instragram-icon">
                          <Link href="https://www.instagram.com/"><i className="bi bi-instagram" /></Link>
                        </div>
                      </div>
                    </li>
                    <li className="instragram-wrap">
                      <div className="instra-img">
                        <img className="img-fluid" src="assets/images/bg/ins3.png" alt="image" />
                        <div className="instragram-icon">
                          <Link href="#"><i className="bi bi-instagram" /></Link>
                        </div>
                      </div>
                    </li>
                    <li className="instragram-wrap">
                      <div className="instra-img">
                        <img className="img-fluid" src="assets/images/bg/ins4.png" alt="image" />
                        <div className="instragram-icon">
                          <Link href="https://www.instagram.com/"><i className="bi bi-instagram" /></Link>
                        </div>
                      </div>
                    </li>
                    <li className="instragram-wrap">
                      <div className="instra-img">
                        <img className="img-fluid" src="assets/images/bg/ins5.png" alt="image" />
                        <div className="instragram-icon">
                          <Link href="https://www.instagram.com/"><i className="bi bi-instagram" /></Link>
                        </div>
                      </div>
                    </li>
                    <li className="instragram-wrap">
                      <div className="instra-img">
                        <img className="img-fluid" src="assets/images/bg/ins6.png" alt="image" />
                        <div className="instragram-icon">
                          <Link href="https://www.instagram.com/"><i className="bi bi-instagram" /></Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="single-widgets widget_egns_tag">
                  <div className="widget-title">
                    <h3>Photography Tags</h3>
                  </div>
                  <p className="wp-block-tag-cloud">
                    <Link href="/blog">Art</Link>,
                    <Link href="/blog">Photo</Link>,
                    <Link href="/blog">Business Photo</Link>,
                    <Link href="/blog">Design DIY Personal Photo</Link>,
                    <Link href="/blog">Lifestyle</Link>,
                    <Link href="/blog">Music</Link>,
                    <Link href="/blog">Press Photo Graphy</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}

export default BlogDetailspage;
