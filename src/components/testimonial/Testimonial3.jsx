import React from "react";

function Testimonial3() {
  return (
    <section className="testimonial-three">
      <div className="container">
        <div className="row">
          <div
            className="col-12 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-title layout-3 white">
              <h2>Testimonial</h2>
              <p>
                Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum metus.
                answerala Suspendisse oi potenti. Nullam ac lorem ex. Ut feugiat
                maximus ante, vel gravida ex.
              </p>
            </div>
          </div>
        </div>
        <div className="swiper testimonial-slider-three">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="testimonial-slide-three">
                <div className="testimonial-thumb">
                  <img
                    src="assets/images/testimonial/testimonial-author-1.jpg"
                    alt=""
                  />
                  <div className="video">
                    <div className="play">
                      <a
                        className="popup-video"
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                      >
                        <i className="bi bi-play-fill" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="testimonial-cnt">
                  <i className="fas fa-quote-left" />
                  <p>
                    Suspendisse potenti. Suspendisse potenti. Phasellus sed
                    ultricesei an arcu. Donec commodo lobortis purus quis
                    dictum. Sed aliquamtinl tela ante tortor, vel dapibus mi
                    tempor sit amet. Proin lacinia egestasai goj pretium. Nunc
                    tempor condimentum velit, ac molestie neque.
                  </p>
                  <h4>Johan Martinal</h4>
                  <span>CEO Founder</span>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide wow animate fadeInLeft"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="testimonial-slide-three">
                <div className="testimonial-thumb">
                  <img
                    src="assets/images/testimonial/testimonial-author-2.jpg"
                    alt=""
                  />
                  <div className="video">
                    <div className="play">
                      <a
                        className="popup-video"
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                      >
                        <i className="bi bi-play-fill" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="testimonial-cnt">
                  <i className="fas fa-quote-left" />
                  <p>
                    Suspendisse potenti. Suspendisse potenti. Phasellus sed
                    ultricesei an arcu. Donec commodo lobortis purus quis
                    dictum. Sed aliquamtinl tela ante tortor, vel dapibus mi
                    tempor sit amet. Proin lacinia egestasai goj pretium. Nunc
                    tempor condimentum velit, ac molestie neque.
                  </p>
                  <h4>Jecob Melon</h4>
                  <span>CO Founder</span>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-navigations">
            <div className="swiper-button-prev-c">
              <i className="bi bi-arrow-left" />
            </div>
            <div className="swiper-button-next-c">
              <i className="bi bi-arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial3;
