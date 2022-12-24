import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import ModalImage from "react-modal-image";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
} from "swiper";
import Link from 'next/link';
SwiperCore.use([Navigation, Autoplay, EffectFade]);
function Gallary2() {
  const gallarySider =  {
    slidesPerView: 5,
    spaceBetween: 37,
    // centeredSlides: true,
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
        slidesPerView: 1,
        spaceBetween: 35,
        centeredSlides: true
      },
      480:{
        slidesPerView: 2,
        spaceBetween: 35,
        centeredSlides: true
      },
      768:{
        slidesPerView: 2,
        spaceBetween: 35,
        centeredSlides: true
      },
      992:{
        slidesPerView: 3,
        spaceBetween: 25,
        centeredSlides: true
      },
      1200:{
        slidesPerView: 3,
        spaceBetween: 25,
        centeredSlides: true
      },
      1400:{
        slidesPerView: 5
      },
      1600:{
        slidesPerView: 5,
        centeredSlides: true
      },
    }
  }
  return (
    <div className="h2-special-gallery mb-120">
  <div className="container">
    <div className="row d-flex align-items-center justify-content-center mb-40">
      <div className="col-lg-8">
        <div className="section-title text-center">
          <span><img className="left-vec" src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" />Gallery Store<img className="right-vec" src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" /></span>
          <h2>Our Special Gallery</h2>
        </div>
      </div>
    </div>
  </div>
  <Swiper {...gallarySider} className="swiper h2-gallery">
    <div className="swiper-wrapper">
      <SwiperSlide className="swiper-slide">
      <ModalImage
              small="assets/images/icon/Zoom.svg"
              large="assets/images/bg/h2-gallery-big-1.png"
              showRotate={true}
              hideZoom={true}
            />
        {/* <a href="assets/images/bg/h2-gallery-big-1.png" data-fancybox="gallery" className="portfolio-img">
          <div className="gallery-img">
            <img className="img-fluid" src="assets/images/bg/h2-gallery-1.png" alt="" />
            <div className="overlay">
              <img src="assets/images/icon/Zoom.svg" alt="" />
            </div>
          </div>
        </a> */}
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <a href="assets/images/bg/h2-gallery-big-2.png" data-fancybox="gallery" className="portfolio-img">
          <div className="gallery-img">
            <img className="img-fluid" src="assets/images/bg/h2-gallery-2.png" alt="" />
            <div className="overlay">
              <img src="assets/images/icon/Zoom.svg" alt="" />
            </div>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <a href="assets/images/bg/h2-gallery-big-3.png" data-fancybox="gallery" className="portfolio-img">
          <div className="gallery-img">
            <img className="img-fluid" src="assets/images/bg/h2-gallery-3.png" alt="" />
            <div className="overlay">
              <img src="assets/images/icon/Zoom.svg" alt="" />
            </div>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <a href="assets/images/bg/h2-gallery-big-4.png" data-fancybox="gallery" className="portfolio-img">
          <div className="gallery-img">
            <img className="img-fluid" src="assets/images/bg/h2-gallery-4.png" alt="" />
            <div className="overlay">
              <img src="assets/images/icon/Zoom.svg" alt="" />
            </div>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <a href="assets/images/bg/h2-gallery-big-5.png" data-fancybox="gallery" className="portfolio-img">
          <div className="gallery-img">
            <img className="img-fluid" src="assets/images/bg/h2-gallery-5.png" alt="" />
            <div className="overlay">
              <img src="assets/images/icon/Zoom.svg" alt="" />
            </div>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <a href="assets/images/bg/h2-gallery-big-6.png" data-fancybox="gallery" className="portfolio-img">
          <div className="gallery-img">
            <img className="img-fluid" src="assets/images/bg/h2-gallery-6.png" alt="" />
            <div className="overlay">
              <img src="assets/images/icon/Zoom.svg" alt="" />
            </div>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <a href="assets/images/bg/h2-gallery-big-7.png" data-fancybox="gallery" className="portfolio-img">
          <div className="gallery-img">
            <img className="img-fluid" src="assets/images/bg/h2-gallery-7.png" alt="" />
            <div className="overlay">
              <img src="assets/images/icon/Zoom.svg" alt="" />
            </div>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <a href="assets/images/bg/h2-gallery-big-8.png" data-fancybox="gallery" className="portfolio-img">
          <div className="gallery-img">
            <img className="img-fluid" src="assets/images/bg/h2-gallery-8.png" alt="" />
            <div className="overlay">
              <img src="assets/images/icon/Zoom.svg" alt="" />
            </div>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <a href="assets/images/bg/h2-gallery-big-7.png" data-fancybox="gallery" className="portfolio-img">
          <div className="gallery-img">
            <img className="img-fluid" src="assets/images/bg/h2-gallery-9.png" alt="" />
            <div className="overlay">
              <img src="assets/images/icon/Zoom.svg" alt="" />
            </div>
          </div>
        </a>
      </SwiperSlide>
    </div>
  </Swiper>
</div>

  )
}

export default Gallary2