import Link from "next/link";
import React from "react";
import Brands from "../components/common/Brands";
import Breadcrumb from "../components/common/Breadcrumb";
import serviceData from "../data/service/popular-Services.json";
import Layout from "./../components/layout/Layout";
function Servicepage() {
  return (
    <Layout>
      <Breadcrumb pageName="Our Services" pageTitle="Our Services" />
      <section id="down" className="services-area sec-m-top">
        <div className="container">
          <div
            className="service-selection wow animate fadeInUp"
            data-wow-delay="1800ms"
            data-wow-duration="1500ms"
          >
            <form action="#" method="post">
              <div className="row">
                <div className="col-lg-3">
                  <div className="service-loc-selection">
                    <i>
                      <img src="assets/images/icons/location.svg" alt="" />
                    </i>
                    <select className="loc-select">
                      <option selected>Chattogram</option>
                      <option value="dhaka">Dhaka</option>
                      <option value="barisal">Barisal</option>
                      <option value="khulna">Khulna</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="service-multi-slection">
                    <select className="srv-select">
                      <option selected>Select Category</option>
                      <option value="Saloon">Saloon</option>
                      <option value="Cleaning">Cleaning</option>
                      <option value="Ac repair">Ac repair</option>
                      <option value="Spa & beauty">Spa &amp; beauty</option>
                    </select>
                    <select className="srv-select">
                      <option selected>Price Reange</option>
                      <option value="500-1000">500-1000</option>
                      <option value="1000-2000">1000-2000</option>
                      <option value="2000-5000">2000-5000</option>
                    </select>
                    <select className="srv-select">
                      <option selected>Rating</option>
                      <option value="3.5 Star">3.5 Star</option>
                      <option value="4.5 Star">4.5 Star</option>
                      <option value="5 Star">5 Star</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="row g-4">
            {serviceData.map((item) => {
              const {
                id,
                tag,
                thumb,
                author_thumb,
                author_name,
                title,
                price,
              } = item;
              return (
                <div
                  key={id}
                  className="col-md-6 col-lg-4 wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-service layout-2">
                    <div className="thumb">
                      <Link legacyBehavior href="#">
                        <a>
                          <img src={thumb} alt="" />
                        </a>
                      </Link>
                      <div className="tag">
                        <Link legacyBehavior href="/service">
                          <a>{tag}</a>
                        </Link>
                      </div>
                      <div className="wish">
                        <Link legacyBehavior href="/account">
                          <a>
                            <i className="bi bi-suit-heart" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="single-inner">
                      <div className="author-info">
                        <div className="author-thumb">
                          <img src={author_thumb} alt="" />
                        </div>
                        <div className="author-content">
                          <span>{author_name}</span>
                          <div className="ratting">
                            <ul className="stars">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <strong>(5/5)</strong>
                          </div>
                        </div>
                      </div>
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          <a>{title}</a>
                        </Link>
                      </h4>
                      <div className="started">
                        <Link legacyBehavior href="/service-details">
                          <a>
                            View Details
                            <span>
                              <i className="bi bi-arrow-right" />
                            </span>
                          </a>
                        </Link>
                        <span>
                          <small>$</small>
                          {price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="paginatation wow animate fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <ul className="paginate">
              <li>
                <a href="#">Previous</a>
              </li>
              <li>
                <a href="#">01</a>
              </li>
              <li className="active">
                <a href="#">02</a>
              </li>
              <li>
                <a href="#">03</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Brands />
    </Layout>
  );
}

export default Servicepage;
