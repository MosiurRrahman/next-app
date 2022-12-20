import React from 'react'

function RecentPostBlogWidget() {
  return (
    <div className="single-widgets widget_egns_recent_post">
            <div className="widget-title">
              <h3>Recent Post: </h3>
              <div className="slder-btn">
                <div className="prev-btn">
                  <i className="bi bi-chevron-left" />
                </div>
                <div className="next-btn">
                  <i className="bi bi-chevron-right" />
                </div>
              </div>
            </div>
            <div className="recent-post-wraper">
              <div className="swiper recent-post-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="news-wrap">
                      <div className="post-thum">
                        <img className="img-fluid" src="assets/images/blog/recent-post-img-1.png" alt="" />
                      </div>
                      <div className="news-content">
                        <div className="news-meta">
                          <div className="publisher">
                            <a href="blog-grid.html"><img src="assets/images/icon/User.svg" alt="" /> By Admin</a>
                          </div>
                          <div className="comment">
                            <a href="blog-grid.html"><img src="assets/images/icon/Comment.svg" alt="" /> Comment(10)</a>
                          </div>
                        </div>
                        <h3><a href="blog-details.html">Cooking Delicious Food Our Experties Chef.</a></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="news-wrap">
                      <div className="post-thum">
                        <img className="img-fluid" src="assets/images/blog/recent-post-img-2.png" alt="" />
                      </div>
                      <div className="news-content">
                        <div className="news-meta">
                          <div className="publisher">
                            <a href="blog-grid.html"><img src="assets/images/icon/User.svg" alt="" /> By Admin</a>
                          </div>
                          <div className="comment">
                            <a href="blog-grid.html"><img src="assets/images/icon/Comment.svg" alt="" /> Comment(10)</a>
                          </div>
                        </div>
                        <h3><a href="blog-details.html">Esay To Make Some Special Food In Home.</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default RecentPostBlogWidget