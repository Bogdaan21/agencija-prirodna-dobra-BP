import React from "react";
import PageHeading from "../../Components/PageHeading";
import InfoList from "../../Components/InfoSection";
import { pageTitle } from "../../helper";
import projectJson from "../../data/project.json";
import { useLanguage } from "../../context/LanguageContext";

export default function ProjectPage() {
  const { language } = useLanguage();

  const { projectPage, projects } = projectJson;

  const breadcrumbsData = {
    backgroundImage: projectPage.breadcrumbsData.backgroundImage,
    title:
      projectPage.breadcrumbsData.title?.[language] ||
      projectPage.breadcrumbsData.title,
    breadcrumbs: projectPage.breadcrumbsData.breadcrumbs.map((item) => ({
      ...item,
      label:
        typeof item.label === "object"
          ? item.label[language]
          : item.label,
    })),
  };

    pageTitle(
      language === "me"
        ? "Zaštićena područja | Agencija za upravljanje prirodnim dobrima"
        : "Protected Areas | Agency for Management of Natural Assets",
      {
        description:
          language === "me"
            ? "Pregled zaštićenih prirodnih područja pod upravljanjem Agencije u opštini Bijelo Polje, uključujući Đalovića klisuru i rijeku Ćehotinu."
            : "Overview of protected natural areas managed by the Agency in Bijelo Polje, including Đalovića Gorge and the Ćehotina River.",
        path: "/protectedareas",
        image: "/assets/img/project_heading_bg.jpg",
        locale: language,
      },
    );

  return (
    <>
      <PageHeading data={breadcrumbsData} />

      {projects.map((project) => {
        const translatedProject = {
          ...project,
          title:
            typeof project.title === "object"
              ? project.title[language]
              : project.title,
          imageAlt:
            typeof project.imageAlt === "object"
              ? project.imageAlt[language]
              : project.imageAlt,
          info: project.info?.map((item) => ({
            label:
              typeof item.label === "object"
                ? item.label[language]
                : item.label,
            value:
              typeof item.value === "object"
                ? item.value[language]
                : item.value,
          })),
        };

        return (
          <InfoList
            key={project.slug}
            slug={project.slug}
            data={translatedProject}
          />
        );
      })}
    </>
  );
}
