import React, { useState } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../layout/Layout'
import categodyCardData from "../data/foodCategory_data.json"
import ReservationForm from '../components/category/ReservationForm'
import Testimonial3 from '../components/testimonial/Testimonial3'
function Category() {

  const categoryCard = new Map([
    ...categodyCardData.map( categoryData => [categoryData.category, categoryData.categorySlug])
  ]);

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
                  {
                    [...categoryCard].map( ( key ) => {
                      return(
                        <li key={key.id} className="nav-item" role="presentation">
                          <button className="nav-link" id="vegetarian-tab" data-bs-toggle="tab" data-bs-target={`#${ key[1]}`} type="button" role="tab" aria-controls={`#${ key[1]}`} aria-selected="false"><span>{key[0]}</span><span><i className="bi bi-arrow-right" /></span></button>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content">
                
                <div className="tab-pane" id="seafood" role="tabpanel" aria-labelledby="seafood-tab">
                  <div className="food-category-wrap">
                    <div className="row g-4">
                      <div className="divider" />
                      <div className="col-lg-6 col-md-6">
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
                      <div className="col-lg-6 col-md-6">
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
                      <div className="col-lg-6 col-md-6">
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
                      <div className="col-lg-6 col-md-6">
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
                      <div className="col-lg-6 col-md-6">
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
                      <div className="col-lg-6 col-md-6">
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

              </div>
            </div>
          </div>
        </div>
      </div>
      <ReservationForm/>
      <Testimonial3/>
    </Layout>
  )
}

export default Category