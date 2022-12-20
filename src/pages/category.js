import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../layout/Layout'

function category() {
  return (
    <Layout>
        <Breadcrumb pageName="Food Category" pageTitle="Food Category"/>
        <div className="food-category-area pt-120">
  <div className="container">
    <div className="row g-4">
      <div className="col-lg-3">
        <div className="food-category-list">
          <h4 className="title">Category:</h4>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="seafood-tab" data-bs-toggle="tab" data-bs-target="#seafood" type="button" role="tab" aria-controls="seafood" aria-selected="true"><span>Sea Food</span><span><i className="bi bi-arrow-right" /></span></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="vegetarian-tab" data-bs-toggle="tab" data-bs-target="#vegetarian" type="button" role="tab" aria-controls="vegetarian" aria-selected="false"><span>Vegetarian</span><span><i className="bi bi-arrow-right" /></span></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="chinese-tab" data-bs-toggle="tab" data-bs-target="#chinese" type="button" role="tab" aria-controls="chinese" aria-selected="false"><span>Chinese</span><span><i className="bi bi-arrow-right" /></span></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="meat-tab" data-bs-toggle="tab" data-bs-target="#meat" type="button" role="tab" aria-controls="meat" aria-selected="false"><span>Meat</span><span><i className="bi bi-arrow-right" /></span></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="italianfood-tab" data-bs-toggle="tab" data-bs-target="#italianfood" type="button" role="tab" aria-controls="italianfood" aria-selected="false"><span>Italian Food</span><span><i className="bi bi-arrow-right" /></span></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="fastfood-tab" data-bs-toggle="tab" data-bs-target="#fastfood" type="button" role="tab" aria-controls="fastfood" aria-selected="false"><span>Fast Food</span><span><i className="bi bi-arrow-right" /></span></button>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="tab-content">
          <div className="tab-pane active" id="seafood" role="tabpanel" aria-labelledby="seafood-tab">
            <div className="food-category-wrap">
              <div className="row g-4">
                <div className="divider" />
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/sea-food-11.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Pasta Mixed Prawn</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$20 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/sea-food-12.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Shrimp Mashala</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$20 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/sea-food-13.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Shrimp Noodles</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$15 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/sea-food-14.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Salmon Fish</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$15 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/sea-food-15.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Broccoli Item</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$13 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/sea-food-16.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Tubacco Fish</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$13 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="vegetarian" role="tabpanel" aria-labelledby="vegetarian-tab">
            <div className="food-category-wrap">
              <div className="row g-4">
                <div className="divider" />
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/category-food01.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Mixed Vegetable Salad</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$20 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/category-food02.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Fruit Salad</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$20 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/category-food03.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Greek Salad</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$15 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/category-food04.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Summer Corn</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$15 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/category-food05.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Broccoli Pasta Item</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$13 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/category-food06.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Taco Salad Item</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$13 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="chinese" role="tabpanel" aria-labelledby="chinese-tab">
            <div className="food-category-wrap">
              <div className="row g-4">
                <div className="divider" />
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/chinese-food-11.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Chow Mein</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$20 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/chinese-food-12.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Dumplings</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$20 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/chinese-food-13.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Wonton Soup</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$15 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/chinese-food-14.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Summer Corn</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$15 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/chinese-food-15.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Broccoli Fish Item</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$13 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/chinese-food-16.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Peking duck</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$13 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="meat" role="tabpanel" aria-labelledby="meat-tab">
            <div className="food-category-wrap">
              <div className="row g-4">
                <div className="divider" />
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/meat-11.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Chicken Grill</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$20 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/meat-12.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Beef BBQ</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$20 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/meat-13.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Spicy Beef</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$15 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/meat-14.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Kebab Item</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$15 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/meat-15.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Naga Chicken</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$13 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/meat-16.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Chicken Wings</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$13 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="italianfood" role="tabpanel" aria-labelledby="italianfood-tab">
            <div className="food-category-wrap">
              <div className="row g-4">
                <div className="divider" />
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/italian-food-11.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Chicken Tikka</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$20 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/italian-food-12.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Polenta</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$20 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/italian-food-13.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Lasagna</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$15 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/italian-food-14.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Octopus With Noodles</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$15 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/italian-food-15.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Spaghetti Carbonara</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$13 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/italian-food-16.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Broccoli Pasta Item</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$13 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="fastfood" role="tabpanel" aria-labelledby="fastfood-tab">
            <div className="food-category-wrap">
              <div className="row g-4">
                <div className="divider" />
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/fast-food-11.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Mixed Vegetable Salad</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$20 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/fast-food-12.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Fruit Salad</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$20 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/fast-food-13.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Greek Salad</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$15 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/fast-food-14.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Summer Corn</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$15 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/fast-food-15.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Broccoli Pasta Item</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$13 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex  justify-content-xl-end justify-content-md-center justify-content-center">
                  <div className="category-item">
                    <div className="icon">
                      <img className="img-fluid" src="assets/images/bg/fast-food-16.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h4><a href="shop-details.html">Taco Salad Item</a></h4>
                      <p>Complete account of the system.</p>
                      <div className="price">
                        <h5>$13 <span>Only</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
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

export default category