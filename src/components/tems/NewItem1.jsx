import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination ,EffectFade} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay,EffectFade]);
function NewItem1() {
  return (
    <div className="new-items1 mb-120">
  <div className="container">
    <div className="row d-flex justify-content-center mb-40">
      <div className="col-lg-8">
        <div className="section-title text-center">
          <span><img className="left-vec" src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" />Our New Item<img className="right-vec" src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" /></span>
          <h2>Restho New Item List</h2>
        </div>
      </div>
    </div>
    <div className="row mb-70 g-4 justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="new-items-wrap1 d-flex align-items-center justify-content-center">
          <div className="items-content text-center">
            <span>Spcial Offer</span>
            <h3><a href="shop-details.html">Our New Item has offer</a></h3>
            <div className="descount-area text-center">
              <h3>After Discount</h3>
              <span>20%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10 order-lg-2 order-3">
        <Swiper className="swiper new-item-big-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="new-items-wrap2">
                <div className="items-img">
                  <img className="img-fluid" src="assets/images/bg/new-items1.png" alt="new-items1" />
                  <div className="price">
                    <span>Price - $8</span>
                  </div>
                </div>
                <div className="content">
                  <h3><a href="shop-details.html">Chicken Fried</a></h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="new-items-wrap2">
                <div className="items-img">
                  <img className="img-fluid" src="assets/images/bg/new-items2.png" alt="new-items1" />
                  <div className="price">
                    <span>Price - $8</span>
                  </div>
                </div>
                <div className="content">
                  <h3><a href="shop-details.html">Vagitable Fried</a></h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="new-items-wrap2">
                <div className="items-img">
                  <img className="img-fluid" src="assets/images/bg/new-items3.png" alt="new-items1" />
                  <div className="price">
                    <span>Price - $8</span>
                  </div>
                </div>
                <div className="content">
                  <h3><a href="shop-details.html">Prawn Curry</a></h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="new-items-wrap2">
                <div className="items-img">
                  <img className="img-fluid" src="assets/images/bg/new-items4.png" alt="new-items1" />
                  <div className="price">
                    <span>Price - $8</span>
                  </div>
                </div>
                <div className="content">
                  <h3><a href="shop-details.html">Chicken Kebab</a></h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="new-items-wrap2">
                <div className="items-img">
                  <img className="img-fluid" src="assets/images/bg/new-items5.png" alt="new-items1" />
                  <div className="price">
                    <span>Price - $8</span>
                  </div>
                </div>
                <div className="content">
                  <h3><a href="shop-details.html">Full Chicken</a></h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="new-items-wrap2">
                <div className="items-img">
                  <img className="img-fluid" src="assets/images/bg/new-items6.png" alt="new-items1" />
                  <div className="price">
                    <span>Price - $8</span>
                  </div>
                </div>
                <div className="content">
                  <h3><a href="shop-details.html">Momo Package</a></h3>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10 order-lg-3 order-2">
        <div className="new-items-wrap3">
          <div className="items-img">
            <img className="img-fluid" src="assets/images/bg/reserve1.png" alt="reserve1" />
          </div>
          <div className="overlay d-flex align-items-center justify-content-center">
            <div className="items-content text-center">
              <span><img className="left-vec" src="assets/images/icon/shape-white1.svg" alt="sub-title-vec" />Reserve<img className="right-vec" src="assets/images/icon/shape-white1.svg" alt="sub-title-vec" /></span>
              <h3><a href="reservation.html">For Your Private Event</a></h3>
              <a className="primary-btn btn-sm" href="reservation.html">Book Table</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row position-relative">
      <Swiper className="swiper new-item-sm-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="new-items-sm-img">
              <img src="assets/images/bg/new-item-sm1.png" alt="new-item-sm1" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="new-items-sm-img">
              <img src="assets/images/bg/new-item-sm2.png" alt="new-item-sm2" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="new-items-sm-img">
              <img src="assets/images/bg/new-item-sm3.png" alt="new-item-sm3" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="new-items-sm-img">
              <img src="assets/images/bg/new-item-sm4.png" alt="new-item-sm4" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="new-items-sm-img">
              <img src="assets/images/bg/new-item-sm5.png" alt="new-item-sm5" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="new-items-sm-img">
              <img src="assets/images/bg/new-item-sm6.png" alt="new-item-sm6" />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="swiper-btn d-flex justify-content-between align-items-center">
        <div className="prev-btn-2"><i className="bi bi-arrow-left" /></div>
        <div className="next-btn-2"><i className="bi bi-arrow-right" /></div>
      </div>
    </div>
  </div>
</div>

  )
}

export default NewItem1