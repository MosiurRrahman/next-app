import React, { useMemo } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const Gallary = () => {
    const slideSetting = useMemo(()=>{
    return {
      speed: 5000,
		spaceBetween: 30,
		autoplay: {
			delay: 100, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
	
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
                spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
                spaceBetween: 30,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4
			},
		}
    }
  })
  return (
    <div className="gallery-section overflow-hidden mb-130">
    <div className="row">
      <div className="col-lg-12">
        <Swiper {...slideSetting} className="swiper gallery-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="gallery-wrap">
                <a data-fancybox="gallery2" href="assets/img/home3/home3-gallery-img-01.jpg"><img src="assets/img/home3/home3-gallery-img-01.jpg" alt="" /></a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="gallery-wrap">
                <a data-fancybox="gallery2" href="assets/img/home3/home3-gallery-img-02.jpg"><img src="assets/img/home3/home3-gallery-img-02.jpg" alt="" /></a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="gallery-wrap">
                <a data-fancybox="gallery2" href="assets/img/home3/home3-gallery-img-03.jpg"><img src="assets/img/home3/home3-gallery-img-03.jpg" alt="" /></a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="gallery-wrap">
                <a data-fancybox="gallery2" href="assets/img/home3/home3-gallery-img-01.jpg"><img src="assets/img/home3/home3-gallery-img-01.jpg" alt="" /></a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="gallery-wrap">
                <a data-fancybox="gallery2" href="assets/img/home3/home3-gallery-img-02.jpg"><img src="assets/img/home3/home3-gallery-img-02.jpg" alt="" /></a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="gallery-wrap">
                <a data-fancybox="gallery2" href="assets/img/home3/home3-gallery-img-03.jpg"><img src="assets/img/home3/home3-gallery-img-03.jpg" alt="" /></a>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
  )
}

export default Gallary
