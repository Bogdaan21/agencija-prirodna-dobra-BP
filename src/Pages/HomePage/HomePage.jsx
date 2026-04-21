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
  pageTitle("Nature");
  return (
    <>
      <HeroSection />
      <ValueSection />
      <FeatureSection />
      <WorksSection />
      <ServicesSection />
      {/* <WorkingProcess data={workingProcessData} />
      <TestimonialSection data={testimonialData} /> */}
      <CTASection />
    </>
  );
}
