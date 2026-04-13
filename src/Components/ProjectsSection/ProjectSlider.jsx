import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function ProjectSlider({ data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <>
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="cs_slider cs_style_1 cs_slider_gap_24">
        <div className="cs_slider_container">
          <div className="cs_slider_wrapper">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={4}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              speed={1000}
              loop={true}
              centeredSlides={false}
              className="cs_slider cs_style_1 cs_slider_gap_24"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                const realIndex = swiper.realIndex + 1;
                setCurrentSlide(realIndex);
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
              }}
            >
              {data.map((project, index) => (
                <SwiperSlide className="cs_slide" key={index}>
                  <div className="container">
                    <div className="cs_card cs_style_5">
                      <Link to={project.url} className="cs_card_thumb">
                        <img src={project.image} alt={project.title} />
                      </Link>
                      <div className="cs_card_right">
                        <h2 className="cs_card_title cs_fs_80 mb-0">
                          <Link
                            to={project.url}
                            dangerouslySetInnerHTML={{ __html: project.title }}
                          ></Link>
                        </h2>
                        <ul className="cs_card_info_list cs_mp_0">
                          <li>
                            <p className="mb-0">YEAR</p>
                            <h4 className="mb-0 cs_fs_20 cs_bold">
                              {project.year}
                            </h4>
                          </li>
                          <li>
                            <p className="mb-0">LOCATION</p>
                            <h4 className="mb-0 cs_fs_20 cs_bold">
                              {project.location}
                            </h4>
                          </li>
                          <li>
                            <p className="mb-0">SERVICE</p>
                            <h4
                              className="mb-0 cs_fs_20 cs_bold"
                              dangerouslySetInnerHTML={{
                                __html: project.service,
                              }}
                            ></h4>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="cs_height_100 cs_height_lg_70" />
        <hr />
        <div className="cs_height_64 cs_height_lg_50" />
        <div className="d-flex justify-content-center">
          <div className="cs_slider_arrows cs_style_4">
            <div
              className="cs_left_arrow cs_heading_color"
              ref={prevRef}
              style={{ cursor: "pointer" }}
            >
              <svg
                width={10}
                height={18}
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.499953 9.00005C0.499953 8.80823 0.573265 8.61623 0.719703 8.4698L8.2197 0.969797C8.51277 0.676734 8.98733 0.676734 9.2802 0.969797C9.57308 1.26286 9.57327 1.73742 9.2802 2.0303L2.31045 9.00005L9.2802 15.9698C9.57327 16.2629 9.57327 16.7374 9.2802 17.0303C8.98714 17.3232 8.51258 17.3234 8.2197 17.0303L0.719703 9.5303C0.573265 9.38386 0.499953 9.19186 0.499953 9.00005Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="cs_slider_number cs_style_2 cs_bold">
              {currentSlide} / {data.length}
            </div>
            <div
              className="cs_right_arrow cs_heading_color"
              ref={nextRef}
              style={{ cursor: "pointer" }}
            >
              <svg
                width={10}
                height={18}
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.50005 8.99995C9.50005 9.19177 9.42673 9.38377 9.2803 9.5302L1.7803 17.0302C1.48723 17.3233 1.01267 17.3233 0.719797 17.0302C0.426922 16.7371 0.426734 16.2626 0.719797 15.9697L7.68955 8.99995L0.719797 2.0302C0.426734 1.73714 0.426734 1.26258 0.719797 0.969702C1.01286 0.676826 1.48742 0.67664 1.7803 0.969702L9.2803 8.4697C9.42673 8.61614 9.50005 8.80814 9.50005 8.99995Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
