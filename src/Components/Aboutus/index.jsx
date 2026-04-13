import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../VideoModal";

export default function AboutUs({ data }) {
  const [toggle, setToggle] = useState(false);

  const [iframeSrc, setIframeSrc] = useState("about:blank");

  const handelClick = (e) => {
    e.preventDefault();

    setIframeSrc(`${data.video.url}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };
  return (
    <section>
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="container">
        <div className="row cs_gap_x_40 cs_gap_y_24">
          <div className="col-lg-4">
            <div className="cs_section_heading cs_style_4">
              <h2
                className="cs_section_title cs_fs_32 cs_bold mb-0 wow fadeInDown"
                data-aos="fade-down"
                dangerouslySetInnerHTML={{ __html: data.title }}
              ></h2>
            </div>
          </div>
          <div className="col-lg-4">
            <p
              className="cs_fs_20 mb-0"
              dangerouslySetInnerHTML={{ __html: data.introduction }}
            ></p>
          </div>
          <div className="col-lg-4">
            <p
              className="cs_fs_20 mb-0"
              dangerouslySetInnerHTML={{ __html: data.introduction1 }}
            ></p>
          </div>
        </div>

        <div className="cs_height_56 cs_height_lg_35" />

        <div className="row cs_gap_y_30">
          <div className="col-lg-4" data-aos="fade-right">
            <Link
              onClick={(e) => handelClick(e)}
              className="cs_video_block cs_style_1 cs_bg_filed cs_video_open cs_center cs_radius_20"
              style={{ backgroundImage: `url(${data.video.backgroundImage})` }}
            >
              <span className="cs_player_btn cs_heading_color">
                <svg
                  width={19}
                  height={22}
                  viewBox="0 0 19 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 11L0.5 21.3923V0.607696L18.5 11Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <VideoModal
            isTrue={toggle}
            iframeSrc={data.video.videoUrl}
            handelClose={handelClose}
          />
          <div className="col-lg-8 t" data-aos="fade-left">
            <div
              className="cs_cta cs_style_2 cs_bg_filed cs_radius_20"
              style={{ backgroundImage: `url(${data.cta.backgroundImage})` }}
            >
              <Link
                to={data.cta.buttonUrl}
                className="cs_btn cs_style_2 cs_bold cs_white_color"
              >
                {data.cta.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70" />
    </section>
  );
}
