import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const data = {
  logo: "/assets/img/logo.png",
  logoUrl: "/",
};

const menuData = {
  me: [
    { label: "POČETNA", href: "/" },
    { label: "O NAMA", href: "/about" },
    {
      label: "VIŠE",
      href: "/contact",
      children: [
        { label: "PROJEKTI", href: "/projects" },
      ],
    },
    { label: "KONTAKT", href: "/contact" },
  ],
  en: [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    {
      label: "MORE",
      href: "/contact",
      children: [
        { label: "SERVICES", href: "/services" },
        { label: "PROJECTS", href: "/projects" },
      ],
    },
    { label: "CONTACT", href: "/contact" }
  ],
};

const languages = [
  { code: "me", label: "MNE", flag: "🇲🇪" },
  { code: "en", label: "ENG", flag: "🇬🇧" },
];

const Header = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);
  const [isSticky, setIsSticky] = useState();
  const [isSearchActive, setIsSearchActive] = useState(false);

  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const selectedLang = languages.find((lang) => lang.code === language) || languages[0];

  const currentMenuItems = menuData[language] || menuData.me;

  const handleOpenMobileSubmenu = (index) => {
    if (openMobileSubmenuIndex.includes(index)) {
      setOpenMobileSubmenuIndex((prev) => prev.filter((f) => f !== index));
    } else {
      setOpenMobileSubmenuIndex((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 100) {
        setIsSticky("cs_sticky_active");
      } else {
        setIsSticky("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`cs_site_header cs_style_1 cs_sticky_header ${isSticky ? isSticky : ""}`}>
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to={data.logoUrl}>
                  <img src={data.logo} alt="Logo" />
                </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_heading_color">
                  <nav className={`cs_nav_list_wrap text-uppercase ${isShowMobileMenu ? "cs_active" : ""}`}>
                    <ul className={`cs_nav_list`}>
                      {currentMenuItems.map((item, index) => (
                        <li key={index} className={item.children ? "menu-item-has-children" : ""}>
                          <Link to={item.href}>{item.label}</Link>
                          {item.children && (
                            <>
                              <ul
                                style={{
                                  display: openMobileSubmenuIndex.includes(index) ? "block" : "none",
                                }}
                              >
                                {item.children.map((child, i) => (
                                  <li key={i} onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}>
                                    <Link to={child.href}>{child.label}</Link>
                                  </li>
                                ))}
                              </ul>
                              <span
                                className={`cs_munu_dropdown_toggle ${
                                  openMobileSubmenuIndex.includes(index) ? "active" : ""
                                }`}
                                onClick={() => handleOpenMobileSubmenu(index)}
                              >
                                <span />
                              </span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <span
                    className={`cs_menu_toggle ${isShowMobileMenu && "cs_toggle_active"}`}
                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                  >
                    <span></span>
                  </span>
                </div>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_header_icon_btns">
                  <div className="cs_header_lang_wrap">
                    <button type="button" className="cs_header_lang_btn" onClick={() => setIsLangOpen(!isLangOpen)}>
                      <span className="cs_header_lang_flag">{selectedLang.flag}</span>
                      <span className="cs_header_lang_text">{selectedLang.label}</span>
                      <span className={`cs_header_lang_arrow ${isLangOpen ? "active" : ""}`}>▼</span>
                    </button>

                    {isLangOpen && (
                      <div className="cs_header_lang_dropdown">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            type="button"
                            className={`cs_header_lang_item ${selectedLang.code === lang.code ? "active" : ""}`}
                            onClick={() => {
                              changeLanguage(lang.code);
                              setIsLangOpen(false);
                            }}
                          >
                            <span className="cs_header_lang_flag">{lang.flag}</span>
                            <span className="cs_header_lang_text">{lang.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`cs_header_form_wrap cs_center ${isSearchActive ? "active" : ""}`}>
        <div className="cs_header_form_overlay" onClick={() => setIsSearchActive(!isSearchActive)} />
        <form action="#" className="cs_header_form">
          <input type="text" className="cs_header_form_input" placeholder="Search..." />
          <button type="button" className="cs_header_form_btn cs_center">
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M19.7556 18.5774L14.0682 12.89C15.1699 11.5292 15.8332 9.8 15.8332 7.91669C15.8332 3.55174 12.2815 9.15527e-05 7.91656 9.15527e-05C3.55161 9.15527e-05 0 3.5517 0 7.91666C0 12.2816 3.55165 15.8333 7.9166 15.8333C9.7999 15.8333 11.5291 15.1699 12.8899 14.0683L18.5773 19.7557C18.7398 19.9182 18.9531 19.9999 19.1665 19.9999C19.3798 19.9999 19.5932 19.9182 19.7557 19.7557C20.0815 19.4299 20.0815 18.9032 19.7556 18.5774ZM7.9166 14.1666C4.46996 14.1666 1.66666 11.3633 1.66666 7.91666C1.66666 4.47001 4.46996 1.66672 7.9166 1.66672C11.3632 1.66672 14.1665 4.47001 14.1665 7.91666C14.1665 11.3633 11.3632 14.1666 7.9166 14.1666Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath>
                  <rect width={20} height={20} fill="currentColor" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default Header;
