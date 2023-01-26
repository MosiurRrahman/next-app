import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function Blog4() {
  const sldier = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 800,
      spaceBetween: 10,
      slidesPerView: 8,
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
      navigation: {
        nextEl: ".blog-next1",
        prevEl: ".blog-prev1",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          navigation: false,
        },
        386: {
          slidesPerView: 1,
          navigation: false,
        },
        576: {
          slidesPerView: 2,
          navigation: false,
        },
        768: {
          slidesPerView: 2,
          navigation: false,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="section-common sibling-two blog-section pt-120">
        <div className="row">
          <div className="section-title-three text-center">
            <div className="water-text">Blog Article</div>
            <h2>Blog Article</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...sldier} className="swiper blog-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="blog-grid-single magnetic-item">
                    <div className="blog-image">
                      <img
                        src="assets/images/blog/blog-slider1.png"
                        alt="image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-date">June 21, 2022</div>
                      <h4>
                        <Link
                          legacyBehavior
                          href="/blog-details"
                          data-cursor="View<br>Details"
                        >
                          <a>
                            veryes elementum sesuren thei aucan vestibu Toldan.
                          </a>
                        </Link>
                      </h4>
                      <div className="author-readmore-area">
                        <div className="author">
                          <span className="author-name">By, Admin</span>
                          <span className="category">Photo</span>
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
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-grid-single magnetic-item">
                    <div className="blog-image">
                      <img
                        src="assets/images/blog/blog-slider2.png"
                        alt="image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-date">June 21, 2022</div>
                      <h4>
                        <Link
                          legacyBehavior
                          href="/blog-details"
                          data-cursor="View<br>Details"
                        >
                          <a>
                            Nam varius non sem egeta open accumsan Ut sit amet.
                          </a>
                        </Link>
                      </h4>
                      <div className="author-readmore-area">
                        <div className="author">
                          <span className="author-name">By, Admin</span>
                          <span className="category">Photo</span>
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
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-grid-single magnetic-item">
                    <div className="blog-image">
                      <img
                        src="assets/images/blog/blog-slider3.png"
                        alt="image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-date">June 21, 2022</div>
                      <h4>
                        <Link
                          href="/blog-details"
                          legacyBehavior
                          data-cursor="View<br>Details"
                        >
                          <a>
                            Pellentesque in lacinia ligula atl laoreet est
                            Vestibulum vel.
                          </a>
                        </Link>
                      </h4>
                      <div className="author-readmore-area">
                        <div className="author">
                          <span className="author-name">By, Admin</span>
                          <span className="category">Photo</span>
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
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="row mt-40 align-items-center">
          <div className="col-lg-6 text-lg-start text-center">
            <div className="slider-arrows arrows-style-2 text-center d-xl-flex d-none justify-content-start gap-4">
              <div
                className="blog-prev1 swiper-prev-arrow"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Previous"
              >
                <i className="bi bi-chevron-left" />
              </div>
              <div
                className="blog-next1 swiper-next-arrow"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Next"
              >
                <i className="bi bi-chevron-right" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-lg-end text-center">
            <Link legacyBehavior href="/blog-grid-one">
              <a className="eg-btn btn--primary btn--lg">View All Article</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog4;
