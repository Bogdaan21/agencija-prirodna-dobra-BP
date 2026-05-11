import React from "react";
import { Icon } from "@iconify/react";

export default function DocumentsSection({ data }) {
  const documents = data?.documents || [];

  return (
    <section className="cs_documents_section">
      <div className="container">
        <div className="cs_documents_head">
          <div className="cs_section_heading cs_style_4">
            <p className="cs_brackets_title cs_normal cs_fs_16 mb-0">
              {data?.eyebrow}
            </p>
            <h2
              className="cs_section_title cs_fs_48 cs_bold mb-0"
              dangerouslySetInnerHTML={{ __html: data?.title || "" }}
            />
          </div>
          <p className="cs_documents_intro mb-0">{data?.description}</p>
        </div>

        <div className="cs_height_50 cs_height_lg_35" />

        <div className="cs_documents_grid">
          {documents.map((documentItem, index) => {
            const hasHref = Boolean(documentItem.href);
            const DocumentTag = hasHref ? "a" : "div";

            return (
              <DocumentTag
                key={documentItem.title}
                className={`cs_document_item ${hasHref ? "" : "cs_is_disabled"}`}
                href={hasHref ? documentItem.href : undefined}
                target={hasHref ? "_blank" : undefined}
                rel={hasHref ? "noreferrer" : undefined}
                data-aos="fade-up"
                data-aos-delay={index * 40}
              >
                <div className="cs_document_icon cs_center">
                  <Icon icon="lucide:file-text" width="24" height="24" />
                </div>

                <div className="cs_document_body">
                  <div className="cs_document_meta">
                    <span>{documentItem.category}</span>
                    <span>{documentItem.year}</span>
                  </div>
                  <h3 className="cs_document_title cs_fs_20 cs_bold mb-0">
                    {documentItem.title}
                  </h3>
                  <p className="cs_document_desc mb-0">
                    {documentItem.description}
                  </p>
                </div>

                <div className="cs_document_action cs_center">
                  <Icon
                    icon={hasHref ? "lucide:download" : "lucide:clock-3"}
                    width="20"
                    height="20"
                  />
                </div>
              </DocumentTag>
            );
          })}
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70" />
    </section>
  );
}
