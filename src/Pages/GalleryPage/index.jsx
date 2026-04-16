import PageHeading from "../../Components/PageHeading";
import GallerySection from "../../Components/GallerySection";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";
import projectJson from "../../data/project.json";

export default function GalleryPage() {
  pageTitle("Gallery | LeafLife");

  const { projects } = projectJson;

  // 🔥 skuplja sve slike iz svih projekata
  const galleryData = projects.flatMap((project) =>
    project.gallery?.map((img) => ({
      ...img,
      projectSlug: project.slug, // ako želiš klik kasnije
    })) || []
  );

  const BreadcrumbsData = {
    backgroundImage: "/assets/img/about_heading_bg.jpg",
    title: "Our Gallery",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Gallery", active: true },
    ],
  };

  const cardData = {
    backgroundImage: "/assets/img/card_bg.jpg",
    tags: ["Home", "Garden", "Landscape Design", "Expert"],
    title: "MAKE YOUR DREAM <br /> GARDEN INTO REALITY",
    buttonLink: "/projects",
  };

  return (
    <>
      <PageHeading data={BreadcrumbsData} />

      <div className="cs_height_100 cs_height_lg_70" />

      <GallerySection data={galleryData} />

      <div className="cs_height_100 cs_height_lg_70" />

      <CardSection data={cardData} />
    </>
  );
}