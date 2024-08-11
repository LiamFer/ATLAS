import { bookCovers } from "../constants";
import { EffectCoverflow, Pagination } from "swiper/modules";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Atropos from "atropos/react";
import "./ourbooks.css";
import "atropos/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function Ourbooks() {
  return (
    <>
      <div id="bookssection">
        <h1>ATLAS LIBRARY</h1>
        <Swiper
          id="booksswiper"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          style={{
            "--swiper-pagination-color": "#23c483",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper2"
        >
          {bookCovers.map((bookCover, index) => (
            <SwiperSlide className="swiper2 swiper-slide2">
              <img className="book-cover" src={bookCover} alt="Book Cover" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div id="booksbox">
          {bookCovers.map((bookCover, index) => (
            <Atropos
              key={index}
              className="my-atropos"
              highlight={false}
              shadow={true}
              shadowOffset={30}
              stretchZ={50}
              rotateX={15}
              rotateY={15}
            >
              <div className="book-container">
                <div className="book-cover-container">
                  <img
                    className="book-cover"
                    src={bookCover}
                    alt="Book Cover"
                  />
                </div>
              </div>
            </Atropos>
          ))}
        </div>
      </div>
    </>
  );
}

export default Ourbooks;
