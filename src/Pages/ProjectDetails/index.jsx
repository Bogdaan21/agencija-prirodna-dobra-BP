import React from "react";
import { useParams } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";
import ProjectDetailsSection from "../../Components/ProjectDetails";
import { pageTitle } from "../../helper";
import projectJson from "../../data/project.json";
import { useLanguage } from "../../context/LanguageContext";
import GalleryPage from "../GalleryPage";


export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const { language } = useLanguage();

  const { projects } = projectJson;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    pageTitle("Zaštićeno područje nije pronađeno | Agencija za upravljanje prirodnim dobrima", {
      description: "Traženo zaštićeno područje nije pronađeno.",
      path: `/protectedareas/${slug || ""}`,
      noIndex: true,
      locale: language,
    });

    return (
      <h2>
        {language === "en"
          ? "Protected area not found"
          : "Zaštićeno područje nije pronađeno"}
      </h2>
    );
  }

  const getLangValue = (value) =>
    typeof value === "object" && value !== null ? value[language] : value;

  const translatedProject = {
    ...project,
    title: getLangValue(project.title),
    imageAlt: getLangValue(project.imageAlt),
    description: getLangValue(project.description),
    outcomes: getLangValue(project.outcomes),

    breadcrumbs: {
      ...project.breadcrumbs,
      title: getLangValue(project.breadcrumbs?.title),
      breadcrumbs: project.breadcrumbs?.breadcrumbs?.map((item) => ({
        ...item,
        label: getLangValue(item.label),
      })),
    },

    info: project.info?.map((item) => ({
      ...item,
      label: getLangValue(item.label),
      value: getLangValue(item.value),
    })),

    features: project.features?.map((item) => ({
      ...item,
      title: getLangValue(item.title),
    })),

    gallery: project.gallery?.map((item) => ({
      ...item,
      title: getLangValue(item.title),
    })),
  };

  pageTitle(
    `${translatedProject.title} | Agencija za upravljanje prirodnim dobrima`,
    {
      description:
        translatedProject.description ||
        translatedProject.outcomes ||
        (language === "me"
          ? "Detaljan prikaz zaštićenog područja pod upravljanjem Agencije za upravljanje prirodnim dobrima."
          : "Detailed overview of a protected area managed by the Agency for Management of Natural Assets."),
      path: `/protectedareas/${project.slug}`,
      image: project.imageSrc,
      type: "article",
      locale: language,
    },
  );

  return (
    <>
      <PageHeading data={translatedProject.breadcrumbs} />
      <ProjectDetailsSection data={translatedProject} />
      <GalleryPage data={translatedProject.gallery} />
    </>
  );
}
