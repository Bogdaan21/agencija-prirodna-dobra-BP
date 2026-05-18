import React from "react";
import { Link } from "react-router-dom";

export default function PageHeading({ data }) {
  const TitleTag = data.titleTag === "div" ? "div" : "h1";

  return (
    <>
      <section
        className="cs_page_heading cs_style_1 cs_bg_filed cs_heading_bg"
      >
        <div className="container">
          <ol className="breadcrumb">
            {data.breadcrumbs.map((item, index) => (
              <li
                key={index}
                className={`breadcrumb-item ${item.active ? "active" : ""}`}
              >
                {item.link ? (
                  <Link to={item.link}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ol>
          <TitleTag
            className="cs_page_title mb-0 cs_fs_80"
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
        </div>
      </section>
    </>
  );
}
