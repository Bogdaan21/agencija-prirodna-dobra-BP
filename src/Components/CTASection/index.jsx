import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function CTASection() {
  const { language } = useLanguage();

  const ctaContent = {
    me: {
      title: "Za informacije o <br/> zaštićenim područjima",
      buttonText: "Kontakt",
    },
    en: {
      title: "For information about <br/> protected areas",
      buttonText: "Contact Us",
    },
  };

  const t = ctaContent[language] || ctaContent.me;

  const ctaData = {
    backgroundImage: "/assets/img/cta_bg_3.jpg",
    title: t.title,
    buttonText: t.buttonText,
    buttonUrl: "/contact",
  };
  return (
    <section
      className="cs_cta cs_style_1 cs_heading_bg cs_bg_filed"
      style={{
        backgroundImage: `url(${ctaData.backgroundImage})`,
      }}
    >
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="container">
        <div className="cs_cta_in">
          <h2
            className="cs_cta_title cs_fs_80 cs_white_color cs_mb_40 "
            dangerouslySetInnerHTML={{ __html: ctaData.title }}
            data-aos="fade-down"
          />

          <Link
            to={ctaData.buttonUrl}
            data-aos="fade-up"
            className="cs_btn cs_style_1 cs_bold cs_heading_color cs_white_bg wow fadeInUp"
          >
            {ctaData.buttonText}
          </Link>
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70" />
    </section>
  );
}
