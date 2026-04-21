import React from "react";
import PageHeading from "../../Components/PageHeading";
import AboutUs from "../../Components/Aboutus";
import ValueSection from "../../Components/ValueSection";
import FeatureSection from "../../Components/FeatureSection";
import TeamMember from "../../Components/Team";
import WorkSection1 from "../../Components/WorksSection/WorkSection1";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";
import { useLanguage } from "../../context/LanguageContext";
import BrandSection from "../../Components/BrandSection";

export default function AboutPage() {
  pageTitle("O nama | Agencija za upravljanje prirodnim dobrima");

  const { language } = useLanguage();
  const content = {
    me: {
      BreadcrumbsData: {
        backgroundImage: "/assets/img/about_heading_bg.jpg",
        title: "O NAMA",
        breadcrumbs: [
          { label: "Početna", link: "/" },
          { label: "O nama", active: true },
        ],
      },

      aboutUsData: {
        title: `AGENCIJA ZA <br><span>UPRAVLJANJE PRIRODNIM DOBRIMA</span> <br>OPŠTINE BIJELO POLJE`,
        introduction:
          "Agencija za upravljanje prirodnim dobrima opštine Bijelo Polje osnovana je odlukom Skupštine opštine Bijelo Polje sa ciljem kontinuiranog upravljanja, zaštite i unapređenja životne sredine u zaštićenim prirodnim područjima.",
        introduction1:
          "Pored očuvanja vrsta, ekosistema i pejzaža, Agencija promoviše održivo korišćenje prirodnih resursa, podržava naučna istraživanja, monitoring, edukaciju, jačanje kapaciteta zaposlenih, kao i aktivnosti promocije i podizanja svijesti o značaju zaštite prirode.",
        video: {
          videoUrl: "https://www.youtube.com/embed/ypC7gHdXGTY",
          thumbnail: "https://img.youtube.com/vi/ypC7gHdXGTY/maxresdefault.jpg",
        },
        cta: {
          backgroundImage: "/assets/img/cta_bg_3.jpg",
          buttonUrl: "/zasticena-podrucja",
          buttonText: "Pogledaj zaštićena područja",
        },
      },

      valueData: {
        sectionTitle: "NAŠE OBLASTI DJELOVANJA",
        values: [
          { text: "Zaštita prirode" },
          { text: "Održivo upravljanje" },
          { text: "Edukacija i monitoring" },
          { text: "Promocija prirodnih dobara" },
        ],
      },

      featureData: {
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
      },

      teamMembersData: {
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
      },

      WorkingData: {
        title: "ZAŠTIĆENA <span>PODRUČJA</span>",
        subtitle: "POD UPRAVLJANJEM",
        galleryItems: [
          {
            imgSrc: "/assets/img/projects/djalovica-klisura/cover.jpg",
            title: "Spomenik prirode Đalovića klisura",
            height: "694px",
          },
          {
            imgSrc: "/assets/img/projects/cehotina/cover.jpg",
            title: "Spomenik prirode Rijeka Ćehotina",
            height: "694px",
          },
        ],
      },

      cardData: {
        backgroundImage: "/assets/img/card_bg.jpg",
        tags: ["Bijelo Polje", "Zaštita prirode", "Održivi razvoj", "Prirodna dobra"],
        title: "UPRAVLJANJE PRIRODOM <br /> ZA DOBROBIT ZAJEDNICE",
        buttonLink: "/zasticena-podrucja",
      },
    },

    en: {
      BreadcrumbsData: {
        backgroundImage: "/assets/img/about_heading_bg.jpg",
        title: "ABOUT US",
        breadcrumbs: [
          { label: "Home", link: "/" },
          { label: "About Us", active: true },
        ],
      },

      aboutUsData: {
        title: `AGENCY FOR <br><span>MANAGEMENT OF NATURAL ASSETS</span> <br>OF THE MUNICIPALITY OF BIJELO POLJE`,
        introduction:
          "The Agency for the Management of Natural Assets of the Municipality of Bijelo Polje was established by a decision of the Municipal Assembly with the aim of continuous management, protection, and improvement of the environment in protected natural areas.",
        introduction1:
          "In addition to preserving species, ecosystems, and landscapes, the Agency promotes the sustainable use of natural resources, supports scientific research, monitoring, education, employee capacity building, and activities aimed at promoting awareness of the importance of nature protection.",
        video: {
          videoUrl: "https://www.youtube.com/embed/ypC7gHdXGTY",
          thumbnail: "https://img.youtube.com/vi/ypC7gHdXGTY/maxresdefault.jpg",
        },
        cta: {
          backgroundImage: "/assets/img/cta_bg_3.jpg",
          buttonUrl: "/zasticena-podrucja",
          buttonText: "View Protected Areas",
        },
      },

      valueData: {
        sectionTitle: "OUR AREAS OF ACTIVITY",
        values: [
          { text: "Nature Protection" },
          { text: "Sustainable Management" },
          { text: "Education and Monitoring" },
          { text: "Promotion of Natural Assets" },
        ],
      },

      featureData: {
        sectionTitle: "OUR <span>ROLE AND RESPONSIBILITIES</span>",
        buttonText: "Contact",
        buttonUrl: "/contact",
        image: "/assets/img/feature_thumb.jpg",
        features: [
          {
            icon: "fa6-solid:leaf",
            title: "Protection and Conservation",
            description:
              "The primary function of the Agency is the protection and conservation of species, ecosystems, landscapes, and natural values within protected areas.",
          },
          {
            icon: "fa6-solid:people-group",
            title: "Support for the Local Community",
            description:
              "Protected areas are also seen as drivers of sustainable local development and improving the quality of life of the population.",
          },
          {
            icon: "fa6-solid:flask",
            title: "Research and Monitoring",
            description:
              "Areas managed by the Agency provide a basis for scientific research, environmental monitoring, and improvement of professional capacities.",
          },
          {
            icon: "fa6-solid:bullhorn",
            title: "Promotion and Education",
            description:
              "Through promotion, marketing, and educational activities, we work on raising awareness of the importance of preserving natural assets.",
          },
        ],
      },

      teamMembersData: {
        title: `ORGANIZATIONAL <br><span>STRUCTURE</span>`,
        subtitle: "AGENCY",
        teamMembers: [
          {
            img: "/assets/img/team_member_1.jpg",
            name: "Board of Directors",
            role: "Governing Body",
            description: "Participates in directing the work and making key decisions of the Agency.",
          },
          {
            img: "/assets/img/team_member_2.jpg",
            name: "Executive Director",
            role: "Agency Management",
            description: "Coordinates the Agency’s work and is responsible for implementing plans and programs.",
          },
          {
            img: "/assets/img/team_member_3.jpg",
            name: "Development and Administrative-Legal Department",
            role: "Professional and Administrative Affairs",
            description:
              "Performs professional, legal, economic, and general tasks in the field of environmental protection, valorization, and improvement of natural assets.",
          },
          {
            img: "/assets/img/team_member_4.jpg",
            name: "Ranger Service",
            role: "Protection and Supervision",
            description:
              "Performs protection duties for protected areas in accordance with the Law on Nature Protection and the Law on the Protection of Persons and Property.",
          },
        ],
      },

      WorkingData: {
        title: "PROTECTED <span>AREAS</span>",
        subtitle: "UNDER MANAGEMENT",
        galleryItems: [
          {
            imgSrc: "/assets/img/projects/djalovica-klisura/cover.jpg",
            title: "Đalovića Gorge Nature Monument",
            height: "694px",
          },
          {
            imgSrc: "/assets/img/projects/cehotina/cover.jpg",
            title: "Ćehotina River Nature Monument",
            height: "694px",
          },
        ],
      },

      cardData: {
        backgroundImage: "/assets/img/card_bg.jpg",
        tags: ["Bijelo Polje", "Nature Protection", "Sustainable Development", "Natural Assets"],
        title: "NATURE MANAGEMENT <br /> FOR THE BENEFIT OF THE COMMUNITY",
        buttonLink: "/zasticena-podrucja",
      },
    },
  };

  const data = content[language] || content.me;

  pageTitle(language === "me" ? "O nama | LeafLife" : "About Us | LeafLife");
  return (
    <>
      <PageHeading data={data.BreadcrumbsData} />
      <AboutUs data={data.aboutUsData} />
      <div className="cs_heading_bg cs_white_color">
        <ValueSection data={data.valueData} />
        <FeatureSection data={data.featureData} />
      </div>
      <TeamMember data={data.teamMembersData} />
      <WorkSection1 data={data.WorkingData} />
      <BrandSection className="mb-5"/>
      <CardSection data={data.cardData} />
    </>
  );
}
