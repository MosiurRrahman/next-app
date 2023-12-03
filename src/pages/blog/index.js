import React from 'react'
import MainLayout from '../../components/layout/MainLayout'
import bolgData from '../../data/blog.json'
import Link from 'next/link'
const BlogGridPage = () => {
  return (
    <MainLayout>
      <div className="blog-grid-page pt-130 mb-130">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="row g-4 mb-60">
                {
                  bolgData.map((i)=>{
                    const {id, category,  date, title, grid_img} = i
                    return <div key={id} className="col-lg-6 col-md-6">
                    <div className="blog-card2 three">
                      <div className="blog-img">
                        <img src={grid_img} alt="" />
                      </div>
                      <div className="blog-content">
                        <ul className="tags">
                          <li>
                            <Link legacyBehavior href="/blog-standard">
                              <a>
                                 {category}
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link legacyBehavior href="/blog-standard">
                              <a>
                                 {date}
                              </a>
                            </Link>
                          </li>
                        </ul>
                        <h4><Link legacyBehavior href={`/blog-details/${id}`}><a>{title}</a></Link></h4>    
                        <Link legacyBehavior href="/blog-details">
                          <a className="explore-btn">
                          Read More
                          </a>
                        </Link>
                      </div>     
                    </div>
                  </div>
                  })
                }
              
              </div>
              <div className="pagination-area">
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                  <li className="page-item">
                    <a href="#">04</a>
                  </li>
                  <li className="page-item">
                    <a href="#">05</a>
                  </li>
                </ul>
                <div className="paginations-button">
                  <a href="#">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
                      <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="single-widgets widget_search mb-40">
                  <form>
                    <div className="wp-block-search__inside-wrapper ">
                      <input type="search" id="wp-block-search__input-1" className="wp-block-search__input" name="s" defaultValue placeholder="Search..." required />
                      <button type="submit" className="wp-block-search__button primary-btn3">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                          <path d="M11.7425 10.3418C12.7107 9.0205 13.1444 7.38236 12.9567 5.75508C12.769 4.1278 11.9739 2.63139 10.7303 1.56522C9.48666 0.49905 7.88635 -0.0582469 6.2495 0.0048239C4.61265 0.0678947 3.05997 0.746681 1.90209 1.90538C0.744221 3.06409 0.0665459 4.61725 0.00464636 6.25415C-0.0572531 7.89104 0.501188 9.49095 1.56825 10.7338C2.63531 11.9766 4.13229 12.7707 5.7597 12.9572C7.38711 13.1438 9.02494 12.7089 10.3455 11.7397H10.3445C10.3745 11.7797 10.4065 11.8177 10.4425 11.8547L14.2924 15.7046C14.4799 15.8922 14.7342 15.9977 14.9995 15.9977C15.2647 15.9978 15.5192 15.8926 15.7068 15.7051C15.8944 15.5176 15.9999 15.2632 16 14.9979C16.0001 14.7327 15.8948 14.4782 15.7073 14.2906L11.8575 10.4408C11.8217 10.4046 11.7833 10.3711 11.7425 10.3408V10.3418ZM12.0004 6.4979C12.0004 7.22015 11.8582 7.93532 11.5818 8.60258C11.3054 9.26985 10.9003 9.87614 10.3896 10.3868C9.87889 10.8975 9.2726 11.3027 8.60533 11.5791C7.93807 11.8554 7.2229 11.9977 6.50065 11.9977C5.77841 11.9977 5.06324 11.8554 4.39597 11.5791C3.72871 11.3027 3.12242 10.8975 2.61171 10.3868C2.10101 9.87614 1.6959 9.26985 1.41951 8.60258C1.14312 7.93532 1.00086 7.22015 1.00086 6.4979C1.00086 5.03927 1.5803 3.64037 2.61171 2.60896C3.64312 1.57755 5.04202 0.99811 6.50065 0.99811C7.95929 0.99811 9.35818 1.57755 10.3896 2.60896C11.421 3.64037 12.0004 5.03927 12.0004 6.4979Z" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="single-widgets widget_egns_categoris mb-40">
                  <div className="widget-title">
                    <h4>Category:</h4>
                  </div>
                  <ul className="wp-block-categoris-cloud">
                    <li><a href="blog-standard.html"><span>Technology</span> <span>(02)</span></a></li>
                    <li><a href="blog-standard.html"><span>Marketing</span> <span>(04)</span> </a></li>
                    <li><a href="blog-standard.html"><span>Fintech</span> <span>(06)</span></a></li>
                    <li><a href="blog-standard.html"><span>Health &amp; Care</span> <span>(02)</span></a></li>
                    <li><a href="blog-standard.html"><span>Human Resource</span> <span>(03)</span></a></li>
                    <li><a href="blog-standard.html"><span>Corporate</span> <span>(04)</span></a></li>
                    <li><a href="blog-standard.html"><span>Mobile Banking</span> <span>(03)</span></a></li>
                  </ul>
                </div>
                <div className="single-widgets widget_egns_recent_post mb-40">
                  <div className="widget-title">
                    <h4>Recent Article:</h4>
                  </div>
                  <div className="recent-post-wraper">
                    <div className="widget-cnt">
                      <div className="wi">
                        <a href="blog-details.html"><img src="assets/img/inner-pages/blog-sidebar-1.jpg" alt="image" /></a>
                      </div>
                      <div className="wc">
                        <a href="blog-standard.html">07 January, 2023 / Marko</a>
                        <h5><a href="blog-details.html">Bootcamp; Change To Impressive Marketing Policy.</a></h5>
                      </div>
                    </div>
                    <div className="widget-cnt">
                      <div className="wi">
                        <a href="blog-details.html"><img src="assets/img/inner-pages/blog-sidebar-2.jpg" alt="image" /></a>
                      </div>
                      <div className="wc">
                        <a href="blog-standard.html">02 March, 2023 / Mike</a>
                        <h5><a href="blog-details.html">Become A Expert Any Business Field.</a></h5>
                      </div>
                    </div>
                    <div className="widget-cnt">
                      <div className="wi">
                        <a href="blog-details.html"><img src="assets/img/inner-pages/blog-sidebar-2.jpg" alt="image" /></a>
                      </div>
                      <div className="wc">
                        <a href="blog-standard.html">06 March, 2023 / Barlow</a>
                        <h5><a href="blog-details.html">Discussion Always Be Fast To Change Marketing Strategy.</a></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-widgets widget_egns_tag">
                  <div className="widget-title">
                    <h4>Tag:</h4>
                  </div>
                  <p className="wp-block-tag-cloud">
                    <a href="blog-standard.html">Technology,</a>
                    <a href="blog-standard.html">Marketing,</a>
                    <a href="blog-standard.html">Fintech,</a>
                    <a href="blog-standard.html">Health,</a>
                    <a href="blog-standard.html">SEO Marketing,</a>
                    <a href="blog-standard.html">Development,</a>
                    <a href="blog-standard.html">Corporate,</a>
                    <a href="blog-standard.html">Human,</a>
                    <a href="blog-standard.html">Agency,</a>
                    <a href="blog-standard.html">Resources,</a>
                    <a href="blog-standard.html">Tech.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default BlogGridPage
