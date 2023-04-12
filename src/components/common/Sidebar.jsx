import React from "react";

function Sidebar({ sidebarOpen, setSidebarOpen, children }) {
  return (
    <div
      className={`menu-toggle-btn-full-shape ${
        sidebarOpen ? "show-sidebar" : ""
      }`}
    >
      {children}
      <div className="menu-toggle-wrap">
        <div className="sidebar-top-area d-flex justify-content-between align-items-center">
          <div className="sidebar-logo py-3 rounded">
            <a href="index.html">
              <img
                alt="image"
                className="img-fluid"
                src="assets/images/bg/header-five-logo.svg"
              />
            </a>
          </div>
          <div className="cross-icon" onClick={() => setSidebarOpen(false)}>
            <i className="bx bx-x" />
          </div>
        </div>
        <div className="sidebar-body">
          <div className="sidebar-widget mb-60">
            <h3 className="blog-widget-title">Recent Article:</h3>
            <ul className="recent-post-list">
              <li className="recent-post-single">
                <a href="blog-detials.html" className="post-image">
                  <img src="assets/images/blog/recent-blog1.jpg" alt="" />
                </a>
                <div className="post-content">
                  <a href="blog-details.html" className="date">
                    07 January, 2022
                  </a>
                  <h5>
                    <a href="blog-details.html" data-cursor="Blog Details">
                      Bootcamp; Change To Impressive Marketing Policy.
                    </a>
                  </h5>
                </div>
              </li>
              <li className="recent-post-single">
                <a href="blog-detials.html" className="post-image">
                  <img src="assets/images/blog/recent-blog2.jpg" alt="" />
                </a>
                <div className="post-content">
                  <a href="blog-detials.html" className="date">
                    02 March, 2022
                  </a>
                  <h5>
                    <a href="blog-details.html" data-cursor="Blog Details">
                      Become A Expert Any Business Field.
                    </a>
                  </h5>
                </div>
              </li>
              <li className="recent-post-single">
                <a href="blog-detials.html" className="post-image">
                  <img src="assets/images/blog/recent-blog3.jpg" alt="" />
                </a>
                <div className="post-content">
                  <a href="blog-detials.html" className="date">
                    06 March, 2022
                  </a>
                  <h5>
                    <a href="blog-details.html" data-cursor="Blog Details">
                      Discussion Always Be Fast To Change Marketing Strategy.
                    </a>
                  </h5>
                </div>
              </li>
            </ul>
          </div>
          <div className="booking-form style-two">
            <h3 className="form-title">Subscribe Newsletter</h3>
            <form className="form-style-one sibling-two">
              <div className="form-inner">
                <div className="input-icon">
                  <i className="bx bx-envelope" />
                </div>
                <input type="text" placeholder="Email*" />
              </div>
              <button className="eg-btn btn--primary-five btn--lg w-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
