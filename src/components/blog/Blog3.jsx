
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, Pagination, EffectFade]);
function Blog3() {
    const slider = useMemo(()=>{
        return {
            slidesPerView: 1,
	speed: 1500,
	spaceBetween: 10,
	slidesPerView: 1,
  centerSlides: true,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: true
	  },
  navigation: {
    nextEl: ".blog-three-next",
    prevEl: ".blog-three-prev",
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
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2
		},
		1200: {
			slidesPerView: 2
		},
		1400: {
			slidesPerView: 2.3
		},
		1600: {
			slidesPerView: 2.6
		},
	}
        }
    },[])
  return (
    <div className="blog-three-section pb-120">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4">
        <div className="section-title-five">
          <h2>TechGen LATEST BLOG &amp; ARTICLE.</h2>
          <p>Denouncing pleasure and praising pain was born and I will give you a complete account of the
            system.</p>
        </div>
        <div className="blog-three-arrow">
          <div className="slider-arrows arrow-style-two d-flex justify-content-lg-end justify-content-start gap-4">
            <div className="blog-three-prev swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide">
              <img src="assets/images/icons/arrow-left4.svg" alt="" />
            </div>
            <div className="swiper-pagination" />
            <div className="blog-three-next swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide">
              <img src="assets/images/icons/arrow-right4.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <Swiper {...slider} className="swiper blog-four-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="blog-four-single">
                <div className="blog-four-image">
                  <a href="blog-detials.html" className="blog-cat">Consulting</a>
                  <img src="assets/images/blog/blog4-1.jpg" alt="" />
                </div>
                <div className="blog-four-content">
                  <ul className="blog-four-meta">
                    <li><a href="blog-details.html">John Doe</a></li>
                    <li><a href="blog-details.html">10 Apr 2023</a> </li>
                  </ul>
                  <h3 className="blog-four-title"><a href="blog-details.html" data-cursor="View Details">IT Consulting To Change Company strategy.</a>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-four-single">
                <div className="blog-four-image">
                  <a href="blog-detials.html" className="blog-cat">Technology</a>
                  <img src="assets/images/blog/blog4-2.jpg" alt="" />
                </div>
                <div className="blog-four-content">
                  <ul className="blog-four-meta">
                    <li><a href="blog-details.html">Peterson</a></li>
                    <li><a href="blog-details.html">10 Apr 2023</a> </li>
                  </ul>
                  <h3 className="blog-four-title"><a href="blog-details.html" data-cursor="View Details">Modern Technoloy To Generate Update. </a>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-four-single">
                <div className="blog-four-image">
                  <a href="blog-detials.html" className="blog-cat">Consulting</a>
                  <img src="assets/images/blog/blog4-2.jpg" alt="" />
                </div>
                <div className="blog-four-content">
                  <ul className="blog-four-meta">
                    <li><a href="blog-details.html">Carnegi</a></li>
                    <li><a href="blog-details.html">10 Apr 2023</a> </li>
                  </ul>
                  <h3 className="blog-four-title"><a href="blog-details.html" data-cursor="View Details">To Make Gorgeous Product With Us.</a></h3>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
</div>

  )
}

export default Blog3