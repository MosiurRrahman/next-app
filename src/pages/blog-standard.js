import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);


function BlogStandardPage() {
    const settings = useMemo(()=>{
        return {
            speed: 1500,
            spaceBetween: 24,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".next-51",
                prevEl: ".prev-51",
            },
        }
    })
  return (
    <Layout>
        <Breadcrumb/>
       <div className="blog-standard-page pt-100 mb-100">
  <div className="container">
    <div className="row g-lg-4 gy-5">
      <div className="col-lg-8">
        <div className="news-card2 mb-50">
          <div className="news-img">
            <Link to="blog-details"><img src="assets/img/inner-page/blog-st-01.png" alt="" /></Link>
            <div className="date">
              <Link to="blog-standard">Buying Advice</Link>
            </div>
          </div>
          <div className="content">
            <h4><Link to="blog-details">The Car Enthusiast: Exploring the World of Cars and Driving.</Link></h4>
            <p>"The Car Enthusiast: Exploring the World of Cars and Driving." In this captivating journey, we delve into the fascinating realm of automobiles.</p>
            <div className="news-btm d-flex align-items-center justify-content-between">
              <div className="author-area">
                <div className="author-img">
                  <img src="assets/img/home1/author-02.png" alt="" />
                </div>
                <div className="author-content">
                  <h6>Mulish Kary</h6>
                  <Link to="blog-standard">Posted on -  03 April, 2023</Link>
                </div>
              </div>
              <Link className="view-btn" to="blog-details">Read More</Link>
            </div>
          </div>
        </div>
        <div className="news-card2 mb-50">
          <div className="news-img">
            <Link to="blog-details"><img src="assets/img/inner-page/blog-st-01.png" alt="" /></Link>
            <div className="date">
              <Link to="blog-standard">Buying Advice</Link>
            </div>
          </div>
          <div className="content">
            <h4><Link to="blog-details">The Best Car Brands for Performance and Reliability.</Link></h4>
            <p>"The Car Enthusiast: Exploring the World of Cars and Driving." In this captivating journey, we delve into the fascinating realm of automobiles.</p>
            <div className="news-btm d-flex align-items-center justify-content-between">
              <div className="author-area">
                <div className="author-img">
                  <img src="assets/img/home1/author-02.png" alt="" />
                </div>
                <div className="author-content">
                  <h6>Mulish Kary</h6>
                  <Link to="blog-standard">Posted on -  03 April, 2023</Link>
                </div>
              </div>
              <Link className="view-btn" to="blog-details">Read More</Link>
            </div>
          </div>
        </div>
        <div className="news-card2 mb-50">
          <div className="news-img">
            <Link to="blog-details"><img src="assets/img/inner-page/blog-st-01.png" alt="" /></Link>
            <div className="date">
              <Link to="blog-standard">Buying Advice</Link>
            </div>
          </div>
          <div className="content">
            <h4><Link to="blog-details">The Environmental Impact of Cars and How to Minimize It.</Link></h4>
            <p>"The Car Enthusiast: Exploring the World of Cars and Driving." In this captivating journey, we delve into the fascinating realm of automobiles.</p>
            <div className="news-btm d-flex align-items-center justify-content-between">
              <div className="author-area">
                <div className="author-img">
                  <img src="assets/img/home1/author-02.png" alt="" />
                </div>
                <div className="author-content">
                  <h6>Mulish Kary</h6>
                  <Link to="blog-standard">Posted on -  03 April, 2023</Link>
                </div>
              </div>
              <Link className="view-btn" to="blog-details">Read More</Link>
            </div>
          </div>
        </div>
        <div className="news-card2 mb-40">
          <div className="news-img">
            <Link to="blog-details"><img src="assets/img/inner-page/blog-st-01.png" alt="" /></Link>
            <div className="date">
              <Link to="blog-standard">Buying Advice</Link>
            </div>
          </div>
          <div className="content">
            <h4><Link to="blog-details">The Environmental Impact of Cars and How to Minimize It.</Link></h4>
            <p>"The Car Enthusiast: Exploring the World of Cars and Driving." In this captivating journey, we delve into the fascinating realm of automobiles.</p>
            <div className="news-btm d-flex align-items-center justify-content-between">
              <div className="author-area">
                <div className="author-img">
                  <img src="assets/img/home1/author-02.png" alt="" />
                </div>
                <div className="author-content">
                  <h6>Mulish Kary</h6>
                  <Link to="blog-standard">Posted on -  03 April, 2023</Link>
                </div>
              </div>
              <Link className="view-btn" to="blog-details">Read More</Link>
            </div>
          </div>
        </div>
        <div className="pagination-and-next-prev">
          <div className="pagination">
            <ul>
              <li className="active"><Link to="#">01</Link></li>
              <li><Link to="#">02</Link></li>
              <li><Link to="#">03</Link></li>
              <li><Link to="#">04</Link></li>
              <li><Link to="#">05</Link></li>
            </ul>
          </div>
          <div className="next-prev-btn">
            <ul>
              <li>
                <Link to="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
                    <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
                  </svg> Prev
                </Link>
              </li>
              <li>
                <Link to="#">
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
                    <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                  </svg> 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="blog-sidebar mb-50">
          <div className="single-widgets widget_egns_categoris mb-20">
            <div className="widget-title mb-20">
              <h6>Category</h6>
            </div>
            <ul className="wp-block-categoris-cloud">
              <li><Link to="blog-standard"><span>Car Servicing</span> <span className="number-of-categoris">(30)</span></Link></li>
              <li><Link to="blog-standard"><span>Car Buying Advice</span> <span className="number-of-categoris">(18)</span> </Link></li>
              <li><Link to="blog-standard"><span>Car Rental</span> <span className="number-of-categoris">(21)</span></Link></li>
              <li><Link to="blog-standard"><span>Driving</span> <span className="number-of-categoris">(25)</span></Link></li>
              <li><Link to="blog-standard"><span>Brand Car</span> <span className="number-of-categoris">(29)</span></Link></li>
              <li><Link to="blog-standard"><span>Tata</span> <span className="number-of-categoris">(2,554)</span></Link></li>
              <li><Link to="blog-standard"><span>Hyundai</span> <span className="number-of-categoris">(1,556)</span></Link></li>
            </ul>
          </div>
          <div className="single-widgets widget_egns_recent_post mb-20">
            <div className="widget-title blog-title mb-20">
              <h6>Recent Blog</h6>
              <div className="slider-btn-group2 d-flex align-items-center justify-content-between">
                <div className="slider-btn prev-51">
                  <svg width={7} height={12} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                  </svg>
                </div>
                <div className="slider-btn next-51">
                  <svg width={7} height={12} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="recent-post-wraper">
              <Swiper {...settings} className="swiper recent-post-sidebar-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="widget-cnt">
                      <div className="wi">
                        <Link to="blog-details"><img src="assets/img/inner-page/blog-st-01.png" alt="image" /></Link>
                      </div>
                      <div className="wc">
                        <Link className="date" to="blog-standard">May 18, 2023</Link>
                        <h6><Link to="blog-details">The Environmental Impact of Cars and How to Minimize It.</Link></h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="widget-cnt">
                      <div className="wi">
                        <Link to="blog-details"><img src="assets/img/inner-page/blog-st-02.png" alt="image" /></Link>
                      </div>
                      <div className="wc">
                        <Link className="date" to="blog-standard">May 18, 2023</Link>
                        <h6><Link to="blog-details">The Environmental Impact of Cars and How to Minimize It.</Link></h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="widget-cnt">
                      <div className="wi">
                        <Link to="blog-details"><img src="assets/img/inner-page/blog-st-03.png" alt="image" /></Link>
                      </div>
                      <div className="wc">
                        <Link className="date" to="blog-standard">May 18, 2023</Link>
                        <h6><Link to="blog-details">The Environmental Impact of Cars and How to Minimize It.</Link></h6>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
          <div className="single-widgets widget_egns_tag">
            <div className="widget-title mb-20">
              <h6>Popular Tags</h6>
            </div>
            <p className="wp-block-tag-cloud">
              <Link to="blog-standard">Car Advice</Link>
              <Link to="#">Rental</Link>
              <Link to="#">Hyundai</Link>
              <Link to="#">Driving</Link>
              <Link to="#">Compare</Link>
              <Link to="#">Buying</Link>
              <Link to="car-deatils">Toyota</Link>
              <Link to="#">Audi</Link>
              <Link to="#">Service</Link>
            </p>
          </div>
        </div>
        <div className="single-widgets sidebar-banner">
          <div className="product-content">
            <div className="text">
              <h4><Link to="#">Mercedes-Benz <span>( Model-S13)</span></Link></h4>
              <h6>For Summer Offer</h6>
            </div>
            <div className="offer-batch">
              <h3>30%</h3>
              <span>Discount</span>
            </div>
          </div>
          <div className="product-img">
            <img src="assets/img/inner-page/sb-banner-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </Layout>
  )
}

export default BlogStandardPage