import React from "react";

export default function WorkingProcess({ data }) {
  return (
    <section className="cs_heading_bg">
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="container">
        <div className="cs_section_heading cs_style_2">
          <h2
            className="cs_section_title cs_white_color cs_fs_80 mb-0"
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: data.sectionTitle }}
          />
          <div className="cs_section_right">
            <h3 className="cs_brackets_title cs_normal cs_fs_16 mb-0 cs_white_color">
              {data.subtitle}
            </h3>
          </div>
        </div>
        <div className="cs_height_64 cs_height_lg_50" />
        <div className="cs_card_3_wrap">
          {data.steps.map((step, index) => (
            <div className="cs_card cs_style_3" key={index}>
              <div className="cs_card_in">
                <h3 className="cs_fs_24 cs_bold cs_white_color cs_mb_12">
                  {step.title}
                </h3>
                <p className="mb-0 cs_white_color cs_opacity_5 cs_fs_20">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
          {data.logo && (
            <div className="cs_section_logo">
              <img src={data.logo} alt="logo" />
            </div>
          )}
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70" />
    </section>
  );
}
