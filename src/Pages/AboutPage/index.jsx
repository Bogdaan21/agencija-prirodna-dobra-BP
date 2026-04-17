import React from "react";
import PageHeading from "../../Components/PageHeading";
import AboutUs from "../../Components/Aboutus";
import ValueSection from "../../Components/ValueSection";
import FeatureSection from "../../Components/FeatureSection";
import TeamMember from "../../Components/Team";
import WorkSection1 from "../../Components/WorksSection/WorkSection1";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";

const BreadcrumbsData = {
  backgroundImage: "/assets/img/about_heading_bg.jpg",
  title: "O NAMA",
  breadcrumbs: [
    { label: "Početna", link: "/" },
    { label: "O nama", active: true },
  ],
};

const aboutUsData = {
  title: `AGENCIJA ZA <br><span>UPRAVLJANJE PRIRODNIM DOBRIMA</span> <br>OPŠTINE BIJELO POLJE`,

  introduction:
    "Agencija za upravljanje prirodnim dobrima opštine Bijelo Polje osnovana je odlukom Skupštine opštine Bijelo Polje sa ciljem kontinuiranog upravljanja, zaštite i unapređenja životne sredine u zaštićenim prirodnim područjima.",

  introduction1:
    "Pored očuvanja vrsta, ekosistema i pejzaža, Agencija promoviše održivo korišćenje prirodnih resursa, podržava naučna istraživanja, monitoring, edukaciju, jačanje kapaciteta zaposlenih, kao i aktivnosti promocije i podizanja svijesti o značaju zaštite prirode.",

  video: {
    videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
    backgroundImage: "/assets/img/video_block_bg.jpg",
  },

  cta: {
    backgroundImage: "/assets/img/cta_bg_3.jpg",
    buttonUrl: "/zasticena-podrucja",
    buttonText: "Pogledaj zaštićena područja",
  },
};

const valueData = {
  sectionTitle: "NAŠE OBLASTI DJELOVANJA",
  values: [
    { text: "Zaštita prirode" },
    { text: "Održivo upravljanje" },
    { text: "Edukacija i monitoring" },
    { text: "Promocija prirodnih dobara" },
  ],
};

const featureData = {
  sectionTitle: "NAŠA <span>ULOGA I ODGOVORNOSTI</span>",
  buttonText: "Kontakt",
  buttonUrl: "/contact",
  image: "/assets/img/feature_thumb.jpg",
  features: [
    {
      icon: "fa6-solid:leaf",
      title: "Zaštita i očuvanje",
      description:
        "Primarna funkcija Agencije je zaštita i očuvanje vrsta, ekosistema, pejzaža i prirodnih vrijednosti u zaštićenim područjima.",
    },
    {
      icon: "fa6-solid:people-group",
      title: "Podrška lokalnoj zajednici",
      description:
        "Zaštićena područja posmatramo i kao pokretače održivog razvoja lokalne zajednice i unapređenja kvaliteta života stanovništva.",
    },
    {
      icon: "fa6-solid:flask",
      title: "Istraživanje i monitoring",
      description:
        "Područja pod upravljanjem Agencije pružaju osnovu za naučna istraživanja, monitoring stanja prirode i unapređenje stručnih kapaciteta.",
    },
    {
      icon: "fa6-solid:bullhorn",
      title: "Promocija i edukacija",
      description:
        "Kroz promociju, marketing i edukativne aktivnosti radimo na podizanju svijesti o važnosti očuvanja prirodnih dobara.",
    },
  ],
};

const teamMembersData = {
  title: `ORGANIZACIONA <br><span>STRUKTURA</span>`,
  subtitle: "AGENCIJA",
  teamMembers: [
    {
      img: "/assets/img/team_member_1.jpg",
      name: "Savjet Društva",
      role: "Organ upravljanja",
      description: "Učestvuje u usmjeravanju rada i donošenju ključnih odluka Društva.",
    },
    {
      img: "/assets/img/team_member_2.jpg",
      name: "Izvršni direktor",
      role: "Rukovođenje Društvom",
      description: "Koordinira rad Agencije i odgovoran je za sprovođenje planova i programa rada.",
    },
    {
      img: "/assets/img/team_member_3.jpg",
      name: "Služba za razvoj i administrativno-pravne poslove",
      role: "Stručni i administrativni poslovi",
      description:
        "Obavlja stručne, pravne, ekonomske i zajedničke poslove iz oblasti zaštite životne sredine, valorizacije i unapređenja prirodnih dobara.",
    },
    {
      img: "/assets/img/team_member_4.jpg",
      name: "Rendžerska služba",
      role: "Zaštita i nadzor",
      description:
        "Vrši poslove čuvanja zaštićenog dobra u skladu sa Zakonom o zaštiti prirode i Zakonom o zaštiti lica i imovine.",
    },
  ],
};

const WorkingData = {
  title: "ZAŠTIĆENA <span>PODRUČJA</span>",
  subtitle: "POD UPRAVLJANJEM",
  galleryItems: [
    {
      imgSrc: "/assets/img/projects/djalovica-klisura/cover.jpg",
      title: "Spomenik prirode Đalovića klisura",
      height: "694px",
    },
    {
      imgSrc: "/assets/img/projects/djalovica-klisura/cover.jpg",
      title: "Spomenik prirode Rijeka Ćehotina",
      height: "694px",
    },
  ],
};

const cardData = {
  backgroundImage: "/assets/img/card_bg.jpg",
  tags: ["Bijelo Polje", "Zaštita prirode", "Održivi razvoj", "Prirodna dobra"],
  title: "UPRAVLJANJE PRIRODOM <br /> ZA DOBROBIT ZAJEDNICE",
  buttonLink: "/zasticena-podrucja",
};

export default function AboutPage() {
  pageTitle("O nama | Agencija za upravljanje prirodnim dobrima");

  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <AboutUs data={aboutUsData} />
      <div className="cs_heading_bg cs_white_color">
        <ValueSection data={valueData} />
        <FeatureSection data={featureData} />
      </div>
      <TeamMember data={teamMembersData} />
      <WorkSection1 data={WorkingData} />
      <CardSection data={cardData} />
    </>
  );
}