import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Banner3() {
  const bannerSlider = {
    slidesPerView: 3,
	centeredSlides: true,
	loop: true,
	speed: 1000,
	spaceBetween: 30,
	// autoplay: true,
	mousewheel: {
		enabled: true,
		sensitivity: 5.5,
	  },
	pagination: {
	  el: '.swiper-center-pagination',
	  clickable: true,
	  renderBullet: function (index, className) {
		return '<span class="' + className + '">' + (index + 1) + '</span>';
	  },
	},
	breakpoints: {
		280: {
			slidesPerView: 2,
			navigation: false,
		},
		386: {
			slidesPerView: 2,
			navigation: false,
		},
		576: {
			slidesPerView: 2,
			navigation: false,
		},
		768: {
			slidesPerView: 2,
			navigation: false,
		},
		1200: {
			slidesPerView: 2,
			navigation: false,
		},
		1400: {
			slidesPerView: 3,
			navigation: false,
		}
	}
  }
  return (
    <div className="horo-style-1 overflow-hidden">
    <div className="warter-mark">
      <h2>XOON</h2>
    </div>
    <div className="social-area sytle-two">
      <ul>
        <li><a href="https://www.facebook.com/">Facebook</a></li>
        <li><a href="https://www.instagram.com/">instagram</a></li>
        <li><a href="https://twitter.com/">Twitter</a></li>
      </ul>
    </div>
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-12">
          <div className="bk-slider">
            <Swiper {...bannerSlider} className="swiper personal-center-banner">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide magnetic-wrap">
                  <div className="magnetic-item">
                    <img src="assets/images/fullscreen-banner/image1.png" alt="image" />
                    <div className="banner-img-overlay">
                      <h2><Link legacyBehavior data-cursor="View<br>Details" className="not-hide-cursor" href="/portfolio-details"><a>Wedding Photography</a></Link></h2>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide magnetic-wrap">
                  <div className="magnetic-item">
                    <img src="assets/images/fullscreen-banner/image2.png" alt="image" />
                    <div className="banner-img-overlay">
                      <h2><Link data-cursor="View<br>Details" className="not-hide-cursor" href="/portfolio-details"><a>Modeling Photography</a></Link></h2>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide magnetic-wrap">
                  <div className="magnetic-item">
                    <img src="assets/images/fullscreen-banner/image3.png" alt="image" />
                    <div className="banner-img-overlay">
                      <h2><Link data-cursor="View<br>Details" className="not-hide-cursor" href="/portfolio-details"><a>Personal Photography</a></Link></h2>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide magnetic-wrap">
                  <div className="magnetic-item">
                    <img src="assets/images/fullscreen-banner/image2.png" alt="image" />
                    <div className="banner-img-overlay">
                      <h2><Link data-cursor="View<br>Details" className="not-hide-cursor" href="/portfolio-details"><a>Birthday Photography</a></Link></h2>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            {/* Add Pagination */}
            <div className="swiper-center-pagination d-flex justify-content-center" />
          </div>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default Banner3