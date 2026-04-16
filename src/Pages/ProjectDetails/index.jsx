import React from "react";
import { Link } from "react-router-dom";

export default function InfoList({ data }) {
  const {
    imageSrc,
    imageAlt,
    projectUrl,
    title,
    info,
    descriptionTitle,
    descriptionText,
    outcomesTitle,
    outcomesText,
  } = data;

  return (
    <section>
      <div className="container">
        <div className="cs_height_100 cs_height_lg_70" />

        <div className="cs_card cs_style_5">
          {/* IMAGE */}
          {imageSrc && (
            <Link to={projectUrl} className="cs_card_thumb">
              <img src={imageSrc} alt={imageAlt || "Project Thumbnail"} />
            </Link>
          )}

          <div className="cs_card_right">
            {/* TITLE */}
            {title && (
              <h2 className="cs_card_title cs_fs_80 mb-0">
                <Link
                  to={projectUrl}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </h2>
            )}

            {/* INFO LIST */}
            {info && (
              <ul className="cs_card_info_list cs_mp_0">
                {info.map((item, index) => (
                  <li key={index}>
                    <p className="mb-0">{item.label}</p>
                    <h4 className="mb-0 cs_fs_20 cs_bold">{item.value}</h4>
                  </li>
                ))}
              </ul>
            )}

            {/* DESCRIPTION */}
            {descriptionText && (
              <div className="cs_card_description">
                {descriptionTitle && <h4>{descriptionTitle}</h4>}
                <p
                  dangerouslySetInnerHTML={{ __html: descriptionText }}
                />
              </div>
            )}

            {/* OUTCOMES */}
            {outcomesText && (
              <div className="cs_card_outcomes">
                {outcomesTitle && <h4>{outcomesTitle}</h4>}
                <p
                  dangerouslySetInnerHTML={{ __html: outcomesText }}
                />
              </div>
            )}
          </div>
        </div>

        <div className="cs_height_100 cs_height_lg_70" />
      </div>
    </section>
  );
}