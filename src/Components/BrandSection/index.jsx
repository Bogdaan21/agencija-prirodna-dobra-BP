import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BrandSection() {
  const data = [
    {
      img: "/assets/img/brand_logo_1.png",
      link: "https://ecoteam.me/po%C4%8Detna",
    },
    {
      img: "/assets/img/brand-logo_2.svg",
      link: "https://www.bijelopolje.co.me/",
    },
    {
      img: "/assets/img/brand_logo_3.png",
      link: "https://www.nature.org/en-us/",
    },
  ];
  return (
    <div className="cs_gray_bg brands_section_slider">
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
          {data.map((item, index) => (
            <SwiperSlide key={index} className="cs_slide">
              <div className="cs_brand cs_style_1">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.img} alt={`Brand Logo ${index + 1}`} />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="cs_height_64 cs_height_lg_50 mb-10" />
    </div>
  );
}
