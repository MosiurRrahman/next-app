import Link from "next/link";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
// import ModalVideo from "react-modal-video";
// import "react-modal-video/css/modal-video.css";
function BlogStandardPage() {
  useEffect(() => {
    console.clear();
  }, []);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Blog Standard" pageTitle="Blog Standard" />
        <div className="inner-blog pt-120 mb-120">
          <div className="container">
            <div className="row g-lg-5 g-4 justify-content-center">
              <div className="col-lg-8">
                <div className="blog-wrrap mb-60">
                  <div className="magnetic-wrap"><div className="magnetic-wrap"><div className="blog-img  magnetic-item" style={{}}>
                        <img className="img-fluid" src="assets/images/blog/blog-st-1.png" alt="image" />
                        <div className="publish-date">
                          <span>Jan</span>
                          <p>21</p>
                          <span>2022</span>
                        </div>
                      </div></div></div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p>Posted by :  <Link className="name" href="/blog">Joha Dea</Link> - <Link href="/blog">03 Comments </Link></p>
                    </div>
                    <h3><Link data-cursor="View<br>Details" href="/blog-details" className="not-hide-cursor">Best Experiences with couple’s photoshoot?</Link></h3>
                    <p>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est.</p>
                    <div className="button-social">
                      <div className="read-more-btn">
                        <Link className="primary-btn3 button-hover-two" href="/blog-details">Read More</Link>
                      </div>
                      <ul className="social-icon">
                        <li>
                          <Link href="https://www.facebook.com/">FB.</Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/">LI.</Link>
                        </li>
                        <li>
                          <Link href="https://www.instagram.com/">IN.</Link>
                        </li>
                        <li>
                          <Link href="https://twitter.com/">TW.</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="blog-wrrap mb-60">
                  <div className="magnetic-wrap"><div className="magnetic-wrap"><div className="blog-img  magnetic-item" style={{}}>
                        <img className="img-fluid" src="assets/images/blog/blog-st-2.png" alt="image" />
                        <div className="video-area">
                          <div className="popup-youtube" 
                  style={{ cursor: "pointer" }}><i className="bi bi-play-circle-fill" /></div>
                        </div>
                        <div className="publish-date">
                          <span>Jan</span>
                          <p>21</p>
                          <span>2022</span>
                        </div>
                      </div></div></div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p>Posted by :  <Link className="name" href="/blog">Joha Dea</Link> - <Link href="/blog">03 Comments </Link></p>
                    </div>
                    <h3><Link data-cursor="View<br>Details" href="/blog-details" className="not-hide-cursor">Do you delivery every image shoot?</Link></h3>
                    <p>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est.</p>
                    <div className="button-social">
                      <div className="read-more-btn">
                        <Link className="primary-btn3 button-hover-two" href="/blog-details">Read More</Link>
                      </div>
                      <ul className="social-icon">
                        <li>
                          <Link href="https://www.facebook.com/">FB.</Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/">LI.</Link>
                        </li>
                        <li>
                          <Link href="https://www.instagram.com/">IN.</Link>
                        </li>
                        <li>
                          <Link href="https://twitter.com/">TW.</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="blog-wrrap mb-60">
                  <div className="swiper blog-dt-img-slider swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events">
                    <div className="swiper-wrapper" id="swiper-wrapper-92d8f879ba10b106ed" aria-live="off" style={{transitionDuration: '0ms'}}><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index={3} style={{width: '848px', opacity: 0, transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms'}} role="group" aria-label="4 / 4">
                        <div className="magnetic-wrap">
                          <div className="magnetic-wrap"><div className="blog-img  magnetic-item">
                              <img className="img-fluid" src="assets/images/blog/blog-st-34.png" alt="image" />
                              <div className="publish-date">
                                <span>Jan</span>
                                <p>15</p>
                                <span>2022</span>
                              </div>
                            </div></div>
                        </div>
                      </div>
                      <div className="swiper-slide swiper-slide-duplicate-next" data-swiper-slide-index={0} style={{width: '848px', opacity: 0, transform: 'translate3d(-848px, 0px, 0px)', transitionDuration: '0ms'}} role="group" aria-label="1 / 4">
                        <div className="magnetic-wrap">
                          <div className="magnetic-wrap"><div className="blog-img  magnetic-item">
                              <img className="img-fluid" src="assets/images/blog/blog-st-31.png" alt="image" />
                              <div className="publish-date">
                                <span>Jan</span>
                                <p>21</p>
                                <span>2022</span>
                              </div>
                            </div></div>
                        </div>
                      </div>
                      <div className="swiper-slide" data-swiper-slide-index={1} style={{width: '848px', opacity: 0, transform: 'translate3d(-1696px, 0px, 0px)', transitionDuration: '0ms'}} role="group" aria-label="2 / 4">
                        <div className="magnetic-wrap">
                          <div className="magnetic-wrap"><div className="blog-img  magnetic-item" style={{}}>
                              <img className="img-fluid" src="assets/images/blog/blog-st-32.png" alt="image" />
                              <div className="publish-date">
                                <span>Jan</span>
                                <p>26</p>
                                <span>2022</span>
                              </div>
                            </div></div>
                        </div>
                      </div>
                      <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index={2} style={{width: '848px', opacity: 0, transform: 'translate3d(-2544px, 0px, 0px)', transitionDuration: '0ms'}} role="group" aria-label="3 / 4">
                        <div className="magnetic-wrap">
                          <div className="magnetic-wrap"><div className="blog-img  magnetic-item">
                              <img className="img-fluid" src="assets/images/blog/blog-st-33.png" alt="image" />
                              <div className="publish-date">
                                <span>Jan</span>
                                <p>18</p>
                                <span>2022</span>
                              </div>
                            </div></div>
                        </div>
                      </div>
                      <div className="swiper-slide swiper-slide-visible swiper-slide-active" data-swiper-slide-index={3} style={{width: '848px', opacity: 1, transform: 'translate3d(-3392px, 0px, 0px)', transitionDuration: '0ms'}} role="group" aria-label="4 / 4">
                        <div className="magnetic-wrap">
                          <div className="magnetic-wrap"><div className="blog-img  magnetic-item">
                              <img className="img-fluid" src="assets/images/blog/blog-st-34.png" alt="image" />
                              <div className="publish-date">
                                <span>Jan</span>
                                <p>15</p>
                                <span>2022</span>
                              </div>
                            </div></div>
                        </div>
                      </div>
                      <div className="swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index={0} style={{width: '848px', opacity: 0, transform: 'translate3d(-4240px, 0px, 0px)', transitionDuration: '0ms'}} role="group" aria-label="1 / 4">
                        <div className="magnetic-wrap">
                          <div className="magnetic-wrap"><div className="blog-img  magnetic-item">
                              <img className="img-fluid" src="assets/images/blog/blog-st-31.png" alt="image" />
                              <div className="publish-date">
                                <span>Jan</span>
                                <p>21</p>
                                <span>2022</span>
                              </div>
                            </div></div>
                        </div>
                      </div></div>
                    <div className="swiper-btns">
                      <div className="swiper-button-prev-m" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-92d8f879ba10b106ed"><i className="bi bi-chevron-left" /></div>
                      <div className="swiper-button-next-m" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-92d8f879ba10b106ed"><i className="bi bi-chevron-right" /></div>
                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p>Posted by :  <Link className="name" href="/blog">Joha Dea</Link> - <Link href="/blog">03 Comments </Link></p>
                    </div>
                    <h3><Link data-cursor="View<br>Details" href="/blog-details" className="not-hide-cursor">Things you need to know when preparing a for wedding day?</Link></h3>
                    <div className="button-social">
                      <div className="read-more-btn">
                        <Link className="primary-btn3 button-hover-two" href="/blog-details">Read More</Link>
                      </div>
                      <ul className="social-icon">
                        <li>
                          <Link href="https://www.facebook.com/">FB.</Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/">LI.</Link>
                        </li>
                        <li>
                          <Link href="https://www.instagram.com/">IN.</Link>
                        </li>
                        <li>
                          <Link href="https://twitter.com/">TW.</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="blog-wrrap mb-60">
                  <div className="magnetic-wrap"><div className="magnetic-wrap"><div className="blog-img  magnetic-item" style={{}}>
                        <img className="img-fluid" src="assets/images/blog/blog-st-4.png" alt="image" />
                        <div className="publish-date">
                          <span>Jan</span>
                          <p>21</p>
                          <span>2022</span>
                        </div>
                      </div></div></div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p>Posted by :  <Link className="name" href="/blog">Joha Dea</Link> - <Link href="/blog">03 Comments </Link></p>
                    </div>
                    <h3><Link data-cursor="View<br>Details" href="/blog-details" className="not-hide-cursor">Things you need to know when preparing a for wedding day?</Link></h3>
                    <p>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est.</p>
                    <div className="button-social">
                      <div className="read-more-btn">
                        <Link className="primary-btn3 button-hover-two" href="/blog-details">Read More</Link>
                      </div>
                      <ul className="social-icon">
                        <li>
                          <Link href="https://www.facebook.com/">FB.</Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/">LI.</Link>
                        </li>
                        <li>
                          <Link href="https://www.instagram.com/">IN.</Link>
                        </li>
                        <li>
                          <Link href="https://twitter.com/">TW.</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item"><Link className="page-link" href="#"><i className="bi bi-arrow-left" /> PREV</Link></li>
                    <li className="page-item"><Link className="page-link" href="#">01</Link></li>
                    <li className="page-item"><Link className="page-link active" href="#">02</Link></li>
                    <li className="page-item"><Link className="page-link" href="#">03</Link></li>
                    <li className="page-item"><Link className="page-link" href="#">NEXT <i className="bi bi-arrow-right" /></Link></li>
                  </ul>
                </nav>
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
                            <Link href="https://www.instagram.com/"><i className="bi bi-instagram" /></Link>
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
          {/* {typeof window !== "undefined" && (
        <ModalVideo
          channel="vimeo"
          autoplay
          isOpen={isOpen}
          videoId="127203262"
          onClose={() => setOpen(false)}
        />
      )} */}
        </div>

      </Layout>
    </>
  );
}

export default BlogStandardPage;
