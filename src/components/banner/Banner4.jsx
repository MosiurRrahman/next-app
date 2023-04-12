import React from 'react'

function Banner4() {
  return (
    <div className="banner-four-section">
    <div className="banner-shape">
      <img src="assets/images/banner/banner-four/banner-four-shape.png" alt="" />
    </div>
    <div className="banner-shape-one">
      <img src="assets/images/banner/banner-four/vector1.svg" alt="" />
    </div>
    <div className="banner-shape-two">
      <img src="assets/images/banner/banner-four/vector2.svg" alt="" />
    </div>
    <div className="banner-shape-three">
      <img src="assets/images/banner/banner-four/vector3.svg" alt="" />
    </div>
    <div className="banner-shape-four">
      <img src="assets/images/banner/banner-four/vector4.svg" alt="" />
    </div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7">
          <div className="banner-four-content">
            <span>Business Growth</span>
            <h2>SEO Growth Your Business Policy. </h2>
            <p>Many desktop publishing packages and web page editors now use Lorem.</p>
            <div className="btn-with-input">
              <input type="text" placeholder="Website Link..." />
              <button type="submit" className="eg-btn btn--primary sibling-two btn--lg">Analyze Site</button>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="banner-four-image">
            <div className="banner-graph1">
              <img src="assets/images/banner/banner-four/banner-graph1.png" alt="" />
            </div>
            <div className="banner-graph2">
              <img src="assets/images/banner/banner-four/banner-graph2.png" alt="" />
            </div>
            <div className="banner-graph3">
              <img src="assets/images/banner/banner-four/banner-graph3.png" alt="" />
            </div>
            <img src="assets/images/banner/banner-four/banner-four-img.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner4