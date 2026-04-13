import React from "react";
import { Link } from "react-router-dom";

export default function CTASection({ data }) {
  return (
    <section
      className="cs_cta cs_style_1 cs_heading_bg cs_bg_filed"
      style={{
        backgroundImage: `url(${data.backgroundImage})`,
      }}
    >
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="container">
        <div className="cs_cta_in">
          <h2
            className="cs_cta_title cs_fs_80 cs_white_color cs_mb_40 "
            dangerouslySetInnerHTML={{ __html: data.title }}
            data-aos="fade-down"
          />

          <Link
            to={data.buttonUrl}
            data-aos="fade-up"
            className="cs_btn cs_style_1 cs_bold cs_heading_color cs_white_bg wow fadeInUp"
          >
            {data.buttonText}
          </Link>
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70" />
    </section>
  );
}
