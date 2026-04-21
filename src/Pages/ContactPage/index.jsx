import React from "react";
import PageHeading from "../../Components/PageHeading";
import ContactSection from "../../Components/Contact";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();

  const BreadcrumbsData = {
    backgroundImage: "/assets/img/about_heading_bg.jpg",
    title: language === "me" ? "KONTAKT" : "CONTACT US",
    breadcrumbs: [
      {
        label: language === "me" ? "Početna" : "Home",
        link: "/",
      },
      {
        label: language === "me" ? "Kontakt" : "Contact",
        active: true,
      },
    ],
  };

  const contactData = {
    mapTitle:
      language === "me"
        ? "POŠALJITE NAM <span>PORUKU</span>"
        : "SEND US A <span>MESSAGE</span>",

    sectionTitle:
      language === "me"
        ? "KONTAKTIRAJTE <span>NAS</span>"
        : "GET IN <span>TOUCH</span>",

    contactList: [
      {
        label: language === "me" ? "EMAIL" : "EMAIL",
        value: "aupd@bijelopolje.co.me",
      },
      {
        label: language === "me" ? "TELEFON" : "PHONE",
        value: "+050 435 837",
      },
      {
        label: language === "me" ? "ADRESA" : "ADDRESS",
        value: "Rista Ratkovića bb, 84300 Bijelo Polje, Montenegro",
      },
    ],

    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.736928595893!2d19.7481689!3d43.03255339999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352a3506d283583%3A0xd05ceda7c1212398!2s2PMX%2B287%2C%20Omladinska%2C%20Bijelo%20Polje%2C%20Montenegro!5e0!3m2!1sen!2s!4v1776428292103!5m2!1sen!2s",

    formButtonText:
      language === "me" ? "Pošalji poruku" : "Send Message",
  };

  const cardData = {
    backgroundImage: "/assets/img/card_bg.jpg",
    tags:
      language === "me"
        ? ["Početna", "Vrt", "Dizajn pejzaža", "Ekspert"]
        : ["Home", "Garden", "Landscape Design", "Expert"],

    title:
      language === "me"
        ? "PRETVORITE SVOJ VRT IZ SNOVA <br /> U STVARNOST"
        : "MAKE YOUR DREAM <br /> GARDEN INTO REALITY",

    buttonLink: "/projects",
  };

  pageTitle(
    language === "me"
      ? "Kontakt | LeafLife"
      : "Contact | LeafLife"
  );

  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <ContactSection data={contactData} />
      <CardSection data={cardData} />
    </>
  );
}