import React from "react";
import PageHeading from "../../Components/PageHeading";
import CardSection from "../../Components/CardSection";
import AccordionSection2 from "../../Components/Accordion/AccordionSection2";
import { pageTitle } from "../../helper";
import AccordionSection from "../../Components/Accordion";

const BreadcrumbsData = {
  backgroundImage: "/assets/img/about_heading_bg.jpg",
  title: "FAQs",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "FAQ", active: true },
  ],
};

const cardData = {
  backgroundImage: "/assets/img/card_bg.jpg",
  tags: ["Home", "Garden", "Landscape Design", "Expert"],
  title: "MAKE YOUR DREAM <br /> GARDEN INTO REALITY",
  buttonLink: "/projects",
};

const faqData = {
  sectionTitle: "GARDEN <span>DESIGN</span>",
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

const faqData2 = {
  sectionTitle: "LANDSCAPE <span>DESIGN</span>",
  image: "/assets/img/faq_img_2.jpg",
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

export default function FaqPage() {
  pageTitle("Faq | LeafLife");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <AccordionSection2 data={faqData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <AccordionSection2 data={faqData2} />
      <div className="cs_height_100 cs_height_lg_70" />
      <CardSection data={cardData} />
    </>
  );
}
