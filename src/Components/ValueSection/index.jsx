import React from "react";

export default function ValueSection() {
  const valueData = {
    sectionTitle: "NAŠE OBLASTI DJELOVANJA",
    values: [
      { text: "Zaštita prirode" },
      { text: "Održivo upravljanje" },
      { text: "Edukacija i monitoring" },
      { text: "Promocija prirodnih dobara" },
    ],
  };

  return (
    <section className="">
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="container">
        <div className="cs_values_card cs_style_1">
          <div className="cs_values_card_left">
            <h3 className="cs_brackets_title cs_normal cs_fs_16 mb-0">{valueData.sectionTitle}</h3>
          </div>
          <div className="cs_values_card_left">
            <ul className="cs_values cs_mp_0 cs_heading_color cs_fs_20">
              {valueData.values.map((item, index) => (
                <li key={index}>
                  <span>{item.text}</span>
                  <span className="cs_bold">{String(index + 1).padStart(2, "0")}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
