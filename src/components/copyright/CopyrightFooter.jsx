import React from "react";

function CopyrightFooter() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center d-flex justify-content-between align-items-center">
            <div className="copyright">
              © 2022 <a href="#">PicsZen</a> is Proudly Powered by
              <a
                href="https://themeforest.net/category/site-templates?term=egenslab"
                className="egns-lab"
              >
                Egens Lab
              </a>
              .
            </div>
            <div className="footer-social d-lg-flex d-none">
              <ul className="social-four">
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="bx bxl-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.dribbble.com/">
                    <i className="bx bxl-pinterest-alt" />
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CopyrightFooter;
