import GallerySection from "../../Components/GallerySection";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";
import projectJson from "../../data/project.json";
import { useParams } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function GalleryPage() {
  const { language } = useLanguage();
  const { projects } = projectJson;
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  const getLangValue = (value) => (typeof value === "object" && value !== null ? value[language] : value);

  const galleryData =
    project?.gallery?.map((item) => ({
      ...item,
      title: getLangValue(item.title),
    })) || [];

  const BreadcrumbsData = {
    backgroundImage: "/assets/img/about_heading_bg.jpg",
    title: language === "me" ? "Galerija" : "Our Gallery",
    breadcrumbs: [
      {
        label: language === "me" ? "Početna" : "Home",
        link: "/",
      },
      {
        label: language === "me" ? "Galerija" : "Gallery",
        active: true,
      },
    ],
  };

  const cardData = {
    backgroundImage: "/assets/img/card_bg.jpg",
    tags:
      language === "me"
        ? ["Bijelo Polje", "Zaštita prirode", "Održivi razvoj", "Prirodna dobra"]
        : ["Bijelo Polje", "Nature Protection", "Sustainable Development", "Natural Assets"],
    title:
      language === "me"
        ? "UPRAVLJANJE PRIRODOM <br /> ZA DOBROBIT ZAJEDNICE"
        : "NATURE MANAGEMENT <br /> FOR THE BENEFIT OF THE COMMUNITY",
    buttonLink: "/projects",
  };

  pageTitle(language === "me" ? "Galerija | LeafLife" : "Gallery | LeafLife");

  return (
    <>
      {/* Ako želiš breadcrumb i ovdje, samo otkomentariši */}
      {/* <PageHeading data={BreadcrumbsData} /> */}

      <GallerySection data={galleryData} />

      <div className="cs_height_100 cs_height_lg_70" />

      <CardSection data={cardData} />
    </>
  );
}
