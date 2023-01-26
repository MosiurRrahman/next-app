import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Mousewheel]);
function PortfolioSlider() {
  const slider = useMemo(() => {
    return {
      loop: true,
      speed: 1000,
      spaceBetween: 20,
      centeredSlides: true,
      slidesPerView: 3,
      mousewheel: true,
      breakpoints: {
        280: {
          slidesPerView: 1,
          navigation: false,
        },
        386: {
          slidesPerView: 1,
          navigation: false,
        },
        576: {
          slidesPerView: 1,
          navigation: false,
        },
        768: {
          slidesPerView: 3,
          navigation: false,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <>
      <Layout>
        <Breadcrumb
          pageName="Portfolio Center slider"
          pageTitle="Portfolio Center slider"
        />
        <div className="portfolio-slider-section bg-color2 pt-120 pb-120 mb-44">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-flex align-items-center">
                <Swiper {...slider} className="swiper portfolio-center-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="portfolio-slider-single">
                        <img
                          src="assets/images/portfolio/port-center-slider1.png"
                          alt="image"
                        />
                        <div className="portfolio-slider-content">
                          <h2>
                            <Link
                              legacyBehavior
                              href="/portfolio-details"
                              data-cursor="View Work"
                            >
                              <a>Creative Photography.</a>
                            </Link>
                          </h2>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="portfolio-slider-single">
                        <img
                          src="assets/images/portfolio/port-center-slider2.png"
                          alt="image"
                        />
                        <div className="portfolio-slider-content">
                          <h2>
                            <Link
                              legacyBehavior
                              href="/portfolio-details"
                              data-cursor="View Work"
                            >
                              <a>Travel Photography.</a>
                            </Link>
                          </h2>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="portfolio-slider-single">
                        <img
                          src="assets/images/portfolio/port-center-slider3.png"
                          alt="image"
                        />
                        <div className="portfolio-slider-content">
                          <h2>
                            <Link
                              legacyBehavior
                              href="/portfolio-details"
                              data-cursor="View Work"
                            >
                              <a>Nature Photography.</a>
                            </Link>
                          </h2>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default PortfolioSlider;
