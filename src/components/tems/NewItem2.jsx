import React from 'react'

function NewItem2() {
  return (
    <div className="h2-reguler-item mb-120">
  <div className="container">
    <div className="row d-flex justify-content-center mb-40">
      <div className="col-lg-8">
        <div className="section-title text-center">
          <span><img className="left-vec" src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" />Our New Item<img className="right-vec" src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" /></span>
          <h2>Restho New Item List</h2>
          <p>Various versions have evolved over the years, sometimes on purpose.</p>
        </div>
      </div>
    </div>
    <div className="row position-relative">
      <div className="swiper h2-reguler-items-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="reguler-items-wrap">
              <div className="item-img">
                <img className="img-fluid" src="assets/images/bg/h2-regular-items11.png" alt="" />
                <div className="price">
                  <h5>$32</h5>
                </div>
              </div>
              <div className="reguler-items-content">
                <h3><a href="shop-details.html">Prawn Fried</a></h3>
                <p>It is a long established fact that a reader will be distracted.</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="reguler-items-wrap">
              <div className="item-img">
                <img className="img-fluid" src="assets/images/bg/h2-regular-items12.png" alt="" />
                <div className="price">
                  <h5>$32</h5>
                </div>
              </div>
              <div className="reguler-items-content">
                <h3><a href="shop-details.html">Prawn with Noodles</a></h3>
                <p>It is a long established fact that a reader will be distracted.</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="reguler-items-wrap">
              <div className="item-img">
                <img className="img-fluid" src="assets/images/bg/h2-regular-items13.png" alt="" />
                <div className="price">
                  <h5>$32</h5>
                </div>
              </div>
              <div className="reguler-items-content">
                <h3><a href="shop-details.html">Soup with Egg</a></h3>
                <p>It is a long established fact that a reader will be distracted.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-btn">
        <div className="prev-btn-3">
          <i className="bi bi-arrow-left-short" />
        </div>
        <div className="next-btn-3">
          <i className="bi bi-arrow-right-short" />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default NewItem2