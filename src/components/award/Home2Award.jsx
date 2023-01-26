import { useRouter } from "next/router";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function Home2Award() {
  const router = useRouter().pathname;
  const awardSlide = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 800,
      spaceBetween: 10,
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
      fadeEffect: {
        crossFade: true,
      },
    };
  }, []);
  return (
    <div
      className={
        router === "/index-bg-image"
          ? "award-section pb-120 pl-80"
          : "award-section section-common2 pb-120 pl-80"
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title-two">
              <h2>My Awards</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 order-1">
            <div className="big-title transform-top">
              <h2>Got Many valuable Awards.</h2>
            </div>
          </div>
          <div className="col-lg-5 order-lg-2 order-3">
            <div className="tab-content">
              <div className="tab-pane fade" id="tab-one" role="tabpanel">
                <Swiper {...awardSlide} className="swiper award-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/images/award/award1-1.png" alt="image" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/images/award/award1-2.png" alt="image" />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
              <div
                className="tab-pane fade active show"
                id="tab-two"
                role="tabpanel"
              >
                <Swiper {...awardSlide} className="swiper award-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/images/award/award2-1.png" alt="image" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/images/award/award2-2.png" alt="image" />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
              <div className="tab-pane fade" id="tab-three" role="tabpanel">
                <Swiper {...awardSlide} className="swiper award-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/images/award/award3-1.png" alt="image" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/images/award/award1-2.png" alt="image" />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
              <div className="tab-pane fade" id="tab-four" role="tabpanel">
                <Swiper {...awardSlide} className="swiper award-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/images/award/award1-1.png" alt="image" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/images/award/award1-2.png" alt="image" />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
              <div className="tab-pane fade" id="tab-five" role="tabpanel">
                <Swiper {...awardSlide} className="swiper award-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/images/award/award1-1.png" alt="image" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/images/award/award1-2.png" alt="image" />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-lg-3 order-2">
            <ul className="nav nav-tabs award-tab-list" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#tab-one"
                  aria-selected="false"
                  role="tab"
                  tabIndex={-1}
                >
                  <span>Carmignac Photojournalism.</span>
                  <span>2022</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-two"
                  aria-selected="false"
                  role="tab"
                >
                  <span>International Grant..</span>
                  <span>2021</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-three"
                  aria-selected="false"
                  role="tab"
                >
                  <span>HIPA International..</span>
                  <span>2020</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-four"
                  aria-selected="false"
                  role="tab"
                >
                  <span>Nikon World Competition.</span>
                  <span>2019</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-five"
                  aria-selected="false"
                  role="tab"
                >
                  <span>Lucis Photo Awards.</span>
                  <span>2018</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2Award;
