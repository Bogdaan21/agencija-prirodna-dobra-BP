import React from "react";
import PageHeading from "../../Components/PageHeading";
import ProjectDetailsSection from "../../Components/ProjectDetails";
import RelatedProject from "../../Components/RelatedProject/RelatedProject";
import { pageTitle } from "../../helper";

const BreadcrumbsData = {
  backgroundImage: "/assets/img/project_heading_bg.jpg",
  title: "EVENING GARDEN",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Evening garden", active: true },
  ],
};

const projectData = {
  projectInfo: [
    { label: "YEAR", value: "2024" },
    { label: "LOCATION", value: "SUNNYVALE, CA" },
    { label: "SERVICE", value: "GARDEN LANDSCAPING" },
  ],
  video: {
    url: "https://www.youtube.com/embed/rRid6GCJtgc",
    thumbnail: "/assets/img/video_block_bg_2.jpg",
  },
  sliderImages: [
    "/assets/img/project_thumb_10.jpg",
    "/assets/img/project_thumb_10.jpg",
    "/assets/img/project_thumb_10.jpg",
  ],
  description: `Tucked behind an old Japanese estate, this garden design evokes
    the charm of a hidden garden. The lighting design enhances the
    feeling of discovery, revealing unexpected beauty at every turn.
    It's a garden where every night feels like an adventure.`,
  outcomes: `With a team of dedicated landscape architects and horticultural
    experts, we blend art and science to transform your outdoor space
    into a living masterpiece. We go beyond aesthetics, integrating
    sustainable practices, water-saving solutions, and eco-friendly
    choices to ensure your garden is as environmentally responsible as
    it is stunning. From the initial consultation to the final
    blossom, we are with you every step of the way, bringing your
    vision of dream garden to life expertly and efficiently.`,
  features: [
    {
      iconClass: "fa6-solid:hand-holding-droplet",
      title: "Customized Garden Designs",
    },
    {
      iconClass: "fa6-solid:utensils",
      title: "Guaranteed Maintenance Plans",
    },
    { iconClass: "fa6-solid:vials", title: "Soil Testing and Improvement" },
    {
      iconClass: "fa6-solid:feather",
      title: "Hardscape and Aquascape Feature",
    },
    {
      iconClass: "fa6-solid:seedling",
      title: "Plant Selection and Installation",
    },
    {
      iconClass: "fa6-solid:handshake",
      title: "Sustainable Eco-Friendly Options",
    },
  ],
};

const accordionData = {
  sectionTitle: "CHOOSE OUR <br /> SPECIAL <span>SERVICES</span>",
  highlightedText: "SERVICES",
  serviceData: [
    {
      img: "/assets/img/project_thumb_1.jpg",
      title: "GARDEN DESIGN",
      description:
        "Crafting the perfect garden space. We will design a garden that suits your lifestyle and enhances your property's beauty.",
      link: "/services/services-details",
    },
    {
      img: "/assets/img/project_thumb_2.jpg",
      title: "PLANT SELECTION",
      description:
        "Hand-picked greenery for your oasis. Our experts select the right plants, ensuring they thrive in your garden's unique conditions.",
      link: "/services/services-details",
    },
    {
      img: "/assets/img/project_thumb_3.jpg",
      title: "HARDSCAPING",
      description:
        "Adding structure to your landscape. We create functional and aesthetic hardscape features like patios, walkways, and retaining walls.",
      link: "/services/services-details",
    },
    {
      img: "/assets/img/project_thumb_4.jpg",
      title: "GARDEN MAINTENANCE",
      description:
        "Preserving your garden's allure. We offer ongoing maintenance services to ensure your garden looks its best year-round.",
      link: "/services/services-details",
    },
  ],
};

export default function ProjectDetailsPage() {
  pageTitle("Project Details | LeafLife");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <ProjectDetailsSection data={projectData} />
      <RelatedProject data={accordionData} />
    </>
  );
}
