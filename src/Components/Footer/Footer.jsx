import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const content = {
    me: {
      logo: "/assets/img/logo.png",
      newsletterText: "Budite u toku sa najnovijim <br /> projektima i informacijama.",
      menus: [
        {
          title: "PODRŠKA",
          links: [
            { label: "FAQ", url: "/faq" },
            { label: "KORISNIČKO UPUTSTVO", url: "/" },
            { label: "UTISCI", url: "/" },
            { label: "KORISNICI", url: "/" },
          ],
        },
        {
          title: "LINKOVI",
          links: [
            { label: "O NAMA", url: "/about" },
            { label: "PROJEKTI", url: "/projects" },
            { label: "NOVOSTI", url: "/news" },
          ],
        },
        {
          title: "OBLASTI",
          links: [
            { label: "ZAŠTITA PRIRODE", url: "/projects" },
            { label: "MONITORING", url: "/projects" },
            { label: "EDUKACIJA", url: "/projects" },
            { label: "PROMOCIJA", url: "/projects" },
          ],
        },
      ],
      bottomLinks: [
        { label: "POLITIKA PRIVATNOSTI", url: "/" },
        { label: "USLOVI KORIŠĆENJA", url: "/" },
      ],
      emailPlaceholder: "Unesite svoju email adresu ...",
    },

    en: {
      logo: "/assets/img/logo-eng.png",
      newsletterText: "Stay updated with our latest <br /> projects and information.",
      menus: [
        {
          title: "SUPPORT",
          links: [
            { label: "FAQ", url: "/faq" },
            { label: "USER GUIDE", url: "/" },
            { label: "TESTIMONIALS", url: "/" },
            { label: "CUSTOMERS", url: "/" },
          ],
        },
        {
          title: "LINKS",
          links: [
            { label: "ABOUT US", url: "/about" },
            { label: "PROJECTS", url: "/projects" },
            { label: "NEWS", url: "/news" },
          ],
        },
        {
          title: "AREAS",
          links: [
            { label: "NATURE PROTECTION", url: "/projects" },
            { label: "MONITORING", url: "/projects" },
            { label: "EDUCATION", url: "/projects" },
            { label: "PROMOTION", url: "/projects" },
          ],
        },
      ],
      bottomLinks: [
        { label: "PRIVACY POLICY", url: "/" },
        { label: "TERMS & CONDITIONS", url: "/" },
      ],
      emailPlaceholder: "Enter your email address ...",
    },
  };

  const data = content[language] || content.me;

  return (
    <footer className={`cs_footer cs_style_1 cs_color_1`}>
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <div className="cs_text_widget">
                <div className="cs_site_branding">
                  <img data-aos="zoom-in" src={data.logo} alt="Logo" className="wow zoomIn" />
                </div>
                <p dangerouslySetInnerHTML={{ __html: data.newsletterText }}></p>
              </div>
            </div>
          </div>

          {data.menus.map((menu, i) => (
            <div className="cs_footer_col" key={i}>
              <div className="cs_footer_widget">
                <h4 className="cs_footer_widget_title">{menu.title}</h4>
                <ul className="cs_footer_widget_menu cs_mp_0">
                  {menu.links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.url}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="cs_bottom_footer">
          <div className="cs_bottom_footer_left" data-aos="fade-right">
            <div className="cs_copyright cs_footer_links">
              © {new Date().getFullYear()}. Sva prava zadržana. |{" "}
              <a href="https://botech.me" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "6px" }}>
                Botech IT Solutions
              </a>
            </div>
          </div>
          <div className="cs_bottom_footer_right" data-aos="fade-left">
            <ul className="cs_footer_links cs_mp_0">
              {data.bottomLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
