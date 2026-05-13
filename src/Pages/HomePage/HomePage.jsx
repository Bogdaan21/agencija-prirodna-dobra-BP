import React from "react";
import HeroSection from "../../Components/Hero";
import ValueSection from "../../Components/ValueSection";
import FeatureSection from "../../Components/FeatureSection";
import WorkingProcess from "../../Components/WorkingProcess";
import ServicesSection from "../../Components/ServicesSection";
import TestimonialSection from "../../Components/TestimonialSection";
import WorksSection from "../../Components/WorksSection";
import CTASection from "../../Components/CTASection";
import { pageTitle } from "../../helper";
import { useLanguage } from "../../context/LanguageContext";

export default function HomePage() {
  const { language } = useLanguage();

  pageTitle(
    language === "me"
      ? "Agencija za upravljanje prirodnim dobrima Bijelo Polje"
      : "Agency for Management of Natural Assets Bijelo Polje",
    {
      description:
        language === "me"
          ? "Službena stranica Agencije za upravljanje prirodnim dobrima opštine Bijelo Polje: zaštićena područja, novosti, dokumenta i kontakt informacije."
          : "Official website of the Agency for Management of Natural Assets of Bijelo Polje: protected areas, news, documents, and contact information.",
      path: "/",
      locale: language,
    },
  );

  return (
    <>
      <HeroSection />
      <FeatureSection />
      <div className="cs_heading_bg cs_white_color">
        <ValueSection />
      </div>

      <WorksSection />
      <hr/>
      <ServicesSection />
      {/* <WorkingProcess data={workingProcessData} />
      <TestimonialSection data={testimonialData} /> */}
      <CTASection />
    </>
  );
}
