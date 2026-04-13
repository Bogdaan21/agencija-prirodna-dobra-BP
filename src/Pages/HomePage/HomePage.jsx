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

const heroData = {
  title: "CREATE YOUR <b>DREAM GARDEN</b>",
  subtitle:
    "Crafting dream gardens with passion, creativity, and sustainability for over a decade with our experienced landscape artists and gardener teams.",
  btnText1: "Get Started",
  btnUrl1: "/services",
  btnText2: "Explore Projects",
  btnUrl2: "/projects",

  funfact: {
    number: "500+",
    text: "Satisfied Clients",
  },
  box: {
    title: "Hachioji Garden",
    subtitle:
      "We design Hachioji Garden as a part of our new Landscape Design Commission in the country.",
    link: "/projects/hachioji-garden",
  },
  backgrounds: [
    "/assets/img/hero_bg.jpg",
    "/assets/img/hero_bg_4.jpg",
    "/assets/img/hero_bg_2.jpg",
    "/assets/img/hero_bg_4.jpg",
  ],
};

const valueData = {
  sectionTitle: "VALUES",
  values: [{ text: "Landscape Design" }, { text: "Indoor Garden" }],
};

const featureData = {
  sectionTitle: "WE ARE <span>DIFFERENT</span> IN EVERY WAYS",
  buttonText: "Get Started",
  buttonUrl: "/services",
  image: "/assets/img/feature_thumb.jpg",
  features: [
    {
      icon: "fa6-regular:heart",
      title: "Passion in every work",
      description:
        "We are deeply passionate about creating beautiful, sustainable green landscapes for our clients.",
    },
    {
      icon: "fa6-solid:link",
      title: "Collaboration on top",
      description:
        "We make your dream design come true by combining your ideas with our 10+ years of garden design expertise.",
    },
    {
      icon: "fa6-solid:layer-group",
      title: "Sustainability in check",
      description:
        "We love nurturing nature, one garden at a time, so that you can enjoy the beautiful landscape of our garden even longer.",
    },
    {
      icon: "fa6-brands:ubuntu",
      title: "Creativity unleashed",
      description:
        "We make sure to only give you our innovative designs that stand out to make sure that your garden is not like the others.",
    },
  ],
};

const workingProcessData = {
  sectionTitle: "SIMPLE STEPS FOR OUR <span>LANDSCAPE</span> WORK",

  subtitle: "HOW IT WORKS",
  logo: "/assets/img/logo.svg",
  steps: [
    {
      title: "01 | Design consultation",
      description:
        "In the initial step, we sit down with you to have a detailed discussion about your gardening vision and preferences.",
    },
    {
      title: "02 | Design & planning",
      description:
        "Our team of experts meticulously crafts a custom garden design that aligns with your desires and your space characteristics.",
    },
    {
      title: "03 | Implement construction",
      description:
        "We present the design to you for review. Once approved, we move forward to implement the plan with construction.",
    },
    {
      title: "04 | Garden decorating",
      description:
        "With your design finalized, we put on our gardening gloves and work, creating your garden to be as beautiful as envisioned.",
    },
  ],
};

const servicesData = {
  title: "SERVICES",
  btnText: " See More Services",
  btnUrl: "/services",
  service: [
    {
      title: "HOME GARDEN",
      subtitle:
        "Crafting the perfect garden space for your home. Whether indoor or outdoor, we got it all ready for your greenery needs.",
      image: "/assets/img/service_thumb_1.jpg",
      link: "services/home-garden",
      tags: [
        { label: "Home", url: "/" },
        { label: "Garden", url: "/" },
        { label: "Landscape Design", url: "/" },
        { label: "Expert", url: "/" },
      ],
    },
    {
      title: "PLANT SELECTION",
      subtitle:
        "Crafting the perfect garden space for your home. Whether indoor or outdoor, we got it all ready for your greenery needs.",
      image: "/assets/img/service_thumb_2.jpg",
      link: "services/plant-selection",
      tags: [
        { label: "Home", url: "/" },
        { label: "Garden", url: "/" },
        { label: "Landscape Design", url: "/" },
        { label: "Expert", url: "/" },
      ],
    },
    {
      title: "HARD SCAPING",
      subtitle:
        "Crafting the perfect garden space for your home. Whether indoor or outdoor, we got it all ready for your greenery needs.",
      image: "/assets/img/service_thumb_3.jpg",
      link: "services/hard-scaping",
      tags: [
        { label: "Home", url: "/" },
        { label: "Garden", url: "/" },
        { label: "Landscape Design", url: "/" },
        { label: "Expert", url: "/" },
      ],
    },
    {
      title: "PUBLIC GARDEN",
      subtitle:
        "Crafting the perfect garden space for your home. Whether indoor or outdoor, we got it all ready for your greenery needs.",
      image: "/assets/img/service_thumb_4.jpg",
      link: "services/public-garden",
      tags: [
        { label: "Home", url: "/" },
        { label: "Garden", url: "/" },
        { label: "Landscape Design", url: "/" },
        { label: "Expert", url: "/" },
      ],
    },
  ],
};

const testimonialData = {
  sectionTitle: "TESTIMONIAL",
  testimonials: [
    {
      text: `LeafLife's dedication to bringing our <span>vision</span> to life was exceptional. They turned our <span>backyard</span> into a haven of tranquility. Their attention to detail and sustainable practices on their design <span>impressed</span> us.`,
      name: "STEVE EVANS",
      designation: "CEO of Malley Company",
    },
    {
      text: `We were blown away by the transformation LeafLife delivered. The entire process was smooth and the results were beyond our expectations.`,
      name: "RACHEL SMITH",
      designation: "Founder of GreenNest",
    },
    {
      text: `Working with LeafLife was a breeze. Their eco-friendly approach and stunning designs brought our space to life.`,
      name: "MARK LEE",
      designation: "Architect at EcoSpace",
    },
  ],
};

const worksData = {
  title: "GET TO <span>KNOW</span> OUR <br /> LATEST GARDEN <span>WORKS</span>",
  subtitle: "WORKS",
  slides: [
    {
      image: "/assets/img/project_thumb_9.jpg",
      name: "SERENE RETREAT",
      location: "SUNNYVALE, CA",
      description:
        "A tranquil garden oasis perfect for your relaxation time with family or alone within your comfortable home.",
    },
    {
      image: "/assets/img/project_thumb_10.jpg",
      name: "ZEN HAVEN",
      location: "PALO ALTO, CA",
      description:
        "This modern garden blends minimalist design with nature for a peaceful retreat.",
    },
    {
      image: "/assets/img/project_thumb_11.jpg",
      name: "URBAN EDEN",
      location: "SAN FRANCISCO, CA",
      description:
        "An urban backyard transformed into a vibrant, green escape with blooming flowers and winding paths.",
    },
  ],
};

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
      <HeroSection data={heroData} />
      <ValueSection data={valueData} />
      <FeatureSection data={featureData} />
      <WorkingProcess data={workingProcessData} />
      <ServicesSection data={servicesData} />
      <TestimonialSection data={testimonialData} />
      <WorksSection data={worksData} />
      <CTASection data={ctaData} />
    </>
  );
}
