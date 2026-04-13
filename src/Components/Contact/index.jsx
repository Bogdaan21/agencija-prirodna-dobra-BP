import React from "react";

export default function ContactSection({ data }) {
  return (
    <section>
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-5">
            <div className="cs_map">
              <iframe id="map" src={data.locationUrl} allowFullScreen="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cs_pl_40">
              <div className="cs_section_heading cs_style_4 cs_mb_25">
                <h2
                  className="cs_section_title cs_fs_32 cs_bold mb-0"
                  dangerouslySetInnerHTML={{ __html: data.mapTitle }}
                ></h2>
              </div>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="row cs_gap_y_24"
                id="cs_form"
              >
                <input
                  type="hidden"
                  name="access_key"
                  defaultValue="cd98b256-0db3-478c-ab28-1ec94f80447c"
                />
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="name"
                    className="cs_form_field"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="email"
                    name="email"
                    className="cs_form_field"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="col-lg-12">
                  <textarea
                    className="cs_form_field"
                    name="message"
                    placeholder="Message"
                    rows={5}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="col-lg-12">
                  <button
                    className="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color w-100"
                    type="submit"
                  >
                    {data.formButtonText}
                  </button>
                  <div id="cs_result" className="cs_heading_color" />
                </div>
              </form>
              <div className="cs_height_60 cs_height_lg_40" />
              <div className="cs_section_heading cs_style_4 cs_mb_25">
                <h2
                  className="cs_section_title cs_fs_32 cs_bold mb-0"
                  dangerouslySetInnerHTML={{ __html: data.sectionTitle }}
                ></h2>
              </div>
              <ul className="cs_contact_info cs_mp_0">
                {data.contactList.map((item, index) => (
                  <li key={index}>
                    <p className="mb-0">{item.label}</p>
                    <h4 className="mb-0 cs_fs_20 cs_bold">{item.value}</h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70" />
    </section>
  );
}
