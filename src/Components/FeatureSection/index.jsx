import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

export default function FeatureSection() {
  const data = {
    sectionTitle: "NAŠA <span>ULOGA I ODGOVORNOSTI</span>",
    buttonText: "Kontakt",
    buttonUrl: "/contact",
    image: "/assets/img/feature_thumb.jpg",
    features: [
      {
        icon: "fa6-solid:leaf",
        title: "Zaštita i očuvanje",
        description:
          "Primarna funkcija Agencije je zaštita i očuvanje vrsta, ekosistema, pejzaža i prirodnih vrijednosti u zaštićenim područjima.",
      },
      {
        icon: "fa6-solid:people-group",
        title: "Podrška lokalnoj zajednici",
        description:
          "Zaštićena područja posmatramo i kao pokretače održivog razvoja lokalne zajednice i unapređenja kvaliteta života stanovništva.",
      },
      {
        icon: "fa6-solid:flask",
        title: "Istraživanje i monitoring",
        description:
          "Područja pod upravljanjem Agencije pružaju osnovu za naučna istraživanja, monitoring stanja prirode i unapređenje stručnih kapaciteta.",
      },
      {
        icon: "fa6-solid:bullhorn",
        title: "Promocija i edukacija",
        description:
          "Kroz promociju, marketing i edukativne aktivnosti radimo na podizanju svijesti o važnosti očuvanja prirodnih dobara.",
      },
    ],
  };
  return (
    <section>
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <h2
            className="cs_section_title cs_fs_80 mb-0"
            style={{ fontSize: "50px" }}
            data-aos="fade-down"
            dangerouslySetInnerHTML={{ __html: data.sectionTitle }}
          />
          <div className="cs_section_right">
            <Link
              to={data.buttonUrl}
              className="cs_btn cs_style_1 cs_bold cs_heading_bg cs_white_color w-100"
              dangerouslySetInnerHTML={{ __html: data.buttonText }}
            ></Link>
          </div>
        </div>
        <div className="cs_height_64 cs_height_lg_50" />
        <div className="row align-items-end cs_gap_y_50">
          <div className="col-lg-4">
            <div className="cs_img_box cs_style_1" data-aos="fade-right">
              <img src={data.image} alt="Feature" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row cs_gap_y_64">
              {data.features.map((item, index) => (
                <div className="col-sm-6" key={index}>
                  <div className="cs_iconbox cs_style_1">
                    <div className="cs_iconbox_icon cs_center cs_mb_24">
                      <i className="d-flex">
                        <Icon icon={item.icon} maxWidth="22" height="19" />
                      </i>
                    </div>
                    <h3 className="cs_fs_24 cs_mb_12">{item.title}</h3>
                    <p className="mb-0 cs_fs_20">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70" />
    </section>
  );
}
