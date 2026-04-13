import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BrandSection({ data }) {
  return (
    <div className="cs_gray_bg">
      <div className="cs_height_64 cs_height_lg_50" />
      <div className="container">
        <Swiper
          spaceBetween={24}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          className="cs_slider cs_style_1 cs_slider_gap_24"
        >
          {data.map((logo, index) => (
            <SwiperSlide key={index} className="cs_slide">
              <div className="cs_brand cs_style_1">
                <img src={logo} alt={`Brand Logo ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="cs_height_64 cs_height_lg_50" />
    </div>
  );
}
