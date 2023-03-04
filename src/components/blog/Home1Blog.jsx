import React from "react";

function Home1Blog() {
  return (
    <section className="lastest-blog sec-m">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-title layout-1">
              <div className="title-left">
                <span>Blog Post</span>
                <h2>Our Latest Post</h2>
              </div>
              <div className="title-right">
                <strong>best offered services</strong>
                <a href="service.html">
                  View All Services
                  <span>
                    <i className="bi bi-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div
            className="col-md-6 col-lg-4 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="single-blog">
              <div className="blog-thumb">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-1.jpg" alt="" />
                </a>
              </div>
              <div className="blog-inner">
                <span>
                  <i className="bi bi-calendar-week" /> 6 April, 2022
                </span>
                <h4>
                  <a href="blog-details.html">
                    Praesent at sem mollis nisijabi elementum lectus.
                  </a>
                </h4>
                <a href="blog-details.html">
                  Read more
                  <span>
                    <i className="bi bi-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 wow animate fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="single-blog">
              <div className="blog-thumb">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-2.jpg" alt="" />
                </a>
              </div>
              <div className="blog-inner">
                <span>
                  <i className="bi bi-calendar-week" /> 6 April, 2022
                </span>
                <h4>
                  <a href="blog-details.html">
                    Cleaning &amp; Renovation Service By Our Expert Cleaner.
                  </a>
                </h4>
                <a href="blog-details.html">
                  Read more
                  <span>
                    <i className="bi bi-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 wow animate fadeInUp"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="single-blog">
              <div className="blog-thumb">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-3.jpg" alt="" />
                </a>
              </div>
              <div className="blog-inner">
                <span>
                  <i className="bi bi-calendar-week" /> 6 April, 2022
                </span>
                <h4>
                  <a href="blog-details.html">
                    Donec at laoreet augue est ai Etiam nunc erat.
                  </a>
                </h4>
                <a href="blog-details.html">
                  Read more
                  <span>
                    <i className="bi bi-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home1Blog;
