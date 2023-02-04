import React from "react";
import "swiper/css/autoplay";
import SingleTeamCard from "./SingleTeamCard";
// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
function TeamWrap(props) {
  const teamSlider = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <>
      <section className="our-team sec-mar">
        <div className="container">
          <div
            className="title-wrap  wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className={`${"sec-title"} ${props.white}`}>
              <span>Our Team</span>
              <h2>Meet Our Team</h2>
              <p>
                Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                convallis sapien, quis commodo libero.
              </p>
            </div>
          </div>
          <Swiper {...teamSlider} className="swiper team-slider">
            <div className="swiper-wrapper">
              <SwiperSlide
                className="swiper-slide wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <SingleTeamCard
                  image={"/img/team/team-1.jpg"}
                  name="Thoren Okendhild"
                  title="Executive Chairman"
                />
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <SingleTeamCard
                  image={"/img/team/team-2.jpg"}
                  name="Lincoln Anthony"
                  title="Software Engeenier"
                />
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide wow animate fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <SingleTeamCard
                  image={"/img/team/team-3.jpg"}
                  name="Adrian Eodri"
                  title="UI/UX Designer"
                />
              </SwiperSlide>
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default TeamWrap;
