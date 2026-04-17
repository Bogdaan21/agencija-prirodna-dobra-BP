import React from "react";
import PageHeading from "../../Components/PageHeading";
import ContactSection from "../../Components/Contact";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";

export default function ContactPage() {
  const BreadcrumbsData = {
    backgroundImage: "/assets/img/about_heading_bg.jpg",
    title: "CONTACT US",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Contact", active: true },
    ],
  };

  const contactData = {
    mapTitle: "SEND US A <span>MESSAGE</span>",
    sectionTitle: "GET IN <span>TOUCH</span>",
    contactList: [
      {
        label: "EMAIL",
        value: "aupd@bijelopolje.co.me",
      },
      {
        label: "LOCATION",
        value: "+050 435 837",
      },
      {
        label: "ADDRESS",
        value: "Rista Ratkovića bb, 84300 Bijelo Polje, Montenegro",
      },
    ],
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.736928595893!2d19.7481689!3d43.03255339999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352a3506d283583%3A0xd05ceda7c1212398!2s2PMX%2B287%2C%20Omladinska%2C%20Bijelo%20Polje%2C%20Montenegro!5e0!3m2!1sen!2s!4v1776428292103!5m2!1sen!2s",
    formButtonText: "Send Message",
  };

  const cardData = {
    backgroundImage: "/assets/img/card_bg.jpg",
    tags: ["Home", "Garden", "Landscape Design", "Expert"],
    title: "MAKE YOUR DREAM <br /> GARDEN INTO REALITY",
    buttonLink: "/projects",
  };
  pageTitle("Contact | LeafLife");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <ContactSection data={contactData} />
      <CardSection data={cardData} />
    </>
  );
}
