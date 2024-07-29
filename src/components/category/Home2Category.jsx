"use client";
import categoryData from "../../data/category.json"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import { useMemo } from "react";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home2Category = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".category-slider-next",
        prevEl: ".category-slider-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 6,
        },
      },
    }
  }, [])
  return (
    <>
      <div className="home2-category-section mb-110" id="category-section">
        <div className="container">
          <div className="row mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title">
                <h2>Explore <span>Category</span></h2>
              </div>
              <div className="slider-btn-grp">
                <div className="slider-btn category-slider-prev">
                  <svg width={9} height={15} viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7.50009L9 0L3.27273 7.50009L9 15L0 7.50009Z" />
                  </svg>
                </div>
                <div className="slider-btn category-slider-next">
                  <svg width={9} height={15} viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 7.50009L0 0L5.72727 7.50009L0 15L9 7.50009Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="category-slider-area mb-50 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="row">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper home1-category-slider">
                  <div className="swiper-wrapper">
                    {
                      categoryData["car-auction-category"].map((category) => {
                        const { id, name, item, image, car_type } = category;
                        return (
                          <SwiperSlide key={id} className="swiper-slide">
                            <div className="category-card">
                              <Link href="/car-auction/auction-sidebar" className="category-img">
                                <img src={image} alt="" />
                              </Link>
                              <div className="category-content">
                                <h5><Link href="/car-auction/auction-sidebar">{name}</Link></h5>
                                <span>{item} Item</span>
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      })
                    }
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="row wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-12 d-flex justify-content-center">
              <Link className="view-button" href="/category">
                View All Category
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home2Category
