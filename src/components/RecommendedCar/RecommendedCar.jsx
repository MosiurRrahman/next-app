import React from 'react'
import { Link } from 'react-router-dom'

const RecommendedCar = () => {
  return (
    <>
      <div className="recommended-car-section">
  <div className="container-fluid">
    <div className="row g-4">
      <div className="col-lg-8 d-flex align-items-lg-end justify-content-center">
        <div className="recommended-left">
          <div className="section-title1 wow fadeInUp" data-wow-delay="200ms">
            <span>Recommended Car</span>
            <h2>Not Sure, Which Car is Best?</h2>
          </div>
          <div className="think-img wow zoomIn" data-wow-delay="400ms">
            <img src="assets/img/home1/recommended-img.png" alt="" />
          </div>
        </div>
      </div>
      <div className="col-lg-4 d-flex align-items-lg-end justify-content-center">
        <div className="recommended-right wow fadeInUp" data-wow-delay="300ms">
          <p>A car that is dependable and has a low risk of breakdowns is highly desirable.</p>
          <Link  className="primary-btn2" to="/car-listing-left-sidebar">Show Me Best Car</Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default RecommendedCar
