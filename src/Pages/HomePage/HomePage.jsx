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

export default function HomePage() {
  pageTitle("Agencija za upravljanje prirodnim dobrima");
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
