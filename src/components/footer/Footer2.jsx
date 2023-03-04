import React from "react";

function Footer2() {
  return (
    <footer className="footer-2">
      <img
        src="assets/images/footer-left-shape.png"
        alt=""
        className="line-shape"
      />
      <div className="container">
        <div className="footer-top">
          <div className="row gy-5">
            <div className="col-md-6 col-lg-5">
              <div className="footer-widget with-logo">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="assets/images/footer-logo.svg" alt="" />
                  </a>
                </div>
                <p>
                  Aenean fermentum sapien acena gravida. Fusce a ipsum metuslai.
                  Suspendisse oi potenti.
                </p>
                <div className="request-btn">
                  <a href="contact.html">Request a Service</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="footer-widget">
                <h4>Explore On</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="#">Help &amp; Support</a>
                  </li>
                  <li>
                    <a href="service-details.html">Services Details</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="footer-widget">
                <h4>Categories</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="service.html">Electronics</a>
                  </li>
                  <li>
                    <a href="service.html">Driver Service</a>
                  </li>
                  <li>
                    <a href="service.html">Electric &amp; Plumbing</a>
                  </li>
                  <li>
                    <a href="service.html">Gadgets Repair</a>
                  </li>
                  <li>
                    <a href="service.html">Security Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget">
                <h4>Contacts</h4>
                <div className="information">
                  <div className="info">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="desc">
                      <a href="tel:01761111456">+880 176 1111 456</a>
                      <a href="tel:01761111555">+880 176 1111 555</a>
                    </div>
                  </div>
                  <div className="info">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="desc">
                      <a href="mailto:info@example.com">info@example.com</a>
                      <a href="mailto:info@support.com">info@support.com</a>
                    </div>
                  </div>
                  <div className="info">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="desc">
                      <p>168/170, Avenue 01, Mirpur DOHS, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="copy-right">
                <span>
                  Copyright 2022 Serve | Design By
                  <a href="https://www.egenslab.com/">Egens Lab</a>
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-social-media">
                <ul>
                  <li>
                    <a href="https://www.facebook.com">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
