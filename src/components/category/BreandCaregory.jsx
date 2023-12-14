import React from 'react'
import { Link } from 'react-router-dom'

const BreandCaregory = () => {
  return (
    <div className="brand-category-area pt-100 mb-100">
  <div className="container">
    <div className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-3 row-cols-sm-3 row-cols-2 g-4 justify-content-center mb-40">
      <div className="col wow fadeInUp" data-wow-delay="200ms">
        <Link to="/single-brand-category" className="single-category1">
          <div className="brand-icon">
            <img src="assets/img/home1/icon/suzuki.svg" alt="" />
          </div>
          <div className="brand-car">
            <img src="../../assets/img/home1/icon/suzuki-car.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="col wow fadeInUp" data-wow-delay="300ms">
        <Link to="/single-brand-category" className="single-category1">
          <div className="brand-icon">
            <img src="assets/img/home1/icon/bmw.svg" alt="" />
          </div>
          <div className="brand-car">
            <img src="assets/img/home1/icon/bmw-car.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="col wow fadeInUp" data-wow-delay="400ms">
        <Link to="/#" className="single-category1">
          <div className="brand-icon">
            <img src="assets/img/home1/icon/toyota.svg" alt="" />
          </div>
          <div className="brand-car">
            <img src="assets/img/home1/icon/toyota-car.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="col wow fadeInUp" data-wow-delay="500ms">
        <Link to="/single-brand-category" className="single-category1">
          <div className="brand-icon">
            <img src="assets/img/home1/icon/tesla.svg" alt="" />
          </div>
          <div className="brand-car">
            <img src="assets/img/home1/icon/tesla-car.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="col wow fadeInUp" data-wow-delay="600ms">
        <Link to="/single-brand-category" className="single-category1">
          <div className="brand-icon">
            <img src="assets/img/home1/icon/honda.svg" alt="" />
          </div>
          <div className="brand-car">
            <img src="assets/img/home1/icon/honda-car.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="col wow fadeInUp" data-wow-delay="700ms">
        <Link to="/single-brand-category" className="single-category1">
          <div className="brand-icon">
            <img src="assets/img/home1/icon/mazda.svg" alt="" />
          </div>
          <div className="brand-car">
            <img src="assets/img/home1/icon/mazda-car.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="col wow fadeInUp" data-wow-delay="200ms">
        <Link to="/single-brand-category" className="single-category1">
          <div className="brand-icon">
            <img src="assets/img/home1/icon/suzuki.svg" alt="" />
          </div>
          <div className="brand-car">
            <img src="assets/img/home1/icon/suzuki-car.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="col wow fadeInUp" data-wow-delay="300ms">
        <Link to="/single-brand-category" className="single-category1">
          <div className="brand-icon">
            <img src="assets/img/home1/icon/bmw.svg" alt="" />
          </div>
          <div className="brand-car">
            <img src="assets/img/home1/icon/bmw-car.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="col wow fadeInUp" data-wow-delay="400ms">
        <Link to="/single-brand-category" className="single-category1">
          <div className="brand-icon">
            <img src="assets/img/home1/icon/toyota.svg" alt="" />
          </div>
          <div className="brand-car">
            <img src="assets/img/home1/icon/toyota-car.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="col wow fadeInUp" data-wow-delay="500ms">
        <Link to="/single-brand-category" className="single-category1">
          <div className="brand-icon">
            <img src="assets/img/home1/icon/tesla.svg" alt="" />
          </div>
          <div className="brand-car">
            <img src="assets/img/home1/icon/tesla-car.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="col wow fadeInUp" data-wow-delay="600ms">
        <Link to="/single-brand-category" className="single-category1">
          <div className="brand-icon">
            <img src="assets/img/home1/icon/honda.svg" alt="" />
          </div>
          <div className="brand-car">
            <img src="assets/img/home1/icon/honda-car.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="col wow fadeInUp" data-wow-delay="700ms">
        <Link to="/single-brand-category" className="single-category1">
          <div className="brand-icon">
            <img src="assets/img/home1/icon/mazda.svg" alt="" />
          </div>
          <div className="brand-car">
            <img src="assets/img/home1/icon/mazda-car.svg" alt="" />
          </div>
        </Link>
      </div>
    </div>
    <div className="row wow fadeInUp" data-wow-delay="300ms">
      <div className="col-lg-12">
        <div className="view-btn-area">
          <p>There has 30+ Brand Category Available </p>
          <Link className="view-btn" to="/brand-category">View More</Link>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default BreandCaregory
