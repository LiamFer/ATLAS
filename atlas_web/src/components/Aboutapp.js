import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  FreeMode,
  A11y,
  EffectFade,
} from "swiper/modules";
import "./aboutapp.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

function Aboutapp() {
  const slides = [<div>TESTE</div>, <div>OUTRO</div>];
  return (
    <>
      <div id="container">
        <h1>Your Personal Library on Demand</h1>
        <div id="textbox">
          The Atlas App is a revolutionary platform that brings the world of
          books to your fingertips, offering a seamless, on-demand reading
          experience similar to how Netflix delivers movies and TV shows.
          Designed for book lovers, Atlas lets you explore a vast library of
          books across genres, from classic literature to the latest
          bestsellers, all in one place.
        </div>

        <Swiper
          id="slider"
          breakpoints={{
            769: { slidesPerView: 3, spaceBetween: 15 },
            400: { slidesPerView: 2, spaceBetween: 15 },
          }}
          modules={[FreeMode, EffectFade]}

        >
          <SwiperSlide>
            <div className="infocard"></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="infocard"></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="infocard"></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="infocard"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default Aboutapp;
