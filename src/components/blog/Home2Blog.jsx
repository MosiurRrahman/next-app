import React from 'react'

function Home2Blog() {
  return (
    <div className="h2-blog-area mb-120">
  <div className="container">
    <div className="row d-flex align-items-center justify-content-center mb-40">
      <div className="col-lg-8">
        <div className="section-title text-center">
          <span><img className="left-vec" src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" />Our Blog<img className="right-vec" src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" /></span>
          <h2>Our Latest Blog</h2>
        </div>
      </div>
    </div>
    <div className="row g-4 justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="h2-blog-card">
          <div className="blog-img">
            <img className="img-fluid" src="assets/images/bg/h2-blog1.png" alt="h2-blog1" />
            <div className="batch">
              <a href="blog-grid.html"><span>17</span><br />Apr</a>
            </div>
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <a href="blog-grid.html">By Clone Watson</a>
            </div>
            <h3><a href="blog-details.html">To Make Good Health Take 
                Nutrition Food.</a></h3>
            <div className="read-more-btn">
              <a href="blog-details.html"><span>Read More</span><span><i className="bi bi-arrow-right" /></span></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="h2-blog-card">
          <div className="blog-img">
            <img className="img-fluid" src="assets/images/bg/h2-blog2.png" alt="h2-blog1" />
            <div className="batch">
              <a href="blog-grid.html"><span>18</span><br />Apr</a>
            </div>
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <a href="blog-grid.html">By Hilary Watson</a>
            </div>
            <h3><a href="blog-details.html">Eat at Some Nutition Food &amp; Happy Leadlife.</a></h3>
            <div className="read-more-btn">
              <a href="blog-details.html"><span>Read More</span><span><i className="bi bi-arrow-right" /></span></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="h2-blog-card">
          <div className="blog-img">
            <img className="img-fluid" src="assets/images/bg/h2-blog3.png" alt="h2-blog1" />
            <div className="batch">
              <a href="blog-grid.html"><span>17</span><br />Apr</a>
            </div>
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <a href="blog-grid.html">By Clone Watson</a>
            </div>
            <h3><a href="blog-details.html">Esay To Make Some Special Food In Home.</a></h3>
            <div className="read-more-btn">
              <a href="blog-details.html"><span>Read More</span><span><i className="bi bi-arrow-right" /></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home2Blog