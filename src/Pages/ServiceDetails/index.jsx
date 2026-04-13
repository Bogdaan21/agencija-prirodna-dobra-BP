import ServiceDetailsSection from "../../Components/ServiceDetails";
import WorkingProcess from "../../Components/WorkingProcess";
import TestimonialSection1 from "../../Components/TestimonialSection/TestimonialSection1";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";

const serviceDetailsData = {
  breadcrumb: [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services" },
    { label: "Details" },
  ],
  titleHighlight: "<span>GARDEN</span> DESIGN",
  video: {
    url: "https://www.youtube.com/embed/rRid6GCJtgc",
    bgImage: "/assets/img/video_block_bg_2.jpg",
  },
  cta: {
    buttonUrl: "#",
    buttonText: "See More",
    bgImage: "/assets/img/cta_bg_4.jpg",
  },
  description: `
    Enhance your garden's allure with our Garden Design service. We will always meticulously plan and give landscape design solutions that create a more captivating ambiance, transforming your outdoor space into a magical haven of beauty and serenity. Whether you desire a tranquil retreat, a fun vibrant entertainment space, or heightened security, our garden designs cater to your specific needs. We ensure your garden comes alive with an enchanting glow, enhancing its aesthetics and functionality. <br><br>
            With a team of dedicated landscape architects and horticultural experts, we blend art and science to transform your outdoor space into a living masterpiece. We go beyond aesthetics, integrating sustainable practices, water-saving solutions, and eco-friendly choices to ensure your garden is as environmentally responsible as it is stunning. From the initial consultation to the final blossom, we are with you every step of the way, bringing your vision of dream garden to life expertly and efficiently.
  `,
  iconBoxes: [
    {
      iconClass: "fa6-solid:hand-holding-droplet",
      title: "Customized Garden Designs",
    },
    {
      iconClass: "fa6-solid:utensils",
      title: "Guaranteed Maintenance Plans",
    },
    { iconClass: "fa6-solid:vials", title: "Soil Testing and Improvement" },
    {
      iconClass: "fa6-solid:feather",
      title: "Hardscape and Aquascape Feature",
    },
    {
      iconClass: "fa6-solid:seedling",
      title: "Plant Selection and Installation",
    },
    {
      iconClass: "fa6-solid:handshake",
      title: "Sustainable Eco-Friendly Options",
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

const testimonialData = {
  title: "TESTIMONIAL",
  testimonialData: [
    {
      text: `LeafLife's dedication to bringing our <span>vision</span> to life was exceptional. They turned our <span>backyard</span> into a haven of tranquility. Their attention to detail and sustainable practices on their design <span>impressed</span> us.`,
      img: "/assets/img/avatar.png",
      name: "MARIA HUGH",
      designation: "Marketing of Elston Company",
    },
    {
      text: `LeafLife's dedication to bringing our <span>vision</span> to life was exceptional. They turned our <span>backyard</span> into a haven of tranquility. Their attention to detail and sustainable practices on their design <span>impressed</span> us.`,
      img: "/assets/img/avatar.png",
      name: "STEVE EVANS",
      designation: "CEO of Malley Company",
    },
    {
      text: `LeafLife's dedication to bringing our <span>vision</span> to life was exceptional. They turned our <span>backyard</span> into a haven of tranquility. Their attention to detail and sustainable practices on their design <span>impressed</span> us.`,
      img: "/assets/img/avatar.png",
      name: "STEVE EVANS",
      designation: "CEO of Malley Company",
    },
  ],
};

const cardData = {
  backgroundImage: "/assets/img/card_bg_2.jpg",
  tags: ["Home", "Garden", "Landscape Design", "Expert"],
  title: "MAKE YOUR DREAM <br /> GARDEN INTO REALITY",
  buttonLink: "/projects",
};

export default function ServiceDetailsPage() {
  pageTitle("Service Details | LeafLife");
  return (
    <>
      <ServiceDetailsSection data={serviceDetailsData} />{" "}
      <WorkingProcess data={workingProcessData} />
      <TestimonialSection1 data={testimonialData} />
      <CardSection data={cardData} bgColor={"cs_color_1"} />
    </>
  );
}
