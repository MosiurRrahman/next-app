import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../layout/Layout'

function ShopDetails() {
  return (
    <Layout>
      <Breadcrumb pageName="Shop Details" pageTitle="Shop Details"/>
      <div className="shop-details pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-5 gy-5">
            <div className="col-lg-6">
              <div className="tab-content tab-content1" id="v-pills-tabContent">
                <div className="tab-pane fade active show" id="v-pills-img1" role="tabpanel" aria-labelledby="v-pills-img1-tab">
                  <div className="gallery-big-image">
                    <img className="img-fluid" src="assets/images/bg/card-big-01.png" alt="" />
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-img2" role="tabpanel" aria-labelledby="v-pills-img2-tab">
                  <img className="img-fluid" src="assets/images/bg/card-big-02.png" alt="" />
                </div>
                <div className="tab-pane fade" id="v-pills-img3" role="tabpanel" aria-labelledby="v-pills-img3-tab">
                  <img className="img-fluid" src="assets/images/bg/card-big-03.png" alt="" />
                </div>
                <div className="tab-pane fade" id="v-pills-img4" role="tabpanel" aria-labelledby="v-pills-img4-tab">
                  <img className="img-fluid" src="assets/images/bg/card-big-04.png" alt="" />
                </div>
              </div>
              <div className="nav nav1 nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active" id="v-pills-img1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-img1" type="button" role="tab" aria-controls="v-pills-img1" aria-selected="true">
                  <img src="assets/images/bg/card-sm-01.png" alt="" />
                </button>
                <button className="nav-link" id="v-pills-img2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-img2" type="button" role="tab" aria-controls="v-pills-img2" aria-selected="false">
                  <img src="assets/images/bg/card-sm-02.png" alt="" />
                </button>
                <button className="nav-link" id="v-pills-img3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-img3" type="button" role="tab" aria-controls="v-pills-img3" aria-selected="false">
                  <img src="assets/images/bg/card-sm-03.png" alt="" />
                </button>
                <button className="nav-link" id="v-pills-img4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-img4" type="button" role="tab" aria-controls="v-pills-img4" aria-selected="false">
                  <img src="assets/images/bg/card-sm-04.png" alt="" />
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="prod-details-content">
                <ul className="product-review2 d-flex flex-row align-items-center mb-25">
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><a href="#" className="review-no" />(32 Review)</li>
                </ul>
                <h2>To Make Delicious Food Item.</h2>
                <div className="price-tag">
                  <h4>$30 <del>$40</del></h4>
                </div>
                <p>Donec bibendum enim ut elit porta ullamcorper enim. Vestibulum  Nai wekemd bendum enim ut elit porta ullamcorper enim. Vestibulum  Nai sgdad bendum enim ut elit porta ullamcorper enim. Vestibulum  Nai wekemdini iaculis vitae nulla.nec bibendum enim ut elit porta ullamcor</p>
                <div className="prod-quantity d-flex align-items-center justify-content-start mb-20">
                  <div className="quantity d-flex align-items-center">
                    <div className="quantity-nav nice-number d-flex align-items-center">
                      <input type="number" defaultValue={1} min={1} />
                    </div>
                  </div>
                  <a href="cart.html" className="primary-btn3">Add to cart</a>
                </div>
                <div className="category-tag">
                  <ul>
                    <li>Category:</li>
                    <li><a href="shop.html">Food(05),</a></li>
                    <li><a href="shop.html">Modern Life(10),</a></li>
                    <li><a href="shop.html">Healthy(02),</a></li>
                    <li><a href="shop.html">Desset(04)</a></li>
                  </ul>
                  <ul>
                    <li>Tag:</li>
                    <li><a href="shop.html">Dinner,</a></li>
                    <li><a href="shop.html">Breakfast,</a></li>
                    <li><a href="shop.html">Berverage,</a></li>
                    <li><a href="shop.html">Sea Food,</a></li>
                    <li><a href="shop.html">Menu</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 pt-50">
            <div className="col-lg-12 mb-25">
              <h2 className="item-details-tt">Item Details</h2>
            </div>
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="nav nav2 nav  nav-pills" id="v-pills-tab2" role="tablist" aria-orientation="vertical">
                  <button className="nav-link btn--lg" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="false">Details</button>
                  <button className="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">Review</button>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="tab-content tab-content2" id="v-pills-tabContent2">
                  <div className="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <div className="description box--shadow">
                      <p className="para-2 mb-2">Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum
                        venenatis leo et dictum finibus. Nulla vulputate dolor sit amet tristique dapibus. Maecenas
                        posuere luctus leo, non consequat felis ullamc orper non. Aliquam erat volutpat. Donec vitae
                        porta enim. Cras eu volutpat dolor, vitae accumsan tellus. Donec pulvinar auctor nunc, et
                        gravida elit porta non. Aliquam erat volutpat. Proin facilisis interdum felis, sit amet pretium
                        purus feugiat ac. Donec in leo metus. Sed quis dui nec justo ullamcorper molestie. Mauris
                        consequat lacinia est, eget tincidunt leo ornare sed</p>
                      <p className="para-2">Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum
                        venenatis leo et dictum finibus dapi bus Maecenas posuere luctus leo, non consequat felis
                        ullamcorper non.</p>
                    </div>
                  </div>
                  <div className="tab-pane fade active show" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <div className="comments-area">
                      <div className="number-of-comment">
                        <h3>Comments(02) :</h3>
                      </div>
                      <div className="comment-list-area mb-60">
                        <ul className="comment-list">
                          <li>
                            <div className="single-comment d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap">
                              <div className="comment-image">
                                <img src="assets/images/blog/comment-img-1.png" alt="image" />
                              </div>
                              <div className="comment-content">
                                <div className="c-header d-flex align-items-center">
                                  <div className="comment-meta">
                                    <h5 className="mb-0"><a href="#">Rocky Mike ,</a></h5>
                                    <div className="c-date">06 july,2022</div>
                                  </div>
                                  <div className="replay-btn">
                                    <a href="#"><i className="bi bi-reply" />Reply</a>
                                  </div>
                                </div>
                                <ul className="product-review">
                                  <li><i className="bi bi-star-fill" /></li>
                                  <li><i className="bi bi-star-fill" /></li>
                                  <li><i className="bi bi-star-fill" /></li>
                                  <li><i className="bi bi-star-fill" /></li>
                                  <li><i className="bi bi-star-fill" /></li>
                                </ul>
                                <div className="c-body">
                                  <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account. </p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-comment d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap">
                              <div className="comment-image">
                                <img src="assets/images/blog/comment-img-3.png" alt="image" />
                              </div>
                              <div className="comment-content">
                                <div className="c-header d-flex align-items-center">
                                  <div className="comment-meta">
                                    <h5 className="mb-0"><a href="#">Rony Jhon ,</a></h5>
                                    <div className="c-date">07 july,2022</div>
                                  </div>
                                  <div className="replay-btn">
                                    <a href="#"><i className="bi bi-reply" />Reply</a>
                                  </div>
                                </div>
                                <ul className="product-review">
                                  <li><i className="bi bi-star-fill" /></li>
                                  <li><i className="bi bi-star-fill" /></li>
                                  <li><i className="bi bi-star-fill" /></li>
                                  <li><i className="bi bi-star-fill" /></li>
                                  <li><i className="bi bi-star-fill" /></li>
                                </ul>
                                <div className="c-body">
                                  <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account. </p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="comment-form">
                        <div className="number-of-comment">
                          <h3>Leave A Reply</h3>
                        </div>
                        <form>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-inner mb-30">
                                <input type="text" placeholder="Name*" required />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-inner mb-30">
                                <input type="email" placeholder="Email*" required />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-inner mb-10">
                                <textarea placeholder="Message..." defaultValue={""} />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-inner2 mb-30">
                                <div className="comment-rate-area">
                                  <p>Your Rating</p>
                                  <div className="rate">
                                    <input type="radio" id="star5" name="rate" defaultValue={5} />
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" defaultValue={4} />
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" defaultValue={3} />
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" defaultValue={2} />
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" defaultValue={1} />
                                    <label htmlFor="star1" title="text">1 star</label>
                                  </div>
                                </div>
                              </div> 
                            </div>
                            <div className="col-lg-12">
                              <div className="form-inner two">
                                <button className="primary-btn btn-lg" type="submit">Post Comment</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related-items-area mb-120">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12">
              <h2 className="item-details-tt">Related Item</h2>
            </div>
          </div>
          <div className="row">
            <div className="swiper related-item-sliders">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
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
                <div className="swiper-slide">
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
                <div className="swiper-slide">
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
                <div className="swiper-slide">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ShopDetails