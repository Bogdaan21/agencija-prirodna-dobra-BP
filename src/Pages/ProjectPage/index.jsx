import React from "react";
import PageHeading from "../../Components/PageHeading";
import InfoList from "../../Components/InfoSection";
import CardSection1 from "../../Components/CardSection/CardSection1";
import ProjectSlider from "../../Components/ProjectsSection/ProjectSlider";
import AccordionSection from "../../Components/Accordion";
import { pageTitle } from "../../helper";

export default function ProjectPage() {
  const BreadcrumbsData = {
    backgroundImage: "/assets/img/project_heading_bg.jpg",
    title: "OUR PROJECTS",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Project", active: true },
    ],
  };

  const infoData = {
    imageSrc: "/assets/img/project_thumb_10.jpg",
    imageAlt: "Evening Garden",
    projectUrl: "/projects/project-details",
    title: "EVENING GARDEN",
    info: [
      { label: "YEAR", value: "2024" },
      { label: "LOCATION", value: "SUNNYVALE, CA" },
      { label: "SERVICE", value: "GARDEN LANDSCAPING" },
    ],
  };

  const infoData1 = {
    imageSrc: "/assets/img/project_thumb_12.jpg",
    imageAlt: "MINIMALIST GARDEN",
    projectUrl: "/projects/project-details",
    title: "EVENING GARDEN",
    info: [
      { label: "YEAR", value: "2024" },
      { label: "LOCATION", value: "ASHVILLE, NC" },
      { label: "SERVICE", value: "EVENT GARDEN DESIGN" },
    ],
  };

  const cardData = {
    backgroundImage: "/assets/img/project_thumb_11.jpg",
    projectUrl: "/projects/project-details",
    title: "SECRET GARDEN",
    info: [
      { label: "YEAR", value: "2024" },
      { label: "LOCATION", value: "CHARLESTON, SC" },
      { label: "SERVICE", value: "PUBLIC GARDEN DESIGN" },
    ],
    descriptionTitle: "DESCRIPTION",
    descriptionText:
      "Tucked behind an old Japanese estate, this garden design evokes the charm of a hidden garden. The lighting design enhances the feeling of discovery, revealing unexpected beauty at every turn. It's a garden where every night feels like an adventure.",
    outcomesTitle: "OUTCOMES",
    outcomesText:
      "The charm of a hidden garden <br> Oriental sense of discovery <br> Every step feels like an adventure",
  };

  const projectData = [
    {
      title: "GREEN DISPLAY GARDEN",
      year: "2023",
      location: "BROOKLYN, NY",
      service: "INDOOR GARDEN DESIGN",
      image: "/assets/img/project_thumb_13.jpg",
      url: "/projects/project-details",
    },
    {
      title: "EVENING GARDEN",
      year: "2024",
      location: "SUNNYVALE, CA",
      service: "GARDEN LANDSCAPING",
      image: "/assets/img/project_thumb_10.jpg",
      url: "/projects/project-details",
    },
    {
      title: "MINIMALIST GARDEN",
      year: "2024",
      location: "ASHVILLE, NC",
      service: "EVENT GARDEN DESIGN",
      image: "/assets/img/project_thumb_12.jpg",
      url: "/projects/project-details",
    },
  ];

  const faqData = {
    sectionTitle: "FREQUENTLY <br><span>ASKED</span> QUESTIONS",
    highlightedText: "ASKED",
    subtitle: "F.A.Q",
    image: "/assets/img/faq_img.jpg",
    items: [
      {
        question: "What is the process for getting a garden design?",
        answer:
          "The timeline varies based on the project's complexity and size. Small projects may take a few weeks, while larger ones could take a few months. During the consultation, we will provide a more accurate estimate. We will design garden based on your own needs, budget, and time constraints.",
      },
      {
        question: "How long does it take to complete a garden design project?",
        answer:
          "The timeline varies based on the project's complexity and size. Small projects may take a few weeks, while larger ones could take a few months. During the consultation, we will provide a more accurate estimate. We will design garden based on your own needs, budget, and time constraints.",
      },
      {
        question:
          "Do you offer maintenance services after the garden is installed?",
        answer:
          "The timeline varies based on the project's complexity and size. Small projects may take a few weeks, while larger ones could take a few months. During the consultation, we will provide a more accurate estimate. We will design garden based on your own needs, budget, and time constraints.",
      },
      {
        question:
          "Can I incorporate sustainability values into my garden design?",
        answer:
          "The timeline varies based on the project's complexity and size. Small projects may take a few weeks, while larger ones could take a few months. During the consultation, we will provide a more accurate estimate. We will design garden based on your own needs, budget, and time constraints.",
      },
    ],
  };
  pageTitle("Project | LeafLife");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />

      <InfoList data={infoData} />

      <CardSection1 data={cardData} />

      <InfoList data={infoData1} />
      <hr />

      <ProjectSlider data={projectData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <AccordionSection data={faqData} />
    </>
  );
}
