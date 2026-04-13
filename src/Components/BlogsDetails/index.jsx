import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function BlogDetailsSection({ data }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const { language } = useLanguage();

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showPrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? data.gallery.length - 1 : prev - 1));
  };

  const showNextImage = () => {
    setActiveImageIndex((prev) => (prev === data.gallery.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      if (e.key === "ArrowLeft") {
        showPrevImage();
      }

      if (e.key === "ArrowRight") {
        showNextImage();
      }

      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen]);

  return (
    <div className="col-lg-10">
      <div className="cs_post cs_style_1 cs_type_1">
        {data.postThumb && (
          <div className="cs_post_thumb cs_radius_15">
            <img src={data.postThumb} alt="Post" className="w-100 cs_radius_15" loading="lazy" />
          </div>
        )}

        <div className="cs_post_info">
          <div className="cs_post_meta cs_style_1 cs_ternary_color cs_semi_bold cs_primary_font">
            <span className="cs_posted_by">{data.date}</span>

            {data.category?.url && (
              <Link to={data.category.url} className="cs_post_avatar">
                {data.category.title}
              </Link>
            )}
          </div>

          <h2 className="cs_post_title" dangerouslySetInnerHTML={{ __html: data.title || "" }} />

          {data.content?.map((item, index) => {
            if (item.type === "p") {
              return <p key={index} dangerouslySetInnerHTML={{ __html: item.text }} />;
            }

            if (item.type === "blockquote") {
              return (
                <blockquote key={index}>
                  <p>{item.quote}</p>
                  {item.author && <span>{item.author}</span>}
                </blockquote>
              );
            }

            if (item.type === "html") {
              return (
                <div key={index} className="cs_blog_details_html" dangerouslySetInnerHTML={{ __html: item.html }} />
              );
            }

            return null;
          })}

          {!!data.gallery?.length && (
            <>
              <div className="cs_height_40 cs_height_lg_25" />
              <h3 className="cs_fs_24 cs_mb_20">{language === "me" ? "Galerija" : "Gallery"}</h3>

              <div className="cs_blog_gallery">
                {data.gallery.map((img, index) => (
                  <div className="cs_blog_gallery_item" key={index} onClick={() => openLightbox(index)}>
                    <img src={img} alt={`Gallery ${index + 1}`} fetchPriority="high" className="w-100 cs_radius_15" />
                  </div>
                ))}
              </div>

              <div className="cs_height_35 cs_height_lg_20" />

              {lightboxOpen && (
                <div className="cs_gallery_lightbox" onClick={closeLightbox}>
                  <button type="button" className="cs_gallery_close" onClick={closeLightbox}>
                    ×
                  </button>

                  {data.gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="cs_gallery_nav cs_gallery_prev"
                        onClick={(e) => {
                          e.stopPropagation();
                          showPrevImage();
                        }}
                      >
                        ‹
                      </button>

                      <button
                        type="button"
                        className="cs_gallery_nav cs_gallery_next"
                        onClick={(e) => {
                          e.stopPropagation();
                          showNextImage();
                        }}
                      >
                        ›
                      </button>
                    </>
                  )}

                  <div className="cs_gallery_lightbox_inner" onClick={(e) => e.stopPropagation()}>
                    <img
                      src={data.gallery[activeImageIndex]}
                      alt={`Gallery Large ${activeImageIndex + 1}`}
                      className="cs_gallery_lightbox_image"
                      loading="lazy"
                    />
                    <div className="cs_gallery_counter">
                      {activeImageIndex + 1} / {data.gallery.length}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {data.sections?.map((section, index) => (
            <div key={index}>
              <h3 dangerouslySetInnerHTML={{ __html: section.heading }} />
              <p dangerouslySetInnerHTML={{ __html: section.paragraph }} />
            </div>
          ))}

          {data.videoUrl && (
            <>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={data.videoUrl} allowFullScreen title="Blog Video" />
              </div>
              <div className="cs_height_30 cs_height_lg_20" />
            </>
          )}

          {data.closingParagraph && <p dangerouslySetInnerHTML={{ __html: data.closingParagraph }} />}

          {(data?.property?.title || data?.property?.description) && (
            <div>
              {data?.property?.title && <h3 dangerouslySetInnerHTML={{ __html: data.property.title }} />}
              {data?.property?.description && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.property.description,
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
