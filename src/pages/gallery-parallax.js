import React, { useMemo } from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

import SwiperCore, {
  Autoplay,
  EffectFade,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Mousewheel]);
function GalleryParallaxPage() {
  const slider = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1000,
      loop: true,
      spaceBetween: 10,
      roundLengths: true,
      parallax: true,
      mousewheel: true,
      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true,
      // },
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -100],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },

      autoplay: {
        delay: 4000,
      },
    };
  }, []);
  return (
    <Layout>
      <Breadcrumb pageName="Gallery Parallax" pageTitle="Gallery Parallax" />
      <div className="gallery-section bg-color2 mb-44">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center g-0">
            <Swiper {...slider} className="swiper gallery-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="assets/images/gallery/slider-1.png"
                    alt="image"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="assets/images/gallery/slider-2.png"
                    alt="image"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="assets/images/gallery/slider-3.png"
                    alt="image"
                  />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GalleryParallaxPage;
