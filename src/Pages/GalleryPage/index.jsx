import PageHeading from "../../Components/PageHeading";
import GallerySection from "../../Components/GallerySection";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";

const BreadcrumbsData = {
  backgroundImage: "/assets/img/about_heading_bg.jpg",
  title: "Our Gallery",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Gallery", active: true },
  ],
};

const galleryData = [
  {
    imgSrc: "/assets/img/work_thumb_1.jpg",
    title: "Gallery A",
    year: "2024",
    height: "694px",
  },
  {
    imgSrc: "/assets/img/work_thumb_2.jpg",
    title: "Gallery B",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: "/assets/img/work_thumb_2.jpg",
    title: "Gallery B",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: "/assets/img/work_thumb_4.jpg",
    title: "Gallery D",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: "/assets/img/work_thumb_3.jpg",
    title: "Gallery C",
    year: "2024",
    height: "287px",
  },

  {
    imgSrc: "/assets/img/work_thumb_2.jpg",
    title: "Gallery B",
    year: "2024",
    height: "480px",
  },
  {
    imgSrc: "/assets/img/work_thumb_5.jpg",
    title: "Gallery E",
    year: "2024",
    height: "190px",
  },
  {
    imgSrc: "/assets/img/work_thumb_4.jpg",
    title: "Gallery D",
    year: "2024",
    height: "383px",
  },
];

const cardData = {
  backgroundImage: "/assets/img/card_bg.jpg",
  tags: ["Home", "Garden", "Landscape Design", "Expert"],
  title: "MAKE YOUR DREAM <br /> GARDEN INTO REALITY",
  buttonLink: "/projects",
};
export default function GalleryPage() {
  pageTitle("Gallery | LeafLife");
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
