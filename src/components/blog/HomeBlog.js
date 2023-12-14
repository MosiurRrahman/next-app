import React from 'react'
import { Link } from 'react-router-dom'

const HomeBlog = () => {
  return (
    <>
      <div className="news-section pt-90 pb-90">
    <div className="container">
        <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
        <div className="col-lg-12 d-flex align-items-end justify-content-between flex-wrap gap-4">
            <div className="section-title1">
            <span>News &amp; Article</span>
            <h2>The Latest News Car &amp; Bids</h2>
            </div>
        </div>
        </div>
        <div className="row g-4 justify-content-center">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="news-card">
            <div className="news-img">
                <Link  to="/blog-details"><img src="assets/img/home1/news-01.png" alt="" /></Link>
                <div className="date">
                <Link to="/blog-standard">Buying Advice</Link>
                </div>
            </div>
            <div className="content">
                <h6><Link to="/blog-details">The Car Enthusiast: Exploring the World of Cars and Driving.</Link>
                </h6>
                <div className="news-btm">
                <div className="author-area">
                    <div className="author-img">
                    <img src="assets/img/home1/author-01.png" alt="" />
                    </div>
                    <div className="author-content">
                    <h6>Mr. Morris Mannu</h6>
                    <Link to="/blog-standard">Posted on - 03 April, 2023</Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="news-card">
            <div className="news-img">
                <Link to="/blog-details"><img src="assets/img/home1/news-02.png" alt="" /></Link>
                <div className="date">
                <Link to="/blog-standard">Car Advice</Link>
                </div>
            </div>
            <div className="content">
                <h6><Link to="/blog-details">The Best Car Brands for Performance and Reliability.</Link>
                </h6>
                <div className="news-btm">
                <div className="author-area">
                    <div className="author-img">
                    <img src="assets/img/home1/author-02.png" alt="" />
                    </div>
                    <div className="author-content">
                    <h6>Daniel Scoot</h6>
                    <Link to="/blog-standard">Posted on - 03 April, 2023</Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="news-card">
            <div className="news-img">
                <Link to="/blog-details"><img src="assets/img/home1/news-03.png" alt="" /></Link>
                <div className="date">
                <Link to="/blog-standard">Driving Advice</Link>
                </div>
            </div>
            <div className="content">
                <h6><Link to="/blog-details">The Environmental Impact of Cars and How to Minimize It.</Link>
                </h6>
                <div className="news-btm">
                <div className="author-area">
                    <div className="author-img">
                    <img src="assets/img/home1/author-03.png" alt="" />
                    </div>
                    <div className="author-content">
                    <h6>Mulish Kary</h6>
                    <Link to="/blog-standard">Posted on - 03 April, 2023</Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>

    </>
  )
}

export default HomeBlog
