import React from "react";
import PageHeading from "../../Components/PageHeading";
import InfoList from "../../Components/InfoSection";
import { pageTitle } from "../../helper";
import projectJson from "../../data/project.json";

export default function ProjectPage() {
  pageTitle("Project | LeafLife");

  const { projectPage, projects } = projectJson;

  return (
    <>
      {/* 🔥 HEADER */}
      <PageHeading data={projectPage.breadcrumbsData} />

      {/* 🔥 LISTA PROJEKATA */}
      {projects.map((project) => (
        <InfoList
          key={project.slug}
          slug={project.slug}
          data={project}
        />
      ))}
    </>
  );
}