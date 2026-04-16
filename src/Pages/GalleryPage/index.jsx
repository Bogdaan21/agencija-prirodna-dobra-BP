import GallerySection from "../../Components/GallerySection";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";

const cardData = {
  backgroundImage: "/assets/img/card_bg.jpg",
  tags: ["Home", "Garden", "Landscape Design", "Expert"],
  title: "MAKE YOUR DREAM <br /> GARDEN INTO REALITY",
  buttonLink: "/projects",
};
export default function GalleryPage({ data }) {
  pageTitle("Gallery | LeafLife");
  return (
    <>
      <div className="cs_height_100 cs_height_lg_70" />
      <GallerySection data={data} />
      <div className="cs_height_100 cs_height_lg_70" />
      <CardSection data={cardData} />
    </>
  );
}
