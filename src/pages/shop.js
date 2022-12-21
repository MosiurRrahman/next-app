import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../layout/Layout'

function shop() {
  return (
    <Layout>
        <Breadcrumb pageName="Shop" pageTitle="Shop"/>
        <div className="Shop-pages pt-120 mb-120">
  <div className="container">
    <div className="row g-lg-5 gy-5">
      <div className="col-lg-4">
        <div className="widget-area">
          <div className="single-widgets widget_sm-banner">
            <img className="img-fluid" src="assets/images/blog/blog-sidebar-img.png" alt="blog-sidebar-img" />
            <div className="overlay d-flex align-items-center justify-content-center">
              <div className="items-content text-center">
                <span><img className="left-vec" src="assets/images/icon/shape-white1.svg" alt="sub-title-vec" />Reserve<img className="right-vec" src="assets/images/icon/shape-white1.svg" alt="sub-title-vec" /></span>
                <h3><a href="reservation.html">For Your Private Event</a></h3>
                <a className="primary-btn btn-sm" href="reservation.html">Book Table</a>
              </div>
            </div>
          </div>
          <div className="single-widgets widget_search">
            <form>
              <div className="wp-block-search__inside-wrapper ">
                <input type="search" id="wp-block-search__input-1" className="wp-block-search__input" name="s" defaultValue placeholder="Search..." required />
                <button type="submit" className="wp-block-search__button">
                  <svg width={16} height={16} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.10227 0.0713005C1.983 0.760967 -1.22002 5.91264 0.44166 10.7773C1.13596 12.8 2.60323 14.471 4.55652 15.4476C6.38483 16.3595 8.59269 16.5354 10.5737 15.9151C11.4023 15.6559 12.6011 15.0218 13.2121 14.5126L13.3509 14.3969L16.1281 17.1695C19.1413 20.1735 18.9932 20.0531 19.4237 19.9698C19.6505 19.9281 19.9282 19.6504 19.9699 19.4236C20.0532 18.9932 20.1735 19.1413 17.1695 16.128L14.397 13.3509L14.5127 13.212C14.7858 12.8834 15.2394 12.152 15.4755 11.6614C17.0029 8.48153 16.3271 4.74159 13.7814 2.28379C11.9994 0.561935 9.52304 -0.257332 7.10227 0.0713005ZM9.38418 1.59412C11.0135 1.9135 12.4669 2.82534 13.4666 4.15376C14.0591 4.94062 14.4572 5.82469 14.6793 6.83836C14.8136 7.44471 14.8228 8.75925 14.7025 9.34708C14.3507 11.055 13.4713 12.4622 12.1336 13.4666C11.3467 14.059 10.4627 14.4571 9.44898 14.6793C8.80097 14.8228 7.48644 14.8228 6.83843 14.6793C4.78332 14.2303 3.0985 12.9389 2.20054 11.1337C1.75156 10.2312 1.54328 9.43503 1.49699 8.4445C1.36276 5.62566 3.01055 3.05677 5.6535 1.96904C6.10248 1.7839 6.8014 1.59412 7.28741 1.52932C7.74102 1.46452 8.92595 1.50155 9.38418 1.59412Z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="single-widgets widget_egns_recent_post">
            <div className="widget-title">
              <h3>New Items: </h3>
              <div className="slder-btn">
                <div className="prev-btn">
                  <i className="bi bi-chevron-left" />
                </div>
                <div className="next-btn">
                  <i className="bi bi-chevron-right" />
                </div>
              </div>
            </div>
            <div className="recent-post-wraper">
              <div className="swiper recent-post-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="news-wrap">
                      <div className="post-thum">
                        <img className="img-fluid" src="assets/images/bg/sb-new-item1.png" alt="" />
                      </div>
                      <div className="news-content two">
                        <ul className="d-flex align-items-center p-0 gap-1">
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                        </ul>
                        <div className="pric-tag">
                          <span>$10</span>
                        </div>
                        <h3><a href="shop-details.html">Delicious Food Always To Make Healthy Body &amp; Mind.</a></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="news-wrap">
                      <div className="post-thum">
                        <img className="img-fluid" src="assets/images/bg/sb-new-item2.png" alt="" />
                      </div>
                      <div className="news-content two">
                        <ul className="d-flex align-items-center p-0 gap-1">
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                        </ul>
                        <div className="pric-tag">
                          <span>$15</span>
                        </div>
                        <h3><a href="shop-details.html">Cooking BBQ Beef  With Tasty Mashala With Beautiful Plate.</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-widgets widget_egns_categoris">
            <div className="widget-title">
              <h3>Category:</h3>
            </div>
            <ul className="wp-block-categoris-cloud">
              <li><a href="shop.html"><span className="tag-name">Food</span> <img className="img-fluid" src="assets/images/blog/category-divider.png" alt="" /> <span className="qty">05</span> </a></li>
              <li><a href="shop.html"><span className="tag-name">Modern Life</span> <img className="img-fluid" src="assets/images/blog/category-divider.png" alt="" /> <span className="qty">03</span> </a></li>
              <li><a href="shop.html"><span className="tag-name">Healthy</span> <img className="img-fluid" src="assets/images/blog/category-divider.png" alt="" /> <span className="qty">02</span> </a></li>
              <li><a href="shop.html"><span className="tag-name">Dessert</span> <img className="img-fluid" src="assets/images/blog/category-divider.png" alt="" /> <span className="qty">05</span> </a></li>
              <li><a href="shop.html"><span className="tag-name">Recipes</span> <img className="img-fluid" src="assets/images/blog/category-divider.png" alt="" /> <span className="qty">06</span> </a></li>
              <li><a href="shop.html"><span className="tag-name">Uncategoried</span> <img className="img-fluid" src="assets/images/blog/category-divider.png" alt="" /> <span className="qty">01</span> </a></li>
            </ul>
          </div>
          <div className="single-widgets widget_egns_tag">
            <div className="widget-title">
              <h3>Tag:</h3>
            </div>
            <ul className="wp-block-tag-cloud">
              <li><a href="shop.html">Dinner</a></li>
              <li><a href="shop.html">Breakfast</a></li>
              <li><a href="shop.html">Dessert</a></li>
              <li><a href="shop.html">Beverage</a></li>
              <li><a href="shop.html">Lunch</a></li>
              <li><a href="shop.html">Food</a></li>
              <li><a href="shop.html">Menu</a></li>
              <li><a href="shop.html">Sea Food</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="row g-4">
          <div className="col-md-6 col-sm-6">
            <div className="food-items2-wrap">
              <div className="food-img">
                <img className="img-fluid" src="assets/images/bg/h2-food-item-1.png" alt="h2-food-item-1" />
                <div className="cart-icon">
                  <a href="cart.html"><i className="bi bi-cart-plus" /></a>
                </div>
                <div className="pric-tag">
                  <span>$45</span>
                </div>
              </div>
              <div className="food-content">
                <ul className="d-flex align-items-center justify-content-center p-0 gap-1">
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                </ul>
                <h3><a href="shop-details.html">Prawn with Noodles</a></h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="food-items2-wrap">
              <div className="food-img">
                <img className="img-fluid" src="assets/images/bg/h2-food-item-2.png" alt="h2-food-item-1" />
                <div className="cart-icon">
                  <a href="cart.html"><i className="bi bi-cart-plus" /></a>
                </div>
                <div className="pric-tag">
                  <span>$30</span>
                </div>
              </div>
              <div className="food-content">
                <ul className="d-flex align-items-center justify-content-center p-0 gap-1">
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                </ul>
                <h3><a href="shop-details.html">Chicken Leg Fry</a></h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="food-items2-wrap">
              <div className="food-img">
                <img className="img-fluid" src="assets/images/bg/h2-food-item-3.png" alt="h2-food-item-1" />
                <div className="cart-icon">
                  <a href="cart.html"><i className="bi bi-cart-plus" /></a>
                </div>
                <div className="pric-tag">
                  <span>$10 </span>
                </div>
              </div>
              <div className="food-content">
                <ul className="d-flex align-items-center justify-content-center p-0 gap-1">
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                </ul>
                <h3><a href="shop-details.html">Golden Coffee</a></h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="food-items2-wrap">
              <div className="food-img">
                <img className="img-fluid" src="assets/images/bg/h2-food-item-4.png" alt="h2-food-item-1" />
                <div className="cart-icon">
                  <a href="cart.html"><i className="bi bi-cart-plus" /></a>
                </div>
                <div className="pric-tag">
                  <span>$50</span>
                </div>
              </div>
              <div className="food-content">
                <ul className="d-flex align-items-center justify-content-center p-0 gap-1">
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                </ul>
                <h3><a href="shop-details.html">Full Chicken</a></h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="food-items2-wrap">
              <div className="food-img">
                <img className="img-fluid" src="assets/images/bg/h2-food-item-5.png" alt="h2-food-item-1" />
                <div className="cart-icon">
                  <a href="cart.html"><i className="bi bi-cart-plus" /></a>
                </div>
                <div className="pric-tag">
                  <span>$41</span>
                </div>
              </div>
              <div className="food-content">
                <ul className="d-flex align-items-center justify-content-center p-0 gap-1">
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                </ul>
                <h3><a href="shop-details.html">Mutton Kabab</a></h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="food-items2-wrap">
              <div className="food-img">
                <img className="img-fluid" src="assets/images/bg/h2-food-item-6.png" alt="h2-food-item-1" />
                <div className="cart-icon">
                  <a href="cart.html"><i className="bi bi-cart-plus" /></a>
                </div>
                <div className="pric-tag">
                  <span>$15</span>
                </div>
              </div>
              <div className="food-content">
                <ul className="d-flex align-items-center justify-content-center p-0 gap-1">
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                </ul>
                <h3><a href="shop-details.html">Burger with Drinks</a></h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="food-items2-wrap">
              <div className="food-img">
                <img className="img-fluid" src="assets/images/bg/h2-food-item-7.png" alt="h2-food-item-1" />
                <div className="cart-icon">
                  <a href="cart.html"><i className="bi bi-cart-plus" /></a>
                </div>
                <div className="pric-tag">
                  <span>$09</span>
                </div>
              </div>
              <div className="food-content">
                <ul className="d-flex align-items-center justify-content-center p-0 gap-1">
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                </ul>
                <h3><a href="shop-details.html">Shrimps with Role</a></h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="food-items2-wrap">
              <div className="food-img">
                <img className="img-fluid" src="assets/images/bg/h2-food-item-8.png" alt="h2-food-item-1" />
                <div className="cart-icon">
                  <a href="cart.html"><i className="bi bi-cart-plus" /></a>
                </div>
                <div className="pric-tag">
                  <span>$17</span>
                </div>
              </div>
              <div className="food-content">
                <ul className="d-flex align-items-center justify-content-center p-0 gap-1">
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                </ul>
                <h3><a href="shop-details.html">Mutton with Shrimps</a></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-60">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="paginations-area">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#"><i className="bi bi-arrow-left" /></a></li>
                  <li className="page-item"><a className="page-link" href="#">01</a></li>
                  <li className="page-item"><a className="page-link" href="#">02</a></li>
                  <li className="page-item"><a className="page-link" href="#">03</a></li>
                  <li className="page-item"><a className="page-link" href="#"><i className="bi bi-arrow-right" /></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </Layout>
  )
}

export default shop