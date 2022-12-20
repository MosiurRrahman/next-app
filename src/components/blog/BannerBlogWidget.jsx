import React from 'react'

function BannerBlogWidget() {
  return (
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
  )
}

export default BannerBlogWidget