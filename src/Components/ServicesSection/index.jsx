import { useState } from "react";
import { Link } from "react-router-dom";

export default function ServicesSection({ data }) {
  const [hoveredIndex, setHoveredIndex] = useState(0); // default active card

  return (
    <section>
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="container">
        <div className="cs_section_heading cs_style_3">
          <h3
            className="cs_brackets_title cs_normal cs_fs_16 mb-0 "
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />

          <div className="cs_section_right">
            <Link
              to={data.btnUrl}
              className="cs_btn cs_style_2 cs_bold cs_heading_color"
            >
              {data.btnText}
            </Link>
          </div>
        </div>

        <div className="cs_height_64 cs_height_lg_50" />

        <div className="cs_card_1_group" data-aos="fade-right">
          {data.service.map((service, index) => (
            <div
              key={index}
              className={`cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed ${
                hoveredIndex === index ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${service.image})`,
              }}
              onMouseEnter={() => setHoveredIndex(index)} // hover sets the active index
            >
              <div className="cs_card_top">
                <div className="cs_card_tags">
                  {service.tags.map((tag, i) => (
                    <Link key={i} to={tag.url} className="cs_card_tag">
                      {tag.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="cs_card_bottom">
                <h2 className="cs_card_title cs_white_color cs_fs_32">
                  {service.title}
                </h2>
                <p
                  className="cs_card_subtitle mb-0 cs_white_color"
                  dangerouslySetInnerHTML={{ __html: service.subtitle }}
                />
              </div>
              <Link
                to={service.link}
                className="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70"></div>
    </section>
  );
}
