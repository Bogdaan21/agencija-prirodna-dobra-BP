import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../VideoModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Icon } from "@iconify/react";

export default function ProjectDetailsSection({ data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const [toggle, setToggle] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("about:blank");

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const handelClick = (e) => {
    e.preventDefault();
    if (!data?.video?.url) return;

    setIframeSrc(data.video.url);
    setToggle(true);
  };

  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(false);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="cs_height_100 cs_height_lg_70" />

          <div className="row cs_gap_x_40 cs_gap_y_30">
            <div className="col-lg-7">

              {/* ✅ SAFE MAP */}
              <ul className="cs_project_details_info cs_mp_0">
                {data?.projectInfo?.map((item, index) => (
                  <li key={index}>
                    <p className="mb-0">{item.label}</p>
                    <h4 className="mb-0 cs_fs_20 cs_bold">{item.value}</h4>
                  </li>
                ))}
              </ul>

              <div className="cs_height_50 cs_height_lg_40" />

              {/* ✅ VIDEO ONLY IF EXISTS */}
              {data?.video?.thumbnail && (
                <Link
                  to={"#"}
                  onClick={handelClick}
                  className="cs_video_block cs_style_1 cs_type_1 cs_bg_filed cs_video_open cs_center cs_radius_20"
                  style={{
                    backgroundImage: `url("${data.video.thumbnail}")`,
                  }}
                >
                  <span className="cs_player_btn cs_heading_color">
                    ▶
                  </span>
                </Link>
              )}
            </div>

            <VideoModal
              isTrue={toggle}
              iframeSrc={iframeSrc}
              handelClose={handelClose}
            />

            <div className="col-lg-5">
              <div className="cs_slider cs_style_1">
                <Swiper
                  ref={swiperRef}
                  modules={[Navigation]}
                  spaceBetween={24}
                  slidesPerView={1}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  speed={1000}
                  loop={true}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => {
                    setCurrentSlide(swiper.realIndex + 1);
                  }}
                >
                  {/* ✅ SAFE SLIDER */}
                  {data?.sliderImages?.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="cs_project_details_image">
                        <img src={img} alt={`slide-${index}`} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="d-flex justify-content-center cs_slider_arrows_4_transparent_wrap">
                  <div className="cs_slider_arrows cs_style_4">
                    <div ref={prevRef} style={{ cursor: "pointer" }}>◀</div>

                    <div className="cs_slider_number cs_style_2 cs_bold">
                      {currentSlide} / {data?.sliderImages?.length || 0}
                    </div>

                    <div ref={nextRef} style={{ cursor: "pointer" }}>▶</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cs_height_70 cs_height_lg_50" />

          <div className="row cs_gap_x_40 cs_gap_y_30">
            <div className="col-xl-7">
              <div className="cs_fs_20">
                <b className="cs_heading_color">DESCRIPTION:</b>
                <br />
                {data?.description}
                <br /><br />

                <b className="cs_heading_color">OUTCOMES</b>
                <br />
                {data?.outcomes}
              </div>
            </div>

            <div className="col-xl-5">
              <div className="row cs_gap_x_20 cs_gap_y_20">

                {/* ✅ SAFE FEATURES */}
                {data?.features?.map((feature, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="cs_iconbox cs_style_2">
                      <div className="cs_iconbox_icon">
                        <Icon
                          icon={feature.iconClass}
                          width="30"
                          height="26"
                        />
                      </div>
                      <p className="cs_iconbox_title cs_bold cs_fs_20 mb-0 cs_heading_color">
                        {feature.title}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          <div className="cs_height_100 cs_height_lg_70" />
        </div>
      </section>
    </>
  );
}