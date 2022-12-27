import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination ,EffectFade} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay,EffectFade]);
function Gallery1() {
    const gallarySlider = {
        slidesPerView: "auto",
        spaceBetween: 37,
        loop: true,
        speed:1500,
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            280:{
            slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: true
            },
            480:{
            slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: true
            },
            768:{
            slidesPerView: 3,
            spaceBetween: 25,
            centeredSlides: true
            },
            992:{
            slidesPerView: 4,
            spaceBetween: 25,
            centeredSlides: true
            },
            1200:{
            slidesPerView: 4,
            spaceBetween: 25,
            centeredSlides: true
            },
            1400:{
            slidesPerView:5
            },
            1600:{
            slidesPerView: 5
            },
        }
    }
  return (
    <div className="food-gallery-area mb-120">
  <div className="container-fluid">
    <div className="row d-flex justify-content-center mb-40">
      <div className="col-lg-8">
        <div className="section-title text-center">
          <span><img className="left-vec" src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" />Gallery<img className="right-vec" src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" /></span>
          <h2>Restho’s Gallery</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <Swiper {...gallarySlider} className="swiper gallery-slider1">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <a href="assets/images/bg/gallery-big-1.png" data-fancybox="gallery" className="gallery2-img">
              <div className="gallery-wrap">
                <img className="img-fluid" src="assets/images/bg/gallery-1.png" alt="" />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <div className="items-content text-center">
                    <span><img className="left-vec" src="assets/images/icon/shape-white1.svg" alt="sub-title-vec" />Cooking<img className="right-vec" src="assets/images/icon/shape-white1.svg" alt="sub-title-vec" /></span>
                    <h3>Spicy Beef</h3>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="assets/images/bg/gallery-big-2.png" data-fancybox="gallery" className="gallery2-img">
              <div className="gallery-wrap">
                <img className="img-fluid" src="assets/images/bg/gallery-2.png" alt="" />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <div className="items-content text-center">
                    <span><img className="left-vec" src="assets/images/icon/shape-white1.svg" alt="sub-title-vec" />Restaurent<img className="right-vec" src="assets/images/icon/shape-white1.svg" alt="sub-title-vec" /></span>
                    <h3>Restho Interior Part</h3>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="assets/images/bg/gallery-big-3.png" data-fancybox="gallery" className="gallery2-img">
              <div className="gallery-wrap">
                <img className="img-fluid" src="assets/images/bg/gallery-3.png" alt="" />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <div className="items-content text-center">
                    <span><img className="left-vec" src="assets/images/icon/shape-white1.svg" alt="sub-title-vec" />Cooking<img className="right-vec" src="assets/images/icon/shape-white1.svg" alt="sub-title-vec" /></span>
                    <h3>Delicious Food</h3>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="assets/images/bg/gallery-big-4.png" data-fancybox="gallery" className="gallery2-img">
              <div className="gallery-wrap">
                <img className="img-fluid" src="assets/images/bg/gallery-4.png" alt="" />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <div className="items-content text-center">
                    <span><img className="left-vec" src="assets/images/icon/shape-white1.svg" alt="sub-title-vec" />Cooking<img className="right-vec" src="assets/images/icon/shape-white1.svg" alt="sub-title-vec" /></span>
                    <h3>Chef Cooking Vegetarian</h3>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="assets/images/bg/gallery-big-5.png" data-fancybox="gallery" className="gallery2-img">
              <div className="gallery-wrap">
                <img className="img-fluid" src="assets/images/bg/gallery-5.png" alt="" />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <div className="items-content text-center">
                    <span><img className="left-vec" src="assets/images/icon/shape-white1.svg" alt="sub-title-vec" />Cooking<img className="right-vec" src="assets/images/icon/shape-white1.svg" alt="sub-title-vec" /></span>
                    <h3>Chef Cooking Vegetarian</h3>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  </div>
</div>

  )
}

export default Gallery1