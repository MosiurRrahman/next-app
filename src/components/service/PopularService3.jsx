import React from "react";
import popularSerivceData from "../../data/service/popular-Services.json";
function PopularService3() {
  return (
    <section className="popular-services-three sec-m-top">
      <div className="container">
        <div className="row">
          <div
            className="col-12 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-title layout-3">
              <h2>Popular Services</h2>
              <p>
                Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum metus.
                answerala Suspendisse oi potenti. Nullam ac lorem ex. Ut feugiat
                maximus ante, vel gravida ex.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {popularSerivceData.map((item) => {
            const { id, tag, thumb, author_thumb, author_name, title, price } =
              item;
            return (
              <div
                key={id}
                className="col-md-6 col-lg-4 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-service layout-2 layout-3">
                  <div className="thumb">
                    <a href="service-details.html">
                      <img src={thumb} alt="" />
                    </a>
                    <div className="tag">
                      <a href="service.html">Saloon</a>
                    </div>
                    <div className="wish">
                      <a href="account.html">
                        <i className="bi bi-suit-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="single-inner">
                    <div className="author-info">
                      <div className="author-thumb">
                        <img src={author_thumb} alt="" />
                      </div>
                      <div className="author-content">
                        <span>{author_name}</span>
                        <div className="ratting">
                          <ul className="stars">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                          <strong>(5/5)</strong>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <a href="service-details.html">{title}</a>
                    </h4>
                    <div className="started">
                      <a href="service-details.html">
                        View Details
                        <span>
                          <i className="bi bi-arrow-right" />
                        </span>
                      </a>
                      <span>
                        <small>$</small>
                        {price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="view-more wow animate fadeInUp"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <a href="service.html">
            View all services
            <span>
              <i className="bi bi-arrow-right" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PopularService3;
