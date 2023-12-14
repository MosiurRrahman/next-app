import React from 'react'
import { Link } from 'react-router-dom'

const CompareCarSection = () => {
  return (
    <>
      <div className="compare-car-section mb-100">
  <div className="container-xl container-fluid">
    <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12">
        <div className="section-title1">
          <span>Best Car Collection</span>
          <h2>Compare Car With Brand</h2>
        </div>
      </div>
    </div>
    <div className="modal compare-modal fade" id="compareModal01" tabIndex={-1} aria-labelledby="compareModal01Label" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="compareModal01Label">Comparision</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="compare-top">
                  <div className="single-car">
                    <div className="car-img">
                      <img src="assets/img/home1/compare-md-01.png" alt="car" />
                    </div>
                    <div className="content text-center">
                      <h6 className="title"><Link to="#">Mercedes-Benz C-Class-2023</Link></h6>
                      <h6 className="price">$68, 219.000</h6>
                    </div>
                  </div>
                  <div className="vs">
                    <span>VS</span>
                  </div>
                  <div className="single-car">
                    <div className="car-img">
                      <img src="assets/img/home1/compare-md-02.png" alt="car" />
                    </div>
                    <div className="content text-center">
                      <h6 className="title"><Link to="#">Jeep Grand Cherokee-2023</Link></h6>
                      <h6 className="price">$78, 729.000</h6>
                    </div>
                  </div>
                </div>
                <div className="compare-btm">
                  <div className="table-wrapper">
                    <table className="eg-table">
                      <thead>
                        <tr>
                          <th>SUV</th>
                          <th>TOYOTA</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Engine Speed:</strong> 34,563 cc</td>
                          <td><strong>Engine Speed:</strong> 35,533 cc</td>
                        </tr>
                        <tr>
                          <td><strong>Body Type:</strong> Convertible</td>
                          <td><strong>Body Type:</strong> Hatchback</td>
                        </tr>
                        <tr>
                          <td><strong>Max. Power:</strong> 140 kw 7000 rpm</td>
                          <td><strong>Max. Power:</strong> 142 kw 7000 rpm</td>
                        </tr>
                        <tr>
                          <td><strong>Steering:</strong> Right</td>
                          <td><strong>Steering:</strong> Left</td>
                        </tr>
                        <tr>
                          <td><strong>Engine Type:</strong> 1.5 L Gas Engine</td>
                          <td><strong>Engine Type:</strong> 1.55 L Petrol Engine</td>
                        </tr>
                        <tr>
                          <td><strong>No Of Cylinders:</strong> 04</td>
                          <td><strong>No Of Cylinders:</strong> 04</td>
                        </tr>
                        <tr>
                          <td><strong>Transmission:</strong> Automatic</td>
                          <td><strong>Transmission:</strong> Manual</td>
                        </tr>
                        <tr>
                          <td><strong>Fuel Type:</strong> Petrol</td>
                          <td><strong>Fuel Type:</strong> Gasoline</td>
                        </tr>
                        <tr>
                          <td><Link className="primary-btn2" to="/car-deatils.html">View Details</Link></td>
                          <td><Link className="primary-btn2" to="/car-deatils.html">View Details</Link></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-40 wow fadeInUp" data-wow-delay="300ms">
      <div className="col-lg-12">
        <div className="swiper compare-car-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="single-compare-card">
                <div className="compare-top">
                  <div className="single-car">
                    <div className="car-img">
                      <img src="assets/img/home1/cc-suv.png" alt="car" />
                    </div>
                    <div className="content text-center">
                      <span>(SUV)</span>
                      <h6 className="title"><Link to="#">Kia Optima</Link></h6>
                      <h6 className="price">$68, 219.000</h6>
                    </div>
                  </div>
                  <div className="vs">
                    <span>VS</span>
                  </div>
                  <div className="single-car">
                    <div className="car-img">
                      <img src="assets/img/home1/cc-toyota.png" alt="car" />
                    </div>
                    <div className="content text-center">
                      <span>(Toyota)</span>
                      <h6 className="title"><Link to="#">T. Camry</Link></h6>
                      <h6 className="price">$78, 729.000</h6>
                    </div>
                  </div>
                </div>
                <div className="compare-btm">
                  <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">Compare SUV &amp; Toyota</button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-compare-card">
                <div className="compare-top">
                  <div className="single-car">
                    <div className="car-img">
                      <img src="assets/img/home1/cc-merceds.png" alt="car" />
                    </div>
                    <div className="content text-center">
                      <span>(Suzuki)</span>
                      <h6 className="title"><Link to="#">Nissan 120</Link></h6>
                      <h6 className="price">$70, 219.000</h6>
                    </div>
                  </div>
                  <div className="vs">
                    <span>VS</span>
                  </div>
                  <div className="single-car">
                    <div className="car-img">
                      <img src="assets/img/home1/cc-bmw.png" alt="car" />
                    </div>
                    <div className="content text-center">
                      <span>(Tesla)</span>
                      <h6 className="title"><Link to="#">Tesla SS</Link></h6>
                      <h6 className="price">$78, 729.000</h6>
                    </div>
                  </div>
                </div>
                <div className="compare-btm">
                  <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">Compare Suzuki &amp; Tesla</button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-compare-card">
                <div className="compare-top">
                  <div className="single-car">
                    <div className="car-img">
                      <img src="assets/img/home1/cc-suv.png" alt="car" />
                    </div>
                    <div className="content text-center">
                      <span>(Mercedes)</span>
                      <h6 className="title"><Link to="#">Subaru 46</Link></h6>
                      <h6 className="price">$90, 319.000</h6>
                    </div>
                  </div>
                  <div className="vs">
                    <span>VS</span>
                  </div>
                  <div className="single-car">
                    <div className="car-img">
                      <img src="assets/img/home1/cc-tesla.png" alt="car" />
                    </div>
                    <div className="content text-center">
                      <span>(BMW)</span>
                      <h6 className="title"><Link to="#">Porsche 11</Link></h6>
                      <h6 className="price">$93, 740.000</h6>
                    </div>
                  </div>
                </div>
                <div className="compare-btm">
                  <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">Compare Mercedes &amp; BMW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row ">
      <div className="col-lg-12 divider">
        <div className="slider-btn-group style-2 justify-content-md-between justify-content-center">
          <div className="slider-btn prev-3 d-md-flex d-none">
            <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
            </svg>
          </div>
          <div className="view-btn-area">
            <p>There are Trending Car Available</p>
            <Link className="view-btn" to="/compare.html">View More</Link>
          </div>
          <div className="slider-btn next-3 d-md-flex d-none">
            <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default CompareCarSection
