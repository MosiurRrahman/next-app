import React, { useMemo } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import featureShop from "../../data/feature/feature_shop.json";
SwiperCore.use([Navigation, Pagination, Autoplay]);

function FeaturesShop() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 25,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 3,
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <section className="features-shop">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="sec-title layout-1 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="title-left">
                <span>Shop</span>
                <h2>Our Feature Shop</h2>
              </div>
              <div className="title-right">
                <strong>Feature Shop</strong>
                <a href="service-details.html">
                  View All Shop
                  <span>
                    <i className="bi bi-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Swiper {...slider} className="swiper shop-slider">
          <div className="swiper-wrapper">
            {featureShop.map((item) => {
              const { id, img, service_count, tag, title } = item;
              return (
                <SwiperSlide key={id} className="swiper-slide">
                  <div
                    className="single-shop wow animate fadeInLeft"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="shop-thumb">
                      <img src={img} alt="" />
                    </div>
                    <div className="shop-inner">
                      <span>{tag}</span>
                      <h4>{title}</h4>
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
                      <a href="service.html">
                        View Store
                        <span>
                          <i className="bi bi-arrow-right" />
                        </span>
                      </a>
                    </div>
                    <div className="shop-service-count">
                      <span>{service_count}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
          <div className="swiper-pagination" />
        </Swiper>
      </div>
    </section>
  );
}

export default FeaturesShop;
