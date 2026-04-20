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

// const workingProcessData = {
//   sectionTitle: "SIMPLE STEPS FOR OUR <span>LANDSCAPE</span> WORK",

//   subtitle: "HOW IT WORKS",
//   logo: "/assets/img/logo.svg",
//   steps: [
//     {
//       title: "01 | Design consultation",
//       description:
//         "In the initial step, we sit down with you to have a detailed discussion about your gardening vision and preferences.",
//     },
//     {
//       title: "02 | Design & planning",
//       description:
//         "Our team of experts meticulously crafts a custom garden design that aligns with your desires and your space characteristics.",
//     },
//     {
//       title: "03 | Implement construction",
//       description:
//         "We present the design to you for review. Once approved, we move forward to implement the plan with construction.",
//     },
//     {
//       title: "04 | Garden decorating",
//       description:
//         "With your design finalized, we put on our gardening gloves and work, creating your garden to be as beautiful as envisioned.",
//     },
//   ],
// };

// const testimonialData = {
//   sectionTitle: "TESTIMONIAL",
//   testimonials: [
//     {
//       text: `LeafLife's dedication to bringing our <span>vision</span> to life was exceptional. They turned our <span>backyard</span> into a haven of tranquility. Their attention to detail and sustainable practices on their design <span>impressed</span> us.`,
//       name: "STEVE EVANS",
//       designation: "CEO of Malley Company",
//     },
//     {
//       text: `We were blown away by the transformation LeafLife delivered. The entire process was smooth and the results were beyond our expectations.`,
//       name: "RACHEL SMITH",
//       designation: "Founder of GreenNest",
//     },
//     {
//       text: `Working with LeafLife was a breeze. Their eco-friendly approach and stunning designs brought our space to life.`,
//       name: "MARK LEE",
//       designation: "Architect at EcoSpace",
//     },
//   ],
// };

const ctaData = {
  backgroundImage: "/assets/img/cta_bg.jpg",
  title: "READY TO TRANSFORM <br /> YOUR GARDEN?",
  buttonText: "Contact Us",
  buttonUrl: "/contact",
};

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
      <CTASection data={ctaData} />
    </>
  );
}
